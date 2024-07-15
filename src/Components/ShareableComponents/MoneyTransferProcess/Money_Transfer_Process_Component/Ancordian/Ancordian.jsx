import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button
        onClick={toggleAccordion}
        className="accordion-title bg-green-500 text-white rounded-md p-2 w-full text-left"
      >
        {title}
      </button>
      {isOpen && (
        <div className="accordion-content bg-gray-50 border border-gray-300 p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
