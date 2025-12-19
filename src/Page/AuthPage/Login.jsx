import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, LogIn } from "lucide-react";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import UseAuth from "@/Hook/UseAuth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = UseAxiosSecure();
  const { loginUser } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then(async (result) => {
        if (result.user) {
          const userRes = await axiosSecure.post("/auth/login", data);
          console.log(userRes);
          if (userRes.data) {
            localStorage.setItem("access-token", userRes.data.token);
            navigate(`${location.state ? location.state : "/"}`);
            toast.success(" Login successful!");
          }
          reset();
        } else {
          toast.error("Invalid credentials!");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome Back
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Please login to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Enter your password"
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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full btn btn-primary rounded-lg font-semibold"
          >
            <LogIn size={18} /> Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
