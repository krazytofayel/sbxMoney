import React, { useState } from 'react'
import Footer from '../../../Components/ShareableComponents/Footer/Footer'
import Neumorphism_Text_Header from '../Static_Page_Components/Neumorphism_Text_Header/Neumorphism_Text_Header'
import NavBar from '../../../Components/ShareableComponents/NavBar/NavBar';

const Condition_Of_Use = () => {
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

     <div className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${navfix ? "shadow-lg bg-white" : ""}`}>
        <NavBar />
      </div>
      <section>
        <div>
          <div className='flex justify-center align-middle items-center bg-[#CDFFDB] h-[30rem] mb-5'>
            <div>
              <Neumorphism_Text_Header text="Condition Of Use" />
              <p className='d-block max-w-2xl text-center max-h-36'>This web site is owned and provided by SBX Money and its subsidiaries and affiliates. By using this web site, you agree to the following Conditions of Use. Please review this information often, as it may change at any time, without notice.</p>

            </div>
          </div>
          <div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>Restrictions on Use:</span>
              <p className='font-semibold mb-2'>SBX Money collects Information about you from a variety of sources including those listed below. You consent to the collection, transfer and storage of this Information by computers or other transfer or storage devices in Australia and elsewhere when you supply it, including the transfer and retention of your data outside of the Australia to countries such as the UAE.</p>

              <p className='font-semibold mb-2'>Any copy of these materials or any portion thereof must include the copyright notice below. You may not use this site or any related services for any purpose that is unlawful or prohibited by this Agreement. You may not use any device, software or action, including but not limited to, bots, spiders, viruses, worms or time bombs, designed to damage or otherwise interfere with the site or to intercept or expropriate any system, data or personal information contained at the site.</p>

              <p className='font-semibold mb-5'>You will not use the site or related services for chain letters, junk mail, spamming or to engage in illegal activities You agree that you will not use this site to violate any laws, or conduct any other activity that gives rise to some liability or otherwise harm the goodwill associated with our trademarks. SBX Money may immediately terminate any or all of your rights to use this site if at any time for any reason.</p>


              <span className='font-bold text-black'>Restrictions on Use:</span>
              <p className='font-semibold mt-2 mb-2'>You are authorized to view, copy and print the materials appearing on this web site, subject to the following: The materials may be used for internal informational and non-commercial purposes only. You may not copy, distribute, modify, transmit, reuse, repost or otherwise display the web site content for public or commercial purposes, without the express written consent of the SBX Money Legal Department authorizing use for such purposes.</p>

              <p className='font-semibold mb-2'>Any copy of these materials or any portion thereof must include the copyright notice below. You may not use this site or any related services for any purpose that is unlawful or prohibited by this Agreement. You may not use any device, software or action, including but not limited to, bots, spiders, viruses, worms or time bombs, designed to damage or otherwise interfere with the site or to intercept or expropriate any system, data or personal information contained at the site.</p>

              <p className='font-semibold'>You will not use the site or related services for chain letters, junk mail, spamming or to engage in illegal activities You agree that you will not use this site to violate any laws, or conduct any other activity that gives rise to some liability or otherwise harm the goodwill associated with our trademarks. SBX Money may immediately terminate any or all of your rights to use this site if at any time for any reason.</p>
              <span className='font-bold text-black'>Restrictions on Use:</span>
              <p className='font-semibold mt-2 mb-2'>You are authorized to view, copy and print the materials appearing on this web site, subject to the following: The materials may be used for internal informational and non-commercial purposes only. You may not copy, distribute, modify, transmit, reuse, repost or otherwise display the web site content for public or commercial purposes, without the express written consent of the SBX Money Legal Department authorizing use for such purposes.</p>

              <p className='font-semibold mb-2'>Any copy of these materials or any portion thereof must include the copyright notice below. You may not use this site or any related services for any purpose that is unlawful or prohibited by this Agreement. You may not use any device, software or action, including but not limited to, bots, spiders, viruses, worms or time bombs, designed to damage or otherwise interfere with the site or to intercept or expropriate any system, data or personal information contained at the site.</p>





            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>
  )
}

export default Condition_Of_Use
