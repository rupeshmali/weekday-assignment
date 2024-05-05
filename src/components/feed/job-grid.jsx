import React from "react";
import JobCard from "./job-card";
import { useSelector } from "react-redux";
import { allJobsSelector } from "../../selectors/all";
import { isFetchingJobsSelector } from "../../selectors/common";
import { CircularProgress, Stack } from "@mui/material";

const JobGrid = () => {
  const jobs = useSelector(allJobsSelector);
  const isFetching = useSelector(isFetchingJobsSelector);
  console.log({ jobs });
  return (
    <>
      <div className="job-grid">
        {jobs.map((job) => {
          return <JobCard key={job.jdUid} job={job} />;
        })}
      </div>
      {/* show loader until isFetching is true */}
      {isFetching && (
        <Stack alignItems={"center"}>
          <CircularProgress />
        </Stack>
      )}
    </>
  );
};

export default JobGrid;
