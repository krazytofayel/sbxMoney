
import { Link } from "react-router-dom";
import ParticlesBg from "../Particles/Particles";
import signinimg from '../../../../public/aud.avif'
import Particless from "../Particles/Particles";
import logoimg from '../../../../public/Logo.png'



const Login_Form = () => {



  return (
    <>

      <section className="min-h-screen flex items-stretch text-black ">
          
                <div
                    className="lg:flex z-10  w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center text-white"
                     style={{ backgroundImage: `url(${signinimg})` }}
                  
                >
                       {/* <Particless/> */}
                    <div className="absolute bg-black opacity-20  inset-0 z-0"></div>
                 
                </div>
            
                <div className="lg:w-1/2 w-full flex items-center justify-center text-center xl:px-16 md:px-6 px-0 z-0 bg-[#f5f4ef]">
                    {/* <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: `url(${signinimg})` }}>
                        <div className="absolute bg-black opacity-60 inset-0 z-0 line18 z-0"></div>
                    </div> */}
                    <div className="w-full py-6 pb-10 z-20 ">
                        <div className=" my-6 flex justify-center   ">
                            <img src={logoimg} alt=" tutor2u logo" className="  " />
                        </div>
                        <h1 className="text-[#2C6777] lg:text-3xl text-[26px] font-semibold mb-4">
                            Sign In Your Account
                        </h1>

                        <p className="text-[#2C6777]">Sign in or Log in to your account</p>
                        <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            <div className="pb-2 pt-4 ">
                                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Your email address here"
                                    className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                                />
                            </div>
                            <div className="pb-2 pt-4">
                                <label className="block mb-2 text-lg font-bold text-[#2C6777] text-start ml-2 ">
                                    Password
                                </label>
                                <input
                                    className="block w-full p-3 text-[16px] rounded-lg bg-[#d2e4e9]"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter a strong password"
                                />
                            </div>

                            <div className="flex flex-wrap  justify-between">
                                <div className="  lg:mt-0 mt-2 flex items-start mb-2 lg:w-1/2 md:w-2/3 w-full ">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4  bg-[#2C6777] border-[#2C6777] rounded  "
                                    />
                                    <label
                                        htmlFor="checkbox-1"
                                        className="ml-2 text-sm font-medium text-[#2C6777]"
                                    >
                                        Remember me
                                        
                                    </label>
                                </div>
                                <div className="lg:text-right  text-start text-[#2C6777] font-medium hover:underline hover:text-[#22454e] lg:w-1/2 md:w-1/3 w-full">
                                    <a href="#">Forget Password</a>
                                </div>
                            </div>
                            <p className="mt-4 "> Or Continue With </p>
                            <div className="py-4  space-x-2">
                                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                                    f
                                </span>
                                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                                    G+
                                </span>
                                <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-[#2C6777] text-[#2C6777]">
                                    in
                                </span>
                            </div>
                            <div className=" pb-2 pt-4 ">
                                <button className="uppercase block w-full p-4 text-lg text-white  font-bold rounded-lg bg-[#2C6777] hover:bg-[#3f98b1]">
                                    Sign IN
                                </button>
                            </div>
                            <p className=" mt-2 mb-2">Don't have an account yet? <Link to="/sign_up" className="text-[#2C6777] font-medium">Sign up</Link> </p>
                        
                       
                         
                        </form>
                    </div>
                </div>
            </section>
    </>
  );
};

export default Login_Form;