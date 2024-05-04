import React, { useEffect } from "react";
import { getJobs } from "../../api/job";
import { useDispatch } from "react-redux";
import { setJobs } from "../../slices/job";

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      limit: 10,
      offset: 0,
    };

    getJobs(data).then(({ data }) => {
        dispatch(setJobs(data.jdList))
    });
  }, []);

  return <>{children}</>;
};
export default AppWrapper;
