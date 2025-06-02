'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../../stores/authstore'; // Adjust path as needed

interface NewUser {
  name: string;
  email: string;
  mobile: string;
  password: string;
  role: 'user' | 'admin';
  address?: string;
}

export default function AddUserPage() {
  const [formData, setFormData] = useState<NewUser>({
    name: '',
    email: '',
    mobile: '',
    password: '',
    role: 'user',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();
  const token = useAuthStore(state => state.token);
  const loggedInUser = useAuthStore(state => state.user);

  useEffect(() => {
    // Redirect if not an admin or no token
    if (!token || !loggedInUser || loggedInUser.role !== 'admin') {
      router.replace('/admin/login');
    }
  }, [token, loggedInUser, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (!token || loggedInUser?.role !== 'admin') {
      setError('Unauthorized action.');
      setLoading(false);
      return;
    }

    if (!formData.password) {
        setError('Password is required.');
        setLoading(false);
        return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = `API request failed: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.json(); // Try to parse error response as JSON
          // Use message from errorData if available, otherwise stringify the whole errorData, or stick to the initial message
          errorMessage = errorData?.message || (errorData ? JSON.stringify(errorData) : errorMessage);
        } catch (jsonError) {
          // If response body is not JSON, try to read it as text
          try {
            const errorText = await response.text();
            if (errorText) {
              errorMessage = `${errorMessage}. Response: ${errorText.substring(0, 200)}`; // Append (part of) the text response
            }
          } catch (textError) {
            // If reading as text also fails, the original errorMessage (with status) will be used
          }
        }
        throw new Error(errorMessage);
      }

      // If response.ok, then process the successful JSON response.
      const data = await response.json(); 
      // This assumes a successful creation (2xx status) returns a JSON body.
      // If the created user data is in 'data', it can be used here if needed.

      setSuccess('User created successfully! Redirecting...');
      // Clear form or redirect
      setTimeout(() => {
        router.push('/admin/users');
      }, 2000);

    } catch (err: any) {
      setError(err.message);
      console.error("Create user error:", err);
    } finally {
      setLoading(false);
    }
  };
  
  // Initial check in case useEffect hasn't run yet or user is not admin
  if (!loggedInUser || loggedInUser.role !== 'admin') {
    return <div className="p-6 text-center">Loading or unauthorized...</div>; 
  }

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Add New User</h1>
      
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md">{error}</div>}
      {success && <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded-md">{success}</div>}

      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-6 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile <span className="text-red-500">*</span></label>
          <input
            type="text" // Consider type="tel"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role <span className="text-red-500">*</span></label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => router.push('/admin/users')}
            disabled={loading}
            className="mr-3 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create User'}
          </button>
        </div>
      </form>
    </div>
  );
}
