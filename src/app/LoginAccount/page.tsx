"use client"
import Image from "next/image";
import { useState } from "react";
import Header1 from '../components/Header1';
import OurPromise from '../components/OurPromise';
import Last from '../components/Footer'

const LoginPage = () => {
  const [isNewLogin, setIsNewLogin] = useState(false);

  const handleToggle = () => {
    setIsNewLogin((prev) => !prev);
  };

  return (
    <>
    <Header1 />
    <main className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      {/* Header Section with Image */}
      <div className="mb-6">
        <Image
          src="/log1.jpeg" // Replace with your image path
          alt="Global Shopping Store"
          width={1000}
          height={600}
          className="rounded-full object-cover"
        />
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl font-bold text-white mb-2">
        Welcome to Global Online Shopping Store
      </h2>
      <p className="text-gray-200 text-center mb-6">
        Login or register to explore a wide range of products including jackets, coats, electronics, jewelry, dresses, and more.
      </p>

      {/* Login Form */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          {isNewLogin ? "Create New Account" : "Login"}
        </h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {isNewLogin && (
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            {isNewLogin ? "Register" : "Login"}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {isNewLogin ? "Already registered?" : "New user?"}{" "}
            <button
              onClick={handleToggle}
              className="text-blue-500 hover:underline font-medium"
            >
              {isNewLogin ? "Login here" : "Create an account"}
            </button>
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="text-center mt-8">
        <p className="text-white text-sm">
          For any issues, contact us at:{" "}
          <span className="font-bold text-yellow-300">support@globalshopping.com</span> or{" "}
          <span className="font-bold text-yellow-300">+1-234-567-890</span>
        </p>
      </div>
    </main>
    <OurPromise />
    <Last />
    </>
  );
};

export default LoginPage;
