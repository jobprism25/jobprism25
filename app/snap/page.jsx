"use client";
import React, { useEffect, useRef, useState } from "react";
import Toprightbar from "../components/Toprightbar";
import ShortArticle from "../components/ShortArticle";
import Snaps from "../components/scroll/Snaps";
import Tab from "../components/Tab";
import getData from "@/lib/datafunctions";

const page = () => {
  const [jobs, setJobs] = useState([]); // State to hold jobs data
  const [loading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(); // Await the promise from getData
        // console.log(data);

        const undreamedjobs = data.filter((job) => !job.dream_job);
        setJobs(undreamedjobs); // Set the jobs state with the fetched data
        // console.log(data); // Log the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array to run once on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching data
  }
  const dreamjobs = jobs.filter((job) => job.dream_job);
  // useEffect(() => {
  //   setCurrentJobs(alljobs);
  // }, [jobs]);
  console.log(jobs);

  return (
    <>
      <Snaps jobs={jobs} />
    </>
    // </div>
  );
};

export default page;
