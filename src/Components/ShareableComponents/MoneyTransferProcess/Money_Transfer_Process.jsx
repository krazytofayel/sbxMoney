import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Tab_Component from "./Money_Transfer_Process_Component/Tad/Tab_Component";

const Money_Transfer_Process = () => {
  const [navfix, setNavfix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 70) {
        setNavfix(true);
        //console.log(scrollY)
      } else {
        setNavfix(false);
      }
    }

    window.addEventListener("scroll", setFixed);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <>
      <div>
        <div
          className={`z-20  top-0 bg-white w-full transition-all duration-300 ease-in-out ${navfix ? "shadow-lg bg-white" : ""}`}
        >
          <NavBar />
        </div>

        <Tab_Component />
      </div>
    </>
  );
};

export default Money_Transfer_Process;
