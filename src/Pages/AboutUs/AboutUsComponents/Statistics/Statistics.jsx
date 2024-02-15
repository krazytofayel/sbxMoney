import React from 'react'
import { FaCalendarAlt, FaDownload, FaFileSignature, FaUserTie, FaUserCog } from 'react-icons/fa';

import AnimatedStatsCard from './AnimatedStatsCard/AnimatedStatsCard';
const Statistics = () => {
  return (
    <>
      <div className='bg-transparent '>
        <h2 className=' text-3xl font-bold tracking-tight text-gray-700 max-w-lg text-center mx-auto sm:text-4xl p-5 mb-3 mt-10'>We care for you and so we always improve</h2>
        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-5 gap-4 mb-10 mt-5">
            <AnimatedStatsCard title="Download" value="1000" icon={<FaDownload className="text-white" />} />
            <AnimatedStatsCard title="Feedback" value="500" icon={<FaFileSignature className="text-white" />} />
            <AnimatedStatsCard title="Worker" value="300" icon={<FaUserTie className="text-white" />} />
            <AnimatedStatsCard title="Year Of Experience" value="500" icon={<FaCalendarAlt className="text-white" />} />
            <AnimatedStatsCard title="Contributer" value="300" icon={<FaUserCog className="text-white" />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Statistics
