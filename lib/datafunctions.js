import { supabase } from "./supabaseClient";

const getData = async () => {
  const { data: jobs, error } = await supabase.from("snap").select();
  //   console.log(jobs);

  //   console.log(alljobs);

  if (error) {
    console.error("Error fetching post:", error);
    // setError(error.message)
  } else {
    // setPost(post)
  }
  return jobs;
};
export default getData;
