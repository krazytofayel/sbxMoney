import React, { useState } from 'react'
import Transfer_Ur_Money from './AboutUsComponents/Transfer_Ur_Money/Transfer_Ur_Money'
import Vision from './AboutUsComponents/Vision/Vision'
import Statistics from './AboutUsComponents/Statistics/Statistics'
import Foundation from './AboutUsComponents/Foundation/Foundation'
import Footer from '../../Components/ShareableComponents/Footer/Footer'
import AboutUs_Home_Banner from './AboutUsComponents/AboutUs_Home_Banner/AboutUs_Home_Banner'
import NavBar from '../../Components/ShareableComponents/NavBar/NavBar'

const AboutUs = () => {
    const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
    <div className={`z-20  ${navfix
        ? "fixed top-0  shadow-lg w-full  bg-white transition-all duration-300 ease-in-out "
        : ""
        }`}
      >
        <NavBar className="relative " />
      </div>
      <AboutUs_Home_Banner />
      <Transfer_Ur_Money />
      <Vision />
      <Statistics />
      <Foundation />
      <Footer />
    </>
  )
}

export default AboutUs
