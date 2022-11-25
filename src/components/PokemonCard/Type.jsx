import React from "react";

export default function Type({ children }) {
  return (
    <span
      className="
          text-sm
          sm:text-base
          md:text-md 
          leading-none 
          border 
          py-1 
          px-3 
          flex 
          justify-center 
          items-center 
          rounded 
          text-slate-600 
          border-slate-400 
          cursor-pointer 
          hover:border-purple-700 
          hover:text-purple-700
          hover:bg-purple-100
          dark:border-white
          dark:text-white
          dark:hover:bg-purple-700
        "
    >
      {children}
    </span>
  );
}
