import React from 'react'
import Transfer_Ur_Money from './AboutUsComponents/Transfer_Ur_Money/Transfer_Ur_Money'
import Vision from './AboutUsComponents/Vision/Vision'
import Statistics from './AboutUsComponents/Statistics/Statistics'
import Foundation from './AboutUsComponents/Foundation/Foundation'
import Footer from '../../Components/ShareableComponents/Footer/Footer'
import AboutUs_Home_Banner from './AboutUsComponents/AboutUs_Home_Banner/AboutUs_Home_Banner'

const AboutUs = () => {
  return (
    <>

      <AboutUs_Home_Banner />
      <Transfer_Ur_Money />
      <Vision />
      <Statistics />
      <Foundation />
      <Footer />
    </>
  )
}

export default AboutUs
