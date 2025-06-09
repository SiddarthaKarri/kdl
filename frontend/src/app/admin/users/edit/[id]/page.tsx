'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ProfilePictureUpload from '../../components/ProfilePictureUpload'; // Adjusted path
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

// Define an interface for the user data
interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  mobile: string;
  address: string;
  profilePic?: string; // Optional
}

export default function EditUserPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    password: '', // Password will be optional, leave blank to keep current
    mobile: '',
    address: '',
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [existingProfilePicUrl, setExistingProfilePicUrl] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // For form submission
  const [isFetching, setIsFetching] = useState(true); // For initial data load

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        setIsFetching(true);
        setError(null);
        try {
          console.log(`EditUserPage: Fetching user with ID: ${userId}`);
          const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`);
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Failed to fetch user data.' }));
            throw new Error(errorData.message || 'Failed to fetch user data.');
          }
          const userData: UserData = await response.json();
          console.log('EditUserPage: Fetched user data from API:', userData); // <-- ADD THIS LOG
          setFormData({
            name: userData.name || '',
            email: userData.email || '',
            role: userData.role || 'User',
            password: '', // Keep password blank initially for editing
            mobile: userData.mobile || '',
            address: userData.address || '',
          });
          // Construct full URL for existing profile picture
          if (userData.profilePic) {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL; // e.g., http://localhost:5001/api
            if (apiUrl) {
              // Assuming API_URL is like http://localhost:PORT/api, we need http://localhost:PORT
              const baseApiUrl = apiUrl.substring(0, apiUrl.lastIndexOf('/api')); 
              setExistingProfilePicUrl(`${baseApiUrl}${userData.profilePic}`); // userData.profilePic is /uploads/image.png
            } else {
              // Fallback or log error if API URL is not defined
              console.warn("NEXT_PUBLIC_API_URL is not defined, profile picture URL might be incorrect.");
              setExistingProfilePicUrl(userData.profilePic); 
            }
          } else {
            setExistingProfilePicUrl(undefined);
          }
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
          console.error("Error fetching user data:", errorMessage);
          setError(errorMessage);
        } finally {
          setIsFetching(false);
        }
      };
      fetchUserData();
    }
  }, [userId]);

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

      if (profilePicture) { // If a new profile picture is selected
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('role', formData.role);
        data.append('mobile', formData.mobile);
        data.append('address', formData.address);
        if (formData.password && formData.password.trim() !== "") {
          data.append('password', formData.password);
        }
        data.append('profilePic', profilePicture); // 'profilePic' is the field name for multer
        requestBody = data;
        // Do NOT set 'Content-Type' for FormData, fetch API does it automatically with the correct boundary.
      } else { // If no new profile picture, send JSON
        const dataToSend: any = {
          name: formData.name,
          email: formData.email,
          role: formData.role,
          mobile: formData.mobile,
          address: formData.address,
        };
        if (formData.password && formData.password.trim() !== "") {
          dataToSend.password = formData.password;
        }
        requestBody = JSON.stringify(dataToSend);
        requestHeaders['Content-Type'] = 'application/json';
      }
      
      const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`, {
        method: 'PUT',
        body: requestBody,
        headers: requestHeaders, // Pass the conditional headers
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to update user. Check server logs.' }));
        throw new Error(errorData.message || 'Failed to update user.');
      }
      
      setModalMessage('User updated successfully!');
      setShowModal(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while updating the user.';
      console.error("Error updating user:", errorMessage);
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
    setExistingProfilePicUrl(URL.createObjectURL(file)); // Show preview of new image
  };

  const handleDialogClose = () => {
    setShowModal(false);
    router.push('/admin/users');
  };

  if (isFetching) {
    return <div className="p-6 text-center text-xl font-semibold">Loading user data...</div>;
  }

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Edit User</h1>
        <button
          onClick={() => router.push('/admin/users')}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back to Users
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        {error && (
          <div className="mb-4 text-center text-red-600 bg-red-100 p-3 rounded-md border border-red-200">
            <p className="font-medium">Error:</p>
            <p>{error}</p>
          </div>
        )}
        <div className="text-center mb-6">
          <ProfilePictureUpload
            name={formData.name || 'User'}
            onImageChange={handleProfilePictureChange}
            currentImage={existingProfilePicUrl} // Changed from existingImageUrl to currentImage
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          {/* Name */}
          <div>
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
              className="w-full border border-gray-300 rounded-md p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
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
              className="w-full border border-gray-300 rounded-md p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Mobile */}
          <div>
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
              className="w-full border border-gray-300 rounded-md p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="md:col-span-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password <span className="text-xs text-gray-500">(leave blank to keep current)</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-md p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Role */}
          <div className="md:col-span-1">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition bg-white"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 mt-6">
          <button
            type="button"
            onClick={() => router.push('/admin/users')}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
            disabled={isLoading || isFetching}
          >
            {isLoading ? 'Updating...' : 'Update User'}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md bg-white rounded-lg shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800">{modalMessage}</DialogTitle>
            <DialogDescription className="text-sm text-gray-600 mt-2">
              The user's details have been successfully updated in the system.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6">
            <Button 
              onClick={handleDialogClose} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
