import React from 'react'
import Left_Div from './Admin_Dashboard_Home_Layout_Components/Left_Div/Left_Div'
import Right_Div from './Admin_Dashboard_Home_Layout_Components/Right_Div/Right_Div'
import Exchange_Rates from './Admin_Dashboard_Home_Layout_Components/Exchange_Rates/Exchange_Rates'
import Latest_Activity from './Admin_Dashboard_Home_Layout_Components/Latest_Activity/Latest_Activity'

const Admin_Dashboard_Home_Layout = () => {
  return (
 <>
<div>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="mt-2">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3">
          <div className="md:col-span-2">
            <Left_Div />
          </div>
          <div className="md:col-span-1">
            <Right_Div />
          </div>
        </div>
    
      </div>
    </div>
 </>
  )
}

export default Admin_Dashboard_Home_Layout
