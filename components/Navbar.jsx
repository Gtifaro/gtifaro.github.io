import React from "react";

export default function Navbar({ children }) {
  return (
    <>
      <div className="bg-slate-50 w-full h-full">
        <div className="bg-black border-l-red-600 w-[2.5%] h-screen fixed"></div>
        <div>{children}</div>
      </div>
    </>
  );
}
