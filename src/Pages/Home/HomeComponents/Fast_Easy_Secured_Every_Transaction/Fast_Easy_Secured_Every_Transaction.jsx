import React from 'react'
import GlobalButton from '../../../../Components/ShareableComponents/GlobalComponents/GlobalButton/GlobalButton'

const Fast_Easy_Secured_Every_Transaction = () => {
  const handleButtonClick = () => {
    // Handle button click logic here
  };
  return (
    <>
      <section>
        <div className='container mx-auto mt-20'>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
            <div>
              <img src="/src/assets/Group1.png" alt="" />
            </div>
            <div>

              <div className=" lg:max-w-80 xl:max-w-[48rem]
                ">
                <h1 className="text-black text-center md:text-start lg:text-start text-[24px] xl:text-[50px] lg:text-[36px] md:text-[27px] title-font font-bold mb-4 ">
                  Fast, Easy and Secured in Every Transaction.
                </h1>

                <p className="leading-relaxed p-2 md:p-0 text-center md:text-start lg:text-start  xl:text-[20px] text-lg text-black mb-4 font-normal">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

              </div>
              {/*   global button here passing props to the button */}
              <div className='flex justify-center lg:justify-start'>

                <GlobalButton
                  onClick={handleButtonClick}
                  text="Join Now"
                  bgColor="bg-green-500"
                  hoverBgColor="red-500"
                  textColor="black"
                  hoverTextColor="white"
                />
              </div>
              <div>




              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Fast_Easy_Secured_Every_Transaction
