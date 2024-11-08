import React, { useState } from "react";
import { useEffect } from "react";
import Money_Conversion_Form from "../Money_Conversion_Form/Money_Conversion_Form";
import Accordion from "../Ancordian/Ancordian";
import axios from "axios";

const Transaction_Information = ({ senderformData, isActive }) => {
  const [senderData, setSenderData] = useState({});
  const [receiverData, setReceiverData] = useState({});
  const [receiverOptions, setReceiverOptions] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState("");
  const [selectedReceiverData, setSelectedReceiverData] = useState({});
  const [confirminfo, setConfirminfo] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Load senderData from local storage when the component mounts
  useEffect(() => {
    const storedSenderData = JSON.parse(localStorage.getItem("senderFormData"));
    if (storedSenderData) {
      setSenderData(storedSenderData);
    }
  }, [senderformData]);

  // Retrieve user from local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?.id;
  const numericUserId = Number(userId)
  console.log(typeof (numericUserId))

  // Fetch receiver data specific to the user from the API when the component mounts
  useEffect(() => {
    const fetchReceivers = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const tokenSetTimestamp = localStorage.getItem("tokenSetTimestamp");

      if (!accessToken || !tokenSetTimestamp) {
        console.error("Access token or timestamp not found");
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/receivers/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        console.log("API Response: ", response.data);

        const receivers = response.data.data;
       // const tokenSetDate = new Date(tokenSetTimestamp);

        // Check if userId and receivers data are valid
        if (isNaN(numericUserId)) {
          console.error("Invalid userId");
          setIsLoading(false);
          return;
        }

        if (!Array.isArray(receivers)) {
          console.error("Receivers data is not an array");
          setIsLoading(false);
          return;
        }

        // Filter receivers based on their creation date
        // const filteredReceivers = receivers.filter(receiver => {
        //   const receiverCreatedDate = new Date(receiver.created_at);
        //   return receiverCreatedDate >= tokenSetDate;
        // });
        // console.log("Filtered Receivers: ", filteredReceivers);
        // Filter receivers based on user_id
        const filteredReceivers = receivers.filter(receiver => Number(receiver.user_id) === numericUserId);

        console.log("Filtered Receivers: ", filteredReceivers);
        const options = filteredReceivers.map((receiver, index) => ({
          id: index,
          name: receiver.name,
          ...receiver
        }));
        setReceiverOptions(options);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching receiver data:", error);
        setIsLoading(false);
      }
    };

    if (isActive && userId) {
      fetchReceivers();
    }
  }, [isActive, userId]);

  const handleReceiverChange = (event) => {
    const selectedReceiverName = event.target.value;
    setSelectedReceiver(selectedReceiverName);

    const selectedReceiverInfo = receiverOptions.find(
      (receiver) => receiver.name === selectedReceiverName
    );
    setSelectedReceiverData(selectedReceiverInfo || {});
  };

  const handelconfirminfobtn = () => {
    setConfirminfo((previousvalue) => !previousvalue);
  };
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-5 lg:gap-12 p-2 mt-10 ">
          <div className="col-span-12 md:col-span-12 lg:col-span-12 mb-6 lg:mb-0 ">
            <div className=" rounded-full">
              {" "}
              <Accordion title={"Sender Information"}>
                {" "}
                <div className="bg-white shadow-md rounded-lg p-6 ">
                  <h2 className="text-xl font-semibold mb-4">
                    Sender Information
                  </h2>
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">
                        First Name:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.firstName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-2">
                        Last Name:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.lastName}
                      </p>
                    </div>
                  </div> */}
                  <div>
                    <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                      Full Name:
                    </p>
                    <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      {senderData.fullName}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                        Email:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                        Contact Number:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.contactNumber}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                      NID:
                    </p>
                    <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      {senderData.nidNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                      Passport:
                    </p>
                    <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      {senderData.passportNumber}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                        House:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.houseNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                        Road No:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.roadNumber}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                        Area:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.area}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                        Block:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.block}
                      </p>
                    </div> */}
                    <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-1">
                        Post Code:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {senderData.postCode}
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-12 mb-6 lg:mb-0 ">
            {/* Add similar display for receiver information */}
            <Accordion title={"Receiver Information"}>
              {" "}
              <div className="bg-white shadow-md rounded-lg p-6 ">
                <h2 className="text-xl font-semibold mb-4">Select Receiver</h2>


                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <select
                    value={selectedReceiver}
                    onChange={handleReceiverChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select Receiver</option>
                    {receiverOptions.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                )}
                {selectedReceiver && selectedReceiverData && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      Selected Receiver: {selectedReceiverData.name}
                    </h3>


                    <div>
                      <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                        Full Name:
                      </p>
                      <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        {selectedReceiverData.name}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Email:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Contact Number:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.phone}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Bank Account Number:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.back_ac_name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Bank Account No:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.back_ac_no}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          House:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.houseNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Road No:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.roadNumber}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Country:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.country}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          City:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.city}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-1">
                          State:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.state}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Area:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.area}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-2">
                          Block:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.block}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mt-2 mb-1">
                          Post Code:
                        </p>
                        <p className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          {selectedReceiverData.post_code}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Accordion>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="text-sm font-semibold px-3 py-2 bg-green-500 text-white rounded-md mb-10 mt-5"
            onClick={handelconfirminfobtn}
          >
            {" "}
            {confirminfo ? "Close" : "Confirm Information"}
          </button>
        </div>
        {confirminfo && (
          <Money_Conversion_Form
            senderData={senderData}
            receiverData={receiverData}
            selectedReceiverData={selectedReceiverData}
          />
        )}
      </div>
    </>
  );
};

export default Transaction_Information;
