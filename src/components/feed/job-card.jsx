import { Avatar, Button, Chip, Stack } from "@mui/material";
import React from "react";

const JobCard = () => {
  return (
    <Stack className="job-card" spacing={2}>
      <Chip
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
      />
      <Header
        companyName={"Globant Inc."}
        role={"Full-Stack Developer"}
        location={"Pune, India"}
      />
      <p className="text-md text-subheading">
        Estimated Salary: Rs. 15 - 40 LPA
      </p>
      <Stack spacing={0.5}>
        <p className="text-lg text-heading">About Company</p>
        <p className="text-md text-heading font-semibold">About us</p>
        <p className="text-md text-subheading">
          Narrative is making AI powered data tools for logistics. We
          standardize and find errors in shipping invoice data for large
          companies.
        </p>
      </Stack>
      <Stack>
        <p className="text-md text-subheading">Minimum Experience</p>
        <p className="text-md">3 years</p>
      </Stack>
      <Button
        color={"primary"}
        variant="contained"
        disableElevation
        style={{ textTransform: "capitalize" }}
      >
        ⚡️
        Easy Apply
      </Button>
    </Stack>
  );
};

export default JobCard;

const Header = ({ companyName, role, location }) => {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Avatar
        alt={companyName}
        src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598304367_pl8w8.jpg"
      />
      <Stack spacing={0.3}>
        <p className="text-subheading text-sm">{companyName}</p>
        <p className="text-heading text-md">{role}</p>
        <p className="text-subheading text-sm">{location}</p>
      </Stack>
    </Stack>
  );
};
