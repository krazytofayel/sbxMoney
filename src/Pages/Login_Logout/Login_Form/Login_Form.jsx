import { Link, useNavigate } from "react-router-dom";
import ParticlesBg from "../Particles/Particles";
import signinimg from "../../../../public/aud.avif";
import logoimg from "../../../../public/Logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Login_Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(null);

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);

      // Send form data to login API endpoint using Axios
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", {
        email: data.email,
        password: data.password,
      });

      console.log("API Response:", response.data);

      if (response.data.accessToken) {
        // Store access token in local storage
        localStorage.setItem("accessToken", response.data.accessToken);

        // Display success message using toast
        toast.success(response.data.message);

        // Redirect to the home page
        navigate("/");
      }
    } catch (error) {
      // Handle errors
      console.error("An error occurred while submitting the form:", error);
      // Display error message using toast
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="min-h-screen flex items-stretch text-black" id="signup">
        <div className="lg:flex z-10 w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center text-white" style={{ backgroundImage: `url(${signinimg})` }}>
          <div className="absolute bg-black opacity-20 inset-0 z-0"></div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 md:px-6 px-0 z-0 bg-[#f5f4ef]">
          <div className="w-full py-6 pb-10 z-20">
            <div className="my-6 flex justify-center">
              <img src={logoimg} alt="tutor2u logo" className="" />
            </div>
            <h1 className="text-[#2C6777] lg:text-3xl text-[26px] font-semibold mb-4">
              Sign In Your Account
            </h1>
            <p className="text-[#2C6777]">Sign in or Log in to your account</p>
            <form onSubmit={handleSubmit(onSubmit)} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2 pt-4">
                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address here"
                  className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="pb-2 pt-4">
                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter a strong password"
                  className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>

              <div className="flex flex-wrap justify-between">
                <div className="lg:mt-0 mt-2 flex items-start mb-2 lg:w-1/2 md:w-2/3 w-full">
                  <input
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-[#2C6777] border-[#2C6777] rounded"
                  />
                  <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-[#2C6777]">
                    Remember me
                  </label>
                </div>
                <div className="lg:text-right text-start text-[#2C6777] font-medium hover:underline hover:text-[#22454e] lg:w-1/2 md:w-1/3 w-full">
                  <a href="#">Forget Password</a>
                </div>
              </div>
              <p className="mt-4">Or Continue With</p>
              <div className="py-4 space-x-2">
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                  f
                </span>
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                  G+
                </span>
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                  in
                </span>
              </div>
              <div className="pb-2 pt-4">
                <button className="uppercase block w-full p-4 text-lg text-white font-bold rounded-lg bg-green-500 hover:bg-[#3f98b1]">
                  Sign IN
                </button>
              </div>
              <p className="mt-2 mb-2">
                Don't have an account yet?{" "}
                <Link to="/sign_up" className="text-[#2C6777] font-medium">
                  Sign up
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login_Form;
