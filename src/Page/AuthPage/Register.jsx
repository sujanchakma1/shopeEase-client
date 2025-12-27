import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import UseAuth from "@/Hook/UseAuth";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import registerLottie from "../../assets/Lottie/register.json";
import Lottie from "lottie-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, logOut, updateUserProfile } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();
  const IMGBB_KEY = import.meta.env.VITE_IMGBB_API_KEY;
  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.data.display_url;
  };

  // submit handler
  const onSubmit = async (data) => {
    const { email, name, photo, password } = data;
    // 1️⃣ Upload image to ImgBB
    const imageFile = photo[0];
    const photoURL = await uploadImage(imageFile);
    createUser(email, password)
      .then(async (result) => {
        console.log(result.user);
        const profileInfo = {
          displayName: name,
          photoURL,
        };

        await updateUserProfile(profileInfo);

        const userData = {
          name,
          email,
          photoURL,
          role: "user",
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        };
        const response = await axiosSecure.post("/auth/register", userData);
        if (response.data) {
          navigate("/login");
          logOut();
          toast.success("Register successful!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full max-w-md">
          <Lottie animationData={registerLottie} loop />
        </div>
        <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-lg p-8">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-gray-500 text-sm mt-1">
              Please register to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600  mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full input input-bordered rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Profile Photo
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("photo", { required: "Photo is required" })}
                className="file-input file-input-bordered w-full rounded-lg"
              />
              {errors.photoURL && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photoURL.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600  mb-1">
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
                className="w-full input input-bordered rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600  mb-1">
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
                  className="w-full input input-bordered rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center "
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
              className="w-full btn btn-primary rounded-lg transition-all"
            >
              <UserPlus size={18} /> Register
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
