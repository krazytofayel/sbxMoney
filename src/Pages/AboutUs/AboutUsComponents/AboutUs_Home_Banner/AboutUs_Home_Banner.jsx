import React from "react";

const AboutUs_Home_Banner = () => {
  return (
    <>
      <div>
        <section class="w-full flex bg-gray-100  h-[35rem]">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col justify-center items-center align-middle">
            <div class="text-center  mt-24 mb-8">
            
              <p class="mt-1 text-4xl font-extrabold text-gray-900  sm:text-5xl sm:tracking-tight lg:text-6xl">
                Your Companion for Seamless Money Transaction.
               
              </p>
              <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500 font-medium ">
                {" "}
                You can rest assured that your financial well-being is in
                capable hands, allowing you to focus on what truly matters.
              </p>
              <a
                href="#"
                class="inline-block px-6 py-3 mt-8 bg-green-400  text-white font-semibold rounded hover:bg-green-400 "
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs_Home_Banner;
