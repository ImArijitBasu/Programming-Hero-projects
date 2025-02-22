"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex mt-5 justify-center max-w-2xl items-center border mx-auto rounded-3xl py-2 shadow-xl shadow-slate-700 ">
          <ul className="flex justify-evenly w-full">
            <Link
              className="border w-full rounded-xl mx-2 text-center border-slate-800 hover:border-amber-500 transition-all duration-300 uppercase"
              href={"/"}
            >
              <li>Home</li>
            </Link>
            <Link
              className="border w-full rounded-xl mx-2 text-center border-slate-800 hover:border-amber-500 transition-all duration-300 uppercase"
              href={"/services"}
            >
              <li>services</li>
            </Link>
            <Link
              className="border w-full rounded-xl mx-2 text-center border-slate-800 hover:border-amber-500 transition-all duration-300 uppercase"
              href={"/about"}
            >
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else <></>;
};

export default Navbar;
