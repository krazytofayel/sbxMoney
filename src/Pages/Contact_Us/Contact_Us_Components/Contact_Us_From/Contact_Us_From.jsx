import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci"
const Contact_Us_From = () => {
  return (
   <>
      <div class="relative isolate bg-white" id='Us'>
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
            <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div
                class="absolute inset-y-0 left-0 -z-10 w-full rounded shadow-lg overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  class="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true">
                  <defs>
                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1"
                      patternUnits="userSpaceOnUse">
                      <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" stroke-width="0" fill="white"></rect><svg x="100%" y="-1"
                    class="overflow-visible fill-gray-50">
                    <path d="M-470.5 0h201v201h-201Z" stroke-width="0"></path>
                  </svg>
                  <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
                </svg>
              </div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
              <p class="mt-6 text-lg leading-8 text-gray-600">Feel free to reach out to us for any inquiries or assistance.
                We're here to help!</p>
              <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div class="flex gap-x-4">
                  {/* <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true" class="h-7 w-6 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                      </path>
                    </svg>
                  </dt> */}
                  <ul class="mt-3">
                    <li class="flex items-center">
                      <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <LuMail/>
                      </div>
                      <a target="blank" href="#" class="text-[#9fadbd] text-sm ml-3">
                        <strong class="block">info@sbxmoney.com.au</strong>
                        <strong>shafique@sbxmoney.com.au</strong>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="flex gap-x-4">
                  {/* <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" aria-hidden="true" class="h-7 w-6 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                      </path>
                    </svg>
                  </dt> */}
                  <ul class="mt-3">
                    <li class="flex items-center">
                      <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <FiPhoneCall/>
                      </div>
                      <a target="blank" href="#" class="text-gray-400 text-sm ml-3">
                        <strong class="block">(+614) 03034223</strong>
                        <strong>(+612) 9758 0094</strong>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="flex gap-x-4">
                  <ul class="mt-3">
                    <li class="flex items-center">
                      <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                       <CiLocationOn/>
                      </div>
                      <dd> 48 Railway Pde Lakemba, NSW-2195, Australia.</dd>
                    </li>
                  </ul>
                  
                </div>
              </dl>
            </div>
          </div>
          <form class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
            <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                  <div class="mt-2.5">
                    <input type="text" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="firstName"/>
                  </div>
                </div>
                <div>
                  <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                  <div class="mt-2.5">
                    <input type="text" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="lastName"/>
                  </div>
                </div>
                <div >
                  <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                  <div class="mt-2.5">
                    <input type="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email"/>
                  </div>
                </div>
                <div >
                  <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Phone</label>
                  <div class="mt-2.5">
                    <input type="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                  <div class="mt-2.5">
                    <textarea id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="message"></textarea>
                  </div>
                </div>
              </div>
              <div class="mt-8 flex justify-end">
                <button type="submit" class="w-max  rounded-2xl border-2 border-0 bg-[#579c9c]  px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-blue-400">Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div></>
  )
}

export default Contact_Us_From
