import React, { useEffect, useState } from "react";
import Sender_Information from "../Sender_Information/Sender_Information";
import Receiver_Information from "../Receiver_Information/Receiver_Information";
import Transaction_Information from "../Transaction_Information/Transaction_Information";

const Tab_Component = () => {
  const [senderformData, setSenderFormData] = useState({}); // Lifted state
  const [receiverformData, setReceiverFormData] = useState({}); // Lifted state
  const [activeTab, setActiveTab] = useState(() => {
    // Check if there's a saved active tab in the URL hash
    const hash = window.location.hash.substr(1);
    return hash || "Sender"; // Default to "Sender" if not found
  });

  useEffect(() => {
    // Update the URL hash whenever the active tab changes
    window.location.hash = activeTab;
  }, [activeTab]);

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
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "Sender" ? "text-green-600 border-green-600" : "text-gray-500 hover:text-gray-600 hover:border-gray-300 "}`}
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
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "Receiver" ? "text-green-600 border-green-600" : "text-gray-500 hover:text-gray-600 hover:border-gray-300 "}`}
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
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "Transaction" ? "text-green-600 border-green-600" : "text-gray-500 hover:text-gray-600 hover:border-gray-300 "}`}
                onClick={() => handleTabClick("Transaction")}
                type="button"
                role="tab"
                aria-controls="Transaction"
                aria-selected={activeTab === "Transaction"}
              >
                Transaction
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
            <Sender_Information
              senderformData={senderformData}
              setSenderFormData={setSenderFormData}
              onNext={handleNext}
            />
            {/* <div className="mt-4">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={handleNext}
              >
                Next
              </button>
            </div> */}

          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 ${activeTab === "Receiver" ? "" : "hidden"}`}
            id="Receiver"
            role="tabpanel"
            aria-labelledby="Receiver-tab"
          >
            <Receiver_Information
              senderformData={senderformData}
              receiverformData={receiverformData}
              setReceiverFormData={setReceiverFormData}
              onNext={handleNext}
            />
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 ${activeTab === "Transaction" ? "" : "hidden"}`}
            id="Transaction"
            role="tabpanel"
            aria-labelledby="Transaction-tab"
          >
            <Transaction_Information senderformData={senderformData} isActive={activeTab === "Transaction"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab_Component;
