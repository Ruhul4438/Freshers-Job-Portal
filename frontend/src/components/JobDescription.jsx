import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";

function JobDescription() {
  const {singleJob} = useSelector(store => store.job);
  const {user} = useSelector(store => store.auth);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch()
  const isApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;

  useEffect(()=>{
    const fetchSingleJob = async () => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
            if(res.data.success){
                dispatch(setSingleJob(res.data.job));
                
            }
        } catch (error) {
            console.log(error);
        }
    }
    fetchSingleJob(); 
},[jobId,dispatch, user?._id]);

  return (
    <div>
      <div className="max-w-full sm:max-w-7xl mx-auto mt-10 border border-blue-600 mb-5">
        <h1 className="flex justify-start pl-4 sm:pl-0 sm:justify-center text-2xl sm:text-3xl font-medium">
        {singleJob?.title} Jobs
        </h1>
      </div>
      <div className="bg-white mt-2 w-[95%] sm:w-7xl md:w-[95%] lg:max-w-6xl mx-auto pl-3 sm:pl-4 rounded-md border border-gray-500 ">
        <div className=" pb-3">
          <div>
            <div className="flex justify-between items-center border border-blue-500">
              <h1 className=" text-xl ">{singleJob?.title}</h1>
              <Button
                disabled={isApplied}
                className={`text-xs mr-4 rounded-lg ${
                  isApplied
                    ? "mr-4 bg-gray-600 cursor-not-allowed "
                    : " bg-[#7209b7] hover:bg-[#5f32ad]"
                }`}
              >
                {isApplied ? "Already Applied" : "Apply Now"}
              </Button>
            </div>

            <div className=" flex items-center gap-2 mt-4 border border-gray-500">
              <span className="text-xs rounded-xl border border-gray-600 px-1">
              {singleJob?.postion} Positions
              </span>
              <span className="text-xs rounded-xl border border-gray-600 px-1">
              {singleJob?.jobType}
              </span>
              <span className="text-xs rounded-xl border border-gray-600 px-1">
              {singleJob?.salary} LPA
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-2 w-[95%] sm:w-7xl md:w-[95%] lg:max-w-6xl mx-auto pl-3 sm:pl-4 rounded-md border border-gray-500 mb-4">
        <div className=" my-4 pr-5 flex flex-col ">
          <h1 className="text-md font-medium pt-2 pb-1 text-gray-500 ">Job Description</h1>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Role:</h1>
            <h1 className=" font-normal text-gray-800">
              {singleJob?.title}
            </h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Location:</h1>
            
            <h1 className=" font-normal text-gray-800">{singleJob?.location}</h1>
          </div>

          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Description:</h1>
            <h1 className=" font-normal text-gray-800">
            {singleJob?.description}
            </h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Experience:</h1>
            <h1 className=" font-normal text-gray-800">{singleJob?.experienceLevel}</h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Salary:</h1>

            <h1 className=" font-normal text-gray-800">{singleJob?.salary} LPA</h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Total Applicants:</h1>
            <h1 className=" font-normal text-gray-800">{singleJob?.applications?.length}</h1>
          </div>
          <div className="mb-2 flex flex-col justify-center ">
            <h1 className="font-bold my-1">Posted Date:</h1>
            
            <h1 className=" font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
