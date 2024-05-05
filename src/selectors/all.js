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
export const allJobRolesSelector = createSelector(
  [(state) => state.job.jobs],
  (jobs) => {
    const roles = new Set();
    jobs.forEach((job) => {
      roles.add(job.jobRole);
    });
    return Array.from(roles);
  }
);
