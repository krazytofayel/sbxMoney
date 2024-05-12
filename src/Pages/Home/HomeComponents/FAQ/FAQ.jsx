import React, { useState } from 'react'
import Accordion from './FAQ_Components/Accordion/Accordion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>

      <section className="FAQ-section ">


        <div className=" lg:p-5">

          {/* <h1 className="title-font text-[#2c6777] text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mt-12 mb-12 text-center">
            Frequently Asked Questions
          </h1> */}
                <h2
              className="text-2xl text-center  font-extrabold leading-10 tracking-tight text-gray-800  sm:leading-none md:text-5xl mt-10 mb-10">
             Frequently Asked
              <span className="font-bold text-[#2DBE61]"> Questions</span>
            
            </h2>
          <div className="container mx-auto">



            <div className="grid grid-cols-12 gap-4  p-2">
              {/* large div */}
              <div className="col-span-12 lg:col-span-9 mb-6  lg:mb-0">


                <div>



                  <Accordion
                    title="Is it safe to send money through your company? "
                    content="A big YES, safety and security are our top priorities. We employ advanced encryption technologies and strict security protocols to protect your personal and financial information. Additionally, we're fully licensed and regulated by relevant government authorities, ensuring compliance with all applicable laws and regulations."
                    index={0}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                  <Accordion
                    title="Can I send money to a bank account? "
                    content=" We offer a bank deposit option, allowing you to choose the most convenient method for your recipient. For bank deposits, you'll need to provide the recipient's bank account details, and the funds will be directly credited to their account."
                    index={1}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                     <Accordion
                    title=" How quickly do money transfers get delivered?"
                    content=" Money transfer times vary based on the recipient country and service type chosen. While our standard service delivers funds within 1-2 business days to major destinations, we also provide an express option for quicker 24-hour or same-day delivery in certain cases."
                    index={2}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />
                     <Accordion
                    title="What are the fees for sending and transferring money?"
                    content="Our fees for money transfers are competitive and transparent. The exact fee depends on the amount you're sending and the destination country."
                    index={3}
                    openIndex={openIndex}
                    setOpenIndex={setOpenIndex}
                  />



                </div>


              </div>
              {/* right side small dev */}
              <div className="col-span-12 lg:col-span-3" >
                <div className=" w-auto h-[18rem]  border border-gray-200 rounded-lg bg-cover bg-center bg-hero-pattern shadow  ">
                  <div className="p-3  ">
                    <div className="text-center max-w-sm  ">
                      <h1 className="title-font text-white text-[28px]  title-font font-me  mb-4">
                        Any Question
                      </h1>
                      <p className="  mx-auto  font-semibold   text-black ">
                       Don't see the answer you need? ask other questions, and our customer service team will be in touch with you shortly. 
                      </p>
                    </div>

                    <div className="flex justify-center mt-16 ">
                      <a href="#"
                        className=" bg-green-500 text-white no-underline hover:bg-green-500 mt-2  px-9 py-2 rounded-md    text-[16px] font-[500]"
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
