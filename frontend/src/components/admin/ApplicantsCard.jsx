import React from "react";
import { Badge } from "../ui/badge";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ApplicantsCard({ item }) {
  const navigate = useNavigate();
  return (

    <div className="border border-gray-800 bg-white rounded-md mx-2">
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col md:flex-row md:flex-wrap items-start gap-3 md:gap-6 w-full border border-blue-400">
          <div className="flex flex-col max-w-[86%] md:w-[20%] lg:w-[12%] border border-blue-600">
            <h1 className="font-normal ">{item?.applicant?.fullname}</h1>
          </div>
          <div className="flex flex-col max-w-[86%] md:w-[37%] lg:w-[25%] border border-blue-600">
        <h1 className="font-normal">{item?.applicant?.email}</h1>
      </div>

          <div className="flex flex-col max-w-[86%] md:w-[30%] lg:w-[10%] border border-blue-600 ">
            <h1 className="">{item?.applicant?.phoneNumber}</h1>
          </div>
          <div className="flex flex-col max-w-[86%] md:w-[20%] lg:w-[15%] border border-blue-600">
            {item.applicant?.profile?.resume ? (
              <a
                className=""
                href={item?.applicant?.profile?.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item?.applicant?.profile?.resumeOriginalName}
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
          <div className="flex flex-col max-w-[86%] md:w-[30%] lg:w-[10%] border border-blue-600">
          <h1 >
          {item?.applicant.createdAt.split("T")[0]}
            </h1>

          </div>
        </div>

        <div className="mr-2 md:mr-12 border border-orange-600">
          <Popover>
            <PopoverTrigger>
              <MoreHorizontal />
            </PopoverTrigger>
            <PopoverContent className="w-32">
              <div
                onClick={() => navigate(`/admin/companies/${job._id}`)}
                className="flex items-center gap-2 w-fit cursor-pointer"
              >
                <Edit2 className="w-4" />
                <span>Edit</span>
              </div>
              <div
                onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                className="flex items-center w-fit gap-2 cursor-pointer mt-2"
              >
                <Eye className="w-4" />
                <span>Applicants</span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default ApplicantsCard;
