import React from 'react';

const GlobalButton = ({ text, bgColor, hoverBgColor, textColor, hoverTextColor, targetSectionId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Construct Tailwind CSS class names dynamically
  const buttonClasses = `relative flex justify-center items-center rounded-md font-semibold px-6 md:px-8 h-12 md:h-14 mx-auto md:ml-0 ${bgColor} text-${textColor} hover:bg-${hoverBgColor} hover:text-${hoverTextColor} transition-all duration-300 focus:outline-none`;

  const svgClasses = `h-4 md:h-5 w-4 md:w-5 stroke-${hoverBgColor} -translate-x-1 md:-translate-x-2`;

  return (
    <button onClick={handleClick} className={buttonClasses}>
      <span className="relative uppercase text-sm md:text-base truncate">{text}</span>
      <div className="flex items-center -space-x-2 md:-space-x-3 translate-x-2 md:translate-x-3">
        <div className={`w-2 md:w-2.5 h-[1.6px] rounded bg-${hoverBgColor} origin-left scale-x-0 transition-all duration-300 group-hover:scale-x-100`}></div>
        <svg xmlns="http://www.w3.org/2000/svg" className={svgClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default GlobalButton;
