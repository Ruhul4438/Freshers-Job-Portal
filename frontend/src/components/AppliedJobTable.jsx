import React from "react";
import AppliedJobCard from "./AppliedJobCard";
import { useSelector } from "react-redux";

function AppliedJobTable() {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <>
      <div className="flex  flex-col gap-2 border border-red-400">
        {allAppliedJobs?.length <= 0 ? (
          <span>You haven't applied any job yet.</span>
        ) : (
          allAppliedJobs?.map((appliedJob) => (
            <div key={appliedJob?._id}>
              <AppliedJobCard appliedJob={appliedJob} />
            </div>
          ))
        )}
        <h1 className=" border mx-auto mt-3 mb-3 text-gray-600 md:text-xl font-medium">A list of your applied jobs</h1>
      </div>
    </>
  );
}

export default AppliedJobTable;
