import { api } from ".";

export const getJobs = async (data) => api.post('/getSampleJdJSON', data)
