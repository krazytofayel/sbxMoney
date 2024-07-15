import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';
const Receiver_Information = ({ onNext, senderformData, receiverformData, setReceiverFormData, }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors }, } = useForm({ defaultValues: receiverformData });

  const [receivers, setReceivers] = useState([]);
  useEffect(() => {
    const storedReceivers = JSON.parse(localStorage.getItem("receivers"));
    if (storedReceivers) {
      setReceivers(storedReceivers);
    }
  }, [])

  const onSubmit = async (data) => {
    try {
      console.log("Data to be sent:", data);
      setReceiverFormData(data);

      // Generate a unique user ID
      const uniqueUserId = uuidv4();
      console.log(uniqueUserId);

      const formData = {
        user_id: 3,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.contactNumber,
        alt_phone: data.altPhone,
        city: data.city,
        state: data.state,
        country: data.country,
        post_code: data.post_code,
        back_ac_name: data.back_ac_name, 
        back_ac_no: data.back_ac_no, 
        receiver_id: 2 , 
      };

      // Append new receiver data to the receivers array
      const updatedReceivers = [...receivers, formData];
      setReceivers(updatedReceivers);
      localStorage.setItem("receivers", JSON.stringify(updatedReceivers));
      console.log("Current receivers data:", updatedReceivers);

      const response = await axios.post("http://127.0.0.1:8000/api/admin/receivers", formData);

      if (response.status === 200) {
        console.log("Successfully sent data to the server:", response.data);
        toast.success(response.data.message || "Data successfully submitted.");
        // Store data in local storage
        localStorage.setItem('receiverformData', JSON.stringify(data));
        setReceiverFormData({});
        // Optional: Reset form fields after submission
        reset();
      } else {
        console.error("Failed to send data to the server");
        toast.error("Failed to send data to the server. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      if (error.response) {
        // Server responded with a status other than 200 range
        if (error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Server error. Please try again later.");
        }
      } else if (error.request) {
        // Request was made but no response was received
        toast.error("No response from server. Please check your network connection.");
      } else {
        // Something happened in setting up the request
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  const handleAddReceiver = () => {
    // Save the current form data before resetting
    const currentData = getValues();
    const formData = {
      user_id: 3,
      name: `${currentData.firstName} ${currentData.lastName}`,
      email: currentData.email,
      phone: currentData.contactNumber,
      alt_phone: currentData.altPhone,
      city: currentData.city,
      state: currentData.state,
      country: currentData.country,
      post_code: currentData.post_code,
      back_ac_name: currentData.back_ac_name,
      back_ac_no: currentData.back_ac_no,
      receiver_id: 2,
    };
    const updatedReceivers = [...receivers, formData];
    setReceivers(updatedReceivers);
    localStorage.setItem("receivers", JSON.stringify(updatedReceivers));
    // Log the updated receivers array to the console
    console.log("Current receivers data:", updatedReceivers);

    // Reset the form fields for a new receiver entry
    reset();
  };
  return (
    <div>
      <h1>Sender Name:{senderformData.firstName} to </h1>
      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" font-bold text-gray-900 mb-2">Personal Information:</h1>
        <div className="bg-white rounded-lg p-5">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="f_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="f_name"
                {...register("firstName", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="First Name"
              />
              {errors.firstName && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="l_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="l_name"
                {...register("lastName", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Last Name"
              />
              {errors.lastName && <span>This field is required</span>}
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="full_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              {...register("fullName", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Full Name"
            />
            {errors.fullName && <span>This field is required</span>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="contact"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              {...register("contactNumber", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.contactNumber && <span>This field is required</span>}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="mb-5">
              <label
                htmlFor="nid"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                NID Number
              </label>
              <input
                type="text"
                id="nid"
                {...register("nidNumber", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.nidNumber && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="pid"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Passport Number
              </label>
              <input
                type="text"
                id="pid"
                {...register("passportNumber", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.passportNumber && <span>This field is required</span>}
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-gray-900 mb-2">Personal Address:</h1>
        <div className="bg-white rounded-lg p-5 ">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="house"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                House No
              </label>
              <input
                type="text"
                id="house"
                {...register("houseNumber", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="House No."
              />
              {errors.houseNumber && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="road"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Road No
              </label>
              <input
                type="text"
                id="road"
                {...register("roadNumber", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Road No."
              />
              {errors.roadNumber && <span>This field is required</span>}
            </div>
          </div>
          {/* <div className="grid md:grid-cols-3 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="block"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Block
              </label>
              <input
                type="text"
                id="block"
                {...register("block", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Block"
              />
              {errors.block && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="area"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Area
              </label>
              <input
                type="text"
                id="area"
                {...register("area", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Area"
              />
              {errors.area && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="post_code"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Post Code
              </label>
              <input
                type="text"
                id="post_code"
                {...register("postCode", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Post Code"
              />
              {errors.postCode && <span>This field is required</span>}
            </div>
          </div> */}
          <div className="mb-5">
            <label
              htmlFor="post_code"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Post Code
            </label>
            <input
              type="text"
              id="post_code"
              {...register("post_code", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Post Code"
            />
            {errors.post_code && <span>This field is required</span>}
          </div>
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                {...register("country", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.country && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                {...register("city", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.city && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                state
              </label>
              <input
                type="text"
                id="state"
                {...register("state", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.state && <span>This field is required</span>}
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-5">
              <label
                htmlFor="back_ac_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Bank Account Name
              </label>
              <input
                type="text"
                id="back_ac_name"
                {...register("back_ac_name", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="House No."
              />
              {errors.back_ac_name && <span>This field is required</span>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="back_ac_no"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                BAnk Account Number
              </label>
              <input
                type="text"
                id="back_ac_no"
                {...register("back_ac_no", { required: true })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Road No."
              />
              {errors.back_ac_no && <span>This field is required</span>}
            </div>
          </div>
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              {...register("remember", { required: true })}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 accent-green-600"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Remember me
          </label>
          {errors.remember && <span>This field is required</span>}
        </div>
        <button
          type="button"
          onClick={handleAddReceiver}
          className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add Another Receiver
        </button>
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Receiver_Information;
