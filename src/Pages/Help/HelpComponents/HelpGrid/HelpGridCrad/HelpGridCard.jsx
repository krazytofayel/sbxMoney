import React from 'react';
import { FaPlusSquare } from "react-icons/fa";
const HelpGridCard = ({ title, description, buttonText, buttonHref }) => {
  return (
    <div className="p-1 max-w-sm h-[18rem] mx-auto">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#CDFFDB] hover:bg-teal-400 p-8 flex-col shadow-lg hover:text-white">
        <div className="flex items-center mb-3">
          <h2 className="dark:text-white text-lg font-medium">{title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <p className="leading-relaxed text-base dark:text-gray-300">{description}</p>
          <a href={buttonHref} className="mt-3 dark:text-white hover:text-blue-600 inline-flex items-center font-semibold gap-2">
            <FaPlusSquare />
            {buttonText}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpGridCard;
