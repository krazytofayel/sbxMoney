import React, { useState, useEffect } from 'react';

const AnimatedStatsCard = ({ title, value, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.ceil(value / 100); // Calculate the step size based on the value
    const interval = setInterval(() => {
      if (count < value) {
        setCount(count + step); // Increment count by step
      }
    }, 100); // Set interval to 100 milliseconds

    return () => clearInterval(interval);
  }, [count, value]);

  return (
    <div className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <div className="p-3 bg-[#97d4a8] rounded-full shadow-lg">{icon}</div>
          <div className="ml-4">
            <p className="text-gray-600 text-3xl font-bold">{count} +</p>
            <h2 className="text-md font-semibold text-gray-800">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsCard;
