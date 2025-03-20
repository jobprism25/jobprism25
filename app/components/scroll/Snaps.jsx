import React from "react";

import ShortArticle from "../ShortArticle";

const Snaps = ({ jobs }) => {
  return (
    <>
      {jobs.map((job) => (
        <ShortArticle key={job.id} job={job} />
      ))}
    </>
  );
};

export default Snaps;
