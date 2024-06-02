import React, { useState } from "react";
import { useEffect } from "react";

const Transaction_Information = ({ senderformData }) => {
  const [senderData, setSenderData] = useState({});
  const [receiverData, setReceiverData] = useState({});
  // Load senderData from local storage when the component mounts
  useEffect(() => {
    const storedSenderData = JSON.parse(localStorage.getItem("senderFormData"));
    if (storedSenderData) {
      setSenderData(storedSenderData);
    }
  }, []);
  // Load receiverData from local storage when the component mounts
  useEffect(() => {
    const storedReceiverData = JSON.parse(
      localStorage.getItem("receiverformData")
    );
    if (storedReceiverData) {
      setReceiverData(storedReceiverData);
    }
  }, []);

  const [receiverOptions, setReceiverOptions] = useState([
    { id: 1, name: "Receiver One" },
    { id: 2, name: "Receiver Two" },
    { id: 3, name: "Receiver Three" },
  ]);
  const [selectedReceiver, setSelectedReceiver] = useState("");
  const handleReceiverChange = (event) => {
    setSelectedReceiver(event.target.value);
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-5 lg:gap-12 p-2 mt-10 ">
          <div className="col-span-12 md:col-span-6 lg:col-span-6 mb-6 lg:mb-0">
            <div className="border rounded-full">
              {" "}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Sender Information
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mb-2">First Name:</p>
                    <p className="font-semibold">{senderData.firstName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Last Name:</p>
                    <p className="font-semibold">{senderData.lastName}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mt-2 mb-2">First Name:</p>
                  <p className="font-semibold">{senderData.fullName}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mt-2 mb-2">Email:</p>
                    <p className="font-semibold">{senderData.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mb-1">Contact Number:</p>
                    <p className="font-semibold">{senderData.contactNumber}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mt-2 mb-2">NID:</p>
                  <p className="font-semibold">{senderData.nidNumber}</p>
                </div>
                <div>
                  <p className="text-gray-600 mt-2 mb-2">Passport:</p>
                  <p className="font-semibold">{senderData.passportNumber}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mt-2 mb-2">House:</p>
                    <p className="font-semibold">{senderData.houseNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mb-1">Road No:</p>
                    <p className="font-semibold">{senderData.roadNumber}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-600 mt-2 mb-2">Area:</p>
                    <p className="font-semibold">{senderData.area}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mb-1">Block:</p>
                    <p className="font-semibold">{senderData.block}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mb-1">Post Code:</p>
                    <p className="font-semibold">{senderData.postCode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6 mb-6 lg:mb-0">
            {/* Add similar display for receiver information */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Select Receiver</h2>
              <select
                value={selectedReceiver}
                onChange={handleReceiverChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="" disabled>
                  Select a receiver
                </option>
                {receiverOptions.map((receiver) => (
                  <option key={receiver.id} value={receiver.name}>
                    {receiver.name}
                  </option>
                ))}
              </select>
              {selectedReceiver && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    Selected Receiver: {selectedReceiver}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2">First Name:</p>
                      <p className="font-semibold">{receiverData.firstName}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2">Last Name:</p>
                      <p className="font-semibold">{receiverData.lastName}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mb-2">First Name:</p>
                    <p className="font-semibold">{receiverData.fullName}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mt-2 mb-2">Email:</p>
                      <p className="font-semibold">{receiverData.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mt-2 mb-1">Contact Number:</p>
                      <p className="font-semibold">
                        {receiverData.contactNumber}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mb-2">NID:</p>
                    <p className="font-semibold">{receiverData.nidNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mt-2 mb-2">Passport:</p>
                    <p className="font-semibold">
                      {receiverData.passportNumber}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mt-2 mb-2">House:</p>
                      <p className="font-semibold">
                        {receiverData.houseNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mt-2 mb-1">Road No:</p>
                      <p className="font-semibold">{receiverData.roadNumber}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-gray-600 mt-2 mb-2">Area:</p>
                      <p className="font-semibold">{receiverData.area}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mt-2 mb-1">Block:</p>
                      <p className="font-semibold">{receiverData.block}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mt-2 mb-1">Post Code:</p>
                      <p className="font-semibold">{receiverData.postCode}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction_Information;
