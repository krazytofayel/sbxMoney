import React, { useState } from 'react'
import Contact_Us_From from './Contact_Us_Components/Contact_Us_From/Contact_Us_From'
import Contact_Us_Address_Card from './Contact_Us_Components/Contact_Us_Address_Card/Contact_Us_Address_Card'
import Contact_Us_Home_Banner from './Contact_Us_Components/ConTact_Us_Home_Banner/Contact_Us_Home_Banner'
import Footer from '../../Components/ShareableComponents/Footer/Footer'
import NavBar from '../../Components/ShareableComponents/NavBar/NavBar'

const Contact_Us = () => {
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
  <Contact_Us_Home_Banner/>
 <Contact_Us_From/>
 <Contact_Us_Address_Card/>
 <Footer/>
  </>
  )
}

export default Contact_Us
