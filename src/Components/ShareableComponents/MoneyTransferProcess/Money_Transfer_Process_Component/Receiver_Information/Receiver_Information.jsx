import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Receiver_Information = ({
  onNext,
  senderformData,
  receiverformData,
  setReceiverFormData,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: receiverformData });

  // Load initial formData into the form
  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("receiverformData")) ;
    for (const key in savedData) {
      setValue(key, savedData[key]);
    }
  }, [setValue]);

  const onSubmit = (data) => {
    // Save form data to local storage
    localStorage.setItem("receiverformData", JSON.stringify(data));
    setReceiverFormData(data);
    //console.log("Form receiver Data:", receiverformData);
    //reset(); // Reset form after submission if needed
  };
  useEffect(() => {
    console.log("Form receiver Data:", receiverformData);
  }, [receiverformData]);
  return (
    <div>
      <h1>Sender Name:{senderformData.firstName} to </h1>
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
