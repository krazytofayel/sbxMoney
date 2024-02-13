import React from 'react'

const SBX_Mobile_App_Section = () => {
  return (
   <>
      <section class=" bg-[#CDFFDB] text-gray-600 body-font mt-20">

         
        <div class="container mx-auto grid md:grid-cols-2  items-center">
          <div
            class="">
            <h2
                class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
               Easy banking and Money 
                <span class="font-bold text-[#2DBE61]">Transfer on the SBX APP</span>
                <span class="text-xl font-semibold rounded-full text-blueGray-500">2.0</span>
              </h2>
            
            <div class="flex mt-10">
              <button class="bg-black rounded-lg text-white text-xs text-center self-center px-3  my-2 mx-2"><img src="./src/assets/Maskgroup1.png" alt="" /></button>
          <button class="bg-black rounded-lg text-white text-xs text-center self-center px-3 my-2 mx-2"><img src="./src/assets/Maskgroup2.png" alt="" /></button>
            </div>
          </div>
          <div class=" ">
            <h2 class="text-2xl font-extrabold leading-10 tracking-tight text-[#2DBE61] pt-10">Why Chose Us?</h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>
            <img class="object-cover object-center rounded mt-5 w-full  " alt="hero" src="./src/assets/Group1000003558.png"/>
          </div>
        </div>
      </section>
   
   </>
  )
}

export default SBX_Mobile_App_Section
