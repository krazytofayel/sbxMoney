import React, { useState } from "react";
import Sender_Information from "../Sender_Information/Sender_Information";
import Receiver_Information from "../Receiver_Information/Receiver_Information";

const Tab_Component = () => {
  const [activeTab, setActiveTab] = useState("Sender");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNext = () => {
    if (activeTab === "Sender") {
      setActiveTab("Receiver");
    } else if (activeTab === "Receiver") {
      setActiveTab("Transmission");
    } else if (activeTab === "Transmission") {
      setActiveTab("settings"); 
    }
  };

  const handlePrevious = () => {
    if (activeTab === "settings") {
      setActiveTab("Transmission");
    } else if (activeTab === "Transmission") {
      setActiveTab("Receiver");
    } else if (activeTab === "Receiver") {
      setActiveTab("Sender");
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="mb-4 border-b border-gray-200">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "Sender" ? "text-purple-600 border-purple-600" : "text-gray-500 hover:text-gray-600 hover:border-gray-300 "}`}
                onClick={() => handleTabClick("Sender")}
                type="button"
                role="tab"
                aria-controls="Sender"
                aria-selected={activeTab === "Sender"}
              >
                Sender
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "Receiver" ? "text-purple-600 border-purple-600" : "text-gray-500 hover:text-gray-600 hover:border-gray-300 "}`}
                onClick={() => handleTabClick("Receiver")}
                type="button"
                role="tab"
                aria-controls="Receiver"
                aria-selected={activeTab === "Receiver"}
              >
                Receiver
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "Transmission" ? "text-purple-600 border-purple-600" : "text-gray-500 hover:text-gray-600 hover:border-gray-300 "}`}
                onClick={() => handleTabClick("Transmission")}
                type="button"
                role="tab"
                aria-controls="Transmission"
                aria-selected={activeTab === "Transmission"}
              >
                Transmission
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "settings" ? "text-purple-600 border-purple-600" : "text-gray-500 hover:text-gray-600 hover:border-gray-300 "}`}
                onClick={() => handleTabClick("settings")}
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "settings"}
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content">
          <div
            className={`p-4 rounded-lg bg-gray-50 ${activeTab === "Sender" ? "" : "hidden"}`}
            id="Sender"
            role="tabpanel"
            aria-labelledby="Sender-tab"
          >
            <Sender_Information onNext={handleNext} />
            <div className="mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 ${activeTab === "Receiver" ? "" : "hidden"}`}
            id="Receiver"
            role="tabpanel"
            aria-labelledby="Receiver-tab"
          >
           <Receiver_Information/>
            <div className="mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 ${activeTab === "Transmission" ? "" : "hidden"}`}
            id="Transmission"
            role="tabpanel"
            aria-labelledby="Transmission-tab"
          >
            <p className="text-sm text-gray-500">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800">
                Transmission tab's associated content
              </strong>
              .
            </p>
            <div className="mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-2"
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 ${activeTab === "settings" ? "" : "hidden"}`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-500">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800">
                Settings tab's associated content
              </strong>
              .
            </p>
            <div className="mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={handlePrevious}
              >
                Previous
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab_Component;
