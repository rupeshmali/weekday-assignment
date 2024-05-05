import { Avatar, Button, Chip, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/path";
import { formatExperience, formatSalary } from "../../utils/formatter";

const JobCard = ({ job }) => {
  return (
    <Stack className="job-card" spacing={2}>
      {/* <Chip
        style={{ width: "fit-content" }}
        label={
          <Stack className="text-sm" direction={"row"} spacing={1}>
            {" "}
            <span>⏳</span>
            <span>Posted 10 days ago</span>
          </Stack>
        }
        size="small"
        variant="outlined"
      /> */}
      <Header
        logoUrl={job.logoUrl}
        companyName={job.companyName}
        role={job.jobRole}
        location={job.location}
      />
      <Stack component={"p"} className="text-md text-subheading">
        <span>Estimated Salary</span>
        <span>
          {formatSalary(
            job.minJdSalary,
            job.maxJdSalary,
            job.salaryCurrencyCode
          )}
        </span>
      </Stack>
      <Stack spacing={0.5}>
        <p className="text-lg text-heading">About Company</p>
        <p className="text-md text-heading font-semibold">About us</p>
        <FadedDescription
          description={job.jobDetailsFromCompany}
          id={job.jdUid}
        />
      </Stack>
      <Stack>
        <p className="text-md text-subheading">Experience</p>
        {formatExperience(job.minExp, job.maxExp)}
      </Stack>
      <Button
        color={"primary"}
        variant="contained"
        disableElevation
        style={{ textTransform: "capitalize" }}
        href={job.jdLink}
        target="_blank"
      >
        ⚡️ Easy Apply
      </Button>
    </Stack>
  );
};

export default JobCard;

const Header = ({ logoUrl, companyName, role, location }) => {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Avatar alt={companyName} src={logoUrl} variant="square"   sx={{ width: 50, height: 50 }} />
      <Stack spacing={0.3}>
        <p className="text-subheading text-sm">{companyName}</p>
        <p className="text-heading text-md capitalize">{role}</p>
        <p className="text-subheading text-sm capitalize">{location}</p>
      </Stack>
    </Stack>
  );
};

const FadedDescription = ({ id, description }) => {
  return (
    <p className="text-md text-subheading job-details">
      {description}
      <Link to={PATHS.JOB.replace(":id", id)} className="view-more-job-details">
        View more
      </Link>
    </p>
  );
};
