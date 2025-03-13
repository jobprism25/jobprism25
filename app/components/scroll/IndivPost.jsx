"use client";
import { useRouter } from "next/navigation";
import React from "react";

const IndivPost = ({ id }) => {
  const router = useRouter();
  return (
    <div
      data-index={1}
      data-known-size={151}
      data-item-index={1}
      style={{ overflowAnchor: "none" }}
    >
      <div>
        <article
          role="none"
          onClick={() => router.push(`/scroll/post/${id}`)}
          className="bg-gray-00 px-4 mob:px-6 py-4 border-b border-primaryBorder hover:bg-gray-25 cursor-pointer group/post-card"
        >
          <div />
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <span className="max-w-fit ">
                  <a className="flex items-center" href="/danishfareed">
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
                            src="https://lh3.googleusercontent.com/a/ACg8ocLhQhv7qL2tU8HpB6shZZeLJUqYiFIqdG3DoKOXDyd9X_7UHbu4=s96-c"
                            alt="Danish Fareed"
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </span>
                <div className="ml-2">
                  <div className="flex flex-wrap items-center whitespace-nowrap gap-2">
                    <span className="max-w-fit ">
                      <div className="flex items-center gap-1">
                        <a className="flex items-center" href="/danishfareed">
                          <h3 className="text-sm text-gray-1k font-semibold capitalize hover:underline transition">
                            Danish Fareed
                          </h3>
                        </a>
                      </div>
                    </span>
                    <div role="none">
                      <div className="relative z-0">
                        <button
                          small=""
                          id="follow-profile"
                          className="text-blue-400 text-xs hover:underline font-bold"
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs leading-4">
                    <div className="flex items-center flex-wrap">
                      <a href="/danishfareed">
                        <span>@danishfareed</span>
                      </a>
                      &nbsp;•&nbsp;
                      <span className="inline-flex items-center">
                        <a className="hover:underline" href="/scroll/thought">
                          #thought
                        </a>{" "}
                      </span>
                      &nbsp;•&nbsp;<span>8m </span>
                      <span className="text-gray-700 flex items-center text-xs">
                        &nbsp;•&nbsp;
                        <button
                          data-tip="true"
                          data-for="from-mobile-app"
                          data-effect="solid"
                          type="button"
                          currentitem="false"
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
                </div>
              </div>
              <div role="none">
                <div role="none">
                  <div
                    id="dropdown-trigger-button"
                    className="w-fit relative flex  "
                  >
                    <button
                      type="button"
                      id="radix-:r5s:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                      className="outline-none absolute h-full w-full -z-10"
                    />
                    <div className="" role="button" tabIndex={0}>
                      <button
                        type="button"
                        className=" justify-center shrink-0 flex items-center font-semibold border transition-all ease-in duration-75 whitespace-nowrap text-center select-none disabled:shadow-none disabled:opacity-50 disabled:cursor-not-allowed gap-x-1 active:shadow-none text-xs leading-4 py-1 h-6 rounded-lg w-6 text-gray-1k bg-gray-00 border-transparent hover:border-gray-200 disabled:bg-gray-100 disabled:hover:border-transparent dark:hover:bg-gray-200 dark:hover:border-gray-200 dark:disabled:bg-gray-100 dark:disabled:hover:bg-gray-100 dark:disabled:hover:border-gray-100 hover:shadow-10 dark:hover:shadow-15"
                      >
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.992 12h.009M11.984 18h.01M12 6h.009"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-12">
            <div>
              <div className="break-words text-gray-1k post-caption font-normal rich-text-paragraph-regular text-sm mb-2">
                <p className="">
                  Consistency beats motivation every time. You won’t always feel
                  like showing up, but showing up is what makes the difference.
                  Keep building.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full pl-12">
            <div
              id="reaction-box"
              className="flex cursor-default justify-between gap-4 mob:gap-0 items-center"
            >
              <div className="flex justify-between gap-4 mob:gap-4 sm:gap-8 items-center">
                <button
                  title="Comment"
                  type="button"
                  className="flex items-center gap-0.5 text-xs group relative rounded-lg transition-colors duration-200 ease-in-out pr-2 pl-0.5 py-0.5 group-hover/post-card:bg-gray-00 "
                >
                  <span className="group-hover:bg-blue-50 group-hover:text-blue-400 text-gray-1k flex items-center justify-center rounded-lg h-6 w-6 ">
                    <div className="lf-player-container">
                      <div
                        id="lottie"
                        style={{
                          background: "transparent",
                          margin: "0px auto",
                          outline: "none",
                          overflow: "hidden",
                          height: 24,
                          width: 24,
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
                            <clipPath id="__lottie_element_1773">
                              <rect width={256} height={256} x={0} y={0} />
                            </clipPath>
                            <clipPath id="__lottie_element_1775">
                              <path d="M0,0 L144,0 L144,144 L0,144z" />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#__lottie_element_1773)">
                            <g
                              clipPath="url(#__lottie_element_1775)"
                              style={{ display: "block" }}
                              transform="matrix(1,0,0,1,56,56)"
                              opacity={1}
                            >
                              <g
                                style={{ display: "block" }}
                                transform="matrix(1,0,0,1,71,81)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fillOpacity={0}
                                    stroke="rgb(47,128,237)"
                                    strokeOpacity={1}
                                    strokeWidth={12}
                                    d="M0 0"
                                  />
                                </g>
                              </g>
                              <g
                                style={{ display: "block" }}
                                transform="matrix(1,0,0,1,60,51)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fillOpacity={0}
                                    stroke="rgb(47,128,237)"
                                    strokeOpacity={1}
                                    strokeWidth={12}
                                    d="M0 0"
                                  />
                                </g>
                              </g>
                              <g
                                style={{ display: "block" }}
                                transform="matrix(1,0,0,1,72,72)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="miter"
                                    fillOpacity={0}
                                    strokeMiterlimit={4}
                                    stroke="rgb(47,128,237)"
                                    strokeOpacity={1}
                                    strokeWidth={12}
                                    d=" M-33,33 C-34.233001708984375,39.01100158691406 -39.73400115966797,51.999000549316406 -34.10599899291992,56.191001892089844 C-31.163999557495117,58.33100128173828 -26.47599983215332,56.04399871826172 -17.10099983215332,51.472999572753906 C-10.520999908447266,48.263999938964844 -3.861999988555908,44.584999084472656 3.328000068664551,42.93000030517578 C5.959000110626221,42.33100128173828 8.63700008392334,42.07500076293945 12,42 C34.62699890136719,42 45.941001892089844,42 52.970001220703125,34.970001220703125 C60,27.94099998474121 60,16.62700080871582 60,-6 C60,-6 60,-9 60,-9 C60,-31.62700080871582 60,-42.94200134277344 52.970001220703125,-49.97100067138672 C45.941001892089844,-57 34.62699890136719,-57 12,-57 C12,-57 -12,-57 -12,-57 C-34.62699890136719,-57 -45.94200134277344,-57 -52.97100067138672,-49.97100067138672 C-60,-42.94200134277344 -60,-31.62700080871582 -60,-9 C-60,-9 -60,-6 -60,-6 C-60,16.62700080871582 -60,27.94099998474121 -52.97100067138672,34.970001220703125 C-49.051998138427734,38.888999938964844 -43.20800018310547,41.233001708984375 -35.40700149536133,42"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <span className="block">
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
                  </span>
                  <span className="tabular-nums">
                    <number-flow-react
                      aria-label={0}
                      role="img"
                      data='{"pre":[],"integer":[{"type":"integer","value":0,"key":"integer:0","pos":0}],"fraction":[],"post":[],"valueAsString":"0","value":0}'
                    />
                  </span>
                </button>
                <div role="none">
                  <div
                    id="dropdown-trigger-button"
                    className="w-fit relative flex  "
                  >
                    <button
                      type="button"
                      id="radix-:r5u:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                      className="outline-none absolute h-full w-full -z-10"
                    />
                    <div className="" role="button" tabIndex={0}>
                      <button
                        title="Reshare or Repost"
                        type="button"
                        className="flex items-center gap-0.5 text-xs group relative rounded-lg transition-colors duration-200 ease-in-out pr-2 pl-0.5 py-0.5 group-hover/post-card:bg-gray-00 "
                      >
                        <span className="group-hover:bg-orange-50 group-hover:text-orange transition-all text-gray-1k flex items-center justify-center rounded-lg h-6 w-6 ">
                          <span className="group-hover:animate-rotate-sync group-hover:rotate-[30deg] group-[:not(:hover)]:animate-rotate-back group-hover:text-orange transition-all ">
                            <svg
                              width={13}
                              height={13}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.2493 6.4C17.5466 4.79481 16.3897 3.42896 14.9205 2.4698C13.4512 1.51064 11.7334 0.999845 9.97742 1C5.29924 1 1.45113 4.5523 1 9.1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                              <path
                                d="M14.4889 6.40002H18.4588C18.5299 6.40002 18.6003 6.38606 18.6659 6.35892C18.7316 6.33178 18.7913 6.29201 18.8416 6.24186C18.8918 6.19172 18.9317 6.13219 18.9589 6.06667C18.9861 6.00116 19.0001 5.93094 19.0001 5.86002V1.90002M1.74994 13.6C3.14302 16.7788 6.32256 19 10.0218 19C14.7009 19 18.5481 15.4477 19.0001 10.9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                              <path
                                d="M5.51127 13.6H1.54135C1.39778 13.6 1.26008 13.6569 1.15856 13.7581C1.05704 13.8594 1 13.9968 1 14.14V18.1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        </span>
                        <span className="tabular-nums">
                          <number-flow-react
                            aria-label={0}
                            role="img"
                            data='{"pre":[],"integer":[{"type":"integer","value":0,"key":"integer:0","pos":0}],"fraction":[],"post":[],"valueAsString":"0","value":0}'
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  title="Upvote"
                  type="button"
                  className="flex items-center gap-0.5 text-xs group relative rounded-lg transition-colors duration-200 ease-in-out pr-2 pl-0.5 py-0.5 group-hover/post-card:bg-gray-00 "
                >
                  <span className="group-hover:bg-green-00 group-hover:text-green-300 text-gray-1k flex items-center justify-center rounded-lg h-6 w-6 ">
                    <div className="lf-player-container">
                      <div
                        id="lottie"
                        style={{
                          background: "transparent",
                          margin: "2px auto 0px",
                          outline: "none",
                          overflow: "hidden",
                          height: 22,
                          width: 22,
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
                            <clipPath id="__lottie_element_1788">
                              <rect width={256} height={256} x={0} y={0} />
                            </clipPath>
                            <clipPath id="__lottie_element_1802">
                              <path d="M0,0 L160,0 L160,160 L0,160z" />
                            </clipPath>
                            <clipPath id="__lottie_element_1806">
                              <path d="M0,0 L160,0 L160,160 L0,160z" />
                            </clipPath>
                            <linearGradient
                              id="__lottie_element_1812"
                              spreadMethod="pad"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop />
                              <stop />
                              <stop />
                            </linearGradient>
                          </defs>
                          <g clipPath="url(#__lottie_element_1788)">
                            <g
                              style={{ display: "block" }}
                              transform="matrix(1,0,0,1,120.5,121.5)"
                              opacity={1}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
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
                              style={{ display: "block" }}
                              transform="matrix(1,0,0,1,219.75,117)"
                              opacity={1}
                            >
                              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
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
                              style={{ display: "block" }}
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
                              style={{ display: "block" }}
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
                              clipPath="url(#__lottie_element_1802)"
                              style={{ display: "block" }}
                              transform="matrix(1,0,0,1,48,40)"
                              opacity={1}
                            >
                              <g
                                style={{ display: "block" }}
                                transform="matrix(1,0,0,1,79.99500274658203,80.0009994506836)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
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
                              clipPath="url(#__lottie_element_1806)"
                              style={{ display: "block" }}
                              transform="matrix(1,0,0,1,48,284)"
                              opacity={1}
                            >
                              <g
                                style={{ display: "block" }}
                                transform="matrix(1.3087400197982788,0,0,1.1891900300979614,79.83300018310547,79.83399963378906)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    fill="rgb(111,207,151)"
                                    fillOpacity={1}
                                    d=" M0.5,-55.5 C0.5,-55.5 -50.96699905395508,4.488999843597412 -50.96699905395508,4.488999843597412 C-50.96699905395508,4.488999843597412 -25.150999069213867,4.567999839782715 -25.150999069213867,4.567999839782715 C-25.150999069213867,4.567999839782715 -24.20800018310547,52.5 -24.20800018310547,52.5 C-24.20800018310547,52.5 23.826000213623047,53.08000183105469 23.826000213623047,53.08000183105469 C23.826000213623047,53.08000183105469 23.297000885009766,4.6479997634887695 23.297000885009766,4.6479997634887695 C23.297000885009766,4.6479997634887695 51.20199966430664,0.7049999833106995 51.20199966430664,0.7049999833106995 C51.20199966430664,0.7049999833106995 0.5,-55.5 0.5,-55.5z"
                                  />
                                </g>
                              </g>
                              <g
                                style={{ display: "block" }}
                                transform="matrix(1,0,0,1,79.99500274658203,80.0009994506836)"
                                opacity={1}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
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
                                <path fill="url(#__lottie_element_1812)" />
                                <path
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  fillOpacity={0}
                                  strokeMiterlimit={4}
                                />
                              </g>
                            </g>
                            <g style={{ display: "none" }}>
                              <g>
                                <path />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                    <span className="transition-transform transform group-hover:-translate-y-0.5 block">
                      <svg
                        width={14}
                        height={14}
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
                    </span>
                  </span>
                  <span className="tabular-nums">
                    <number-flow-react
                      aria-label={2}
                      role="img"
                      data='{"pre":[],"integer":[{"type":"integer","value":2,"key":"integer:0","pos":0}],"fraction":[],"post":[],"valueAsString":"2","value":2}'
                    />
                  </span>
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <button
                  title="Bookmark"
                  type="button"
                  className="flex items-center gap-0.5 text-xs group relative rounded-lg transition-colors duration-200 ease-in-out  group-hover/post-card:bg-gray-00 "
                >
                  <span className="group-hover:bg-cyan-light group-hover:shadow-none text-gray-1k flex items-center justify-center rounded-lg h-6 w-6 ">
                    <span className="group-hover:-rotate-[10deg] group-hover:text-cyan transition-all duration-150">
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
                  </span>
                </button>
                <div className="hidden md:block">
                  <button
                    title="Screenshot"
                    type="button"
                    className="flex items-center gap-0.5 text-xs group relative rounded-lg transition-colors duration-200 ease-in-out  group-hover/post-card:bg-gray-00 "
                  >
                    <span className="group-hover:bg-red-00 group-hover:text-red text-gray-1k flex items-center justify-center rounded-lg h-6 w-6 ">
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.9835 2C6.17689 2.06395 4.53758 2.33111 3.41752 3.44729C2.43723 4.42418 2.10954 5.79744 2 8M15.0165 2C17.8231 2.06395 19.4624 2.33111 20.5825 3.44729C21.5628 4.42418 21.8905 5.79744 22 8M15.0165 22C17.8231 21.9361 19.4624 21.6689 20.5825 20.5527C21.5628 19.5758 21.8905 18.2026 22 16M8.9835 22C6.17689 21.9361 4.53758 21.6689 3.41752 20.5527C2.43723 19.5758 2.10954 18.2026 2 16"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                        />
                        <path
                          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default IndivPost;
