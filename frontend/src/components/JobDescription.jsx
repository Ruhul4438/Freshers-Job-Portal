import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobDescription() {
  const isApplied = false;

  return (
    <div>
      <div className="max-w-full sm:max-w-7xl mx-auto mt-10 border border-blue-600 mb-5">
        <h1 className="flex justify-start pl-4 sm:pl-0 sm:justify-center text-2xl sm:text-3xl font-medium">
          Frontend developer Job 
        </h1>
      </div>
      <div className="bg-white mt-2 w-[95%] sm:w-7xl md:w-[95%] lg:max-w-6xl mx-auto pl-3 sm:pl-4 rounded-md border border-gray-500 ">
        <div className=" pb-3">
          <div>
            <div className="flex justify-between items-center border border-blue-500">
              <h1 className=" text-xl ">Title</h1>
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
                12 Positions
              </span>
              <span className="text-xs rounded-xl border border-gray-600 px-1">
                Frontend developer
              </span>
              <span className="text-xs rounded-xl border border-gray-600 px-1">
                3 LPA
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
              Frontend Developer
            </h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Location:</h1>
            
            <h1 className=" font-normal text-gray-800">Noida</h1>
          </div>

          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Description:</h1>
            <h1 className=" font-normal text-gray-800">
              1. Web Application Development: Design, develop, and maintain
              robust and scalable web applications using technologies such as
              JavaScript, React, React Native, and PHP.
            </h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Experience:</h1>
            <h1 className=" font-normal text-gray-800">Fresher</h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Salary:</h1>

            <h1 className=" font-normal text-gray-800">3 LPA</h1>
          </div>
          <div className="mb-2 flex flex-col justify-center">
            <h1 className="font-bold my-1">Total Applicants:</h1>
            <h1 className=" font-normal text-gray-800">4</h1>
          </div>
          <div className="mb-2 flex flex-col justify-center ">
            <h1 className="font-bold my-1">Posted Date:</h1>
            
            <h1 className=" font-normal text-gray-800">12/4/2024</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
