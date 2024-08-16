import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <div>
      <div className=" text-center ">
        <div className="w-74 mx-auto flex flex-col ">
          <h2 className="mx-auto text-sm sm:text-xl  px-4 py-2 rounded-full bg-gray-200 text-[#F83002] font-medium mt-9">
            No. 1 Freshers Job Hunt Website
          </h2>
          <h1 className=" text-xl sm:text-5xl font-bold mt-3">
            Search, Apply & <br /> Get Your{" "}
            <span className="text-[#6A38C2]">Dream Jobs</span>
          </h1>
        </div>
      </div>
      <div className="w-[70%] text-sm sm:w-[50%] md:w-[70%] xl:w-[60%] sm:text-xl mx-auto mt-2   ">
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maxime
          suscipit, quod
        </p>
      </div>
      <div className='flex items-center justify-center w-full'>
  <div className='flex items-center justify-center w-full sm:w-[75%] md:w-[50%] lg:w-[40%] mt-5 '>
    <input 
      type="text"
      placeholder='Find your dream job' 
      className='w-[45%] sm:w-[60%] px-4 py-2 border border-gray-300 rounded-md shadow-lg'
    />
    <Button className='rounded-md w-11 sm:w-12 bg-[#6A38C2] shadow-lg'>
      <Search className="w-[105%]" />
    </Button>
  </div>
</div>
    </div>
  );
}

export default HeroSection;
