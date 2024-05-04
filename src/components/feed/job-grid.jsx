import React from "react";
import JobCard from "./job-card";
import { useSelector } from "react-redux";

const JobGrid = () => {
  const jobs = useSelector((state) => state.job.jobs);
  console.log({ jobs });
  return (
    <div className="job-grid">
      {jobs.map((job) => {
        return <JobCard key={job.jdUid} job={job} />;
      })}
    </div>
  );
};

export default JobGrid;
