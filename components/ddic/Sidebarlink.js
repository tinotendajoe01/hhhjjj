import React from "react";

const Sidebarlink = ({ text, Icon, active }) => {
  return (
    <div
      className={`text-[rgb(217,217,217)] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation
       ${active && "font-bold"} `}
    >
      <Icon className="h-7 text-white" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default Sidebarlink;
