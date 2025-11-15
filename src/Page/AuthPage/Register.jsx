import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import UseAuth from "@/Hook/UseAuth";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleLogin } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit handler
  const onSubmit = (data) => {
    const { email, name, photoURL, password } = data;
    createUser(email, password)
      .then(async (result) => {
        console.log(result.user);

        const userData = {
          name,
          email,
          photoURL,
          role: "user",
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        };
        console.log(userData);
        const response = await axiosSecure.post("/users", userData);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(async (res) => {
        const userData = {
          name: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
          role: "user",
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        };
        const userRes = await axiosSecure.post("users", userData);
        console.log("successfully user", userRes.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 ">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Create Account 🚀
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Please register to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your Photo URL"
              {...register("photoURL", { required: "Photo URL is required" })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100
                           placeholder-gray-400 dark:placeholder-gray-500
                           focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            <UserPlus size={18} /> Register
          </button>
          <div className="divider divider-primary">OR</div>
          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black rounded-lg w-full border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
