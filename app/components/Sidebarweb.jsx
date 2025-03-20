"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebarweb = () => {
  const path = usePathname();
  //   console.log(path);
  if (path === "/") {
    return;
  }
  // const links=['Scroll','Launchpad','Articles','Jobs','Search','Blog']
  return (
    <div className="hidden lg:block">
      <div className="w-[212px] border-r border-primaryBorder flex-col flex-shrink-0 fixed h-screen pb-2 lg:flex justify-between hidden">
        <div className="relative my-3">
          <Link href="/">
            <div className="block dark:hidden">
              <img
                alt="Peerlist"
                loading="lazy"
                width={124}
                height={32}
                decoding="async"
                data-nimg={1}
                className="h-8"
                src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full-light.svg"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="hidden dark:block">
              <img
                alt="Peerlist"
                loading="lazy"
                width={124}
                height={32}
                decoding="async"
                data-nimg={1}
                className="h-8"
                src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full-dark.svg"
                style={{ color: "transparent" }}
              />
            </div>
          </Link>
        </div>
        <div className="pr-6 flex flex-col justify-between h-full overflow-y-auto hide-scrollbar">
          <div className="mt-6">
            <Link
              className="flex lg:flex-row flex-col items-center group  pt-2 lg:py-2.5"
              href="/scroll"
            >
              <span className="relative text-gray-1k shrink-0">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17H12.009"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              <span className="flex flex-col lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
                <span
                  className={`paragraph-clamp1 lg:text-base text-xxs text-gray-1k ${
                    path === "/scroll" ? "font-bold" : "font-normal"
                  } `}
                >
                  Scroll
                </span>
              </span>
            </Link>
            <Link
              className="flex lg:flex-row flex-col items-center group  pt-2 lg:py-2.5"
              href="/launchpad/2025/week/10"
            >
              <span className="relative text-gray-1k shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    d="M17.638 11.58l3.06 3.67a.806.806 0 01.167.693l-1.248 5.616a.807.807 0 01-1.293.456l-2.973-2.246M6.362 11.58l-3.06 3.67a.807.807 0 00-.167.693l1.248 5.616a.808.808 0 001.293.456l2.973-2.246"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.65 19.77c-5.785-9.761.914-16.1 2.854-17.6a.808.808 0 01.992 0c1.94 1.5 8.639 7.838 2.855 17.6H8.649zM13.615 23h-3.23"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    fill="currentColor"
                    d="M12 11.693a1.211 1.211 0 100-2.423 1.211 1.211 0 000 2.423z"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              <span className="flex flex-col lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
                <span
                  className={`paragraph-clamp1 lg:text-base text-xxs text-gray-1k ${
                    path === "/launchpad" ? "font-bold" : "font-normal"
                  } `}
                >
                  Launchpad
                </span>
              </span>
            </Link>
            <Link
              className="flex lg:flex-row flex-col items-center group border-t-2 border-green lg:border-0 pt-2 lg:py-2.5"
              href="/snap"
            >
              <span className="relative text-gray-1k shrink-0">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_22634_9256)">
                    <path
                      d="M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M12 12V22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M10 5H14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_22634_9256">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="flex flex-col lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
                <span
                  className={`paragraph-clamp1 lg:text-base text-xxs text-gray-1k ${
                    path === "/snap" ? "font-bold" : "font-normal"
                  } `}
                >
                  Snap
                </span>
              </span>
            </Link>
            <Link
              className="flex lg:flex-row flex-col items-center group  pt-2 lg:py-2.5"
              href="/jobs"
            >
              <span className="relative text-gray-1k shrink-0">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15V16.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M3 11L3.15288 13.8633C3.31714 17.477 3.39927 19.2839 4.55885 20.3919C5.71843 21.5 7.52716 21.5 11.1446 21.5H12.8554C16.4728 21.5 18.2816 21.5 19.4412 20.3919C20.6007 19.2839 20.6829 17.477 20.8471 13.8633L21 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M2.84718 10.4431C4.54648 13.6744 8.3792 15 12 15C15.6208 15 19.4535 13.6744 21.1528 10.4431C21.964 8.90056 21.3498 6 19.352 6H4.648C2.65023 6 2.03603 8.90056 2.84718 10.4431Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M15.9999 6L15.9116 5.69094C15.4716 4.15089 15.2516 3.38087 14.7278 2.94043C14.204 2.5 13.5083 2.5 12.1168 2.5H11.8829C10.4915 2.5 9.79575 2.5 9.27198 2.94043C8.7482 3.38087 8.52819 4.15089 8.08818 5.69094L7.99988 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              <span className="flex flex-col lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
                <span
                  className={`paragraph-clamp1 lg:text-base text-xxs text-gray-1k ${
                    path === "/jobs" ? "font-bold" : "font-normal"
                  } `}
                >
                  Jobs
                </span>
              </span>
            </Link>
            <Link
              className="flex lg:flex-row flex-col items-center group  pt-2 lg:py-2.5"
              href="/search"
            >
              <span className="relative text-gray-1k shrink-0">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17L21 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              <span className="flex flex-col lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
                <span
                  className={`paragraph-clamp1 lg:text-base text-xxs text-gray-1k ${
                    path === "/search" ? "font-bold" : "font-normal"
                  } `}
                >
                  Search
                </span>
              </span>
            </Link>
            <Link
              className="flex lg:flex-row flex-col items-center group  pt-2 lg:py-2.5"
              href="/blog"
            >
              <span className="relative text-gray-1k shrink-0">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8663 4.6969C14.537 3.97027 14.8724 3.60696 15.2287 3.39504C16.0884 2.88368 17.1472 2.86778 18.0214 3.35309C18.3836 3.55422 18.7292 3.90731 19.4205 4.61348C20.1118 5.31966 20.4575 5.67275 20.6543 6.04284C21.1294 6.93581 21.1139 8.01731 20.6133 8.89563C20.4058 9.25964 20.0501 9.6022 19.3389 10.2873L10.8755 18.4389C9.52759 19.7372 8.8536 20.3864 8.01126 20.7153C7.16891 21.0444 6.24288 21.0202 4.39083 20.9717L4.13884 20.9652C3.57502 20.9504 3.2931 20.943 3.12923 20.757C2.96535 20.5711 2.98773 20.2839 3.03247 19.7096L3.05677 19.3977C3.18271 17.7812 3.24567 16.973 3.56134 16.2464C3.877 15.5198 4.4215 14.93 5.51049 13.7501L13.8663 4.6969Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M12.9 4.80005L19.2 11.1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M13.8 21H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              <span className="flex flex-col lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
                <span
                  className={`paragraph-clamp1 lg:text-base text-xxs text-gray-1k ${
                    path === "blog" ? "font-bold" : "font-normal"
                  } `}
                >
                  Blog
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div>
            <div className="text-gray text-xs lg:mb-1 mb-6 leading-145 font-normal text-left mr-4">
              <a className="hover:underline" href="/blog">
                Blog
              </a>
              &nbsp;•&nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                href="mailto:support@peerlist.io"
              >
                Support
              </a>
              &nbsp;•&nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                href="https://help.peerlist.io/"
              >
                Help
              </a>
              &nbsp;•&nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
                href="https://help.peerlist.io/legal"
              >
                Legal
              </a>
            </div>
            <p className="text-gray-1k font-normal text-[10px] text-gray">
              © 2025 Peerlist, Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebarweb;
