import React from 'react'
import AppliedJobCard from './AppliedJobCard'

function AppliedJobTable() {
  return (
    <div className='flex  flex-col gap-2'>
      {
      [1,2,3].map((item, index) =>(
        <AppliedJobCard/>
      ))
    }
    </div>
  )
}

export default AppliedJobTable