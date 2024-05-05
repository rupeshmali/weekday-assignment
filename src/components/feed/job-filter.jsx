import { TextField } from "@mui/material";
import React, { useMemo } from "react";
import ReactSelect from "react-select";
import { EXPERIENCE_OPTIONS, SALARY_OPTIONS } from "../../constants/options";
import { makeOption } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { allFiltersSelector, allJobRolesSelector } from "../../selectors/all";
import capitalize from "lodash.capitalize";
import { addFilter } from "../../slices/filter";

const JobFilter = () => {
  const dispatch = useDispatch();
  const roles = useSelector(allJobRolesSelector);
  const { company, experience, role, salary } = useSelector(allFiltersSelector);

  const rolesOptions = useMemo(() => {
    return roles.map((option) => makeOption(option, capitalize(option)));
  }, [roles]);

  const handleCompanyName = (e) => {
    dispatch(
      addFilter({
        name: "company",
        value: e.target.value,
      })
    );
  };
  const handleExperience = (e) => {
    let value = +e?.value;
    if (!e) value = 0;
    dispatch(
      addFilter({
        name: "experience",
        value,
      })
    );
  };
  const handleRole = (e) => {
    const roles = e.map((role) => role.value);
    dispatch(
      addFilter({
        name: "role",
        value: roles,
      })
    );
  };
  const handleSalary = (e) => {
    let value = +e?.value;
    if (!e) value = 0;
    dispatch(
      addFilter({
        name: "salary",
        value,
      })
    );
  };
  return (
    <div className="filter-grid">
      {/* company name */}
      <input
        type="text"
        placeholder="Company name"
        className="filter-input"
        onChange={handleCompanyName}
        value={company}
      />
      {/* experience */}
      <ReactSelect
        placeholder="Experience"
        className="basic"
        classNamePrefix="select"
        name="experience"
        options={EXPERIENCE_OPTIONS.map((option) => makeOption(option))}
        onChange={handleExperience}
        isClearable
        value={EXPERIENCE_OPTIONS.find((option) => option.value === experience)}
      />
      {/* role */}
      <ReactSelect
        placeholder="Role"
        isMulti
        className="basic"
        classNamePrefix="select"
        name="role"
        isClearable
        onChange={handleRole}
        value={rolesOptions.filter((option) => role.includes(option.value))}
        options={rolesOptions}
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
        isClearable
        value={SALARY_OPTIONS.find((option) => option.value === salary)}
        onChange={handleSalary}
      />
    </div>
  );
};

export default JobFilter;
