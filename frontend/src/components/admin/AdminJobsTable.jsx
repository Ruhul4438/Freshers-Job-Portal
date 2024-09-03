import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdminJobsCard from './AdminJobsCard';
import { useSelector } from 'react-redux';

function AdminJobsTable() {
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();
    useEffect(() => {
     
        const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job)=>{
            if(!searchJobByText){
                return true
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
  
        });
        setFilterJobs(filteredJobs);
    },[allAdminJobs,searchJobByText])
  
  return (
    <div className='flex  flex-col gap-4 '>
    {
      filterJobs?.map((filterJobs, index) =>(
        <div key={filterJobs?._id}>
          <AdminJobsCard job={filterJobs}/>
        </div>
      ))
  }
  <h1 className="  mx-auto  mt-3 mb-3 text-gray-600 md:text-xl font-medium">
  A list of your recent  posted jobs
      </h1>
  </div>
  )
}

export default AdminJobsTable