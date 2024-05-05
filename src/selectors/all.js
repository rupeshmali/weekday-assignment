import { createSelector } from "@reduxjs/toolkit";
import { companyNameFilter, experienceFilter, roleFilter, salaryFilter } from "../utils/filter";

export const allJobsSelector = createSelector(
  [(state) => state.job.jobs, (state) => state.filter],
  (jobs, filter) => {
    const filteredJobs = jobs.filter((job) => {
      return (
        companyNameFilter(job, filter.company) &&
        experienceFilter(job, filter.experience) &&
        roleFilter(job, filter.role) &&
        salaryFilter(job, filter.salary)
      );
    });
    return filteredJobs.map((job, index) => {
      return {
        ...job,
        isLastJob: index === filteredJobs.length - 1,
      };
    });
  }
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

export const allFiltersSelector = createSelector(
  [(state) => state.filter],
  (filter) => filter
);
