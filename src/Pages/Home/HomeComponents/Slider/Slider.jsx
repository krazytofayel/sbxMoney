import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {motion} from 'framer-motion'
//import './style.css'





const Slider = () => {

  return (
    <div className="container mx-auto mt-20 mb-20">
         <div className="relative container flex flex-col justify-center items-center  px-4 mx-auto md:flex-row sm:px-6 ">
          <div className="flex justify-center md:mb-16 md:py-5 max-w-2xl md:p-8 ">
            <motion.div initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }} className="text-left">
              {/* <h2
                className="text-3xl font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-4xl max-w-lg">
              Join our Satisfied
                <span className="font-bold text-[#2DBE61] transition-all duration-1000 animate-pulse"> Customer</span>
         
              </h2> */}
                  <p className="font-bold text-2xl md:text-4xl">
                  Join our Satisfied 
                 <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current transition-all duration-1000 animate-pulse">
                    <span className="inline-block animate-bounce">
                      Customer
                    </span>
                     {/* <span className="text-xl font-semibold rounded-full text-blueGray-500">2.0</span> */}
                    <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                    </svg>
                  </span>

                </p>

            </motion.div>
          </div>
          {/* <motion.div initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="text-left">
            <h2 className="text-2xl font-extrabold leading-10 tracking-tight text-[#2DBE61] ">Why Chose Us?</h2>
            <p className="max-w-md mx-auto  text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>

          </motion.div> */}
        </div>

      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]} effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"

      >


        <SwiperSlide>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
         <div className='h-16 w-16 p-1 border-2 rounded-full mx-auto'>
          <img src="/public/profile1.jpg" className='h-full w-100% object-cover rounded-full' alt="" />
            
         </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Michel jonson</h5>
            </a>
            <p className="mb-2 text-start font-normal text-gray-600 ">Very comprehensive lessons, this is underrated. I hope other learners know about this.</p>

          </div>

        </SwiperSlide>
            <SwiperSlide>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
         <div className='h-16 w-16 p-1 border-2 rounded-full mx-auto'>
          <img src="/public/profile1.avif" className='h-full w-100% object-cover rounded-full' alt="" />
            
         </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Michel jonson</h5>
            </a>
            <p className="mb-2 text-start font-normal text-gray-600 ">Very comprehensive lessons, this is underrated. I hope other learners know about this.</p>

          </div>

        </SwiperSlide>
            <SwiperSlide>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
         <div className='h-16 w-16 p-1 border-2 rounded-full mx-auto'>
          <img src="/public/profile2.avif" className='h-full w-100% object-cover rounded-full' alt="" />
            
         </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Michel jonson</h5>
            </a>
            <p className="mb-2 text-start font-normal text-gray-600 ">Very comprehensive lessons, this is underrated. I hope other learners know about this.</p>

          </div>

        </SwiperSlide>
            <SwiperSlide>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
         <div className='h-16 w-16 p-1 border-2 rounded-full mx-auto'>
          <img src="/public/profile3.avif" className='h-full w-100% object-cover rounded-full' alt="" />
            
         </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Michel jonson</h5>
            </a>
            <p className="mb-2 text-start font-normal text-gray-600 ">Very comprehensive lessons, this is underrated. I hope other learners know about this.</p>

          </div>

        </SwiperSlide>
           <SwiperSlide>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
         <div className='h-16 w-16 p-1 border-2 rounded-full mx-auto'>
          <img src="/public/profile4.avif" className='h-full w-100% object-cover rounded-full' alt="" />
            
         </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Michel jonson</h5>
            </a>
            <p className="mb-2 text-start font-normal text-gray-600 ">Very comprehensive lessons, this is underrated. I hope other learners know about this.</p>

          </div>

        </SwiperSlide>    <SwiperSlide>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
         <div className='h-16 w-16 p-1 border-2 rounded-full mx-auto'>
          <img src="/public/profile5.avif" className='h-full w-100% object-cover rounded-full' alt="" />
            
         </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Michel jonson</h5>
            </a>
            <p className="mb-2 text-start font-normal text-gray-600 ">Very comprehensive lessons, this is underrated. I hope other learners know about this.</p>

          </div>

        </SwiperSlide>    <SwiperSlide>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
         <div className='h-16 w-16 p-1 border-2 rounded-full mx-auto'>
          <img src="/public/profile1.avif" className='h-full w-100% object-cover rounded-full' alt="" />
            
         </div>
            <a href="#">
              <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">Michel jonson</h5>
            </a>
            <p className="mb-2 text-start font-normal text-gray-600 ">Very comprehensive lessons, this is underrated. I hope other learners know about this.</p>

          </div>

        </SwiperSlide>






        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;