import React from "react";

import { useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import ApplicantsCard from "./ApplicantsCard";

const shortlistingStatus = ["Accepted", "Rejected"];

function ApplicantsTable() {
  const { applicants } = useSelector((store) => store.application);

  const statusHandler = async (status, id) => {
    console.log("called");
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex  flex-col gap-4 ">
      {applicants?.applications?.map((item) => (
        <div key={item?._id}>
          <ApplicantsCard item={item} />
        </div>
      ))}
      <h1 className=" border mx-auto  mt-3 mb-3 text-gray-600 md:text-xl font-medium">
        A list of your recent applied user
      </h1>
    </div>
  );
}

export default ApplicantsTable;
