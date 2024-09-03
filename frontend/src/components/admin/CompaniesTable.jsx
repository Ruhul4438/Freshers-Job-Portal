import React, { useEffect, useState } from 'react'
import CompaniesCard from './CompaniesCard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CompaniesTable() {
  const { companies, searchCompanyByText } = useSelector(store => store.company);
  const [filterCompany, setFilterCompany] = useState(companies);
  const navigate = useNavigate();
  useEffect(()=>{
      const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
          if(!searchCompanyByText){
              return true
          };
          return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

      });
      setFilterCompany(filteredCompany);
  },[companies,searchCompanyByText])

  return (
    <div className='flex  flex-col gap-4 border border-blue-500'>
      {
      filterCompany.map((filtercompany, index) =>(
        <div key={filtercompany?._id}>
          <CompaniesCard companies={filtercompany}/>
        </div>
      ))
    }
            <h1 className=" border mx-auto mt-3 mb-3 text-gray-600 md:text-xl font-medium">A list of your recent registered companies</h1>

    </div>
  )
}

export default CompaniesTable