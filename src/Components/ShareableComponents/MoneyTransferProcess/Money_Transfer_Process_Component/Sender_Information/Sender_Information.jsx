import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Sender_Information = ({ senderformData, setSenderFormData }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: senderformData });

  // Load initial formData into the form
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("senderFormData")) || {};
    for (const key in savedData) {
      setValue(key, savedData[key]);
    }
  }, [setValue]);

  const firstName = watch("firstName", senderformData.firstName || "");
  const lastName = watch("lastName", senderformData.lastName || "");
  // Automatically update fullName when firstName or lastName changes
 
  useEffect(() => {
    const fullName = `${firstName} ${lastName}`.trim();
    setValue("fullName", fullName);
    setSenderFormData((prev) => ({ ...prev, fullName }));
  }, [firstName, lastName, setValue, setSenderFormData]);
  // const onSubmit = (data) => {
  //   setFormData(data);
  // };
  const onSubmit = async (data) => {
    try {
      // Log the data to the console
      console.log("Data to be sent:", data);

      // Update state with form data
      setSenderFormData(data);
      const fullName = `${data.firstName} ${data.lastName}`;
      // Set the full name in the form data
      data.fullName = fullName;
      // Save form data to local storage
      localStorage.setItem("senderFormData", JSON.stringify(data));
      // Make a POST request to your API endpoint with form data using Axios
      const response = await axios.post("YOUR_API_ENDPOINT", data);

      // Check if the request was successful
      if (response.status === 200) {
        // Clear form data
        setSenderFormData({});
        onNext();
      } else {
        // Handle errors if the request failed
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      // Handle errors
      console.error("An error occurred:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
        <h1>Personal Address:</h1>
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
        <div className="grid md:grid-cols-3 md:gap-6">
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
        <div className="flex justify-between">
          <button
            type="submit"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-5"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-5"
          >
            Scroll to Top
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sender_Information;
