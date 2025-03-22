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
    path: "/tutorials/js-home",
    title: "JS Introduction",
    content: `
### **JS Introduction**
Today, I am creating this JavaScript tutorial to provide you with a resource that will help you learn JavaScript. Also, you can use this tutorial as a reference later to look up various concepts and code.

My name is Deepak and I am a Computer Programmer and a YouTuber from Intra Cobroid Academy YouTube channel. I want to start this tutorial by explaining why we need JavaScript in the first place.

---

### **Why JavaScript?**

Imagine a website as a house. HTML is like the bricks and walls that give it structure. CSS is like the paint and decorations that make it look nice. But without JavaScript, the house won't have any lights or running water—nothing would work or move.

JavaScript is what makes a website interactive. It's like adding electricity to the house. It lets you click buttons to open doors, turn on lights, or even play music. Without JavaScript, a website would be like a house where nothing really happens—you could look at it, but not interact with it.

Check out the video below to see a modal that is created using JavaScript.

---

### **JavaScript for Frontend and Backend**
JavaScript is primarily used for frontend programming, but it is also used for backend programming using Node.js. 

Let's take a step back and understand these concepts one by one.

---

### **What is Programming?**
Programming is a way to communicate with computers. Just like how we use languages like Hindi, English, or Bengali to talk to people, we use programming languages to give instructions to computers.

Programming involves constructing a program, which is a set of precise instructions telling a computer what to do.

It includes designing, writing, testing, debugging, and maintaining the source code of programs using different languages and tools.

---

### **What is ECMAScript?**
ECMAScript is a standard on which JavaScript is based! It was created to ensure consistency in how JavaScript is implemented across different browsers.

**ECMAScript Versions:**
- **ES1 (1997):** The first version of ECMAScript.
- **ES6 (2015):** A major update introducing modern JavaScript features.
- **ES13 (2022):** The latest stable release of ECMAScript.

---

### **What is JavaScript?**
- JavaScript is a lightweight, object-oriented programming (OOP) language.
- It is a scripting language primarily used for web pages.
- JavaScript adds interactivity and dynamic behavior to websites.
- Files end with the .js extension.
- It is now widely used for server-side development using Node.js.

---

### **Popular JavaScript Frameworks**
- **Frontend:** React, Angular, Vue
- **Backend:** Node.js, Express.js

In this tutorial, we will learn JavaScript in-depth and explore how it powers modern web development.

---

**Next:** Introduction to Variables in JavaScript
    `,
    image: "/banner/Introduction-to-JS.png",
  },
  {
    path: '/tutorials/js-home/variables',
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
            <h1 className="text-3xl font-bold mb-4">{tutorial ? tutorial.title : "CSS Tutorial"}</h1>

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