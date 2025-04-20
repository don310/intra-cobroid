"use client";

import React from "react";
import Header from "@/app/components/Header";
import SideNavbar from "@/app/components/SideNavbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const Tutorial = () => {
  const tutorials = [
    { id: "tutorials/python", name: "Python Tutorial", image: "/pic/python.png" },
    { id: "tutorials/c", name: "C Tutorial", image: "/pic/c.png" },
    { id: "tutorials/cpp", name: "C++ Tutorial", image: "/pic/c++.png" },
    { id: "tutorials/java", name: "Java Tutorial", image: "/pic/java.jfif" },
    { id: "tutorials/html-home", name: "HTML Tutorial", image: "/pic/html.png" },
    { id: "tutorials/css-home", name: "CSS Tutorial", image: "/pic/css.png" },
    { id: "tutorials/js-home", name: "JavaScript Tutorial", image: "/pic/js.png" },
    { id: "tutorials/php", name: "PHP Tutorial", image: "/pic/php.png" },
    { id: "tutorials/reactjs", name: "React JS Tutorial", image: "/pic/react.png" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      {/* Sticky Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
        <SideNavbar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Full-Width Fixed Header */}
        <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md z-10">
          <Header />
        </div>

        {/* Secondary Navbar */}
        <div className="fixed top-16 left-64 w-[calc(100%-16rem)] bg-gray-200 p-4 z-10 shadow-sm">
          <nav className="flex space-x-4">
            {tutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                href={`/${tutorial.id}`}
                className="text-primary hover:text-blue-800 font-semibold"
              >
                {tutorial.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content with a Larger Container Box */}
        <div className="pt-40 flex-1 p-8">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
            <h1 className="text-3xl font-semibold mb-4">Tutorials</h1>
            <p className="mb-4">Explore tutorials to enhance your skills and knowledge.</p>

            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4">
              {tutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
                >
                  <div className="p-4"> {/* Added padding to the container */}
                    <img
                      src={tutorial.image}
                      alt={`Image for ${tutorial.name}`}
                      className="w-full h-40 object-contain mb-4" // Added margin to the bottom of the image
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{tutorial.name}</h2>
                      <Link
                        href={`/${tutorial.id}`}
                        className="block bg-primary text-white py-2 text-center rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                      >
                        Start Learning!
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Tutorial;
