import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import Footer from '../shared/Footer'

function Companies() {
  useGetAllCompanies()
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchCompanyByText(input));
},[input]);

  return (
    <div>
      <Navbar />
            <div className='min-h-screen max-w-[90%] sm:max-w-[75%] md:max-w-[75%] lg:max-w-[64%] xl:max-w-[64%] 2xl:max-w-[60%] mx-auto my-10 rounded-lg '>
                <div className='flex items-center justify-between my-5'>
                    <div className=' '>
                    <Input
                        className="max-w-[67%] md:max-w-fit text-xs sm:text-sm md:text-base"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    </div>
                    
                    <Button className="text-xs sm:text-sm md:text-base" onClick={() => navigate("/admin/companies/create")}>New Company</Button>
                    </div>
               
                <CompaniesTable/>
            </div>
            <Footer/>
      </div>
  )
}

export default Companies