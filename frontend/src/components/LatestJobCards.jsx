import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCards({job}) {
  return (
    <div className='p-5 rounded-xl shadow-xl bg-white border border-grey w-full sm:w-[370px] md:w-[45%] cursor-pointer '>
        <div >
        <h1>{job?.company?.name}</h1>
        <p>{job?.location}</p>
        </div>
        <div>
            <h1 className='text-xl font-medium pt-1 pb-2'>{job?.title}</h1>
            <p>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant= {"outline"}>{job?.position} Position</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant= {"outline"}>{job?.jobType}</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant= {"outline"}>{job?.salary} LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards