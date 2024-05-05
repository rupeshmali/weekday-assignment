import React, { useEffect } from "react";
import { getJobs } from "../../api/job";
import { useDispatch, useSelector } from "react-redux";
import { requestJobs, setJobs } from "../../slices/job";
import { offsetSelector } from "../../selectors/common";

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const offset = useSelector(offsetSelector)
  useEffect(() => {
    const data = {
      limit: 10,
      offset,
    };
    dispatch(requestJobs())
    getJobs(data).then(({ data }) => {
        dispatch(setJobs(data.jdList))
    });
  }, []);

  return <>{children}</>;
};
export default AppWrapper;
