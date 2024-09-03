import React from "react";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";


function Job({ job }) {
  const navigate = useNavigate();
  // const jobId = "nkhjkhklll"

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className=" p-5 rounded-xl shadow-xl bg-white border border-gray-300 my-2">
    
      <span className="text-xs rounded-xl  px-3 py-1  bg-[#efffe7] ">
        <FontAwesomeIcon
          icon={faClockRotateLeft}
          className="mr-2 text-black "
        />
        {daysAgoFunction(job?.createdAt) === 0
          ? "Posted Today"
          : `Posted ${daysAgoFunction(job?.createdAt)} days ago`}
      </span>
      <div className="flex items-center gap-4 mt-6">
        <Button variant="outline" className="rounded-full" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="uppercase font-medium text-gray-500">{job?.company?.name}</h1>
          <p className="capitalize text-sm">{job?.company?.location}</p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-medium pt-1 pb-2">{job?.title}</h1>
        <p className="text-sm text-gray-900 line-clamp-2">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant={"outline"}>
          {job?.position} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant={"outline"}>
          {job?.jobType}
        </Badge>
        {job?.category === "Internship" ? (
          <Badge className={"text-[#7209b7] font-bold"} variant={"outline"}>
            {job?.salary} /month
          </Badge>
        ) : (
          <Badge className={"text-[#7209b7] font-bold"} variant={"outline"}>
            {job?.salary} PA
          </Badge>
        )}
      </div>
      <div className="mt-4">
        <Button onClick={() => navigate(`/description/${job?._id}`)}>
          Details
        </Button>
      </div>
    </div>
  );
}

export default Job;
