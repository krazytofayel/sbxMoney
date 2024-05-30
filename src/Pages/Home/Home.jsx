import { useEffect, useState } from "react";
import NavBar from "../../Components/ShareableComponents/NavBar/NavBar";
import Footer from "../../Components/ShareableComponents/Footer/Footer";
import MainHeroSection from "./HomeComponents/MainHeroSection/MainHeroSection";
import Fast_Easy_Secured_Every_Transaction from "./HomeComponents/Fast_Easy_Secured_Every_Transaction/Fast_Easy_Secured_Every_Transaction";
import Prestige_Benifit from "./HomeComponents/Prestige_Benifit/Prestige_Benifit";
import Why_Chose_Us from "./HomeComponents/Why_Chose_Us/Why_Chose_Us";
import SBX_Mobile_App_Section from "./HomeComponents/SBX_Mobile_App_Section/SBX_Mobile_App_Section";
import FAQ from "./HomeComponents/FAQ/FAQ";
import Take_It_Easy_Steper from "./HomeComponents/Take_It_Easy_Steper/Take_It_Easy_Steper";
import Slider from "./HomeComponents/Slider/Slider";





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
      <div className={`z-20  top-0 bg-white w-full transition-all duration-300 ease-in-out ${navfix ? "shadow-lg bg-white" : ""}`}>
        <NavBar />
      </div>
      <MainHeroSection />
      <Prestige_Benifit />
      <Why_Chose_Us />
      <Fast_Easy_Secured_Every_Transaction />

      <Take_It_Easy_Steper />
      <Slider />
      <SBX_Mobile_App_Section />
      <FAQ></FAQ>
      <Footer />

    </>
  )
}

export default Home
