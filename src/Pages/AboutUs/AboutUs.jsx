import React, { useState, useEffect } from "react";
import Transfer_Ur_Money from "./AboutUsComponents/Transfer_Ur_Money/Transfer_Ur_Money";
import Vision from "./AboutUsComponents/Vision/Vision";
import Statistics from "./AboutUsComponents/Statistics/Statistics";
import Foundation from "./AboutUsComponents/Foundation/Foundation";
import Footer from "../../Components/ShareableComponents/Footer/Footer";
import AboutUs_Home_Banner from "./AboutUsComponents/AboutUs_Home_Banner/AboutUs_Home_Banner";
import NavBar from "../../Components/ShareableComponents/NavBar/NavBar";

const AboutUs = () => {
  const [navfix, setNavfix] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 70) {
        setNavfix(true);
      } else {
        setNavfix(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${navfix ? "shadow-lg bg-white" : ""}`}
      >
        <NavBar />
      </div>
      <div >
        <AboutUs_Home_Banner />
        <Transfer_Ur_Money />
        <Vision />
        <Statistics />
        <Foundation />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
