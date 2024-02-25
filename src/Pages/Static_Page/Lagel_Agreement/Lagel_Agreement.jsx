import React from 'react'
import Footer from '../../../Components/ShareableComponents/Footer/Footer'
import Neumorphism_Text_Header from '../Static_Page_Components/Neumorphism_Text_Header/Neumorphism_Text_Header'

const Lagel_Agreement = () => {
  return (
    <>


      <section>
        <div>
          <div className='flex justify-center align-middle items-center bg-[#CDFFDB] h-[30rem] mb-5'>
            <div>
              <Neumorphism_Text_Header text="Lagel Agreement" />
              <p className='d-block max-w-2xl text-center max-h-36'>All Rights Reserved The SBX Money name, logo and related trademarks and service marks, owned by The SBX Money Company, are registered and used in Australia and many foreign countries. All other trademarks, service marks, and trade names referenced in this site are the property of their respective owners.</p>

            </div>
          </div>
          <div>
            <div className='text container mx-auto mt-16 mb-16'>


              <p className='font-semibold mt-2 mb-2'>ANY USE, COPYING, OR REPRODUCTION OF THE SBX Money TRADEMARKS OR LOGOS CONTAINED IN THIS SITE, WITHOUT PRIOR WRITTEN PERMISSION OF SBX Money, IS STRICTLY PROHIBITED.</p>






            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>
  )
}

export default Lagel_Agreement
