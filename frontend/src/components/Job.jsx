import React from 'react'
import { Button } from './ui/button'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'

function Job() {
  return (
    <div className=' p-5 rounded-xl shadow-xl bg-white border border-gray-300 my-2'>
      <p className='pb-3 text-sm text-gray-700 '>2 days ago</p>
      <div className='flex items-center gap-4'>
      <Button variant="outline" className="rounded-full" size="icon">
        <Avatar >
          <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"/>
        </Avatar>
      </Button>
      <div>
        <h1>Company Name</h1>
        <p>India</p>
      </div>
      
      </div>
      <div>
        <h1 className="text-xl font-medium pt-1 pb-2">Title</h1>
        <p className='text-sm text-gray-900 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus, culpa sapiente libero praesentium consectetur mollitia veritatis iure, sequi voluptas molestias ipsam, commodi necessitatibus corrupti expedita blanditiis distinctio repellendus magnam!</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant= {"outline"}>12 Position</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant= {"outline"}>Full Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant= {"outline"}>5 LPA</Badge>
        </div>
        <div className='mt-4'>
          <Button >Details</Button>
        </div>
      
    </div>
  )
}

export default Job