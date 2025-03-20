import Tab from "@/app/components/Tab";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="lg:w-[640px] w-full h-full pb-20  pt-14">
      <Tab />
      <div className="py-6 relative h-full">
        <div className="mb-20 space-y-2">{children}</div>
      </div>
    </div>
  );
};

export default layout;
