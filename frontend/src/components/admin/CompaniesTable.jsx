import React from 'react'
import CompaniesCard from './CompaniesCard'
import { useSelector } from 'react-redux';

function CompaniesTable() {
  const { companies } = useSelector(store => store.company);
  return (
    <div className='flex  flex-col gap-4 border border-blue-500'>
      {
      companies.map((company, index) =>(
        <div key={company?._id}>
          <CompaniesCard companies={company}/>
        </div>
      ))
    }
    </div>
  )
}

export default CompaniesTable