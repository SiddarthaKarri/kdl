'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuthStore } from '../../../../../stores/authstore'; // Adjust path as necessary
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
  address?: string | null;
  created_at: string; 
  updated_at: string; 
}

export default function ViewUserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
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
      setError('Unauthorized. You do not have permission to view this page.');
      setLoading(false);
      // Optionally redirect: router.push('/admin/dashboard');
      return;
    }

    if (id) {
      const fetchUser = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: `Failed to fetch user: ${response.statusText}` }));
            throw new Error(errorData.message);
          }
          const data = await response.json();
          setUser({
            ...data,
            id: data.id.toString(),
            created_at: new Date(data.created_at).toLocaleString(),
            updated_at: new Date(data.updated_at).toLocaleString(),
          });
        } catch (err: any) {
          setError(err.message);
          console.error("Fetch user error:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }
  }, [id, token, loggedInUser, router]);

  if (loading) {
    return <div className="p-6 text-center">Loading user details...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500 bg-red-100 border border-red-400 rounded-md">Error: {error}</div>;
  }

  if (!user) {
    return <div className="p-6 text-center">User not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">User Details</h1>
          <Link href="/admin/users" legacyBehavior>
            <a className="text-blue-500 hover:text-blue-700 transition-colors">&larr; Back to User List</a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">ID</label>
            <p className="mt-1 text-lg text-gray-900">{user.id}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Name</label>
            <p className="mt-1 text-lg text-gray-900">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Email</label>
            <p className="mt-1 text-lg text-gray-900">{user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Mobile</label>
            <p className="mt-1 text-lg text-gray-900">{user.mobile}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Role</label>
            <p className="mt-1 text-lg">
              <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                user.role === 'admin' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {user.role}
              </span>
            </p>
          </div>
          {user.address && (
            <div>
              <label className="block text-sm font-medium text-gray-500">Address</label>
              <p className="mt-1 text-lg text-gray-900">{user.address}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-500">Created At</label>
            <p className="mt-1 text-lg text-gray-900">{user.created_at}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">Last Updated At</label>
            <p className="mt-1 text-lg text-gray-900">{user.updated_at}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <Link href={`/admin/users/edit/${user.id}`} legacyBehavior>
            <a className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">
              Edit User
            </a>
          </Link>
          {/* Delete button could be added here if needed, though it's on the list page */}
        </div>
      </div>
    </div>
  );
}
