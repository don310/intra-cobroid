"use client";

import React from 'react';
import Link from 'next/link';

// Tutorial data
const tutorials = [
  { id: "tutorials/html-home", name: "HTML", image: "/pic/html.png" },
    { id: "tutorials/css-home", name: "CSS", image: "/pic/css.png" },
    { id: "tutorials/js-home", name: "JavaScript", image: "/pic/js.png" },
    { id: "tutorials/python", name: "Python", image: "/pic/python.png" },
    { id: "tutorials/c", name: "C", image: "/pic/c.png" },
    { id: "tutorials/cpp", name: "C++", image: "/pic/c++.png" },
    { id: "tutorials/java", name: "Java", image: "/pic/java.jfif" },
    { id: "tutorials/php", name: "PHP", image: "/pic/php.png" },
    { id: "tutorials/reactjs", name: "React JS", image: "/pic/react.png" },
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
