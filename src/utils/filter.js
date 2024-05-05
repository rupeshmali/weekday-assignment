export const companyNameFilter = (job, companyName) => {
  if (!companyName) return true;
  return job.companyName.toLowerCase().includes(companyName.toLowerCase());
};
export const experienceFilter = (job, experience) => {
  if (!job.minExp || !experience) return true;
  return experience >= job.minExp;
};
export const roleFilter = (job, role) => {
  if (role.length === 0) return true;
  return role.includes(job.jobRole.toLowerCase());
};
export const salaryFilter = (job, salary) => {
  if ((!job.minJdSalary && !job.maxJdSalary) || !salary) return true;
  const minJdSalary = job.minJdSalary || 0;
  const maxJdSalary = job.maxJdSalary || 0;
  return salary <= minJdSalary || salary <= maxJdSalary;
};
