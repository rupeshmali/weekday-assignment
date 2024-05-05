import React from "react";
import JobCard from "./job-card";
import { useSelector } from "react-redux";
import { allJobsSelector } from "../../selectors/all";
import { isFetchingJobsSelector } from "../../selectors/common";

const JobGrid = () => {
  const jobs = useSelector(allJobsSelector);
  const isFetching = useSelector(isFetchingJobsSelector);
  console.log({jobs});
  return (
    <div className="job-grid">
      {jobs.map((job) => {
        return <JobCard key={job.jdUid} job={job} />;
      })}
      {/* show loader until isFetching is true */}
      {isFetching && (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default JobGrid;
