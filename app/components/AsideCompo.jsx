"use client";
import { usePathname } from "next/navigation";
import React from "react";

const AsideCompo = () => {
  const path = usePathname();
  // console.log(path);
  if (path === "/scroll" || path === "/jobs" || path === "/snap") {
    return (
      <aside
        className="max-w-[348px] w-full float-right flex-shrink-0 bg-gray-00"
        id="layout-right-panel"
      >
        <div className='max-w-[348px] bg-gray-00 duration-200 h-full min-h-screen fixed top-14 border-l border-primaryBorder px-6 py-6 translate-x-full lg:block lg:w-full lg:translate-x-0 right-0 lg:right-auto overflow-y-auto hide-scrollbar pb-24 fixed right-0 top-0 h-screen"'>
          <div className="flex flex-col gap-10">
            <a
              target="_blank"
              className="flex flex-col gap-2 p-4 rounded-2xl border border-gray-200 group relative overflow-hidden group"
              href="https://pl.st/mobbin"
            >
              <div className="flex flex-col gap-2 items-start">
                <div className="flex items-center justify-between">
                  <img
                    alt="Mobbin logo"
                    loading="lazy"
                    width={48}
                    height={48}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-xl"
                    src="https://dqy38fnwh4fqs.cloudfront.net/collabs/mobbin-logo.png"
                    style={{ color: "transparent" }}
                  />
                  <div
                    type="button"
                    className="absolute top-4 right-4 group-hover:shadow-10  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 text-gray-1k bg-gray-00 border-gray-200 dark:bg-gray-100 dark:border-gray-300 dark:hover:bg-gray-200 dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 shadow-5 hover:shadow-10"
                  >
                    Browse
                    <span className="-mr-1">
                      <span className="block -rotate-45">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-gray-1k font-semibold text-sm ">Mobbin</p>
                  <p className="text-gray-1k font-normal text-sm ">
                    Discover how the world’s top brands design world class user
                    experiences!
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  alt="launchpad medals"
                  loading="lazy"
                  width={48}
                  height={22}
                  decoding="async"
                  data-nimg={1}
                  src="https://dqy38fnwh4fqs.cloudfront.net/website/launchpad-medals-all-small.png"
                  style={{ color: "transparent" }}
                />
                <p className="text-gray-500 font-normal text-[10px] ">
                  Top 3 projects of the week in March will receive{" "}
                  <span className="font-semibold">
                    1-year Mobbin Pro subscription!
                  </span>
                </p>
              </div>
              <div
                className="absolute top-0 left-0 w-full h-full opacity-40 group-hover:opacity-70 transition-opacity duration-300 -z-5"
                style={{
                  background:
                    "linear-gradient(215deg, rgb(var(--gray-300)) 0%, rgba(255, 255, 255, 0.00) 65.72%)",
                }}
              />
            </a>

            {/* scroll  */}
            {path === "/scroll" && (
              <>
                <div className="flex flex-col gap-6">
                  <a
                    className="group flex items-center justify-between"
                    href="/scroll/trending"
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <span className="flex h-2 w-2">
                          <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                          <span className="relative block rounded-full h-2 w-2 bg-green-300" />
                        </span>
                      </div>
                      <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                        Active Discussions
                      </p>
                    </div>
                    <button
                      type="button"
                      className="group-hover:bg-gray-00 group-hover:border-gray-200 justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-xs leading-4 py-1 h-6 rounded-lg w-6 text-gray-1k bg-gray-00 border-transparent hover:border-gray-200 disabled:bg-gray-100 disabled:hover:border-transparent dark:hover:bg-gray-200 dark:hover:border-gray-200 dark:disabled:bg-gray-100 dark:disabled:hover:bg-gray-100 dark:disabled:hover:border-gray-100 hover:shadow-10 dark:hover:shadow-15"
                    >
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </button>
                  </a>
                  <div
                    style={{
                      opacity: 1,
                      transform: "translateX(0%) translateZ(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    <div className="flex gap-2">
                      <div>
                        <span className="max-w-fit ">
                          <a className="flex items-center" href="/dariusdan">
                            <div className="w-10 h-10 relative">
                              <div className="w-10 h-10 relative">
                                <svg
                                  width={16}
                                  height={16}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute -right-1 bottom-0 outline-none z-1"
                                >
                                  <rect
                                    x={1}
                                    y={1}
                                    width={18}
                                    height={18}
                                    rx={9}
                                    fill="rgb(var(--gray-00))"
                                  />
                                  <path
                                    d="M8.4773 2.80234C9.21702 1.73255 10.7828 1.73255 11.5225 2.80234C11.9706 3.45043 12.7717 3.74544 13.5267 3.54042C14.773 3.20199 15.9725 4.22029 15.8595 5.52087C15.791 6.30877 16.2173 7.05577 16.9259 7.38975C18.0957 7.94104 18.3675 9.50115 17.4547 10.424C16.9017 10.983 16.7537 11.8325 17.0844 12.5492C17.6302 13.7322 16.8473 15.1042 15.5618 15.2174C14.783 15.286 14.1299 15.8405 13.9279 16.6046C13.5944 17.8658 12.1231 18.4076 11.0663 17.6583C10.4262 17.2044 9.57363 17.2044 8.93345 17.6583C7.87671 18.4076 6.40539 17.8658 6.07192 16.6046C5.86989 15.8405 5.21682 15.286 4.43803 15.2174C3.15249 15.1042 2.36961 13.7322 2.91544 12.5492C3.24611 11.8325 3.09807 10.983 2.54507 10.424C1.63224 9.50115 1.90413 7.94104 3.07386 7.38975C3.78249 7.05577 4.20875 6.30877 4.1403 5.52087C4.02731 4.22029 5.22675 3.20199 6.47304 3.54042C7.22807 3.74544 8.02918 3.45043 8.4773 2.80234Z"
                                    fill="url(#paint0_linear_11664_9169)"
                                  />
                                  <path
                                    d="M6.66667 10.254L8.66667 12.1112L13.3333 7.77783"
                                    stroke="#fff"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <rect
                                    x={1}
                                    y={1}
                                    width={18}
                                    height={18}
                                    rx={9}
                                    stroke="rgb(var(--gray-00))"
                                    strokeWidth={2}
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_11664_9169"
                                      x1="9.9999"
                                      y1={2}
                                      x2="9.9999"
                                      y2={18}
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#27AE60" />
                                      <stop offset={1} stopColor="#1E874B" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="w-10 h-10 rounded-full overflow-hidden ">
                                  <img
                                    className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                                    src="https://dqy38fnwh4fqs.cloudfront.net/UHEOLERE7QMKMBPCRRJMGG9OLNKE/heolere7qmkmbpcrrjmgg9olnke-profile.webp"
                                    alt="Darius Dan"
                                    width={40}
                                    height={40}
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                        </span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center">
                            <span className="max-w-fit ">
                              <a
                                className="flex items-center hover:underline"
                                href="/dariusdan"
                              >
                                <p className="text-gray-1k font-medium text-sm ">
                                  Darius Dan
                                </p>
                              </a>
                            </span>
                            <p className="text-gray-500 dark:text-gray-600 font-normal text-[10px] ml-2">
                              11m{" "}
                            </p>
                          </div>
                        </div>
                        <a
                          className="flex flex-col cursor-pointer group"
                          href="/scroll/post/ACTH6AJMRBBOG88OP39DGAAEPRP9GM"
                        >
                          <div className="flex flex-col gap-1 mb-2">
                            <p className="text-gray-500 dark:text-gray-600 font-normal text-xs italic">
                              Shared an image
                            </p>
                            <div className="break-words text-gray-1k post-caption font-normal text-sm">
                              <p className="">
                                Goku from laughing to cryin'{" "}
                                <span
                                  data-icon="😀"
                                  data-label="Grinning Face"
                                  data-type="emoji"
                                >
                                  😀
                                </span>{" "}
                              </p>
                            </div>
                          </div>
                          <div className="flex ml-1 items-center cursor-pointer">
                            <div className="-ml-1">
                              <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 rounded-full overflow-hidden ">
                                  <img
                                    className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                                    src="https://dqy38fnwh4fqs.cloudfront.net/UHGNLEGRBGE7QKPFMA768OKLJ7GD/hgnlegrbge7qkpfma768oklj7gd-profile.webp"
                                    alt="Avik Mukherjee profile"
                                    width={16}
                                    height={16}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-gray-1k font-normal text-[10px] ml-1 group-hover:underline">
                                <strong>Avik</strong> commented{" "}
                              </p>
                              <span className="group-hover:translate-x-0.5 transition-all duration-150 ease-in-out">
                                <svg
                                  width={12}
                                  height={12}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      opacity: 1,
                      transform: "translateX(0%) translateZ(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    <a
                      className="flex gap-2"
                      href="/talktogoutham/project/mailwatch"
                    >
                      <img
                        src="https://dqy38fnwh4fqs.cloudfront.net/UH9OL7KQLGQ7G66187N9KB6ENRKA/projects/mailwatch122ef2d4-2b68-4c0a-a7f8-30b15e587067.webp?v1.1"
                        alt="MailWatch"
                        className="w-10 h-10 rounded-xl object-cover border border-gray-200"
                      />
                      <div className="flex flex-col gap-0.5 w-full">
                        <p className="text-gray-1k font-semibold text-sm flex items-center justify-between gap-1 w-full">
                          MailWatch{" "}
                          <span className="flex items-center gap-0.5 text-xxs text-gray-500">
                            <img
                              src="https://peerlist.io/favicon.png"
                              alt="Peerlist"
                              className="w-3.5 h-3.5"
                            />
                            LAUNCH
                          </span>
                        </p>
                        <p className="text-gray-1k font-normal text-sm paragraph-clamp mb-2">
                          The email assistant you didn’t know you needed.
                        </p>
                        <div className="flex ml-1 items-center cursor-pointer">
                          <div className="-ml-1">
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 rounded-full overflow-hidden ">
                                <img
                                  className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                                  src="https://dqy38fnwh4fqs.cloudfront.net/UHOKQ77ADKOR7DRCGEQR6ONQJRDO/hokq77adkor7drcgeqr6onqjrdo-profile.webp"
                                  alt="Samyak Shah profile"
                                  width={16}
                                  height={16}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="text-gray-1k font-normal text-[10px] ml-1 group-hover:underline">
                              <strong>Samyak</strong> commented{" "}
                            </p>
                            <span className="group-hover:translate-x-0.5 transition-all duration-150 ease-in-out">
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    style={{
                      opacity: 1,
                      transform: "translateX(0%) translateZ(0px)",
                      filter: "blur(0px)",
                    }}
                  >
                    <a
                      className="flex gap-2"
                      href="/amar2502/project/portfolio"
                    >
                      <img
                        src="https://dqy38fnwh4fqs.cloudfront.net/UHP69MKLML79BBJCMR88E6R9LRQL/projects/portfolioed3987a3-8882-4b02-b1e7-d7b2964f8503.webp?v1.1"
                        alt="Portfolio"
                        className="w-10 h-10 rounded-xl object-cover border border-gray-200"
                      />
                      <div className="flex flex-col gap-0.5 w-full">
                        <p className="text-gray-1k font-semibold text-sm flex items-center justify-between gap-1 w-full">
                          Portfolio{" "}
                          <span className="flex items-center gap-0.5 text-xxs text-gray-500">
                            <img
                              src="https://peerlist.io/favicon.png"
                              alt="Peerlist"
                              className="w-3.5 h-3.5"
                            />
                            LAUNCH
                          </span>
                        </p>
                        <p className="text-gray-1k font-normal text-sm paragraph-clamp mb-2">
                          Amar Pandey | Full Stack Developer
                        </p>
                        <div className="flex ml-1 items-center cursor-pointer">
                          <div className="-ml-1">
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 rounded-full overflow-hidden ">
                                <img
                                  className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                                  src="https://lh3.googleusercontent.com/a/ACg8ocKwAx1cHiwOaokShOcB981dmelBUS3K9_7qftumjWT82le0e2g=s96-c"
                                  alt="Harshit Sharma profile"
                                  width={16}
                                  height={16}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="text-gray-1k font-normal text-[10px] ml-1 group-hover:underline">
                              <strong>Harshit</strong> commented{" "}
                            </p>
                            <span className="group-hover:translate-x-0.5 transition-all duration-150 ease-in-out">
                              <svg
                                width={12}
                                height={12}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="none" className="">
                  <a className="group" href="/jobs">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                        Open Roles
                      </p>
                      <button
                        type="button"
                        className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-xs leading-4 py-1 h-6 rounded-lg w-6 text-gray-1k bg-gray-00 border-transparent hover:border-gray-200 disabled:bg-gray-100 disabled:hover:border-transparent dark:hover:bg-gray-200 dark:hover:border-gray-200 dark:disabled:bg-gray-100 dark:disabled:hover:bg-gray-100 dark:disabled:hover:border-gray-100 hover:shadow-10 dark:hover:shadow-15"
                        fdprocessedid="dw78pk"
                      >
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <a
                    className="group"
                    href="/company/teambridge/careers/senior-product-designer/jobh6ajm6ogn6gbme3rrkaojjqoola?utm_source=scroll-open-roles"
                  >
                    <li className="flex items-start my-4">
                      <div className="pt-1">
                        <div className="w-6 h-6 relative">
                          <div className="w-6 h-6 rounded-full overflow-hidden ">
                            <img
                              className="w-6 h-6 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://logo.clearbit.com/teambridge.com"
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="text-gray-1k font-medium text-sm group-hover:underline paragraph-clamp">
                          Senior Product Designer
                        </p>
                        <p className="text-gray-1k font-normal text-xs ">
                          <span>at Teambridge</span>
                          <span> • Full-time</span>
                          <span className="capitalize">
                            {" "}
                            • in-office (San Francisco, United States)
                          </span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a
                    className="group"
                    href="/company/hellojagger/careers/product-designer/jobhgnl7e9jlplolgikk6n8ggo8dbd?utm_source=scroll-open-roles"
                  >
                    <li className="flex items-start my-4">
                      <div className="pt-1">
                        <div className="w-6 h-6 relative">
                          <div className="w-6 h-6 rounded-full overflow-hidden ">
                            <img
                              className="w-6 h-6 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://logo.clearbit.com/hellojagger.com"
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="text-gray-1k font-medium text-sm group-hover:underline paragraph-clamp">
                          Product Designer
                        </p>
                        <p className="text-gray-1k font-normal text-xs ">
                          <span>at Jagger</span>
                          <span> • Full-time</span>
                          <span className="capitalize">
                            {" "}
                            • hybrid (New York, United States)
                          </span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a
                    className="group"
                    href="/company/honehealth/careers/ui--visual-designer/jobhok7jpokgeq98bc8mknbq7ml6mk?utm_source=scroll-open-roles"
                  >
                    <li className="flex items-start my-4">
                      <div className="pt-1">
                        <div className="w-6 h-6 relative">
                          <div className="w-6 h-6 rounded-full overflow-hidden ">
                            <img
                              className="w-6 h-6 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://logo.clearbit.com/https://honehealth.com/"
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="text-gray-1k font-medium text-sm group-hover:underline paragraph-clamp">
                          UI / Visual Designer
                        </p>
                        <p className="text-gray-1k font-normal text-xs ">
                          <span>at Hone Health</span>
                          <span> • Full-time</span>
                          <span className="capitalize">
                            {" "}
                            • remote (United States)
                          </span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a
                    className="group"
                    href="/company/virtahealth/careers/senior-product-designer/jobhnn6gpo8gr8meo1ola6qgklrmlr?utm_source=scroll-open-roles"
                  >
                    <li className="flex items-start my-4">
                      <div className="pt-1">
                        <div className="w-6 h-6 relative">
                          <div className="w-6 h-6 rounded-full overflow-hidden ">
                            <img
                              className="w-6 h-6 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://logo.clearbit.com/virtahealth.com"
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="text-gray-1k font-medium text-sm group-hover:underline paragraph-clamp">
                          Senior Product Designer
                        </p>
                        <p className="text-gray-1k font-normal text-xs ">
                          <span>at Virta Health</span>
                          <span> • Full-time</span>
                          <span className="capitalize">
                            {" "}
                            • remote (United States)
                          </span>
                        </p>
                      </div>
                    </li>
                  </a>
                  <a
                    className="group"
                    href="/company/pitchbook/careers/sr-product-designer/jobhr86mqnj8eak7j1d8b96la8lqgk?utm_source=scroll-open-roles"
                  >
                    <li className="flex items-start my-4">
                      <div className="pt-1">
                        <div className="w-6 h-6 relative">
                          <div className="w-6 h-6 rounded-full overflow-hidden ">
                            <img
                              className="w-6 h-6 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://logo.clearbit.com/pitchbook.com"
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="text-gray-1k font-medium text-sm group-hover:underline paragraph-clamp">
                          Sr. Product Designer
                        </p>
                        <p className="text-gray-1k font-normal text-xs ">
                          <span>at Pitchbook</span>
                          <span> • Full-time</span>
                          <span className="capitalize">
                            {" "}
                            • in-office (New York, United States)
                          </span>
                        </p>
                      </div>
                    </li>
                  </a>
                </div>
              </>
            )}

            {/* snap  */}
            {path === "/snap" && (
              <div className="pb-10">
                <p className="text-gray-1k font-semibold text-sm mb-6">
                  Top Writers of the Week
                </p>
                <a
                  className="flex items-start gap-2 group mb-6"
                  href="https://peerlist.io/designerdada/articles"
                >
                  <span className="max-w-fit ">
                    <div className="w-10 h-10 relative">
                      <span className="absolute -right-1 bottom-0 outline-none z-1">
                        <div className="block dark:hidden">
                          <img
                            src="https://dqy38fnwh4fqs.cloudfront.net/website/IDBadge-light.webp"
                            alt="Id Verified"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div className="hidden dark:block">
                          <img
                            src="https://dqy38fnwh4fqs.cloudfront.net/website/IDBadge-dark.webp"
                            alt="Id Verified"
                            width={16}
                            height={16}
                          />
                        </div>
                      </span>
                      <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <img
                          className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                          src="https://dqy38fnwh4fqs.cloudfront.net/UHDNK79BK6LA89DCMPRQGEGQOGGO/hdnk79bk6la89dcmprqgegqoggo-profile.webp"
                          alt="Akash Bhadange"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </span>
                  <div>
                    <span className="max-w-fit ">
                      <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                        Akash Bhadange
                      </p>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-xs paragraph-clamp">
                        Cofounder &amp; CEO of Peerlist • Product Designer
                      </p>
                    </span>
                    <p className="text-gray-1k font-normal text-xs pt-1">
                      <span className="text-green">1 Top article</span>
                    </p>
                  </div>
                </a>
                <a
                  className="flex items-start gap-2 group mb-6"
                  href="https://peerlist.io/jagss/articles"
                >
                  <span className="max-w-fit ">
                    <div className="w-10 h-10 relative">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -right-1 bottom-0 outline-none z-1"
                      >
                        <rect
                          x={1}
                          y={1}
                          width={18}
                          height={18}
                          rx={9}
                          fill="rgb(var(--gray-00))"
                        />
                        <path
                          d="M8.4773 2.80234C9.21702 1.73255 10.7828 1.73255 11.5225 2.80234C11.9706 3.45043 12.7717 3.74544 13.5267 3.54042C14.773 3.20199 15.9725 4.22029 15.8595 5.52087C15.791 6.30877 16.2173 7.05577 16.9259 7.38975C18.0957 7.94104 18.3675 9.50115 17.4547 10.424C16.9017 10.983 16.7537 11.8325 17.0844 12.5492C17.6302 13.7322 16.8473 15.1042 15.5618 15.2174C14.783 15.286 14.1299 15.8405 13.9279 16.6046C13.5944 17.8658 12.1231 18.4076 11.0663 17.6583C10.4262 17.2044 9.57363 17.2044 8.93345 17.6583C7.87671 18.4076 6.40539 17.8658 6.07192 16.6046C5.86989 15.8405 5.21682 15.286 4.43803 15.2174C3.15249 15.1042 2.36961 13.7322 2.91544 12.5492C3.24611 11.8325 3.09807 10.983 2.54507 10.424C1.63224 9.50115 1.90413 7.94104 3.07386 7.38975C3.78249 7.05577 4.20875 6.30877 4.1403 5.52087C4.02731 4.22029 5.22675 3.20199 6.47304 3.54042C7.22807 3.74544 8.02918 3.45043 8.4773 2.80234Z"
                          fill="url(#paint0_linear_11664_9169)"
                        />
                        <path
                          d="M6.66667 10.254L8.66667 12.1112L13.3333 7.77783"
                          stroke="#fff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x={1}
                          y={1}
                          width={18}
                          height={18}
                          rx={9}
                          stroke="rgb(var(--gray-00))"
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_11664_9169"
                            x1="9.9999"
                            y1={2}
                            x2="9.9999"
                            y2={18}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#27AE60" />
                            <stop offset={1} stopColor="#1E874B" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <img
                          className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                          src="https://dqy38fnwh4fqs.cloudfront.net/UHEOLPPGOL6KORD3BBDELK8EOLON/heolppgol6kord3bbdelk8eolon-profile.webp"
                          alt="Jagadhiswaran Devaraj"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </span>
                  <div>
                    <span className="max-w-fit ">
                      <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                        Jagadhiswaran Devaraj
                      </p>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-xs paragraph-clamp">
                        Full Stack Engineer | Product Builder | Scalable
                        Applications &amp; Cloud Systems | Startups | Innovation
                        &amp; Idea Explorer
                      </p>
                    </span>
                    <p className="text-gray-1k font-normal text-xs pt-1">
                      <span className="text-green">7 Top articles</span>
                    </p>
                  </div>
                </a>
                <a
                  className="flex items-start gap-2 group mb-6"
                  href="https://peerlist.io/sidessh/articles"
                >
                  <span className="max-w-fit ">
                    <div className="w-10 h-10 relative">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -right-1 bottom-0 outline-none z-1"
                      >
                        <rect
                          x={1}
                          y={1}
                          width={18}
                          height={18}
                          rx={9}
                          fill="rgb(var(--gray-00))"
                        />
                        <path
                          d="M8.4773 2.80234C9.21702 1.73255 10.7828 1.73255 11.5225 2.80234C11.9706 3.45043 12.7717 3.74544 13.5267 3.54042C14.773 3.20199 15.9725 4.22029 15.8595 5.52087C15.791 6.30877 16.2173 7.05577 16.9259 7.38975C18.0957 7.94104 18.3675 9.50115 17.4547 10.424C16.9017 10.983 16.7537 11.8325 17.0844 12.5492C17.6302 13.7322 16.8473 15.1042 15.5618 15.2174C14.783 15.286 14.1299 15.8405 13.9279 16.6046C13.5944 17.8658 12.1231 18.4076 11.0663 17.6583C10.4262 17.2044 9.57363 17.2044 8.93345 17.6583C7.87671 18.4076 6.40539 17.8658 6.07192 16.6046C5.86989 15.8405 5.21682 15.286 4.43803 15.2174C3.15249 15.1042 2.36961 13.7322 2.91544 12.5492C3.24611 11.8325 3.09807 10.983 2.54507 10.424C1.63224 9.50115 1.90413 7.94104 3.07386 7.38975C3.78249 7.05577 4.20875 6.30877 4.1403 5.52087C4.02731 4.22029 5.22675 3.20199 6.47304 3.54042C7.22807 3.74544 8.02918 3.45043 8.4773 2.80234Z"
                          fill="url(#paint0_linear_11664_9169)"
                        />
                        <path
                          d="M6.66667 10.254L8.66667 12.1112L13.3333 7.77783"
                          stroke="#fff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x={1}
                          y={1}
                          width={18}
                          height={18}
                          rx={9}
                          stroke="rgb(var(--gray-00))"
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_11664_9169"
                            x1="9.9999"
                            y1={2}
                            x2="9.9999"
                            y2={18}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#27AE60" />
                            <stop offset={1} stopColor="#1E874B" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <img
                          className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                          src="https://dqy38fnwh4fqs.cloudfront.net/UHLKN6BMN9889EO397O6QLLE88LA/hlkn6bmn9889eo397o6qlle88la-profile"
                          alt="Sidessh More"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </span>
                  <div>
                    <span className="max-w-fit ">
                      <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                        Sidessh More
                      </p>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-xs paragraph-clamp">
                        Flutter | UI/UX | Anime | Equity Trading
                      </p>
                    </span>
                    <p className="text-gray-1k font-normal text-xs pt-1">
                      <span className="text-green">1 Top article</span>
                    </p>
                  </div>
                </a>
                <a
                  className="flex items-start gap-2 group mb-6"
                  href="https://peerlist.io/kunalshinde/articles"
                >
                  <span className="max-w-fit ">
                    <div className="w-10 h-10 relative">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -right-1 bottom-0 outline-none z-1"
                      >
                        <rect
                          x={1}
                          y={1}
                          width={18}
                          height={18}
                          rx={9}
                          fill="rgb(var(--gray-00))"
                        />
                        <path
                          d="M8.4773 2.80234C9.21702 1.73255 10.7828 1.73255 11.5225 2.80234C11.9706 3.45043 12.7717 3.74544 13.5267 3.54042C14.773 3.20199 15.9725 4.22029 15.8595 5.52087C15.791 6.30877 16.2173 7.05577 16.9259 7.38975C18.0957 7.94104 18.3675 9.50115 17.4547 10.424C16.9017 10.983 16.7537 11.8325 17.0844 12.5492C17.6302 13.7322 16.8473 15.1042 15.5618 15.2174C14.783 15.286 14.1299 15.8405 13.9279 16.6046C13.5944 17.8658 12.1231 18.4076 11.0663 17.6583C10.4262 17.2044 9.57363 17.2044 8.93345 17.6583C7.87671 18.4076 6.40539 17.8658 6.07192 16.6046C5.86989 15.8405 5.21682 15.286 4.43803 15.2174C3.15249 15.1042 2.36961 13.7322 2.91544 12.5492C3.24611 11.8325 3.09807 10.983 2.54507 10.424C1.63224 9.50115 1.90413 7.94104 3.07386 7.38975C3.78249 7.05577 4.20875 6.30877 4.1403 5.52087C4.02731 4.22029 5.22675 3.20199 6.47304 3.54042C7.22807 3.74544 8.02918 3.45043 8.4773 2.80234Z"
                          fill="url(#paint0_linear_11664_9169)"
                        />
                        <path
                          d="M6.66667 10.254L8.66667 12.1112L13.3333 7.77783"
                          stroke="#fff"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x={1}
                          y={1}
                          width={18}
                          height={18}
                          rx={9}
                          stroke="rgb(var(--gray-00))"
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_11664_9169"
                            x1="9.9999"
                            y1={2}
                            x2="9.9999"
                            y2={18}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#27AE60" />
                            <stop offset={1} stopColor="#1E874B" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <img
                          className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                          src="https://dqy38fnwh4fqs.cloudfront.net/UHMQLQMEMRGMDO83JKODLDNLK78K/hmqlqmemrgmdo83jkodldnlk78k-profile.webp"
                          alt="Kunal Shinde"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </span>
                  <div>
                    <span className="max-w-fit ">
                      <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                        Kunal Shinde
                      </p>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-xs paragraph-clamp">
                        Frontend Developer | Skilled in HTML, CSS, JavaScript
                        &amp; GitHub | API integration in JS | Explore my work
                        on GitHub
                      </p>
                    </span>
                    <p className="text-gray-1k font-normal text-xs pt-1">
                      <span className="text-green">2 Top articles</span>
                    </p>
                  </div>
                </a>
                <a
                  className="flex items-start gap-2 group mb-6"
                  href="https://peerlist.io/saxenashikhil/articles"
                >
                  <span className="max-w-fit ">
                    <div className="w-10 h-10 relative">
                      <span className="absolute -right-1 bottom-0 outline-none z-1">
                        <div className="block dark:hidden">
                          <img
                            src="https://dqy38fnwh4fqs.cloudfront.net/website/IDBadge-light.webp"
                            alt="Id Verified"
                            width={16}
                            height={16}
                          />
                        </div>
                        <div className="hidden dark:block">
                          <img
                            src="https://dqy38fnwh4fqs.cloudfront.net/website/IDBadge-dark.webp"
                            alt="Id Verified"
                            width={16}
                            height={16}
                          />
                        </div>
                      </span>
                      <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <img
                          className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                          src="https://dqy38fnwh4fqs.cloudfront.net/UHLKND9RBQ6PDL9ILROGJJDNBL96/hlknd9rbq6pdl9ilrogjjdnbl96-profile.webp"
                          alt="Shikhil Saxena"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </span>
                  <div>
                    <span className="max-w-fit ">
                      <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                        Shikhil Saxena
                      </p>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-xs paragraph-clamp">
                        Java Full Stack Developer with 3 years of experience
                        building scalable web applications using Java, Spring
                        Boot, React.
                      </p>
                    </span>
                    <p className="text-gray-1k font-normal text-xs pt-1">
                      <span className="text-green">7 Top articles</span>
                    </p>
                  </div>
                </a>
              </div>
            )}

            {/* jobs  */}
            {path === "/jobs" && (
              <>
                <div
                  className="flex overflow-x-hidden flex-col gap-4 p-4 rounded-2xl border border-primaryBorder bg-white dark:bg-black"
                  style={{
                    background:
                      "linear-gradient(220deg, rgba(162, 89, 255, 0.3) 0%, rgba(255, 255, 255, 0) 49.92%)",
                  }}
                >
                  <div className="flex flex-col text-center gap-2">
                    <p className="text-gray-1k font-normal text-2xl font-instrument">
                      Looking for a new job?
                    </p>
                    <p className="text-gray-700 font-normal text-sm ">
                      Find and apply to exciting job opportunities from
                      early-stage startups and the unicorns you know and love!
                    </p>
                  </div>
                  <img
                    alt="Peerlist Hire"
                    loading="lazy"
                    width={336}
                    height={92}
                    decoding="async"
                    data-nimg={1}
                    className="-mx-9 max-w-[336px]"
                    src="https://dqy38fnwh4fqs.cloudfront.net/website/assets/companies-logo.webp"
                    style={{ color: "transparent" }}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <a
                      type="button"
                      className="w-min flex gap-1  flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-sm leading-5 rounded-xl py-1.5 h-8 px-4 bg-green-300 text-white border-green-500 hover:border-green-600 disabled:bg-green-400 disabled:border-green-400 dark:hover:bg-green-400 dark:hover:border-green-400 dark:disabled:bg-green-400 shadow-10 hover:shadow-15"
                      href="/signup"
                    >
                      Create Your Profile
                      <span className="-mr-1">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </a>
                    <p className="text-gray-400 font-normal text-xs self-stretch text-center italic">
                      Takes lesser time than cooking ramen!
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-1k font-semibold text-sm ">
                    Engineering jobs
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/remote"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          {" "}
                          Remote jobs{" "}
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/software-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Software Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/mobile-developer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Mobile Developer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/android-developer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Android Developer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/ios-developer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          iOS Developer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/frontend-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Frontend Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/backend-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Backend Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/full-stack-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Full-Stack Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/software-architect"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Software Architect jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/security-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Security Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/embedded-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Embedded Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/data-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Data Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/design-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Design Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/ai-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          AI Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/cloud-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Cloud Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/devops"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          DevOps jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/devrel"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          DevRel jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/engineering-manager"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Engineering Manager jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/qa-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          QA Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/data-scientist"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Data Scientist jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/machine-learning-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Machine Learning Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center hover:underline "
                        href="/jobs/role/site-reliability-engineer"
                      >
                        <span className="text-gray-1k font-normal text-sm mr-1">
                          Site Reliability Engineer jobs
                        </span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {/* <a
            href="/arunantony/project/gistrso--chrome-extension"
            className="flex flex-col cursor-pointer group/projectCard"
          >
            <div className="flex flex-col rounded-2xl border border-primaryBorder pt-4">
              <p className="text-gray-1k font-semibold text-sm mb-4 px-4">
                🌟 Today's Staff Picked Project!
              </p>
              <div className="-mx-[1px] -mb-[1px] relative bg-gray-00 h-full flex items-center gap-4 border border-primaryBorder rounded-2xl p-4">
                <div
                  className="w-full h-full absolute top-0 bottom-0 left-0 right-0 group-hover/projectCard:opacity-100 rounded-2xl opacity-50 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(211deg, rgba(255, 165, 149, 0.60) -11.78%, rgba(255, 255, 255, 0.00) 68.66%), rgb(var(--gray-00))",
                  }}
                />
                <div className="w-full z-10">
                  <div className="flex justify-between">
                    <img
                      src="https://dqy38fnwh4fqs.cloudfront.net/UHEO6N8KB78MM96C98OB6LJGDLEM/projects/gistr--chrome-extension02319bfa-e7b1-455d-87b1-263c56f86ec9.webp"
                      alt="Gistr.so - Chrome extension"
                      className="border border-primaryBorder rounded-xl shrink-0 h-16 w-[120px] object-cover"
                    />
                    <div
                      id={34}
                      className="group-hover:shadow-[-2px_4px_16px_rgba(0,0,0,0.05)] rounded-lg upvote-icon-wrapper right-4"
                    >
                      <button
                        type="button"
                        className="h-14 w-12 bg-gray-00 dark:bg-gray-100 dark:hover:bg-gray-200 rounded-xl border  text-gray-1k dark:disabled:bg-gray-00 dark:disabled:hover:bg-gray-00 hover:shadow-10 transition-colors duration-200 text-gray border-gray-200 dark:bg-gray-100 dark:border-gray-300 hover:border-green-50"
                        label="upvote button"
                        fdprocessedid="91a6o4"
                      >
                        <div className="h-full w-full flex flex-col justify-center relative overflow-hidden rounded-lg">
                          <div className="w-6 h-6 flex z-[1] items-center justify-center mx-auto rounded-full upvote-icon-button">
                            <div
                              style={{
                                opacity: 1,
                                filter: "blur(0px)",
                                transform: "none",
                              }}
                            >
                              <div className="lf-player-container">
                                <div
                                  id="lottie"
                                  style={{
                                    background: "transparent",
                                    margin: "2px auto 0px",
                                    outline: "none",
                                    overflow: "hidden",
                                    height: 28,
                                    width: 28,
                                    display: "none",
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 256 256"
                                    width={256}
                                    height={256}
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      transform: "translate3d(0px, 0px, 0px)",
                                      contentVisibility: "visible",
                                    }}
                                  >
                                    <defs>
                                      <clipPath id="__lottie_element_208">
                                        <rect
                                          width={256}
                                          height={256}
                                          x={0}
                                          y={0}
                                        />
                                      </clipPath>
                                      <clipPath id="__lottie_element_222">
                                        <path d="M0,0 L160,0 L160,160 L0,160z" />
                                      </clipPath>
                                      <clipPath id="__lottie_element_226">
                                        <path d="M0,0 L160,0 L160,160 L0,160z" />
                                      </clipPath>
                                      <linearGradient
                                        id="__lottie_element_232"
                                        spreadMethod="pad"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop />
                                        <stop />
                                        <stop />
                                      </linearGradient>
                                    </defs>
                                    <g clipPath="url(#__lottie_element_208)">
                                      <g
                                        style={{
                                          display: "block",
                                        }}
                                        transform="matrix(1,0,0,1,120.5,121.5)"
                                        opacity={1}
                                      >
                                        <g
                                          opacity={1}
                                          transform="matrix(1,0,0,1,0,0)"
                                        >
                                          <path
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            fillOpacity={0}
                                            strokeMiterlimit={4}
                                            stroke="rgb(72,209,128)"
                                            strokeOpacity={1}
                                            strokeWidth={7}
                                            d="M0 0"
                                          />
                                        </g>
                                      </g>
                                      <g
                                        style={{
                                          display: "block",
                                        }}
                                        transform="matrix(1,0,0,1,219.75,117)"
                                        opacity={1}
                                      >
                                        <g
                                          opacity={1}
                                          transform="matrix(1,0,0,1,0,0)"
                                        >
                                          <path
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            fillOpacity={0}
                                            strokeMiterlimit={4}
                                            stroke="rgb(72,208,127)"
                                            strokeOpacity={1}
                                            strokeWidth={11}
                                            d="M0 0"
                                          />
                                        </g>
                                      </g>
                                      <g
                                        style={{
                                          display: "block",
                                        }}
                                        transform="matrix(0.9659258127212524,0.258819043636322,-0.258819043636322,0.9659258127212524,247.6870880126953,65.5445556640625)"
                                        opacity={1}
                                      >
                                        <g
                                          opacity={1}
                                          transform="matrix(1,0,0,1,1.8869999647140503,19.163999557495117)"
                                        >
                                          <path
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            fillOpacity={0}
                                            strokeMiterlimit={4}
                                            stroke="rgb(72,209,128)"
                                            strokeOpacity={1}
                                            strokeWidth={5}
                                            d="M0 0"
                                          />
                                        </g>
                                      </g>
                                      <g
                                        style={{
                                          display: "block",
                                        }}
                                        transform="matrix(0.9659258127212524,0.258819043636322,-0.258819043636322,0.9659258127212524,378.18707275390625,32.04454803466797)"
                                        opacity={1}
                                      >
                                        <g
                                          opacity={1}
                                          transform="matrix(1,0,0,1,1.8869999647140503,19.163999557495117)"
                                        >
                                          <path
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            fillOpacity={0}
                                            strokeMiterlimit={4}
                                            stroke="rgb(72,209,128)"
                                            strokeOpacity={1}
                                            strokeWidth={5}
                                            d="M0 0"
                                          />
                                        </g>
                                      </g>
                                      <g
                                        clipPath="url(#__lottie_element_222)"
                                        style={{
                                          display: "block",
                                        }}
                                        transform="matrix(1,0,0,1,48,40)"
                                        opacity={1}
                                      >
                                        <g
                                          style={{
                                            display: "block",
                                          }}
                                          transform="matrix(1,0,0,1,79.99500274658203,80.0009994506836)"
                                          opacity={1}
                                        >
                                          <g
                                            opacity={1}
                                            transform="matrix(1,0,0,1,0,0)"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              fillOpacity={0}
                                              stroke="rgb(106,115,125)"
                                              strokeOpacity={1}
                                              strokeWidth={12}
                                              d=" M-13.017000198364258,66.65499877929688 C-5.420000076293945,66.65499877929688 0.012000000104308128,66.65499877929688 0.012000000104308128,66.65499877929688 C0.012000000104308128,66.65499877929688 13.017000198364258,66.65499877929688 13.017000198364258,66.65499877929688 C19.790000915527344,66.65499877929688 31.166000366210938,67.38700103759766 31.166000366210938,57.349998474121094 C31.166000366210938,57.349998474121094 31.166000366210938,10.444999694824219 31.166000366210938,10.444999694824219 C31.166000366210938,7.123000144958496 33.220001220703125,4.84499979019165 37.08700180053711,4.84499979019165 C37.08700180053711,4.84499979019165 62.66999816894531,4.84499979019165 62.66999816894531,4.84499979019165 C70.41000366210938,4.84499979019165 65.00399780273438,-1.2549999952316284 62.263999938964844,-3.871000051498413 C59.52399826049805,-6.486999988555908 35.345001220703125,-31.802000045776367 35.345001220703125,-31.802000045776367 C35.345001220703125,-31.802000045776367 7.182000160217285,-61.29399871826172 3.938999891281128,-64.38899993896484 C0.6959999799728394,-67.48400115966797 -0.8180000185966492,-67.36799621582031 -3.938999891281128,-64.38899993896484 C-7.059999942779541,-61.40999984741211 -35.345001220703125,-31.802000045776367 -35.345001220703125,-31.802000045776367 C-35.345001220703125,-31.802000045776367 -59.52399826049805,-6.486999988555908 -62.263999938964844,-3.871000051498413 C-65.00399780273438,-1.2549999952316284 -70.41000366210938,4.84499979019165 -62.66999816894531,4.84499979019165 C-54.93000030517578,4.84499979019165 -42.76300048828125,4.84499979019165 -37.08700180053711,4.84499979019165 C-33.220001220703125,4.84499979019165 -31.166000366210938,7.123000144958496 -31.166000366210938,10.444999694824219 C-31.166000366210938,25.39699935913086 -31.166000366210938,50.75699996948242 -31.166000366210938,57.349998474121094 C-31.166000366210938,67.38700103759766 -19.790000915527344,66.65499877929688 -13.017000198364258,66.65499877929688z"
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        clipPath="url(#__lottie_element_226)"
                                        style={{
                                          display: "block",
                                        }}
                                        transform="matrix(1,0,0,1,48,284)"
                                        opacity={1}
                                      >
                                        <g
                                          style={{
                                            display: "block",
                                          }}
                                          transform="matrix(1.3087400197982788,0,0,1.1891900300979614,79.83300018310547,79.83399963378906)"
                                          opacity={1}
                                        >
                                          <g
                                            opacity={1}
                                            transform="matrix(1,0,0,1,0,0)"
                                          >
                                            <path
                                              fill="rgb(111,207,151)"
                                              fillOpacity={1}
                                              d=" M0.5,-55.5 C0.5,-55.5 -50.96699905395508,4.488999843597412 -50.96699905395508,4.488999843597412 C-50.96699905395508,4.488999843597412 -25.150999069213867,4.567999839782715 -25.150999069213867,4.567999839782715 C-25.150999069213867,4.567999839782715 -24.20800018310547,52.5 -24.20800018310547,52.5 C-24.20800018310547,52.5 23.826000213623047,53.08000183105469 23.826000213623047,53.08000183105469 C23.826000213623047,53.08000183105469 23.297000885009766,4.6479997634887695 23.297000885009766,4.6479997634887695 C23.297000885009766,4.6479997634887695 51.20199966430664,0.7049999833106995 51.20199966430664,0.7049999833106995 C51.20199966430664,0.7049999833106995 0.5,-55.5 0.5,-55.5z"
                                            />
                                          </g>
                                        </g>
                                        <g
                                          style={{
                                            display: "block",
                                          }}
                                          transform="matrix(1,0,0,1,79.99500274658203,80.0009994506836)"
                                          opacity={1}
                                        >
                                          <g
                                            opacity={1}
                                            transform="matrix(1,0,0,1,0,0)"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              fillOpacity={0}
                                              stroke="rgb(0,170,69)"
                                              strokeOpacity={1}
                                              strokeWidth={12}
                                              d=" M-13.017000198364258,66.65499877929688 C-5.420000076293945,66.65499877929688 0.012000000104308128,66.65499877929688 0.012000000104308128,66.65499877929688 C0.012000000104308128,66.65499877929688 13.017000198364258,66.65499877929688 13.017000198364258,66.65499877929688 C19.790000915527344,66.65499877929688 31.166000366210938,67.38700103759766 31.166000366210938,57.349998474121094 C31.166000366210938,57.349998474121094 31.166000366210938,10.444999694824219 31.166000366210938,10.444999694824219 C31.166000366210938,7.123000144958496 33.220001220703125,4.84499979019165 37.08700180053711,4.84499979019165 C37.08700180053711,4.84499979019165 62.66999816894531,4.84499979019165 62.66999816894531,4.84499979019165 C70.41000366210938,4.84499979019165 65.00399780273438,-1.2549999952316284 62.263999938964844,-3.871000051498413 C59.52399826049805,-6.486999988555908 35.345001220703125,-31.802000045776367 35.345001220703125,-31.802000045776367 C35.345001220703125,-31.802000045776367 7.182000160217285,-61.29399871826172 3.938999891281128,-64.38899993896484 C0.6959999799728394,-67.48400115966797 -0.8180000185966492,-67.36799621582031 -3.938999891281128,-64.38899993896484 C-7.059999942779541,-61.40999984741211 -35.345001220703125,-31.802000045776367 -35.345001220703125,-31.802000045776367 C-35.345001220703125,-31.802000045776367 -59.52399826049805,-6.486999988555908 -62.263999938964844,-3.871000051498413 C-65.00399780273438,-1.2549999952316284 -70.41000366210938,4.84499979019165 -62.66999816894531,4.84499979019165 C-54.93000030517578,4.84499979019165 -42.76300048828125,4.84499979019165 -37.08700180053711,4.84499979019165 C-33.220001220703125,4.84499979019165 -31.166000366210938,7.123000144958496 -31.166000366210938,10.444999694824219 C-31.166000366210938,25.39699935913086 -31.166000366210938,50.75699996948242 -31.166000366210938,57.349998474121094 C-31.166000366210938,67.38700103759766 -19.790000915527344,66.65499877929688 -13.017000198364258,66.65499877929688z"
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        style={{
                                          mixBlendMode: "overlay",
                                          display: "none",
                                        }}
                                      >
                                        <g>
                                          <path fill="url(#__lottie_element_232)" />
                                          <path
                                            strokeLinecap="butt"
                                            strokeLinejoin="miter"
                                            fillOpacity={0}
                                            strokeMiterlimit={4}
                                          />
                                        </g>
                                      </g>
                                      <g
                                        style={{
                                          display: "none",
                                        }}
                                      >
                                        <g>
                                          <path />
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className="transition-transform transform group-hover:-translate-y-0.5 "
                              style={{
                                opacity: 1,
                                filter: "blur(0px)",
                                transform: "none",
                              }}
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.0017 21.9982H10.0475C9.03149 21.9982 7.32508 22.1082 7.32508 20.6026V13.5667C7.32508 13.0684 7.01695 12.7268 6.43689 12.7268H2.59948C1.43841 12.7268 2.24946 11.8116 2.66039 11.4193C3.07133 11.027 6.69819 7.22967 6.69819 7.22967C6.69819 7.22967 10.941 2.78849 11.4091 2.34169C11.8772 1.8949 12.1044 1.87739 12.5909 2.34169C13.0774 2.806 17.3018 7.22967 17.3018 7.22967C17.3018 7.22967 20.9287 11.027 21.3396 11.4193C21.7505 11.8116 22.5616 12.7268 21.4005 12.7268H17.5631C16.983 12.7268 16.6749 13.0684 16.6749 13.5667V20.6026C16.6749 22.1082 14.9685 21.9982 13.9525 21.9982H12.0017Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </div>
                          </div>
                          <span className="font-semibold tabular-nums z-[1]  text-sm">
                            <number-flow-react
                              aria-label={34}
                              role="img"
                              data='{"pre":[],"integer":[{"type":"integer","value":3,"key":"integer:1","pos":1},{"type":"integer","value":4,"key":"integer:0","pos":0}],"fraction":[],"post":[],"valueAsString":"34","value":34}'
                            />
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <p className="text-gray-1k font-semibold text-sm paragraph-clamp1 group-hover/projectCard:underline">
                      Gistr.so - Chrome extension
                    </p>
                    <p className="text-gray-500 dark:text-gray-600 font-normal text-xs ">
                      Summarize, retain and recall all your YouTube bookmarks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="flex flex-col gap-6">
            <a
              className="group flex items-center justify-between"
              href="/scroll/trending"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                    <span className="relative block rounded-full h-2 w-2 bg-green-300" />
                  </span>
                </div>
                <p className="text-gray-1k font-semibold text-sm group-hover:underline">
                  Active Discussions
                </p>
              </div>
              <button
                type="button"
                className="group-hover:bg-gray-00 group-hover:border-gray-200 justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-xs leading-4 py-1 h-6 rounded-lg w-6 text-gray-1k bg-gray-00 border-transparent hover:border-gray-200 disabled:bg-gray-100 disabled:hover:border-transparent dark:hover:bg-gray-200 dark:hover:border-gray-200 dark:disabled:bg-gray-100 dark:disabled:hover:bg-gray-100 dark:disabled:hover:border-gray-100 hover:shadow-10 dark:hover:shadow-15"
                fdprocessedid="r3h5kn"
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </button>
            </a>
            <div
              style={{
                opacity: 1,
                transform: "translateX(0%) translateZ(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="flex gap-2">
                <div>
                  <span className="max-w-fit ">
                    <a className="flex items-center" href="/saurabhnative">
                      <div className="w-10 h-10 relative">
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <img
                              className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://dqy38fnwh4fqs.cloudfront.net/UHQ7BRQDONLG7JECDERPQRKJKDB9/e27818b1-74d9-4261-9452-d6f6c648ea49.png"
                              alt="Saurabh Mhatre"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center">
                      <span className="max-w-fit ">
                        <a
                          className="flex items-center hover:underline"
                          href="/saurabhnative"
                        >
                          <p className="text-gray-1k font-medium text-sm ">
                            Saurabh Mhatre
                          </p>
                        </a>
                      </span>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-[10px] ml-2">
                        1m{" "}
                      </p>
                      <span className="text-gray-700 flex items-center text-xs">
                        &nbsp;•&nbsp;
                        <button
                          data-tip="true"
                          data-for="from-mobile-app"
                          data-effect="solid"
                          type="button"
                          currentitem="false"
                          fdprocessedid="2oxelk"
                        >
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 9c0-3.3 0-4.95 1.025-5.975C7.05 2 8.7 2 12 2s4.95 0 5.975 1.025C19 4.05 19 5.7 19 9v6c0 3.3 0 4.95-1.025 5.975C16.95 22 15.3 22 12 22s-4.95 0-5.975-1.025C5 19.95 5 18.3 5 15V9z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              vectorEffect="non-scaling-stroke"
                            />
                            <path
                              d="M11 19h2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              vectorEffect="non-scaling-stroke"
                            />
                            <path
                              d="M9 2l.089.534c.193 1.157.29 1.736.686 2.088C10.19 4.989 10.776 5 12 5c1.224 0 1.81-.01 2.225-.378.397-.352.493-.93.686-2.088L15 2"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                          <span className="sr-only">From Mobile App</span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <a
                    className="flex flex-col cursor-pointer group"
                    href="/scroll/post/ACTHA9NJMBRBPPANR3K969MJJLM7BD"
                  >
                    <div className="flex flex-col gap-1 mb-2">
                      <p className="text-gray-1k font-semibold text-sm paragraph-clamp">
                        Introducing Frontend Vibes
                      </p>
                      <div className="break-words text-gray-1k post-caption font-normal text-sm">
                        <p className="">
                          Frontend vibes is a collection of resources wherein
                          you can
                        </p>
                        <p className="">
                          1. Learn and advance your understand
                          <span>...</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex ml-1 items-center cursor-pointer">
                      <div className="-ml-1">
                        <div className="w-4 h-4 relative">
                          <div className="w-4 h-4 rounded-full overflow-hidden ">
                            <img
                              className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://dqy38fnwh4fqs.cloudfront.net/UHQ7BRQDONLG7JECDERPQRKJKDB9/e27818b1-74d9-4261-9452-d6f6c648ea49.png"
                              alt="Saurabh Mhatre profile"
                              width={16}
                              height={16}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-gray-1k font-normal text-[10px] ml-1 group-hover:underline">
                          <strong>Saurabh</strong> commented{" "}
                        </p>
                        <span className="group-hover:translate-x-0.5 transition-all duration-150 ease-in-out">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                opacity: 1,
                transform: "translateX(0%) translateZ(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="flex gap-2">
                <div>
                  <span className="max-w-fit ">
                    <a className="flex items-center" href="/dhmxn_punit">
                      <div className="w-10 h-10 relative">
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <img
                              className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://dqy38fnwh4fqs.cloudfront.net/UH7BJ6MR9K6NR9BCJEJA88BN9KOE/h7bj6mr9k6nr9bcjeja88bn9koe-profile.webp"
                              alt="Punit Sing"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center">
                      <span className="max-w-fit ">
                        <a
                          className="flex items-center hover:underline"
                          href="/dhmxn_punit"
                        >
                          <p className="text-gray-1k font-medium text-sm ">
                            Punit Sing
                          </p>
                        </a>
                      </span>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-[10px] ml-2">
                        10h{" "}
                      </p>
                    </div>
                  </div>
                  <a
                    className="flex flex-col cursor-pointer group"
                    href="/scroll/post/ACTHP69K7KLRRGBR82RL9LOMKJG6PP"
                  >
                    <div className="flex flex-col gap-1 mb-2">
                      <p className="text-gray-1k font-semibold text-sm paragraph-clamp">
                        Excited to share Klypp with the Peerlist community!
                      </p>
                      <div className="break-words text-gray-1k post-caption font-normal text-sm">
                        <p className="">Hey&nbsp;Peerlist! 👋</p>
                        <p className="">
                          Introducing&nbsp;Klypp! It's&nbsp;an&nbsp;app
                          that&nbsp;makes managing&nbsp;and sharing subscription
                          cos
                          <span>...</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex ml-1 items-center cursor-pointer">
                      <div className="-ml-1">
                        <div className="w-4 h-4 relative">
                          <div className="w-4 h-4 rounded-full overflow-hidden ">
                            <img
                              className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://lh3.googleusercontent.com/a/ACg8ocIKYMjH6lA8HxuW2Me0hUL_yYJ-Urd5fbI461Wa3rdmHQ=s96-c"
                              alt="Mohammad Shakeb profile"
                              width={16}
                              height={16}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-gray-1k font-normal text-[10px] ml-1 group-hover:underline">
                          <strong>Mohammad</strong> commented{" "}
                        </p>
                        <span className="group-hover:translate-x-0.5 transition-all duration-150 ease-in-out">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                opacity: 1,
                transform: "translateX(0%) translateZ(0px)",
                filter: "blur(0px)",
              }}
            >
              <div className="flex gap-2">
                <div>
                  <span className="max-w-fit ">
                    <a className="flex items-center" href="/bestcodes">
                      <div className="w-10 h-10 relative">
                        <div className="w-10 h-10 relative">
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -right-1 bottom-0 outline-none z-1"
                          >
                            <rect
                              x={1}
                              y={1}
                              width={18}
                              height={18}
                              rx={9}
                              fill="rgb(var(--gray-00))"
                            />
                            <path
                              d="M8.4773 2.80234C9.21702 1.73255 10.7828 1.73255 11.5225 2.80234C11.9706 3.45043 12.7717 3.74544 13.5267 3.54042C14.773 3.20199 15.9725 4.22029 15.8595 5.52087C15.791 6.30877 16.2173 7.05577 16.9259 7.38975C18.0957 7.94104 18.3675 9.50115 17.4547 10.424C16.9017 10.983 16.7537 11.8325 17.0844 12.5492C17.6302 13.7322 16.8473 15.1042 15.5618 15.2174C14.783 15.286 14.1299 15.8405 13.9279 16.6046C13.5944 17.8658 12.1231 18.4076 11.0663 17.6583C10.4262 17.2044 9.57363 17.2044 8.93345 17.6583C7.87671 18.4076 6.40539 17.8658 6.07192 16.6046C5.86989 15.8405 5.21682 15.286 4.43803 15.2174C3.15249 15.1042 2.36961 13.7322 2.91544 12.5492C3.24611 11.8325 3.09807 10.983 2.54507 10.424C1.63224 9.50115 1.90413 7.94104 3.07386 7.38975C3.78249 7.05577 4.20875 6.30877 4.1403 5.52087C4.02731 4.22029 5.22675 3.20199 6.47304 3.54042C7.22807 3.74544 8.02918 3.45043 8.4773 2.80234Z"
                              fill="url(#paint0_linear_11664_9169)"
                            />
                            <path
                              d="M6.66667 10.254L8.66667 12.1112L13.3333 7.77783"
                              stroke="#fff"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <rect
                              x={1}
                              y={1}
                              width={18}
                              height={18}
                              rx={9}
                              stroke="rgb(var(--gray-00))"
                              strokeWidth={2}
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_11664_9169"
                                x1="9.9999"
                                y1={2}
                                x2="9.9999"
                                y2={18}
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#27AE60" />
                                <stop offset={1} stopColor="#1E874B" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="w-10 h-10 rounded-full overflow-hidden ">
                            <img
                              className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                              src="https://dqy38fnwh4fqs.cloudfront.net/UH8O988N8B8BRM81RMDRQJ6GEO8R/h8o988n8b8brm81rmdrqj6geo8r-profile.webp"
                              alt="William Steele"
                              width={40}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center">
                      <span className="max-w-fit ">
                        <a
                          className="flex items-center hover:underline"
                          href="/bestcodes"
                        >
                          <p className="text-gray-1k font-medium text-sm ">
                            William Steele
                          </p>
                        </a>
                      </span>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-[10px] ml-2">
                        1h{" "}
                      </p>
                    </div>
                  </div>
                  <a
                    className="flex flex-col cursor-pointer group"
                    href="/scroll/post/ACTHR86M9LKQKAQDP2ANP9B7E8GBK9"
                  />
                  <div className="flex flex-col gap-1 mb-2">
                    <a
                      className="flex flex-col cursor-pointer group"
                      href="/scroll/post/ACTHR86M9LKQKAQDP2ANP9B7E8GBK9"
                    >
                      <p className="text-gray-1k font-semibold text-sm paragraph-clamp">
                        Vercel AI SDK
                      </p>
                    </a>
                    <div className="break-words text-gray-1k post-caption font-normal text-sm">
                      <a
                        className="flex flex-col cursor-pointer group"
                        href="/scroll/post/ACTHR86M9LKQKAQDP2ANP9B7E8GBK9"
                      >
                        <p className="">Have you used the AI SDK?</p>
                      </a>
                      <p className="">
                        <a
                          className="flex flex-col cursor-pointer group"
                          href="/scroll/post/ACTHR86M9LKQKAQDP2ANP9B7E8GBK9"
                        />
                        <a
                          href="https://sdk.vercel.ai/"
                          rel="noreferrer nofollow ugc"
                          target="_blank"
                          className="text-green-500"
                        >
                          https://sdk.vercel.ai/
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex ml-1 items-center cursor-pointer">
                    <div className="-ml-1">
                      <div className="w-4 h-4 relative">
                        <div className="w-4 h-4 rounded-full overflow-hidden ">
                          <img
                            className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                            src="https://dqy38fnwh4fqs.cloudfront.net/UH8O988N8B8BRM81RMDRQJ6GEO8R/h8o988n8b8brm81rmdrqj6geo8r-profile.webp"
                            alt="William Steele profile"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="-ml-1">
                      <div className="w-4 h-4 relative">
                        <div className="w-4 h-4 rounded-full overflow-hidden ">
                          <img
                            className="w-4 h-4 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1  rounded-full bg-gray-00"
                            src="https://lh3.googleusercontent.com/a/ACg8ocLg7mRUDPqpFSF2rXu62h0a98WSXSx8WD7tkBoisEfKVh7GxEc=s96-c"
                            alt="Sahil Mahapatra profile"
                            width={16}
                            height={16}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-gray-1k font-normal text-[10px] ml-1 group-hover:underline">
                        <strong>William</strong> commented{" "}
                      </p>
                      <span className="group-hover:translate-x-0.5 transition-all duration-150 ease-in-out">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19.5833M19.5833 12L12.5833 5M19.5833 12L12.5833 19"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </aside>
    );
  } else {
    return null;
  }
};

export default AsideCompo;
