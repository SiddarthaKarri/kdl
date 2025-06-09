'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import ProfilePictureUpload from '../components/ProfilePictureUpload';
import { fetchWithAuth } from '@/lib/fetchWithAuth';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CreateUser() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User', // Default role
    password: '',
    mobile: '', // Added mobile field
    address: '', // Added address field
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.role || !formData.mobile) {
      setError("Please fill in all required fields: Name, Email, Mobile, and Role.");
      setIsLoading(false);
      return;
    }

    try {
      let requestBody: FormData | string;
      const requestHeaders: HeadersInit = {};

      if (profilePicture) { // If a profile picture is selected
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('role', formData.role);
        data.append('password', formData.password);
        data.append('mobile', formData.mobile);
        data.append('address', formData.address);
        data.append('profilePic', profilePicture); // 'profilePic' is the field name for multer
        requestBody = data;
        // Do NOT set 'Content-Type' for FormData, fetch API does it automatically with the correct boundary.
      } else { // If no profile picture, send JSON
        requestBody = JSON.stringify(formData);
        requestHeaders['Content-Type'] = 'application/json';
      }

      const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'POST',
        body: requestBody,
        headers: requestHeaders, // Pass the conditional headers
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to create user. Check server logs for details.' }));
        throw new Error(errorData.message || 'Failed to create user.');
      }

      // const newUser = await response.json(); // You can use newUser if needed
      console.log('User created successfully');
      setShowModal(true); 
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while creating the user.';
      console.error("Error creating user:", errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfilePictureChange = (file: File) => {
    setProfilePicture(file);
  };

  const handleDialogClose = () => {
    setShowModal(false);
    router.push('/admin/users');
  };

  return (
    <div className="p-6 mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Create New User</h1>
        <button
          onClick={() => router.push('/admin/users')}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
        >
          Back to Users
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
        {error && (
          <div className="mb-4 text-center text-red-600 bg-red-100 p-3 rounded-md">
            <p>{error}</p>
          </div>
        )}
        <div className="text-center mb-4">
          <ProfilePictureUpload
            name={formData.name || 'New User'}
            onImageChange={handleProfilePictureChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Name */}
          <div className="md:col-span-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Mobile */}
          <div className="md:col-span-6">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="md:col-span-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div className="md:col-span-6">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center space-x-4 pt-6">
          <button
            type="button"
            onClick={() => router.push('/admin/users')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create User'}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>User Created Successfully!</DialogTitle>
            <DialogDescription>
              The user has been added to the system.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleDialogClose}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
