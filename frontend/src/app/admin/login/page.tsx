'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { useAuthStore } from '../../../stores/authstore'; // adjust path if needed

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const { isLoggedIn, login } = useAuthStore();

  // 🔁 Redirect to dashboard if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/admin/dashboard');
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const DUMMY_EMAIL = 'admin@admin.com';
    const DUMMY_PASSWORD = 'admin123';

    try {
      if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
        login(); // ✅ Set Zustand login state
        router.push('/admin/dashboard');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to fetch users');

      const users = await response.json();
      const user = users.find((u: any) => u.email === email);

      if (!user) {
        setError('Email not found');
        return;
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        setError('Incorrect password');
        return;
      }

      login(); // ✅ Set Zustand login state
      router.push('/admin/dashboard');
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="relative bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105 animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"></div>
        <h1 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Admin Portal
        </h1>
        {error && (
          <div className="text-red-500 text-sm text-center mb-4 bg-red-100 p-2 rounded-md animate-pulse">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email Address
            </label>
            <div className="mt-1 relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
                placeholder="admin@admin.com"
                required
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
                placeholder="••••••••"
                required
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 2 4 2 4m2-4c0-1.104-.896-2-2-2s-2 .896-2 2m6 0c0-1.104-.896-2-2-2s-2 .896-2 2m-2 4v3m4-3v3m-8-3v3m8-3v3m-2-9h4a2 2 0 012 2v10a2 2 0 01-2 2h-4m-6 0H6a2 2 0 01-2-2V7a2 2 0 012-2h4"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition duration-300 hover:scale-105"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Use <span className="font-medium">admin@admin.com</span> and password{' '}
          <span className="font-medium">admin123</span> for dummy login, or use registered credentials.
        </p>
      </div>
    </main>
  );
}