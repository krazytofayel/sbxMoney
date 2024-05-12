
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoYoutube, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';
import { BsSendFill } from 'react-icons/bs'
import { motion } from "framer-motion";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import SocialIcon from './SocialIcon/SocialIcon';
import FooterlogoImg from '../../../../public/Logo.png'
const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full  h-full  pb-5  text-gray-700 px-5 bg-gray-100  ">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Link to={"/"}>
                {" "}
                <img src={FooterlogoImg} alt=" main logo" className="h-12" />
              </Link>
            </div>
            <p className="my-3 text-[16px] text-black font-medium mt-5 mb-10">
              {" "}
              Get the tailored support you need with our dedicated team. Follow
              us on our Social Media Platforms and never miss a beat.
            </p>

            <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-2">
              <SocialIcon
                icon={<BiLogoFacebookCircle size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                alt="Facebook"
                link="https://facebook.com"
              />
              <SocialIcon
                icon={<BiLogoTwitter size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/twitter.png"
                alt="Twitter"
                link="https://twitter.com"
              />
              <SocialIcon
                icon={<BiLogoInstagramAlt size={30} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                alt="Instagram"
                link="https://instagram.com"
              />
              <SocialIcon
                icon={<BiLogoLinkedinSquare size={29} />}
                hoverIconSrc="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                alt="LinkedIn"
                link="https://linkedin.com"
              />
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <h2 className=" mb-[10px]  text-black text-[18px] font-bold select-none">
                Resources{" "}
              </h2>
              <nav className="list-none mb-5">
                <ul className="flex flex-col gap-1 text-black">
                  <li>
                    <Link to="/our service" className="hover:underline" href="">
                      {" "}
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/help"
                      className="hover:underline"
                      href=""
                      onClick={scrollToTop}
                    >
                      {" "}
                      Help
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/privacy_policy"
                      className="hover:underline"
                      href=""
                      onClick={scrollToTop}
                    >
                      {" "}
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/condition_of_use"
                      className="hover:underline"
                      href=""
                      onClick={scrollToTop}
                    >
                      {" "}
                      Terms and condition
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lagel_agreement"
                      className="hover:underline"
                      href=""
                      onClick={scrollToTop}
                    >
                      {" "}
                      Lagel Agreement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aboutus"
                      className="hover:underline"
                      href=""
                      onClick={scrollToTop}
                    >
                      {" "}
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user_guidet"
                      className="hover:underline"
                      href=""
                      onClick={scrollToTop}
                    >
                      {" "}
                      User Guide
                    </Link>
                  </li>

                  {/* <Link className="hover:underline" href="">
										<li>Career</li>
									</Link> */}
                </ul>
              </nav>
            </div>

            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <Link
                to="/contact_us"
                className=" mb-[10px]  text-black text-[18px] font-bold select-none "
                onClick={scrollToTop}
              >
                Contact Us
              </Link>

              <nav className="list-none mt-3 mb-10">
                <ul className="flex flex-col gap-[5px] text-black">
                  <a className="hover:underline" href="#">
                    <li>(02) 9158 8497</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>sbxMoney@gmail.com</li>
                  </a>
                  {/* <a className="hover:underline" href="#">
										<li>Suite no - 25, 4th Floor, Bhuiyan Mansion, 6 Motijheel C/A, Dhaka - 1000, Bangladesh
										</li>
									</a> */}
                </ul>
              </nav>
            </div>
            <div className="lg:w-2/6 md:w-1/2 w-full px-6">
              <h2 className="mb-[10px]  text-black text-[18px] font-bold select-none">
                Newsletter
              </h2>
              <nav className="list-none mb-10">
                <ul className="flex flex-col gap-[10px] text-black">
                  <p>
                    Subscribe to our newsletter to stay
                    <br /> up to date on everything SBX Money
                  </p>

                  <div>
                    <form>
                      <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none"></div>
                        <input
                          type="email"
                          id="default-search"
                          className="block w-full p-2 pl-10 text-sm text-gray-900 border  rounded-lg bg-white "
                          placeholder="Email..."
                          required
                        />
                        <button
                          type="submit"
                          className=" absolute right-3.5 bottom-1.5 border-2 border-[#2c6777] rounded-full p-0.5"
                        >
                          <BsSendFill size={15} color="#2c6777" />
                        </button>
                      </div>
                    </form>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-400">
        <div className="container mx-auto  py-2 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
          <p className="text-white  text-sm text-center font-semibold sm:text-left">
            Copyright © 2023 SBX Money ABN Number 20611064601
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer