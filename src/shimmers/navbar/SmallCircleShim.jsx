import React from "react";

const SmallCircleShim = ({ children,show }) => {
  return (
    <div
      className={`
      Navbar-right h-8 min-w-8 bg-purple-100 rounded-full flex justify-center items-center text-purple-500
      sm:${show}
      `}
    >
      {children}
    </div>
  );
};

export default SmallCircleShim;
