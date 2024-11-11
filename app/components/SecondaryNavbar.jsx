"use client";

import React from 'react';
import Link from 'next/link';

// Tutorial data
const tutorials = [
  { id: "tutorials/python", name: "Python Tutorial", image: "/pic/python.png" },
  { id: "cnotes", name: "C Tutorial", image: "/pic/c.png" },
  { id: "cpp", name: "C++ Tutorial", image: "/pic/c++.png" },
  { id: "javaNotes", name: "Java Tutorial", image: "/pic/java.jfif" },
  { id: "html", name: "HTML Tutorial", image: "/pic/html.png" },
  { id: "cssNotes", name: "CSS Tutorial", image: "/pic/css.png" },
  { id: "jsNotes", name: "JavaScript Tutorial", image: "/pic/js.png" },
  { id: "php", name: "PHP Tutorial", image: "/pic/php.png" },
  { id: "reactjs", name: "React JS Tutorial", image: "/pic/react.png" },
];

const SecondaryNavbar = () => {
  return (
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
  );
};

export default SecondaryNavbar;
