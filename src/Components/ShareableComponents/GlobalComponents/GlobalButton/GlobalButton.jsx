import React from 'react';

const GlobalButton = ({ onClick, text, bgColor, hoverBgColor, textColor, hoverTextColor }) => {
  // Construct Tailwind CSS class names dynamically
  const buttonClasses = `relative flex justify-center items-center rounded-md font-semibold px-6 md:px-8 h-12 md:h-14 ${bgColor} text-${textColor} hover:bg-${hoverBgColor} hover:text-${hoverTextColor}
                    before:absolute 
                    before:inset-0 
                    before:bg-${hoverBgColor} 
                    before:scale-x-0 
                    before:origin-right
                    before:transition
                    before:duration-300
                    hover:before:scale-x-100
                    hover:before:origin-left
                    focus:outline-none`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      <span className="relative uppercase text-sm md:text-base">{text}</span>
      <div className="flex items-center -space-x-2 md:-space-x-3 translate-x-2 md:translate-x-3">
        <div className={`w-2  md:w-2.5 h-[1.6px] rounded bg-${hoverBgColor} origin-left scale-x-0 transition duration-300 group-hover:scale-x-100`}></div>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 md:h-5 w-4 md:w-5 stroke-${hoverBgColor} -translate-x-1 md:-translate-x-2 transition duration-300 group-hover:translate-x-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default GlobalButton;
