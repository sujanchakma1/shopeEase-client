import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, LogIn } from "lucide-react";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import UseAuth from "@/Hook/UseAuth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import loginLottie from "../../assets/Lottie/login.json";
import Lottie from "lottie-react";

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
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full max-w-full">
          <Lottie animationData={loginLottie} loop />
        </div>
        <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-lg p-8">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-gray-500 text-sm mt-1">
              Please login to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="w-full input input-bordered rounded-lg"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                  className="w-full input input-bordered rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
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
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
