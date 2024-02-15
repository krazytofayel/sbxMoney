import React from 'react'

const FAQ = () => {
  return (
    <>

      <section className="FAQ-section ">


        <div className=" lg:p-5">

          <h1 className="title-font text-[#2c6777] text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mt-12 mb-12 text-center">
            Frequently Asked Questions
          </h1>
          <div className="container mx-auto">



            <div className="grid grid-cols-12 gap-4  p-2">
              {/* large div */}
              <div className="col-span-12 lg:col-span-9 mb-6 lg:mb-0">
                {/* TODO */}

                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <div>



                  <div id="accordionFlushExample">
                    <div
                      class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                      <h2 class="mb-0" id="flush-headingOne">
                        <button
                          class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                          type="button"
                          data-te-collapse-init
                          data-te-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne">
                          Accordion Item #1
                          <span
                            class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-6 w-6">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="!visible border-0"
                        data-te-collapse-item
                        data-te-collapse-show
                        aria-labelledby="flush-headingOne"
                        data-te-parent="#accordionFlushExample">
                        <div class="px-5 py-4">
                          Placeholder content for this accordion, which is intended to
                          demonstrate the
                          <code>.accordion-flush</code> class. This is the first item's
                          accordion body.
                        </div>
                      </div>
                    </div>
                    <div
                      class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                      <h2 class="mb-0" id="flush-headingTwo">
                        <button
                          class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                          type="button"
                          data-te-collapse-init
                          data-te-collapse-collapsed
                          data-te-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo">
                          Accordion Item #2
                          <span
                            class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-6 w-6">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="!visible hidden border-0"
                        data-te-collapse-item
                        aria-labelledby="flush-headingTwo"
                        data-te-parent="#accordionFlushExample">
                        <div class="px-5 py-4">
                          Placeholder content for this accordion, which is intended to
                          demonstrate the
                          <code>.accordion-flush</code> class. This is the second item's
                          accordion body. Let's imagine this being filled with some actual
                          content.
                        </div>
                      </div>
                    </div>
                    <div
                      class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                      <h2 class="mb-0" id="flush-headingThree">
                        <button
                          class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                          type="button"
                          data-te-collapse-init
                          data-te-collapse-collapsed
                          data-te-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree">
                          Accordion Item #3
                          <span
                            class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="h-6 w-6">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="!visible hidden"
                        data-te-collapse-item
                        aria-labelledby="flush-headingThree"
                        data-te-parent="#accordionFlushExample">
                        <div class="px-5 py-4">
                          Placeholder content for this accordion, which is intended to
                          demonstrate the
                          <code>.accordion-flush</code> class. This is the third item's
                          accordion body. Nothing more exciting happening here in terms of
                          content, but just filling up the space to make it look, at least
                          at first glance, a bit more representative of how this would look
                          in a real-world application.
                        </div>
                      </div>
                    </div>
                  </div>



                </div>


              </div>
              {/* right side small dev */}
              <div className="col-span-12 lg:col-span-3" >
                <div className=" w-auto  border border-gray-200 rounded-lg bg-cover bg-center bg-hero-pattern shadow  ">
                  <div className="p-3  py-16">
                    <div className="text-center  w-full">
                      <h1 className="title-font text-white text-[28px]  title-font font-me  mb-4">
                        Any Question
                      </h1>
                      <p className="  mx-auto  font-normal   mb-4 text-white ">
                        Do you have questions? We have answers. Check the most frequently asked questions regarding Kick-Ass Seniors
                      </p>
                    </div>

                    <div className="flex justify-center ">
                      <a href="#"
                        className=" bg-[#2c6777] text-white no-underline hover:bg-[#4e84d4] mt-2  px-9 py-2 rounded-md    text-[16px] font-[500]"
                      >Ask Question</a>


                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </div>

      </section>
      {/* FAQ section end */}

    </>
  )
}

export default FAQ
