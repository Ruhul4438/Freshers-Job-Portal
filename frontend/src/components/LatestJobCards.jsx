import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCards() {
  return (
    <div className='p-5 rounded-xl shadow-xl bg-white border border-grey w-full sm:w-[370px] '>
        <div >
        <h1>Company Name</h1>
        <p>India</p>
        </div>
        <div>
            <h1>Job Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fuga accusamus quam cum ipsam distinctio at. Veritatis voluptatem cupiditate quia. Similique vitae temporibus laudantium ducimus sapiente iure aliquam iusto quibusdam.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant= {"outline"}>12 Position</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant= {"outline"}>Full Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant= {"outline"}>5 LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards