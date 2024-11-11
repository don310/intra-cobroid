'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/app/components/Header';
import SecondaryNavbar from '@/app/components/secondaryNavbar';
import SideNavbar from '@/app/components/PySideNav';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';

const TutorialPage = () => {
  const pathname = usePathname();
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");

  const tutorialContent = {
    '/tutorials/python': {
      title: "Introduction to Python",
      content: `
        Welcome to Python Programming!
        Python is a versatile, high-level programming language known for its simplicity, readability, and wide range of applications.
        Created by Guido van Rossum and first released in 1991, Python has grown to become one of the most popular programming languages worldwide, especially in fields like web development, data science, artificial intelligence, and automation.

        Why Learn Python?
        Python is celebrated for its simple syntax and readability, making it an excellent choice for both beginners and experienced programmers. Here are some key reasons to learn Python:

        - Easy to Read and Write: Python's syntax is similar to the English language, making it easy to understand and write code.
        - Extensive Libraries: Python has a vast standard library and a robust ecosystem of third-party libraries that support everything from data analysis to machine learning.
        - Community Support: Python has a large and active community, ensuring support, resources, and documentation are widely available.
        - Cross-Platform: Python code can run on different operating systems like Windows, macOS, and Linux.

        Key Features of Python:
        - Interpreted Language: Python is executed line-by-line, which helps in debugging and allows for interactive testing.
        - Dynamic Typing: Python doesn’t require you to declare variable types explicitly, which simplifies coding.
        - Object-Oriented: Python supports object-oriented programming (OOP), allowing for reusable code and modular design.
        - Versatile and Extensible: Python can be extended with modules written in C or C++ and is versatile enough for web, scientific, and scripting applications.
        - Free and Open-Source: Python is free to use, distribute, and modify, making it an accessible tool for everyone.

        Getting Started with Python:
        To start coding in Python, you’ll need to install it on your computer. Here’s a simple step-by-step guide to getting started:
        1. Download Python: Visit the official Python website to download and install Python.
        2. Verify Installation: Open your terminal or command prompt and type python --version to ensure Python is installed correctly.
        3. Start Coding: Use the built-in Python interactive shell or a code editor (like VS Code) to start writing your first Python code.
      `,
      image: "/path/to/python-intro-banner.png", // Ensure to replace this path with an actual image path
      code: `# Hello, World! in Python\nprint("Hello, World!")`,
    },
    // Other tutorial paths
  };

  useEffect(() => {
    const tutorialData = tutorialContent[pathname] || {};
    setContent(tutorialData.content || "Content not available");
    setImage(tutorialData.image || "");
    setCodeSnippet(tutorialData.code || "");
  }, [pathname]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
        <SideNavbar />
      </div>

      <div className="flex-1 ml-64">
        <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md z-10">
          <Header />
        </div>

        <SecondaryNavbar />

        <div className="pt-40 flex-1 p-8">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
            <h1 className="text-3xl font-semibold mb-4">
              Tutorial: {tutorialContent[pathname]?.title || "Python Tutorial"}
            </h1>
            <p className="mb-6 whitespace-pre-line">{content}</p>
            
            {image && (
              <div className="mb-6">
                <img src={image} alt="Tutorial Banner" className="w-full h-auto rounded-lg" />
              </div>
            )}

            {codeSnippet && (
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                <pre className="text-sm font-mono mb-2">{codeSnippet}</pre>
                <button
                  onClick={handleCopy}
                  className="mt-2 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Copy Code
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TutorialPage;
