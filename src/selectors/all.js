import { createSelector } from "@reduxjs/toolkit";
export const allJobsSelector = createSelector(
  [(state) => state.job.jobs],
  (jobs) =>
    jobs.map((job, index) => {
      return {
        ...job,
        isLastJob: index === jobs.length - 1,
      };
    })
);
