import { api } from ".";

export const getJobs = async (data, controller) => api.post('/getSampleJdJSON', data, {
    signal: controller?.signal
})
