'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuthStore } from '../../../../../stores/authstore'; // Adjust path as necessary
import Link from 'next/link';

interface UserFormState {
  name: string;
  email: string;
  mobile: string;
  role: string;
  address: string;
  // Password is not typically pre-filled in edit forms for security reasons
  // password?: string; 
}

const initialFormState: UserFormState = {
  name: '',
  email: '',
  mobile: '',
  role: 'user',
  address: '',
};

export default function EditUserPage() {
  const [formData, setFormData] = useState<UserFormState>(initialFormState);
  const [loading, setLoading] = useState(true); // Start with loading true to fetch user data
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const params = useParams();
  const id = params.id as string;
  const router = useRouter();

  const token = useAuthStore(state => state.token);
  const loggedInUser = useAuthStore(state => state.user);

  useEffect(() => {
    if (!token) {
      router.push('/admin/login');
      return;
    }
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      setError('Unauthorized. You do not have permission to edit users.');
      setLoading(false);
      return;
    }

    if (id) {
      const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: `Failed to fetch user data: ${response.statusText}` }));
            throw new Error(errorData.message);
          }
          const userData = await response.json();
          setFormData({
            name: userData.name || '',
            email: userData.email || '',
            mobile: userData.mobile || '',
            role: userData.role || 'user',
            address: userData.address || '',
          });
        } catch (err: any) {
          setError(err.message);
          console.error("Fetch user for edit error:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [id, token, loggedInUser, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loggedInUser || loggedInUser.role !== 'admin') {
      setError('Unauthorized. You do not have permission to perform this action.');
      return;
    }
    setSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    // Basic validation (can be expanded)
    if (!formData.name || !formData.email || !formData.mobile || !formData.role) {
      setError('Please fill in all required fields: Name, Email, Mobile, Role.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: `Failed to update user: ${response.statusText}` }));
        throw new Error(errorData.message || 'An unknown error occurred.');
      }

      setSuccessMessage('User updated successfully! Redirecting to user list...');
      setTimeout(() => {
        router.push('/admin/users');
      }, 2000);

    } catch (err: any) {
      setError(err.message);
      console.error("Update user error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading user data for editing...</div>;
  }

  if (error && !formData.name) { // Show critical errors like unauthorized or failed fetch prominently
    return <div className="p-6 text-red-500 bg-red-100 border border-red-400 rounded-md">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Edit User</h1>
          <Link href="/admin/users" legacyBehavior>
            <a className="text-blue-500 hover:text-blue-700 transition-colors">&larr; Back to User List</a>
          </Link>
        </div>

        {error && <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">{error}</div>}
        {successMessage && <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded-md">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address (Optional)</label>
            <textarea
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          
          {/* Password change can be a separate form/modal or added here if needed */}
          {/* 
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password (Optional)</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Leave blank to keep current password"
            />
          </div>
          */}

          <div className="flex justify-end space-x-3">
            <Link href="/admin/users" legacyBehavior>
              <a className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cancel
              </a>
            </Link>
            <button
              type="submit"
              disabled={submitting || loading}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {submitting ? 'Updating...' : 'Update User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
