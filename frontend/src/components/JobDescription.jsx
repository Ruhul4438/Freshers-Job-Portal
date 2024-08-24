import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import Navbar from "./shared/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChair, faClock, faClockRotateLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Avatar, AvatarImage } from "./ui/avatar";

function JobDescription() {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  const isIntiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true); // Update the local state
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          ); // Ensure the state is in sync with fetched data
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
}

  return (
    <div>
      <Navbar />
      <div className=" max-w-full sm:max-w-7xl mx-auto mt-10 border border-blue-600 mb-5">
        <h1 className="flex justify-start pl-4 sm:pl-0 sm:justify-center text-2xl sm:text-3xl font-medium">
          {singleJob?.title} {singleJob?.category}
        </h1>
      </div>
      <div className="bg-white mt-2 w-[95%] sm:w-7xl md:w-[95%] lg:max-w-6xl mx-auto pl-3 sm:pl-4 rounded-md border border-gray-500 ">
        <div className=" pb-3">
          <div>
            <div className="flex justify-between items-center border border-blue-500 sm:pb-8">
              <div>
              <h1 className="text-xl sm:text-2xl font-medium text-gray-700 border  ">{singleJob?.title}</h1>
              <h1 className=" text-sm sm:text-base font-medium text-gray-500 ">{singleJob?.company.name}</h1>
              </div>
              <Button variant="outline" className="rounded-full " size="icon">
        <Avatar className="w-10 h-10 mt-1 sm:w-16 sm:h-16 mr-7 sm:mt-11 sm:mb-3" >
          <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"/>
        </Avatar>
      </Button>
              
            </div>

            <div className=" flex flex-wrap items-center gap-4 mt-7 border border-gray-500 mb-5 ">
            <div className=" ">
            <h1 className="text-sm sm:text-md font-medium text-gray-600 border">
            <FontAwesomeIcon icon={faChair} className="mr-2 text-black " />
              POSITIONS</h1>
              <div className=" flex  "><span className="text-sm mx-auto">
                {singleJob?.position} 
              </span></div>
              
            </div>
              <div className="mx-2 sm:mx-6">
                <h1 className="text-sm  font-medium text-gray-600">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-black " />
                  DURATION</h1>
              <div className="flex"><span className="text-sm  mx-auto">
                {singleJob?.jobType}
              </span></div>
              </div>
             <div>
             {(singleJob?.category) == "Internship"? <h1 className="text-sm sm:text-md font-medium text-gray-600">
              <FontAwesomeIcon icon={faMoneyBill} className="mr-2 text-black " />
              STRIPENT</h1> : <h1 className="text-sm sm:text-md font-medium text-gray-600">
              <FontAwesomeIcon icon={faMoneyBill} className="mr-2 text-black " />
                SALARY</h1>}
             
             <div className="flex">
             {(singleJob?.category) == "Internship"? <span className="text-sm  mx-auto" >{singleJob?.salary} /month</span> : <span className="text-sm  mx-auto">{singleJob?.salary} LPA</span>}
             </div>
           
             </div>
             <div className=" sm:mx-6">
                <h1 className="text-sm  font-medium text-gray-600">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-black " />
                  LOCATION</h1>
              <div className="flex"><span className="text-sm  mx-auto">
                {singleJob?.location}
              </span></div>
              </div>
              
             
            </div>
            <span className="text-xs rounded-xl  px-3 py-1 bg-[#DAF7A6]">
              <FontAwesomeIcon icon={faClockRotateLeft} className="mr-2 text-black " />
              {daysAgoFunction(singleJob?.createdAt) === 0 ? "Posted Today" : `Posted ${daysAgoFunction(singleJob?.createdAt)} days ago`}
              </span>

              <div className=" flex  items-center gap-4 mt-4 border border-gray-500 mb-5">
               <div className="border border-red-400">
               <h1 className="text-sm  font-medium text-gray-600 border">
                <FontAwesomeIcon icon={faUserGroup} className="mr-2 text-black " />
                  TOTAL APPLICANTS</h1>
              <div className="flex"><span className="text-sm  mx-auto">
              {singleJob?.applications?.length}
              </span></div>
               </div>
              </div>
          </div>
          
        </div>
        <div className="border flex mb-3 mt-1">
          <div className="mx-auto">
          <Button 
                onClick={isApplied ? null : applyJobHandler}
                disabled={isApplied}
                className={`text-xs  rounded-lg  ${
                  isApplied
                    ? "mr-4 bg-gray-600 cursor-not-allowed px-1 sm:px-3"
                    : " bg-[#7209b7] hover:bg-[#5f32ad] px-2 sm:px-4"
                }`}
              >
                {isApplied ? "Already Applied" : "Apply Now"}
              </Button>
          </div>
          </div>
      </div>

      <div className="bg-white mt-2 w-[95%] sm:w-7xl md:w-[95%] lg:max-w-6xl mx-auto pl-3 sm:pl-4 rounded-md border border-gray-500 mb-4">
        <div className=" my-4 pr-5 flex flex-col ">
          <h1 className="text-xl font-medium pt-2 pb-1 text-gray-500 ">
            Job Description
          </h1>
          <div className="mb-2 flex flex-col text-lg justify-center">
            <h1 className="font-bold  my-1">Role:</h1>
            <h1 className=" font-normal text-gray-800">{singleJob?.title}</h1>
          </div>
          <div className="mb-2 flex flex-col text-lg justify-center">
            <h1 className="font-bold my-1">Type:</h1>

            <h1 className=" font-normal text-gray-800">
              {singleJob?.category}
            </h1>
          </div>

          <div className="mb-2 flex flex-col text-lg justify-center">
            <h1 className="font-bold my-1">Description:</h1>
            <h1 className=" font-normal text-gray-800">
              {singleJob?.description}
            </h1>
          </div>
          <div className="mb-2 flex flex-col text-lg justify-center">
            <h1 className="font-bold my-1">Experience:</h1>
            <h1 className=" font-normal text-gray-800">
              {singleJob?.experienceLevel}
            </h1>
          </div>
          <div className="mb-2 flex flex-col text-lg justify-center">
            <h1 className="font-bold my-1">Skills:</h1>
           <div className="flex gap-3">
           {singleJob?.requirements.map((item,index) =><span key={index} className=" font-normal rounded-md border px-2 text-gray-800 bg-gray-300">
              {item}
              </span>)}
           </div>
            
          </div>
        
          
          <div className="mb-2 flex flex-col text-lg justify-center ">
            <h1 className="font-bold my-1">Posted Date:</h1>

            <h1 className=" font-normal text-gray-800">
              {singleJob?.createdAt.split("T")[0]}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
