"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link
import { ModeToggle } from "@/components/ui/toggle";
<<<<<<< HEAD
import SideNavbar from "./SideNavbar";
=======
import SideNavbar from "./sideNavbar";
>>>>>>> 8657132 (first commit)
import { UserButton } from "@clerk/nextjs";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sideNavbar = document.getElementById("sideNavbar");
      if (sideNavbar && !sideNavbar.contains(event.target)) {
        setShowNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-white shadow-md relative">
      {/* Side Navbar */}
      <div
        id="sideNavbar"
        className={`fixed left-0 top-0 h-full bg-white z-10 transition-transform duration-300 ease-in-out transform ${
          showNavbar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideNavbar />
      </div>

      {/* Header Section */}
      <div className="flex p-4 justify-between items-center">
        <div className="lg:hidden sm:hidden">
          <button onClick={toggleNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Horizontal Links to Blog, Notes, and Contact Pages */}
        <div className="ml-auto flex space-x-6">
        <Link href="/home" className="text-lg text-gray-700 hover:text-blue-500">
        Home
      </Link>
      <Link href="/categories" className="text-lg text-gray-700 hover:text-blue-500">
      Categories
    </Link>
          <Link href="/blog" className="text-lg text-gray-700 hover:text-blue-500">
            Blog
          </Link>
          <Link href="/notes" className="text-lg text-gray-700 hover:text-blue-500">
            Notes
          </Link>
          <Link href="/tutorial" className="text-lg text-gray-700 hover:text-blue-500">
            Tutorial
          </Link>
          <Link href="/contact" className="text-lg text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Mode Toggle and User Button */}
        <div className="flex ml-4 items-center">
          <div className="mr-5">
            <ModeToggle />
          </div>
          <div className="mt-1">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
