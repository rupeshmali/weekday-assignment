export const formatSalary = (min, max, currency = "Rs.") => {
    const NA_LABEL = 'Not disclosed'
  // if min max and currency are null.
  if (!min && !max && !currency) return NA_LABEL;
  // if min and max are null.
  if (!min && !max) return NA_LABEL;
  // if min is present and max is not present.
  if (min && !max) return `${currency} ${min.toFixed(2)} LPA`;
  // if min is not present and max is present.
  if (!min && max) return `${currency} ${max.toFixed(2)} LPA`;
  // if min and max both are present then return a range.
  return `${currency} ${min.toFixed(2)} - ${max.toFixed(2)} LPA`;
};

export const formatExperience = (min, max, period='yrs') =>{
    // if min and max are not present
    if (!min && !max) return `0 ${period}`
    // if min is present and max is not present
    if (min && !max) return `${min}+ ${period}`
    // if min is not present and max is present
    if (!min && max) return `${max} ${period}`
    // if min and max both are present, return range.
    return `${min} ${period} - ${max} ${period}`
}
