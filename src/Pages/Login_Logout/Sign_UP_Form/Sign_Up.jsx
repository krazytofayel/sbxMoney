import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import logoimg from "../../../../public/Logo.png";
import signinimg from "../../../../public/photoaud.avif";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const checkboxRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          password: data.password,
          c_password: data.c_password,
        }
      );

      console.log("API Response:", response.data);

      // Save access token to local storage
      // localStorage.setItem('accessToken', response.data.accessToken);

      // Display success message using toast
      toast.success(response.data.message);

      // Redirect to the sign-in page
      navigate("/sign_in");
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className="min-h-screen flex items-stretch text-black"
        id="signup"
      >
        <div
          className="lg:flex w-1/2 h-auto hidden bg-gray-500 bg-no-repeat bg-cover relative items-center text-white"
          style={{ backgroundImage: `url(${signinimg})` }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 md:px-6 px-0 z-0 bg-[#f5f4ef]">
          <div className="w-full py-6 pb-10 z-20">
            <div className="my-6 flex justify-center">
              <img src={logoimg} alt="tutor2u logo" className="b" />
            </div>
            <h1 className="text-[#2C6777] lg:text-3xl text-[26px] font-semibold mb-4">
              Sign Up for an Account
            </h1>
            <p className="text-[#2C6777]">Sign up or Log in to your account</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 md:gap-6">
                <div className="mb-2">
                  <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500">First name is required</p>
                  )}
                </div>
                <div className="mb-2">
                  <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500">Last name is required</p>
                  )}
                </div>
              </div>
              <div className="pb-2">
                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                  placeholder="Your email address here"
                />
                {errors.email && (
                  <p className="text-red-500">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <div className="pb-2 pt-4">
                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="password"
                  {...register("password", { required: true, minLength: 6 })}
                  className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                  placeholder="Enter a strong password"
                />
                {errors.password && (
                  <p className="text-red-500">
                    Password must be at least 6 characters long
                  </p>
                )}
              </div>
              <div className="pb-2 pt-4">
                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  autoComplete="password"
                  {...register("c_password", {
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                  placeholder="Confirm your password"
                />
                {errors.c_password && (
                  <p className="text-red-500">{errors.c_password.message}</p>
                )}
              </div>
              <div className="lg:mt-0 mt-2 flex items-center mb-2 p-2 w-full">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  {...register("agreeTerms", { required: true })}
                  className="w-4 h-4 bg-[#2C6777] border-[#2C6777] rounded"
                  style={{ backgroundColor: "aqua", borderColor: "#2C6777", borderRadius: "4px" }}
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-2 text-sm font-medium text-black"
                >
                  I agree to the{" "}
                  <span className="text-[#2C6777] hover:underline">
                    terms and conditions
                  </span>
                  .
                </label>
                {errors.agreeTerms && (
                  <p className="text-red-500">
                    You must agree to the terms and conditions
                  </p>
                )}
              </div>
              <p className="mt-4"> Or Continue With </p>
              <div className="py-4 space-x-2">
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                  <FaFacebookF />
                </span>
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                  <FaGooglePlusG />
                </span>
                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                  <FaLinkedinIn />
                </span>
              </div>
              <div className="pb-2 pt-4">
                <button
                  type="submit"
                  className="uppercase block w-full p-4 text-lg text-white font-bold rounded-lg bg-green-500 hover:bg-[#3f98b1]"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
