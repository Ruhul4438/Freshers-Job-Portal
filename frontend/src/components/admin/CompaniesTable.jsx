import React from 'react'
import CompaniesCard from './CompaniesCard'

function CompaniesTable() {
  return (
    <div className='flex  flex-col gap-4 border border-blue-500'>
      {
      [1,2,3].map((item, index) =>(
        <CompaniesCard/>
      ))
    }
    </div>
  )
}

export default CompaniesTable