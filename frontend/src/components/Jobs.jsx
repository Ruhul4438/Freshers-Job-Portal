import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { setAllJobs, setSearchedQuery } from "@/redux/jobSlice";
import {
  faBars,
  faTimes,
  faXmark,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import Footer from "./shared/Footer";



function Jobs() {
  // useGetAllJobs();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    keyword: "",
    location: "",
    category: "all",
    salaryRange: 'all',
  });
  const { allJobs } = useSelector((store) => store.job);
  const [filter, setFilter] = useState(allJobs);

  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility of the content
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("keyword");
    const serachLocationFromUrl = urlParams.get("location");
    const searchCategoryFromUrl = urlParams.get("category");
    const searchSalaryFromUrl = urlParams.get("salaryRange");

    if (searchTermFromUrl || serachLocationFromUrl || searchCategoryFromUrl) {
      setSidebardata({
        keyword: searchTermFromUrl || "",
        location: serachLocationFromUrl || "",
        category: searchCategoryFromUrl || "all",
        salaryRange: searchSalaryFromUrl || "all",
      });
    }
    const fetchAllJobs = async () => {
      const searchQuery = urlParams.toString(window.location.search);
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get?${searchQuery}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
          setFilter(res.data.jobs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, [window.location.search, dispatch]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "Internship" ||
      e.target.id === "Job"
    ) {
      setSidebardata({ ...sidebardata, category: e.target.id });
    }

     if (e.target.id === "keyword") {
      setSidebardata({ ...sidebardata, keyword: e.target.value });
    }
     if (e.target.id === "location") {
      setSidebardata({ ...sidebardata, location: e.target.value });
    } 
     if (
      e.target.id === '0-1Lakh' ||
      e.target.id === '2-4Lakh' ||
      e.target.id === 'AllSalary'
  ) {
      setSidebardata({ ...sidebardata, salaryRange: e.target.id });
  }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("keyword", sidebardata.keyword);
    urlParams.set("location", sidebardata.location);
    urlParams.set("category", sidebardata.category);
    urlParams.set('salaryRange', sidebardata.salaryRange); 
    const searchQuery = urlParams.toString();
    navigate(`/jobs?${searchQuery}`);
  };

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen max-w-[92%]  md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto  flex flex-col   md:flex-row mt-4  ">
        {/* Filter card */}
        {/* <div className=" md:w-[32%] bg-red-400"> */}
          
        <div className=" md:w-[32%] mt-4 ">
          <div className="sticky top-5    ">
            
            <div className="">
              <div className="  ">
                {/* Button only visible on mobile screens */}
                <div className="flex justify-center">
                  {!isVisible && (
                    <button
                      onClick={toggleContent}
                      className="  md:hidden bg-gray-700 text-white flex items-center align-middle rounded-md"
                    >
                      <span className="px-2">
                        {isVisible ? "Filter" : "Filter"}
                      </span>
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="mr-2 text-white "
                      />
                    </button>
                  )}
                </div>

                {/* Close button */}

                {isVisible && (
                  <button
                    onClick={toggleContent}
                    className="absolute top-0 right-0 mt-4 bg-transparent text-white px-4 py-2 rounded md:hidden "
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="mr-2 text-black"
                    />
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Content to be toggled */}

                <div
                  className={`${
                    isVisible ? "block" : "hidden"
                  } md:block  bg-white p-4 rounded-md`}
                >
                  <div className="flex justify-center   mb-6">
                    <h1 className="text-xl font-bold">Apply Filters</h1>
                  </div>

                  <div className="flex flex-col  gap-2 ">
                    <label className="whitespace-nowrap font-semibold">
                      Location:
                    </label>
                    <input
                      type="text"
                      id="location"
                      placeholder="Search..."
                      value={sidebardata.location}
                      onChange={handleChange}
                      className="w-[75%] md:w-[85%] border rounded-lg p-3 "
                    />
                  </div>

                  <div className="flex flex-col  gap-2 mt-2">
                    <label className="whitespace-nowrap font-semibold">
                      Job Name:
                    </label>
                    <input
                      type="text"
                      id="keyword"
                      placeholder="Search..."
                      value={sidebardata.keyword}
                      onChange={handleChange}
                      className="w-[75%] md:w-[85%] border rounded-lg p-3 "
                    />
                  </div>

                  <div className="flex  gap-2 flex-wrap items-center mt-3">
                    <div>
                      <label className="font-semibold">Category:</label>
                      <div className="flex  sm:flex-col gap-4 ">
                        <div className="flex  gap-2">
                          <input
                            type="checkbox"
                            id="Job"
                            onChange={handleChange}
                            checked={sidebardata.category === "Job"}
                            className="w-5"
                          />
                          <span>Job</span>
                        </div>

                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            id="Internship"
                            onChange={handleChange}
                            checked={sidebardata.category === "Internship"}
                            className="w-5"
                          />
                          <span>Internship</span>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            id="all"
                            onChange={handleChange}
                            checked={sidebardata.category === "all"}
                            className="w-5"
                          />
                          <span>All</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex  gap-2 flex-wrap items-center mt-3">
                    <div>
                      <label className="font-semibold">Salary:</label>
                      <div className="flex  sm:flex-col gap-4 ">
                        <div className="flex  gap-2">
                          <input type="checkbox" id="0-1Lakh" className="w-5"
                          onChange={handleChange} 
                          checked={sidebardata.salaryRange === '0-1Lakh'} />
                          <span>0-1 lakh</span>
                        </div>

                        <div className="flex gap-2">
                          <input type="checkbox" id="2-4Lakh" className="w-5" 
                          onChange={handleChange}
                           checked={sidebardata.salaryRange === '2-4Lakh'}/>
                          <span>2-4 lakh</span>
                        </div>
                        <div className="flex gap-2">
                          <input type="checkbox" id="AllSalary" className="w-5" 
                           onChange={handleChange} 
                           checked={sidebardata.salaryRange === 'AllSalary'}/>
                          <span>All</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-6 ">
                    <button className="bg-blue-900 text-white p-3 rounded-lg uppercase hover:opacity-95 transition-transform sc">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
        

        {/* Jobs listing */}
        <div className="md:w-[70%]  md:ml-4">
          {filter.length <= 0 ? (
            <span className="flex justify-center  mt-8 md:text-xl font-medium">Job not found</span>
          ) : (
            <div className="flex-1  pb-5">
              <div className="flex flex-col">
                {filter.map((job) => (
                  <div key={job?._id}>
                    <Job job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

<Footer/>
     
    </div>
  );
}

export default Jobs;
