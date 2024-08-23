import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

//const randomJobs =[1,2,3,4,5,6,7,8]

function LatestJobs() {
  const {allJobs} = useSelector(store=>store.job)
  return (
    <div className='max-w-7xl mx-auto  p-3 border border-red-500 '>
        <h1 className='text-2xl font-bold sm:text-3xl mt-4 my-7'><span className='text-[#6A38C2]'>Latest & Top</span>Job Openings</h1>
        <div className='flex flex-wrap gap-10  border border-blue-500'>
            {
              allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)

            }
        </div>
    </div>
  )
}

export default LatestJobs