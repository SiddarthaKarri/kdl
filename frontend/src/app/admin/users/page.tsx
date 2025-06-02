'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../stores/authstore'; // Adjust path if needed
import Link from 'next/link';

// Define an interface for the User object based on your Prisma schema
interface User {
  id: string; // Prisma BigInt is often string on the client
  name: string;
  email: string;
  mobile: string;
  role: string;
  address?: string | null;
  created_at: string; // Dates are often strings
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  // Select state individually to avoid unnecessary re-renders and new object creation
  const token = useAuthStore(state => state.token); 
  const loggedInUser = useAuthStore(state => state.user);
  // IMPORTANT: The above lines assume your authstore.ts exposes 'token' and 'user' in its state.
  // If not, this will still cause errors, and we need to see your authstore.ts.

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        setError('Authentication token not found. Please log in.');
        setLoading(false);
        router.push('/admin/login');
        return;
      }
      
      // Ensure loggedInUser is available and has a role property before checking its role
      if (!loggedInUser || typeof loggedInUser.role === 'undefined') {
        setError('User information is not available. Please log in again.');
        setLoading(false);
        // router.push('/admin/login'); // Or handle as appropriate
        return;
      }

      if (loggedInUser.role !== 'admin') {
        setError('Unauthorized. You do not have permission to view this page.');
        setLoading(false);
        // router.push('/admin/dashboard'); // Or redirect to a non-admin page
        return;
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: `Failed to fetch users: ${response.statusText}` }));
          throw new Error(errorData.message);
        }

        const data = await response.json();
        setUsers(data.map((u: any) => ({ 
          ...u, 
          id: u.id.toString(), 
          created_at: new Date(u.created_at).toLocaleDateString() 
        })));
      } catch (err: any) {
        setError(err.message);
        console.error("Fetch users error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token, loggedInUser, router]);

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }
    if (!token || !loggedInUser || typeof loggedInUser.role === 'undefined' || loggedInUser.role !== 'admin') {
        alert('Unauthorized action.');
        return;
    }
    try {
      // Consider setting a specific loading state for the delete operation if needed
      // setLoading(true); 
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to delete user' }));
        throw new Error(errorData.message);
      }
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      alert('User deleted successfully.');
    } catch (err: any) {
      alert(`Error deleting user: ${err.message}`);
      console.error("Delete user error:", err);
    } finally {
      // setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center py-10">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500 bg-red-100 border border-red-400 rounded-md">Error: {error}</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">User Management</h1>
        <Link href="/admin/users/add" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out">
            Add New User
          </a>
        </Link>
      </div>

      {users.length === 0 ? (
         <div className="text-center py-10 bg-white shadow-lg rounded-lg">
            <p className="text-gray-500 text-lg">No users found.</p>
         </div>
      ) : (
      <div className="bg-white shadow-xl rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'admin' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.created_at}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <Link href={`/admin/users/view/${user.id}`} legacyBehavior>
                    <a className="text-indigo-600 hover:text-indigo-800 transition-colors">View</a>
                  </Link>
                  <Link href={`/admin/users/edit/${user.id}`} legacyBehavior>
                    <a className="text-yellow-500 hover:text-yellow-700 transition-colors">Edit</a>
                  </Link>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
}
