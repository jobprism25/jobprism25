"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

import React from "react";

const page = () => {
  const path = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (path === "/") {
      router.push("/scroll");
    }
  }, []);
  return <></>;
};

export default page;
