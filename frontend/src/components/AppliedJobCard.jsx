import React from 'react'
import { Badge } from './ui/badge'

function AppliedJobCard() {
  return (
    <div className='' >
        <div className='flex justify-between items-center rounded-md border border-grey-800 bg-white ' >
            <div className='flex flex-col  sm:flex sm:justify-evenly sm:gap-2 md:gap-2 pl-5'>
            <h1>12/4/2024</h1>
            <h1>Frontend Developer</h1>
            <h1>Amazon</h1>
            </div>
            
            <div className='mr-12'>
            <Badge className={'text-blue-700 font-bold'} variant= {"outline"}>Accepted</Badge>
            </div>
            
        </div>
    </div>
  )
}

export default AppliedJobCard