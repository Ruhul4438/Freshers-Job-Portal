import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faBars, faTimes, faXmark, faFilter } from "@fortawesome/free-solid-svg-icons";

function FilterCard() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility of the content
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className="">
        <div className=" border border-red-900 ">
          
          
          {/* Button only visible on mobile screens */}
          <div className="flex justify-center">
          {!isVisible && (
          <button
            onClick={toggleContent}
            className="  sm:hidden bg-gray-700 text-white flex items-center align-middle rounded-md"
          >
            <span className="px-2">{isVisible ? "Filter" : "Filter"}</span>
            <FontAwesomeIcon icon={faFilter} className="mr-2 text-white " />
            
          </button>
          )}
          </div>
          

          {/* Close button */}
          
          {isVisible && (
          <button
            onClick={toggleContent}
            className="absolute top-0 right-0 mt-4 bg-transparent text-white px-4 py-2 rounded md:hidden "
          >
            <FontAwesomeIcon icon={faXmark} className="mr-2 text-black" />
          </button>
          )}
          
          
        </div>
        

        <form className="flex flex-col gap-8">
          {/* Content to be toggled */}
          
          <div
            className={`${
              isVisible ? "block" : "hidden"
            } md:block  bg-gray-100 p-4 rounded-md`}
          >
            <div className="flex justify-center border border-yellow-400 mb-6">
          <h1 className="text-xl font-bold">Apply Filters</h1>
          </div>

            <div className="flex flex-col  gap-2 ">
              <label className="whitespace-nowrap font-semibold">
                Location:
              </label>
              <input
                type="text"
                id="searchTerm"
                placeholder="Search..."
                className="w-[75%] md:w-[85%] border rounded-lg p-3 "
              />
            </div>

            <div className="flex flex-col  gap-2 mt-2">
              <label className="whitespace-nowrap font-semibold">
                Job Name:
              </label>
              <input
                type="text"
                id="searchTerm"
                placeholder="Search..."
                className="w-[75%] md:w-[85%] border rounded-lg p-3 "
              />
            </div>

            {/* <div className="flex flex-col  gap-2 mt-2">
              <label className="font-semibold" defaultValue={"freshers"}>
                Experience:
              </label>
              <select
                id="sort_order"
                className="w-[75%] md:w-[85%] border rounded-lg p-3"
              >
             
                <option value="Fresher">Fresher</option>
                <option value="0-1years">0-1 years</option>
                <option value="Senior">Senior</option>
              
              </select>
            </div> */}

            

            <div className="flex  gap-2 flex-wrap items-center mt-3">
              <div >
                <label className="font-semibold">Category:</label>
                <div className="flex  sm:flex-col gap-4 ">
                  <div className="flex  gap-2">
                    <input
                      type="checkbox"
                      id="all"
                      className="w-5"

                      // checked={sidebardata.type === 'all'}
                    />
                    <span>Job</span>
                  </div>

                  
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="sale"
                      className="w-5"
                      // checked={sidebardata.type === 'sale'}
                    />
                    <span>Internship</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="offer"
                      className="w-5"
                      // checked={sidebardata.offer}
                    />
                    <span>All</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  gap-2 flex-wrap items-center mt-3">
              <div >
                <label className="font-semibold">Salary:</label>
                <div className="flex  sm:flex-col gap-4 ">
                  <div className="flex  gap-2">
                    <input
                      type="checkbox"
                      id="all"
                      className="w-5"

                      // checked={sidebardata.type === 'all'}
                    />
                    <span>0-1 lakh</span>
                  </div>

                  
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="sale"
                      className="w-5"
                      // checked={sidebardata.type === 'sale'}
                    />
                    <span>2-4 lakh</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id="offer"
                      className="w-5"
                      // checked={sidebardata.offer}
                    />
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
  );
}

export default FilterCard;
