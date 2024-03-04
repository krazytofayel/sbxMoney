import React, { useState } from 'react'
import Footer from '../../../Components/ShareableComponents/Footer/Footer'
import Neumorphism_Text_Header from '../Static_Page_Components/Neumorphism_Text_Header/Neumorphism_Text_Header'
import NavBar from '../../../Components/ShareableComponents/NavBar/NavBar';

const Privacy_Policy = () => {
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
  const items = [
    "To assist us in providing services to you;",
    "To allow you to change web pages during your visit without having to re-enter your password;",
    "To determine whether you've acted on our promotional messages;",
    "To store your preferences and other information and to track activity on our website;",
    "To better understand the effectiveness of our promotional campaigns;",
    "To determine whether you came to our site from a banner ad or an affiliate website;"
  ];
  return (
    <>

  <div className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${navfix ? "shadow-lg bg-white" : ""}`}>
        <NavBar />
      </div>
      <section>
        <div>
          <div className='flex justify-center align-middle items-center bg-[#CDFFDB] h-[30rem] mb-5'>
            <div>

              <Neumorphism_Text_Header text="Privacy Notice" />
              <p className='d-block max-w-2xl text-center max-h-36'>This Privacy Statement describes how SBX Money collects and uses your personal information that we obtain when you visit and use our web site. The money transfer services offered on this Web site are provided by SBX Money which are bound by the National Privacy Principles under the Privacy Act 1988 (Commonwealth)..</p>

            </div>
          </div>
          <div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>INFORMATION WE COLLECT</span>
              <p className='font-semibold mb-2'>SBX Money collects Information about you from a variety of sources including those listed below. You consent to the collection, transfer and storage of this Information by computers or other transfer or storage devices in Australia and elsewhere when you supply it, including the transfer and retention of your data outside of the Australia to countries such as the UAE.</p>

              <p className='font-semibold mb-2'>We collect Information you supply when: (a) you ask us or one of our affiliated companies, Sonar Bangla agents to send or receive money or to provide other goods or services; (b) you submit Information on applications or other forms to us; or (c) you otherwise submit Information to us, or others;</p>

              <p className='font-semibold mb-5'>We collect Information about your transactions with us, or others;</p>

              <p className='font-semibold mb-5'>We collect Information about you from a variety of third party sources such as our business customers, government agencies and consumer reporting agencies and other suppliers of public information, in order to verify any of the information you provide in order to effect, administer and enforce transactions;</p>
              <p className='font-semibold mb-5'>We collect Information about the domain and host from which you access the Internet; your computer’s Internet address; the browser and operating system software you use; the date and time you access our Web site and the Internet address of the site from which you linked to our Web site when you visit us;</p>

              <p className='font-semibold mb-5'>We collect and retain your bank card details for use in future transactions; and We collect Information on your online activity</p>




            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>INTERNET TECHNOLOGY</span>
              <p className='font-semibold mb-2'>We use Internet technologies like cookies and Web beacons for a variety of purposes, including, but not limited to, those identified below.</p>

              <p className='font-semibold mb-2'>We collect Information you supply when: (a) you ask us or one of our affiliated companies, Sonar Bangla agents to send or receive money or to provide other goods or services; (b) you submit Information on applications or other forms to us; or (c) you otherwise submit Information to us, or others;</p>
              <p>
                <ol className="list-decimal list-outside pl-8">
                  {items.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                  ))}
                </ol>
              </p>

              <p className='font-semibold mb-5'>To deliver Information specific to your interests on additional web sites; and A "cookie" is a text file placed on your computer's hard drive by a Web site. Your Web browser uses it to guide you to sites based on your interest. "Web beacons" are transparent electronic images placed in the Web code that collect non-personal data while visiting a Web site. Cookies and Web beacons can usually be disabled by changing your browser preferences.This will limit the performance of SBX Money web site. Your browser usually has documentation on how to disable cookies and web beacons.</p>






            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>INFORMATION WE COLLECT</span>
              <p className='font-semibold mb-2'>Subject to your consent or as otherwise permitted by law, we may disclose the Information we collect to our Affiliates and to unaffiliated third parties as described below.</p>

              <p className='font-semibold mb-2'>We may disclose Information with the following SBX Money Affiliates to effect, administer and complete transactions:</p>

              <p className='font-semibold mb-5'>Financial service providers such as SBX Money Agents that offer our services; Banks, credit card companies, brokerage houses, mortgage lenders and mortgage originators; Legal, regulatory, security. processing and Australian and foreign government requirements, applicable to us or our Affiliates or service providers; and As permitted or required by law.</p>

              <p className='font-semibold mb-5'>We may only disclose Information about current and former consumers upon notice that you have provided unambiguous consent (opt-in) to perform marketing, business analysis and advertising services with companies only with whom we have contractual or joint marketing arrangements.</p>





            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>CONFIDENTIALITY AND SECURITY</span>
              <p className='font-semibold mb-2'>We endeavour to maintain physical, electrical and procedural safeguards that comply with applicable government regulations to guard your Information. We also endeavour to restrict Information access to our employees, agents and representatives that need to know it. Despite our efforts, and as you probably know, third parties may unlawfully intercept or access transmissions sent to us or may wrongly instruct you to disclose Information to them while posing as SBX Money.</p>







            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>PERSONAL CHOICE</span>
              <p className='font-semibold mb-2'>To better serve you and provide communications regarding new services or promotions, you will need to instruct SBX Money on your choice regarding disclosure. Your choice may be for disclosures of Information to our Affiliates only, or to disclose your Information to non-affiliated third parties as well as our Affiliates. Your choice can be submitted to us during the registration or transaction process or you can contact us using the information provided. Some disclosures are not subject to your consent. These include, among others, disclosures necessary to effect, administer or enforce a transaction you request; disclosures</p>


              <p className='font-semibold mb-2'>SBX Money maintains your choice and transaction history based on our record retention policies. If you do not perform another transaction within the retention time period, your Information, as well as your choice will be removed .</p>




            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>ACCURACY OF INFORMATION</span>
              <p className='font-semibold mb-2'>We endeavour to maintain physical, electrical and procedural safeguards that comply with applicable government regulations to guard your Information. We also endeavour to restrict Information access to our employees, agents and representatives that need to know it. Despite our efforts, and as you probably know, third parties may unlawfully intercept or access transmissions sent to us or may wrongly instruct you to disclose Information to them while posing as SBX Money.</p>







            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>EXTERNAL WEB SITES</span>
              <p className='font-semibold mb-2'>SBX Money Web site may be linked to or from third party Web sites. Sonar Bangla is not responsible for the content or privacy practices employed by Web sites that are linked to or from our Web site.</p>







            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>CHANGES SBX</span>
              <p className='font-semibold mb-2'>Money reserves the right to modify this Privacy Statement. Updated Privacy Statements will be posted at this Web site when amendments occur. We urge you to review this Privacy Statement when you visit to obtain the most current statement. You may change your choices at any time.</p>







            </div>
            <div className='text container mx-auto mt-5'>
              <span className='font-bold text-black'>CONTACT US</span>
              <p className='font-semibold mb-2'>Tel-02 9820 1325 Fax-02 9820 4344 Mobile- 0403 034 223, 0425 406 886</p>







            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>
  )
}

export default Privacy_Policy
