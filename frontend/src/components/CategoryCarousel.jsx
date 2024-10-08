import React, { useEffect } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "Graphic Designer",
  "Digital Marketing",
  "FullStack Developer",
];

function CategoryCarousel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (e, query) => {
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
        <div className="flex justify-center items-center  w-full mt-10 sm:mt-15">
        <Carousel className="w-[75%] sm:w-[60%] md:w-[60%] lg:w-[56%]   ">
        <CarouselContent className=" ">
          {category.map((cat, index) => (
            <CarouselItem key={index} className="basis-2/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 ">
              <Button onClick={(e)=>searchJobHandler(e,cat)} variant="outline" className="  h-7 px-2 py-2 text-xs sm:h-10 sm:px-3 sm:py-2 sm:text-sm md:h-8 md:px-2 md:py-1 md:text-xs lg:h-12 lg:px-4 lg:py-2 lg:text-base rounded-2xl" >{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
        </div>
      
    </div>
  );
}

export default CategoryCarousel;
