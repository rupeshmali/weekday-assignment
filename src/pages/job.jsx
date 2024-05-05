import { Button, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allJobsSelector } from "../selectors/all";
import { formatExperience, formatSalary } from "../utils/formatter";

const Job = () => {
  const { id } = useParams();
  const jobs = useSelector(allJobsSelector);
  const currentJob = jobs.filter((job) => id === job.jdUid);
  return (
    <Stack
      className="single-job-container"
      direction={"column"}
      paddingLeft={17}
      gap={5}
    >
      <Stack paddingTop={5}>
        <h1 className="font-semibold capitalize">{currentJob[0]?.jobRole}</h1>
      </Stack>
      <Stack direction={"row"} width={"500"} gap={15}>
        <Stack className="single-left-panel" gap={3}>
          <div className="left-panel-element">
            <p className="text-sm text-subheading">Location</p>
            <p className="text-subheading">{currentJob[0]?.location}</p>
          </div>
          <div className="left-panel-element">
            <p className="text-sm text-subheading">Department</p>
            <p className="text-subheading">Engineering</p>
          </div>
        </Stack>

        <Stack className="single-job-overview" gap={2} width={500}>
          {/* About role */}
          <div>
            <p className="font-semibold">About the role</p>
            <p className="font-semibold">Overview</p>
            <p className="text-subheading">
              Company name: {currentJob[0]?.companyName}
            </p>
          </div>
          <p className="font-semibold">Role: {currentJob[0]?.jobRole}</p>
          <Stack className="ul-list-container" paddingLeft={5}>
            <ul>
              <li className="text-subheading">
                Salary:{" "}
                {formatSalary(
                  currentJob[0]?.minJdSalary,
                  currentJob[0]?.maxJdSalary,
                  currentJob[0]?.salaryCurrencyCode
                )}{" "}
              </li>
              <li className="text-subheading">
                Experience:{" "}
                {formatExperience(currentJob[0]?.minExp, currentJob[0]?.maxExp)}
              </li>
              <li className="text-subheading">
                Location: {currentJob[0]?.location}
              </li>
              <li className="text-subheading">Type: Full-time</li>
            </ul>
          </Stack>

          {/* About company */}
          <Stack className="">
            <p className="font-semibold">About us</p>
            <p className="text-subheading">
              {currentJob[0]?.jobDetailsFromCompany}
            </p>
          </Stack>

          {/* Apply button */}
          <Button variant="contained" color="secondary">
            Apply for this job
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Job;
