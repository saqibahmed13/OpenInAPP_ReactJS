"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = ({ isMobile }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); 

   
    if (!email.trim() || !password.trim()) {
      console.log("Email and password are required");
      return;
    }

    
    const isAuthenticated = true;

    if (isAuthenticated) {
   
      router.push("/home");
    } else {
      
      console.log("Authentication failed");
    }
  };

  return (
    <>
      <div className="w-full md:w-[30vw] bg-white border-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <a href="#" className="text-sm font-medium text-blue-600">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[#605BFF]  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            {/* */}
          </form>
        </div>
        {/**/}
      </div>
      {!isMobile && (
        <div className="flex w-full justify-center mt-2">
          <p className="text-sm font-light text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      )}
      {isMobile && (
        <div className="text-center mt-2">
          <p className="text-sm font-light text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default LoginForm;
