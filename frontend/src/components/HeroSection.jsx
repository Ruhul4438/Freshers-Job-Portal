import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

function HeroSection() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("keyword", query);
    const searchQuery = urlParams.toString();
    dispatch(setSearchedQuery(query));
    navigate(`/jobs?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("keyword");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

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

      <div className="w-full sm:text-xl text-sm flex justify-center">
        <p className="text-center w-[70%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
          Find your first job and internship here, to get started with your
          career
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center w-full sm:w-[75%] md:w-[50%] lg:w-[40%] mt-5 ">
          <input
            type="text"
            placeholder="Find your dream job"
            onChange={(e) => setQuery(e.target.value)}
            className=" w-[45%] sm:w-[60%] px-4 py-2 border border-gray-300 rounded-md shadow-lg"
          />
          <Button
            onClick={searchJobHandler}
            className="rounded-md w-11 sm:w-12 bg-[#6A38C2] shadow-lg"
          >
            <Search className="w-[105%]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
