import React from "react";
import PageHeading from "../components/custom/page-heading";
import '../styles/feed.css'
import JobGrid from "../components/feed/job-grid";
const Feed = () => {
  return <div className="container">
    {/* page heading */}
    <PageHeading>
      Jobs for you
    </PageHeading>

    {/* filters */}


    {/* subheading - showing n number of jobs  */}


    {/* grid of jobs */}
    <JobGrid />

  </div>;
};

export default Feed;
