import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Receiver_Information = ({  receiverformData, setReceiverFormData, }) => {
  const { register, handleSubmit, reset, setValue, getValues, formState: { errors }, } = useForm({ defaultValues: receiverformData });

  const [receivers, setReceivers] = useState([]);
 
  useEffect(() => {
    // Load receivers from local storage when component mounts (that's whe if user visit different page and again came this page then show the previous data and add new)
    const storedReceivers = JSON.parse(localStorage.getItem("receivers"));
    if (storedReceivers) {
      setReceivers(storedReceivers);
    }
  }, []);

  // Retrieve user from local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id;

  const onSubmit = async (data) => {
    try {
      setReceiverFormData(data);
      if (!userId) {
        toast.error("User information not found. Please log in again.");
        return;
      }

      // Validate all fields
      for (let key in data) {
        if (!data[key]) {
          toast.error("Please fill in all fields before submitting.");
          return;
        }
      }

      // Check for duplicate receivers
      const isDuplicate = receivers.some(receiver =>
        receiver.email === data.email &&
        receiver.phone === data.contactNumber
      );

      if (isDuplicate) {
        toast.error("This receiver already exists.");
        return;
      }

      const formData = {
        user_id: userId,
        name: data.fullName,
        email: data.email,
        phone: data.contactNumber,
        alt_phone: data.altcontact,
        city: data.city,
        state: data.state,
        country: data.country,
        post_code: data.post_code,
        back_ac_name: data.back_ac_name,
        back_ac_no: data.back_ac_no,
      };

      const response = await axios.post("http://127.0.0.1:8000/api/admin/receivers", formData);

      if (response.status === 200) {
        console.log("Successfully sent data to the server:", response.data);
        toast.success(response.data.message || "Data successfully submitted.");

        const updatedReceivers = [...receivers, formData];
        setReceivers(updatedReceivers);
        localStorage.setItem("receivers", JSON.stringify(updatedReceivers));

        // Store data in local storage
        localStorage.setItem('receiverformData', JSON.stringify(data));
        setReceiverFormData({});
        // Optional: Reset form fields after submission
        //reset();
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
    reset();
  };


  return (
    <div>
      <ToastContainer />
      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className=" font-bold text-gray-900 mb-2">Personal Information:</h1>
        <div className="bg-white rounded-lg p-5">
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
              htmlFor="altcontact"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              alt Contact Number
            </label>
            <input
              type="tel"
              id="altcontact"
              {...register("altcontact", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.altcontact && <span>This field is required</span>}
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


        <div className="flex justify-between mt-5">  
          <button
          type="button"
          onClick={handleAddReceiver}
          className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add Another Receiver
        </button>
          <button
            type="submit"
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button></div>
      </form>
    </div>
  );
};

export default Receiver_Information;
