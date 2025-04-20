"use client";

import React from "react";
import Link from "next/link"; // Import Link for navigation
import Header from "../../components/Header";
import SideNavbar from "../../components/SideNavbar";
import Footer from "../../components/Footer";

function Blog() {
  const blogPosts = [
    {
      title: "Understanding JavaScript Closures",
      date: "October 15, 2024",
      author: "Deepak Suyal",
      description:
        "JavaScript closures are a fundamental concept for mastering JavaScript. Learn how closures work and how they can be used to write better code.",
      slug: "understanding-javascript-closures", // Unique slug for navigation
    },
    {
      title: "Getting Started with React Hooks",
      date: "September 30, 2024",
      author: "Deepak Suyal",
      description:
        "React hooks have revolutionized functional components in React. This post covers the basics of using hooks like useState, useEffect, and custom hooks.",
      slug: "getting-started-with-react-hooks",
    },
    {
      title: "Mastering CSS Grid Layout",
      date: "August 25, 2024",
      author: "Deepak Suyal",
      description:
        "CSS Grid is a powerful layout system available in CSS. Discover how to create responsive and complex layouts with Grid.",
      slug: "mastering-css-grid-layout",
    },
    {
      title: "Understanding Python Decorators",
      date: "July 10, 2024",
      author: "Deepak Suyal",
      description:
        "Decorators in Python allow you to add functionality to existing functions. This post explains the syntax and usage of decorators in Python.",
      slug: "understanding-python-decorators",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col">
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

        {/* Main Blog Content */}
        <div className="pt-20 p-8">
          <h1 className="text-3xl font-bold mb-6">Programming Blog</h1>

          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  {post.date} | by {post.author}
                </p>
                <p className="text-lg">{post.description}</p>
                {/* Using Link for navigation instead of useRouter */}
                <Link
                  href={`/blog/${post.slug}`} // Dynamic blog page based on slug
                  className="text-blue-600 hover:underline mt-4 inline-block"
                >
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
