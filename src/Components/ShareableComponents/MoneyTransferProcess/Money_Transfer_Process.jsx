import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Tab_Component from "./Money_Transfer_Process_Component/Tad/Tab_Component";
import Footer from "../Footer/Footer";

const Money_Transfer_Process = () => {
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
      <div>
        <div
          className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${navfix ? "shadow-lg bg-white" : ""}`}
        >
          <NavBar />
        </div>

        <div className="mt-32">
          <Tab_Component />
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Money_Transfer_Process;
