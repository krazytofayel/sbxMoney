import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signinimg from "../../../../../public/aud.avif";
import ParticleBackground from "../../../../Components/ParticleComponent/ParticleComponent";

const ForgotPasswordRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:8000/api/auth/forgot-password", {
        email: data.email,
      });
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error("Error sending password reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row h-screen">
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${signinimg})` }}
        >
          <ParticleBackground />
          {/* Optionally, add overlay for better text visibility */}
          <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
            {/* Optional text or content */}
          
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center  p-8">
          <div className="w-full bg-white max-w-md shadow-xl mx-auto p-5 rounded-lg">
            <h1 className="text-xl font-semibold mb-4">Forgot Password</h1>
            <p className="mb-4">
              Enter your email address to receive a password reset link.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="block w-full p-3 border border-gray-300 rounded"
                  placeholder="Your email address"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full p-3 text-white font-bold rounded ${loading ? "bg-gray-500" : "bg-teal-500 hover:bg-teal-600"}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordRequest;
