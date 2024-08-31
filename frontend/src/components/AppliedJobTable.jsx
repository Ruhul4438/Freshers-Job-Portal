import React from "react";
import AppliedJobCard from "./AppliedJobCard";
import { useSelector } from "react-redux";

function AppliedJobTable() {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div className="flex  flex-col gap-2">
      {allAppliedJobs?.length <= 0 ? (
        <span>You haven't applied any job yet.</span>
      ) : (
        allAppliedJobs?.map((appliedJob) => (
          <div key={appliedJob?._id}>
            <AppliedJobCard appliedJob={appliedJob} />
          </div>
        ))
      )}
    </div>
  );
}

export default AppliedJobTable;
