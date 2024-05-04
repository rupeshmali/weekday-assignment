import React, { useEffect } from "react";
import { getJobs } from "../../api/job";

const AppWrapper = ({ children }) => {
  useEffect(() => {
    const data = {
      limit: 10,
      offset: 0,
    };  

    getJobs(data).then(({data})=>{
        console.log(data);
    })
  }, []);

  return <>{children}</>;
};
export default AppWrapper;
