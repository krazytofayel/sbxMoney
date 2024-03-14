import { useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../../../../public/Logo.png'
import { motion } from 'framer-motion';
const NavBar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Service', link: '/' },
    { name: 'Contact US', link: '/contactus' },
{ name: 'Dashboard', link: '/dashboard' },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="container mx-auto md:flex justify-between items-center text-black py-[18.5px] p-5 ">
          <div className="p-2 md:p-0 lg:p-0 ">

            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1, }}
              transition={{
                ease: "linear",
                duration: 2,

              }}> <img src={navlogo} alt=" main logo" className='h-10' /></motion.div>


          </div>

          <motion.div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
            whileHover={{ scale: 1.1 }}
          >
            {open ? 'x' : '...'}
          </motion.div>

          <motion.ul
            className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-gray-600 bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 gap-5 transition-all duration-500 ease-in-out ${open ? 'right-19' : 'hidden'
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 2 }}
          >
            {Links.map((link) => (
              <motion.li
                key={link.name}
                className="md:ml-4 md:text-[11px] truncate md:my-0 my-7 lg:text-lg relative group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-x-0 bottom-0 h-.5 bg-[#089bab] border-b border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                <Link to={link.link} className="duration-500 font-bold">
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="md:hidden my-3 truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="login">Login</Link>
            </motion.li>
            <motion.li
              className="md:hidden truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="signup">Create An Account</Link>
            </motion.li>
          </motion.ul>

          <div className={`hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ${open ? 'right-19' : 'hidden'}`}>
            <button className="bg-[#d6e5f1] text-[#2c6777] md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/becomea_tutor">Send Money</Link>
            </button>
            <button className="bg-green-500 text-white md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/sign_in">Sign in</Link>
            </button>
          </div>
        </nav>
      </div>
      <div>

      </div>
      {/* 

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 */}
    </>
  );
}

export default NavBar;