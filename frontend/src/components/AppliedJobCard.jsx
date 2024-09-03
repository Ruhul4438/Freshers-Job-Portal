import React from 'react'
import { Badge } from './ui/badge'

function AppliedJobCard({appliedJob}) {
  return (
    <div className='' >
        <div className='py-2 flex justify-between items-center rounded-md border border-grey-800 bg-white ' >
            <div className='flex flex-col  sm:flex sm:justify-evenly sm:gap-2 md:gap-2 pl-5'>
            <h1>{appliedJob?.createdAt?.split("T")[0]}</h1>
            <h1>{appliedJob.job?.title}</h1>
            <h1>{appliedJob.job?.company?.name}</h1>
            </div>
            
            <div className='mr-12'>
            <Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge>
            </div>
            
        </div>
    </div>
  )
}

export default AppliedJobCard