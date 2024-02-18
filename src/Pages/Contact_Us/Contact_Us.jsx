import React from 'react'
import Contact_Us_From from './Contact_Us_Components/Contact_Us_From/Contact_Us_From'
import Contact_Us_Address_Card from './Contact_Us_Components/Contact_Us_Address_Card/Contact_Us_Address_Card'
import Contact_Us_Home_Banner from './Contact_Us_Components/ConTact_Us_Home_Banner/Contact_Us_Home_Banner'
import Footer from '../../Components/ShareableComponents/Footer/Footer'

const Contact_Us = () => {
  return (
  <>
  <Contact_Us_Home_Banner/>
 <Contact_Us_From/>
 <Contact_Us_Address_Card/>
 <Footer/>
  </>
  )
}

export default Contact_Us
