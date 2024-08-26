import React from "react";
import { Badge } from "../ui/badge";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

function CompaniesCard() {
  return (
    <div >
      <div className="flex justify-between items-center rounded-md border border-grey-800 bg-white  ">
        <div className="flex flex-col lg:flex-row  sm:flex sm:justify-evenly sm:gap-2 md:gap-2 pl-2">
          <div className="flex items-center">
            <Avatar className="md:w-16 md:h-16 border">
              <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
            </Avatar>
           <div className="flex mx-auto border border-red-500">
           <div className="border border-blue-300  ">
           <div className="max-w-[94%]   md:ml-16 xl:mx-20 flex flex-col xl:flex-row  sm:flex  sm:justify-evenly sm:gap-2 xl:gap-20 pl-5 border border-red-500">
              <h1 className="font-bold lg:font-normal">12/4/2024</h1>
              <h1 className="border "> Full Stack Developerak lfmsdl aslkdlksa salml aslmxlz dsnksdkmsdkmskdmskdmskdd, s,c sd, sdc,scmsaksclmxzlsadsa kdmkmds wdms dsa,sla, ,dsa, dlas dmsalm adsmlms hh kjk mll nk</h1>
              <h1 className="font-bold lg:font-normal">Amazon private LTejdjijsfd ejkwjdmdclm,df;c,,dsc,d,s;c,x</h1>
            </div>
           </div>
           </div>
          </div>
        </div>

        <div className="mr-2 md:mr-12 border border-orange-600">
          <Popover>
            <PopoverTrigger>
              <MoreHorizontal />
            </PopoverTrigger>
            <PopoverContent className="w-32">
              <div className="flex items-center gap-2 w-fit cursor-pointer">
                <Edit2 className="w-4" />
                <span>Edit</span>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default CompaniesCard;
