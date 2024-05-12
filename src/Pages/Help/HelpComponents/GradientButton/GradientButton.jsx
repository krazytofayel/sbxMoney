import React from 'react';

const GradientButton = ({ icon: IconComponent, text, bgColor, hoverBgColor, textColor, hoverTextColor, href }) => {
  const buttonClasses = `border px-16 py-5 rounded-md ${bgColor} ${textColor} hover:${hoverBgColor} hover:${hoverTextColor} font-bold text-center inline-flex gap-2 items-center justify-between shadow-lg focus:ring-4 focus:outline-none`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {IconComponent && <IconComponent className="w-6 h-6" />}
        {text}
      </a>
    );
  } else {
    return (
      <button className={buttonClasses}>
        {IconComponent && <IconComponent className="w-6 h-6" />}
        {text}
      </button>
    );
  }
};

export default GradientButton;
