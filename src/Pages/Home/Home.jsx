import { useState } from "react";
import NavBar from "../../Components/ShareableComponents/NavBar/NavBar";
import Footer from "../../Components/ShareableComponents/Footer/Footer";
import MainHeroSection from "./HomeComponents/MainHeroSection/MainHeroSection";
import Fast_Easy_Secured_Every_Transaction from "./HomeComponents/Fast_Easy_Secured_Every_Transaction/Fast_Easy_Secured_Every_Transaction";
import Prestige_Benifit from "./HomeComponents/Prestige_Benifit/Prestige_Benifit";
import Why_Chose_Us from "./HomeComponents/Why_Chose_Us/Why_Chose_Us";
import SBX_Mobile_App_Section from "./HomeComponents/SBX_Mobile_App_Section/SBX_Mobile_App_Section";
import FAQ from "./HomeComponents/FAQ/FAQ";





const Home = () => {
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
      {/* <MainHeroSection/> */}
      <Prestige_Benifit />
      <Why_Chose_Us></Why_Chose_Us>
      <Fast_Easy_Secured_Every_Transaction />
      <SBX_Mobile_App_Section></SBX_Mobile_App_Section>
      <FAQ></FAQ>
      <Footer />

    </>
  )
}

export default Home
