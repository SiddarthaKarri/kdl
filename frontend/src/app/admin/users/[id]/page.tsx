"use client";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
// import DefaultAvatar from "../components/DefaultAvatar"; // Uncomment if you have a DefaultAvatar component
import { useEffect, useState } from "react";
import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  mobile: string;
  address: string;
  profilePic?: string;
  createdAt: string; // Assuming these fields are available
  updatedAt: string; // Assuming these fields are available
}

export default function UserDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;

  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetchWithAuth(
            `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
          );
          if (!response.ok) {
            const errorData = await response
              .json()
              .catch(() => ({ message: "Failed to fetch user data." }));
            throw new Error(errorData.message || "Failed to fetch user data.");
          }
          let userData: UserData = await response.json();

          // Construct full URL for profile picture if it's a relative path
          if (
            userData.profilePic &&
            !userData.profilePic.startsWith("http") &&
            !userData.profilePic.startsWith("data:")
          ) {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            if (apiUrl) {
              const baseApiUrl = apiUrl.substring(0, apiUrl.lastIndexOf("/api"));
              userData.profilePic = `${baseApiUrl}${userData.profilePic}`;
            } else {
              console.warn(
                "NEXT_PUBLIC_API_URL is not defined, profile picture URL might be incorrect."
              );
            }
          }
          console.log("ViewUserPage: Fetched user data from API:", userData);
          setUser(userData);
        } catch (err) {
          const errorMessage =
            err instanceof Error ? err.message : "An unknown error occurred.";
          console.error("Error fetching user data:", errorMessage);
          setError(errorMessage);
        } finally {
          setIsLoading(false);
        }
      };
      fetchUserData();
    }
  }, [userId]);

  const getInitials = (name: string) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <div className="p-6 text-center text-xl font-semibold">
        Loading user details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600 text-xl font-semibold">Error: {error}</p>
        <Button onClick={() => router.push("/admin/users")} className="mt-4">
          Back to Users
        </Button>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-xl font-semibold">User not found.</p>
        <Button onClick={() => router.push("/admin/users")} className="mt-4">
          Back to Users
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 mx-auto max-w-3xl">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          View User Details
        </h1>
        <div className="flex space-x-4">
          <Button variant="outline" onClick={() => router.push("/admin/users")}>
            Back to Users
          </Button>
          <Button
            onClick={() => router.push(`/admin/users/edit/${userId}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Edit User
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-gray-50 p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl text-gray-700 overflow-hidden relative">
              {user.profilePic ? (
                <Image
                  src={user.profilePic}
                  alt={`${user.name}'s profile picture`}
                  layout="fill"
                  objectFit="cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.style.display = "none";
                    // Optionally, show initials or a default avatar component here
                    // For now, it will just be an empty div if image fails
                  }}
                />
              ) : (
                // <DefaultAvatar name={user.name} size={96} /> // Uncomment if you have a DefaultAvatar component
                <span>{getInitials(user.name)}</span>
              )}
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {user.name}
              </CardTitle>
              <CardDescription className="text-md text-gray-600">
                {user.email}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <p className="font-medium text-gray-500">Role</p>
              <p className="text-gray-800 font-semibold text-base">
                {user.role}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Mobile Number</p>
              <p className="text-gray-800 font-semibold text-base">
                {user.mobile || "N/A"}
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="font-medium text-gray-500">Address</p>
              <p className="text-gray-800 font-semibold text-base">
                {user.address || "N/A"}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-500">User ID</p>
              <p className="text-gray-800 font-semibold text-base break-all">
                {user.id}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Account Created</p>
              <p className="text-gray-800 font-semibold text-base">
                {formatDate(user.createdAt)}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-500">Last Updated</p>
              <p className="text-gray-800 font-semibold text-base">
                {formatDate(user.updatedAt)}
              </p>
            </div>
            {/* You can add more fields here as needed */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
