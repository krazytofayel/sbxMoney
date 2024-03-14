

import React, { useState } from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { CiBadgeDollar } from "react-icons/ci";
import { IoPeopleOutline, IoStarOutline, IoHelpCircleOutline, IoLayersOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import DashBoard_Main_Layout from '../../../Components/ShareableComponents/DashBoard_Main_Layout/DashBoard_Main_Layout';
import Admin_Dashboard_Home_Layout from './Admin_Dashboard_Home_Layout/Admin_Dashboard_Home_Layout';
import Admin_Dashboard_All_Activity_Layout from './Admin_Dashboard_All_Activity_Layout/Admin_Dashboard_All_Activity_Layout';

const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Admin_Dashboard_Home_Layout />);

  // Function to handle item click
  const handleItemClick = (component) => {
    setSelectedComponent(component);
    //console.log(selectedComponent)
  };
  const items = [
    { label: 'DashBoard', link: '#', icon: <FiMessageCircle />, component: <Admin_Dashboard_Home_Layout /> },
    { label: 'All Activity', link: '#', icon: <IoCalendarOutline />,component:<Admin_Dashboard_All_Activity_Layout/> },
    { label: 'Payments', link: '#', icon: <CiBadgeDollar /> },

    { label: 'Reviews', link: '#', icon: <IoStarOutline /> },
    { label: 'FAQs', link: '#', icon: <IoHelpCircleOutline /> },
    { label: 'Resources', link: '#', icon: <IoLayersOutline /> },
    { label: 'Profile Details', link: '#', icon: <IoPersonOutline /> },
    { label: 'Settings', link: '#', icon: <IoSettingsOutline /> },
  ];


  return (
    <>





      <DashBoard_Main_Layout items={items} onItemClick={handleItemClick} />

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 h-full border-gray-200 shadow-lg border-dashed rounded-lg dark:border-gray-700 mt-14">

          {selectedComponent}










        </div>
      </div>



    </>
  )
}

export default Admin

