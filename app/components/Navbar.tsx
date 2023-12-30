import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="navbar pr-5 bg-base-100 border border-b shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-semi-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-semi-bold">
              <Link href="/product">Products</Link>
            </li>
            <li className="text-semi-bold">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">AK Plus</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-semi-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-semi-bold">
            <Link href="/product">Products</Link>
          </li>
          <li className="text-semi-bold">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
