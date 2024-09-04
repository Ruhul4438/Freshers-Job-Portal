import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";

const shortlistingStatus = ["Accepted", "Rejected"];

function ApplicantsCard({ item }) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const statusHandler = async (status, id) => {
    console.log('called');
    try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status });
        console.log(res);
        if (res.data.success) {
            toast.success(res.data.message);
            setPopoverOpen(false);
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
}
  return (
    <div className="border border-gray-400 bg-white rounded-md mx-2">
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col md:flex-row md:flex-wrap items-start gap-3 md:gap-6 w-full ">
          <div className="flex flex-col max-w-[86%] md:w-[20%] lg:w-[14%] ">
            <h1 className="font-normal ">{item?.applicant?.fullname}</h1>
          </div>
          <div className="flex flex-col max-w-[86%] md:w-[37%] lg:w-[25%] ">
            <h1 className="font-normal">{item?.applicant?.email}</h1>
          </div>

          <div className="flex flex-col max-w-[86%] md:w-[30%] lg:w-[10%]  ">
            <h1 className="">{item?.applicant?.phoneNumber}</h1>
          </div>
          <div className="flex flex-col max-w-[86%] md:w-[20%] lg:w-[15%] ">
            {item.applicant?.profile?.resume ? (
              <a
                className="text-blue-600 cursor-pointer"
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
          <div className="flex flex-col max-w-[86%] md:w-[30%] lg:w-[10%] ">
            <h1>{item?.applicant.createdAt.split("T")[0]}</h1>
          </div>
        </div>

        <div className="mr-2 md:mr-12 ">
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger>
              <MoreHorizontal />
            </PopoverTrigger>
            <PopoverContent className="w-32">
              {shortlistingStatus.map((status, index) => {
                return (
                  <div
                    onClick={() => statusHandler(status, item?._id)}
                    key={index}
                    className="flex w-fit items-center my-2 cursor-pointer"
                  >
                    <span>{status}</span>
                  </div>
                );
              })}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default ApplicantsCard;
