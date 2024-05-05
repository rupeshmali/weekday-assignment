import { createSelector } from "@reduxjs/toolkit";
export const allJobsSelector = createSelector(
  [(state) => state.job.jobs],
  (jobs) =>
    jobs.map((job, index) => {
      return {
        ...job,
        lastJob: index === jobs.length - 1,
      };
    })
);



