"use client";
import Snaps from "@/app/components/scroll/Snaps";
import { getDreamjobs } from "@/lib/datafunctions";
import React, { useEffect, useState } from "react";

const page = () => {
  const [jobs, setJobs] = useState([]); // State to hold jobs data
  const [loading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsdata = await getDreamjobs(); // Await the promise from getData
        // console.log(data);

        setJobs(jobsdata); // Set the jobs state with the fetched data
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
  return (
    <>
      <Snaps jobs={jobs} />
    </>
  );
};

export default page;
