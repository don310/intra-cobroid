"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import SecondaryNavbar from '@/app/components/secondaryNavbar';
import SideNavbar from '@/app/components/jsSideNav';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { useRouter } from 'next/navigation';

const tutorialContent = [
    {
      path: "/tutorials/html-home/introduction",
      title: "HTML Introduction",
      content: `
  ### **HTML Introduction**
  Today, I'm writing this tutorial to create a resource that will help you learn HTML in less than 30 days. Here's a recommended timeline for learning HTML, based on your educational background:
  
  - **High School students and younger:** Around 25 days
  - **Those beyond High School:** Around 20 days
  - **College students and above:** Around 10-20 days
  
  It's important to set expectations before you start your journey of learning HTML with me.
  
  My name is Deepak (the same Intra Cobroid Academy guy from YouTube), and today I'm writing this comprehensive HTML tutorial for all of you. Let's jump right into HTML!
  
  ---
  
  ### **What is HTML?**
  HTML (HyperText Markup Language) was created by Tim Berners-Lee in 1991 as a standard for creating web pages. It's a markup language used to structure content on the web, defining elements like headings, paragraphs, links, and images. HTML forms the backbone of web content.
  
  In layman's terms, HTML is like the skeleton of a website. It provides a set of instructions that tell a web browser how to display text, images, videos, and other elements on a webpage. Think of it as the building blocks that create the structure and look of a website, similar to how bricks and mortar are used to build a house.
  
  In a nutshell:
  - HTML is the language of the web, used to create websites.
  - HTML defines the barebone structure or layout of web pages that we see on the Internet.
  - HTML consists of a set of tags contained within an HTML document, and the associated files typically have either a ".html" or ".htm" extension.
  - There are several versions of HTML, with HTML5 being the most recent version.
  
  ---
  
  ### **Features of HTML**
  - It is platform-independent. For example, Chrome displays the same pages identically across different operating systems such as Mac, Linux, and Windows.
  - Images, videos, and audio can be added to a web page (e.g., YouTube shows videos on their website).
  - HTML is a markup language and not a programming language.
  - It can be integrated with other languages like CSS, JavaScript, etc., to create interactive (or dynamic) web pages.
  
  ---
  
  ### **Why the Term HyperText & Markup Language?**
  The term 'Hypertext Markup Language' is composed of two main words: 'hypertext' and 'markup language.'
  - **Hypertext** refers to the linking of text with other documents.
  - **Markup language** denotes a language that utilizes a specific set of tags.
  
  Thus, HTML is the practice of displaying text, graphics, audio, video, etc., in a certain way using special tags.
  
  **Note:** Tags are meaningful texts enclosed in angle braces, like '<...>'. For example, the '<head>' tag. Each tag has a unique meaning and significance in building an HTML page, and it can influence the web page in various ways.
  
  ---
  
  ### **Quick Exercise:**
  1. Open a webpage of your choice.
  2. Right-click on the browser and select 'View Page Source.'
  3. You will see the HTML code for that page.
  
  This is the code that the server sent to display the page you're currently viewing. In this tutorial, we'll learn how to write this type of code using HTML.
  
  ---
  
  ### **A Beautiful Analogy to Understand HTML, CSS, and JavaScript:**
  In building a webpage, think of HTML, CSS, and JavaScript as different parts of a car:
  - **HTML** is like the car's skeleton, forming the basic structure and frame.
  - **CSS** adds the paint and finishing touches, making the car look appealing with color, style, and design.
  - **JavaScript** is similar to the engine and mechanical parts, infusing the car with functionality, movement, and interactive features.
  
  Similarly, when developing a website:
  - HTML lays out the structure.
  - CSS enhances its visual appeal.
  - JavaScript provides interactivity and dynamic content.
  
  ---
  
  ### **History of HTML:**
  - **1989:** Tim Berners-Lee established the World Wide Web (www).
  - **1991:** He created the first version of HTML.
  - **1995-1997:** Further work was done to develop and refine different versions of HTML.
  - **1999:** A committee standardized HTML 4.0, a version still used by many today.
  - **HTML5:** The latest and most stable version of HTML.
  
  Feel free to read more about the history of HTML on the [HTML Wikipedia page](https://en.wikipedia.org/wiki/HTML), but we will move ahead and cover important aspects of HTML.
  
  **In the next tutorial, we'll continue our journey and understand how websites work!**
      `,
      image: "/banner/Introduction-to-HTML.png",
    },
    {
      path: '/tutorials/python/syntax',
    }
  ];
  

const TutorialPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [tutorial, setTutorial] = useState(null);
  const [codeSnippet, setCodeSnippet] = useState('');

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const matchingTutorial = tutorialContent.find(tutorial => tutorial.path === pathname);
    const matchingIndex = tutorialContent.findIndex(tutorial => tutorial.path === pathname);
  
    if (matchingTutorial) {
      setTutorial(matchingTutorial);
      setCodeSnippet(matchingTutorial.code);
      setCurrentIndex(matchingIndex); // Set the current index based on the path
    }
  }, [pathname]);
  

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    alert("Code copied to clipboard!");
  };

  
  const handleNavigation = (direction) => {
    let newIndex = currentIndex;
  
    if (direction === "next" && currentIndex < tutorialContent.length - 1) {
      newIndex += 1;
    } else if (direction === "previous" && currentIndex > 0) {
      newIndex -= 1;
    }
  
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      router.push(tutorialContent[newIndex].path); 
    }
  };

  
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 fixed top-0 left-0 h-full bg-white shadow-lg">
        <SideNavbar />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md z-10">
          <Header />
        </div>

        <SecondaryNavbar />

        {/* Main content */}
        <div className="pt-40 p-8 max-w-full">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
            <h1 className="text-3xl font-bold mb-4">{tutorial ? tutorial.title : "Python Tutorial"}</h1>

            {tutorial?.image && (
              <div className="mb-6">
                <img src={tutorial.image} alt="Tutorial Banner" className="w-full h-auto rounded-lg" />
              </div>
            )}


            {tutorial && (
              <div className="prose max-w-none space-y-6 markdown">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypePrism]}>
                {tutorial.content}
              </ReactMarkdown>
            </div>
            
            )}

            {codeSnippet && (
              <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <h1 className="text-3xl font-bold mb-4">Example </h1>
                <pre className="text-sm font-mono mb-2">{codeSnippet}</pre>
                <button
                  onClick={handleCopy}
                  className="mt-2 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Copy Code
                </button>
              </div>
            )}

             

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-6">
              <button
                onClick={() => handleNavigation("previous")}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                &lt;&lt; Previous
              </button>
              <button
                onClick={() => handleNavigation("next")}
                disabled={currentIndex === tutorialContent.length - 1}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Next &gt;&gt;
              </button>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TutorialPage;  