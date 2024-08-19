import React from 'react'
import LatestJobCards from './LatestJobCards'

const randomJobs =[1,2,3,4,5,6,7,8]

function LatestJobs() {
  return (
    <div className='max-w-7xl mx-auto  p-3 '>
        <h1 className='text-2xl font-bold sm:text-3xl mt-4 my-7'><span className='text-[#6A38C2]'>Latest & Top</span>Job Openings</h1>
        <div className='flex flex-wrap gap-10 '>
            {
                randomJobs.slice(0,6).map((item, index)=> <LatestJobCards/>)
            }
        </div>
    </div>
  )
}

export default LatestJobs