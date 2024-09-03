import React from "react";
import { Badge } from "../ui/badge";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminJobsCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-300 bg-white rounded-md">
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col md:flex-row items-start gap-3 md:gap-6 w-full">
          <div className="max-w-[86%] flex-shrink-0 md:w-[30%] lg:w-[25%] ">
            <h1 className="font-normal pl-5">{job?.company?.name}</h1>
          </div>

          <div className="max-w-[86%] flex-grow md:max-w-[34%] lg:max-w-[30%] lg:ml-10 ">
            <h1 className="font-bold md:font-normal pl-5">{job?.title}</h1>
          </div>

          <div className=" md:max-w-[22%]  lg:ml-4 2xl:ml-14  ">
            <h1 className="pl-5">{job?.createdAt.split("T")[0]}</h1>
          </div>
        </div>

        <div className="mr-2 md:mr-12 ">
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
