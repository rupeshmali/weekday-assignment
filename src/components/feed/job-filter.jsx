import { TextField } from "@mui/material";
import React from "react";
import ReactSelect from "react-select";
import { EXPERIENCE_OPTIONS, SALARY_OPTIONS } from "../../constants/options";
import { makeOption } from "../../utils";
import { useSelector } from "react-redux";
import { allJobRolesSelector } from "../../selectors/all";
import capitalize from "lodash.capitalize";

const JobFilter = () => {
  const roles = useSelector(allJobRolesSelector);

  return (
    <div className="filter-grid">
      {/* company name */}
      <TextField
        size="small"
        label="Company name"
        variant="outlined"
        color="secondary"
      />
      {/* experience */}
      <ReactSelect
        placeholder="Experience"
        className="basic"
        classNamePrefix="select"
        name="experience"
        options={EXPERIENCE_OPTIONS.map((option) => makeOption(option))}
      />
      {/* role */}
      <ReactSelect
        placeholder="Role"
        isMulti
        className="basic"
        classNamePrefix="select"
        name="role"
        options={roles.map((option) => makeOption(option, capitalize(option)))}
      />

      {/* salary */}
      <ReactSelect
        placeholder="Salary"
        className="basic"
        classNamePrefix="select"
        name="salary"
        options={SALARY_OPTIONS.map((option) =>
          makeOption(option, `${option} LPA`)
        )}
      />
    </div>
  );
};

export default JobFilter;
