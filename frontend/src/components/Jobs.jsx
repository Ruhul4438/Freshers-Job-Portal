import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[92%]  md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto  flex flex-col   md:flex-row border border-red-500">
        {/* Filter card */}
        <div className=" md:w-[32%] border border-green-500">
        <div className="sticky top-5">
        <FilterCard />
      </div>
        </div>
        
        {/* Jobs listing */}
        <div className="md:w-[70%] border border-blue-500">
        {
        jobsArray.length <= 0 ? <span>Job not found</span> :(
          <div className="flex-1  pb-5">
  <div className="flex flex-col">
    {
      jobsArray.map((item, index) =>(
        <Job/>
      ))
    }
  </div>
          </div>
       
        )}
        </div>
       
      </div>
      
    </div>
  );
}

export default Jobs;
