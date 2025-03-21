import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
const revalidate = 0;
// const articles = [
//   {
//     id: 1,
//     author: "SANJAY JOSHI",
//     date: "Mar 07, 2025",
//     title: "Top Free Flowbite Dashboard Templates for Developers",
//     description:
//       "Get ahead in 2025 with these powerful and free Flowbite admin dashboards.",
//     imgSrc:
//       "https://dqy38fnwh4fqs.cloudfront.net/UHBAB7ROBON9JPNFOMO86OM6D9ND/blog/featured-a992e1c9-1bc2-4cee-b35c-abb6770e30e6.webp",
//     authorImgSrc:
//       "https://lh3.googleusercontent.com/a/ACg8ocIz5Pl1EhYBQsJs6DcfGfQ8O2dGhBVC6C0Lge6TpaAL189VsZH_=s96-c",
//   },
//   // Add more articles here as needed
// ];

const ShortArticle = ({ job }) => {
  // console.log(job.snap);

  return (
    <div className="relative hover:!bg-gray-25  transition-all bg-gray-00 group">
      <div
        key={job.id}
        // href={`/${article.author
        //   .toLowerCase()
        //   .replace(/\s+/g, "")}/articles/${article.title
        //   .replace(/\s+/g, "-")
        //   .toLowerCase()}`}
      >
        <div className="py-4 px-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-gray-1k font-semibold text-base paragraph-clamp1 group-hover:underline mb-1">
                {job.role}
              </p>
              <div className="mb-2 flex items-center gap-x-1">
                <span className="max-w-fit ">
                  <button
                    className="flex items-center gap-1 hover:underline"
                    type="button"
                  >
                    <p className="text-gray-700 font-medium text-xs ">
                      {job.company_name}
                    </p>
                  </button>
                </span>
              </div>
              <div className="*:text-gray-1k *:font-normal **:text-sm  *:mt-1 [&>ul]:list-disc [&>ul]:break-words [&>ul]:pl-6">
                {parse(job.snap)}
                {/* <div
                  className="*:text-gray-1k *:font-normal **:text-sm  *:mt-1 [&>ul]:list-disc [&>ul]:break-words [&>ul]:pl-6"
                  dangerouslySetInnerHTML={{ __html: job.snap }}
                ></div> */}
              </div>
              <div className="flex items-center gap-x-2 mt-2">
                <div className="flex items-center gap-x-1">
                  <span className="text-gray-500">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-500 font-medium text-xs ">0</span>
                </div>

                <div className="flex items-center gap-x-1">
                  <span className="text-gray-500">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-500 font-medium text-xs ">0</span>
                </div>
                <div className="ml-2 items-center gap-x-1 hidden sm:flex">
                  <span className="text-gray-500">
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34.008 34.008 0 006.186 6.186c1.19.92 2.88.899 4-.104a92.344 92.344 0 008.516-8.698 1.95 1.95 0 00.47-1.094c.164-1.796.503-6.97-.902-8.374-1.405-1.405-6.578-1.066-8.374-.901a1.952 1.952 0 00-1.094.47 92.35 92.35 0 00-8.698 8.515z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d="M7 14l3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-500 font-medium text-xs paragraph-clamp1">
                    {" "}
                    flowbite&nbsp;•&nbsp; admin templates&nbsp;•&nbsp; free
                    admin templates
                  </p>
                </div>
              </div>
            </div>
            {job.imgSrc && (
              <img
                src={article.imgSrc}
                alt={article.title}
                className="h-16 border object-cover border-primaryBorder rounded-xl bg-gray-50 shrink-0 aspect-square sm:aspect-video"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortArticle;
