import React from "react";
import { Badge } from "../ui/badge";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CompaniesCard({companies}) {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-800 bg-white rounded-md">
  <div className="flex justify-between items-center p-2">
    <div className="flex items-center">
      <Avatar className="md:w-16 md:h-16 border">
        <AvatarImage src={companies.logo} />
      </Avatar>
    </div>
    <div className="flex flex-col md:flex-row flex-grow justify-between items-center pl-5 gap-3 md:gap-0 border border-green-500">
      <div className="flex flex-col max-w-[86%] md:max-w-[30%] lg:max-w-[36%] md:ml-20 lg:ml-20 xl:ml-32 2xl:ml-44 border border-red-500">
        <h1 className="font-bold md:font-normal   border">
          {companies.name}
        </h1>
      </div>
      <div className=" border border-pink-500 md:mr-16 lg:mr-62 xl:mr-40 2xl:mr-60  ">
        <h1 className=" ">{companies.createdAt.split("T")[0]}</h1>
      </div>
    </div>
    <div className="mr-2 md:mr-12 border border-orange-600">
      <Popover>
        <PopoverTrigger>
          <MoreHorizontal />
        </PopoverTrigger>
        <PopoverContent className="w-32">
          <div onClick={()=> navigate(`/admin/companies/${companies._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
            <Edit2 className="w-4" />
            <span>Edit</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </div>
</div>

  
    // <div >
    //   <div className="flex justify-between items-center rounded-md border border-grey-800 bg-white  ">
    //     <div className="flex flex-col lg:flex-row  sm:flex sm:justify-evenly sm:gap-2 md:gap-2 pl-2">
    //       <div className="flex items-center">
    //         <Avatar className="md:w-16 md:h-16 border">
    //           <AvatarImage src={companies.logo} />
    //         </Avatar>
    //        <div className="flex mx-auto border border-red-500">
    //        <div className="border border-blue-300  ">
    //        <div className="max-w-[94%]   md:ml-16 xl:mx-20 flex flex-col xl:flex-row  sm:flex  sm:justify-evenly sm:gap-2 xl:gap-20 pl-5 border border-red-500">
    //        <h1 className="font-bold lg:font-normal">{companies.name}</h1>
    //           <h1 className="font-bold lg:font-normal">{companies.createdAt.split("T")[0]}</h1>

    //         </div>
    //        </div>
    //        </div>
    //       </div>
    //     </div>

    //     <div className="mr-2 md:mr-12 border border-orange-600">
    //       <Popover>
    //         <PopoverTrigger>
    //           <MoreHorizontal />
    //         </PopoverTrigger>
    //         <PopoverContent className="w-32">
    //           <div className="flex items-center gap-2 w-fit cursor-pointer">
    //             <Edit2 className="w-4" />
    //             <span>Edit</span>
    //           </div>
    //         </PopoverContent>
    //       </Popover>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CompaniesCard;
