import { supabase } from "./supabaseClient";

const getData = async () => {
  const { data: jobs, error } = await supabase
    .from("snap")
    .select()
    .eq("dream_job", false);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // const undreamedjobs = jobs.filter((job) => !job.dream_job);
  return jobs;
};
const getDreamjobs = async () => {
  const { data: jobs, error } = await supabase
    .from("snap")
    .select()
    .eq("dream_job", true);
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  // const dreamjobs = jobs.filter((job) => job.dream_job);
  return jobs;
};

export { getData, getDreamjobs };
