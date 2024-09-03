import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchJobByText } from '@/redux/jobSlice'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import Footer from '../shared/Footer'


function AdminJobs() {
    useGetAllAdminJobs()
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(setSearchJobByText(input));
  },[input]);

  return (
    <div>
        <Navbar />
            <div className='min-h-screen max-w-[90%] sm:max-w-[75%] md:max-w-[75%] lg:max-w-[64%] xl:max-w-[64%] 2xl:max-w-[60%] mx-auto my-10 '>
                <div className='flex items-center justify-between my-5'>
                    <div className='border '>
                    <Input
                        className="max-w-[67%] md:max-w-fit text-xs sm:text-sm md:text-base"
                        placeholder="Filter by name and role"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    </div>
                    
                    <Button className="text-xs sm:text-sm md:text-base" onClick={() => navigate("/admin/jobs/create")}>New Job</Button>
                    </div>
               
                <AdminJobsTable/>
            </div>
            <Footer/>
    </div>
  )
}

export default AdminJobs