import React from "react";
import JobCard from "./job-card";
import { useSelector } from "react-redux";
import { allJobsSelector } from "../../selectors/all";

const JobGrid = () => {
  const jobs = useSelector(allJobsSelector);
  console.log({jobs});
  return (
    <div className="job-grid">
      {jobs.map((job) => {
        return <JobCard key={job.jdUid} job={job} />;
      })}
    </div>
  );
};

export default JobGrid;
