import { useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../../../../public/Logo.png'
import { motion } from 'framer-motion';
const NavBar = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/aboutus' },
    { name: 'Service', link: '/tutor_job' },
    { name: 'Contact', link: '/request_tutor' },
    { name: 'Request Money', link: '/find_tutor' },
  ];

  let [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <nav className="container mx-auto md:flex justify-between items-center text-black py-[18.5px] ">
          <div className="p-2 md:p-0 lg:p-0 ">

            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 100 }}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 2 }
              }}> <img src={navlogo} alt=" main logo" /></motion.div>


          </div>

          <motion.div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
            whileHover={{ scale: 1.1 }}
          >
            {open ? 'x' : '...'}
          </motion.div>

          <motion.ul
            className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-[#089bab] bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in-out ${open ? 'right-19' : 'hidden'
              }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 0.2 }}
          >
            {Links.map((link) => (
              <motion.li
                key={link.name}
                className="md:ml-4 md:text-[11px] truncate md:my-0 my-7 lg:text-lg relative group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-x-0 bottom-0 h-1 bg-black border-b border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                <Link to={link.link} className="duration-500 font-medium">
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
            <button className="bg-[#2c6777] text-white md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/sign_in">Sign in</Link>
            </button>
          </div>
        </nav>
      </div>
      <div></div>
    </>
  );
}

export default NavBar;