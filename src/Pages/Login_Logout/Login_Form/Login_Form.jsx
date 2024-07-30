import { Link, useNavigate } from "react-router-dom";
import signinimg from "../../../../public/aud.avif";
import logoimg from "../../../../public/Logo.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import ParticleBackground from "../../../Components/ParticleComponent/ParticleComponent";

const Login_Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [attempts, setAttempts] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Check token validity on component mount
    const tokenSetTimestamp = localStorage.getItem("tokenSetTimestamp");
    if (tokenSetTimestamp) {
      const tokenSetDate = new Date(tokenSetTimestamp);
      const currentTime = new Date();
      const diffHoures = (currentTime - tokenSetDate) / (1000 * 60 * 60);
      if (diffHoures >= 2) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenSetTimestamp");
        localStorage.removeItem("user");
        localStorage.removeItem("lastEmail");
        toast.error("Session expired. Please log in again.");
      }
    }

    // Autofill username if "Remember Me" was checked previously
    const lastEmail = localStorage.getItem("lastEmail");
    if (lastEmail) {
      document.getElementById("email").value = lastEmail;
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);

      // Send form data to login API endpoint using Axios
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      console.log("API Response:", response.data);

      if (response.data.accessToken) {
        // Store access token in local storage
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("tokenSetTimestamp", new Date().toISOString());

        // Store user information in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Display success message using toast
        toast.success(response.data.message);

        // Redirect to the home page
        navigate("/");
      }
    } catch (error) {
      // Handle errors
      console.error("An error occurred while submitting the form:", error);
      // Display error message using toast
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        // Check if the error indicates the user is not registered
        if (
          error.response.data.message === "Your email or password is incorrect"
        ) {
          // Increment the attempts count
          setAttempts((prevAttempts) => prevAttempts + 1);

          // If attempts are 2, redirect to the sign-up page
          if (attempts + 1 >= 2) {
            navigate("/sign_up");
          }
        }
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <>
      <ToastContainer />
      <section
        className="min-h-screen flex items-stretch text-black"
        id="signup"
      >

        <div
          className="lg:flex z-10 w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center text-white"
          style={{ backgroundImage: `url(${signinimg})` }}
        >
          {/* <ParticleBackground/> */}
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
            >
              <div className="pb-2 pt-4">
                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address here"
                  autoComplete="email"
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
                  autoComplete="current-password"
                  className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>

              <div className="flex flex-wrap justify-between">
                <div className="lg:mt-0 mt-2 flex items-center  mb-2 lg:w-1/2 md:w-2/3 w-full p-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="w-4 h-4 bg-[#2C6777] border-[#2C6777] rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm font-medium text-[#2C6777]"
                  >
                    Remember me
                  </label>
                </div>
                <div className="lg:text-right text-start text-[#2C6777] font-medium hover:underline hover:text-[#22454e] lg:w-1/2 md:w-1/3 w-full">
                  <Link to="/forgot-password">Forgot Password</Link>
                </div>
              </div>
              <p className="mt-4">Or Continue With</p>
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
                <button className="uppercase block w-full p-4 text-lg text-white font-bold rounded-lg bg-green-500 hover:bg-[#3f98b1]">
                  Sign IN
                </button>
              </div>
              <p className="mt-2 mb-2">
                Don't have an account yet?{" "}
                <Link
                  to="/sign_up"
                  className="text-[#2C6777] font-medium hover:underline"
                >
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
