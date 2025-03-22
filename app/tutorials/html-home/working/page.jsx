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
        path: "/tutorials/html-home/working",
        title: "HTML Working",
        content: `
### **HTML Working**

### **Frontend vs Backend**
Frontend refers to the visible part of a website or app that users interact with, including tables, images, and buttons. It's built using HTML, CSS, and JavaScript. The backend handles behind-the-scenes operations like data storage and processing, using languages such as Python, Ruby, and Java.

### **How do Websites Work?**
When we search for information on the internet, a web browser retrieves the content from web servers, stored as HTML documents. The browser then reads and renders these documents into a visually structured webpage.

### **What is a Web Browser?**
A web browser is a program that interprets HTML tags and displays them in a human-readable format. Developers write HTML code to instruct browsers on how to present content.

### **What is an HTML Document?**
An HTML document is a text file saved with the '.html' or '.htm' extension, containing tags enclosed in '< >' that structure a webpage.

### **How Does a Website Work?**
- A browser requests a website from a web server.
- The server responds with HTML, CSS, and JavaScript files.
- The browser interprets these files and renders the webpage.

### **How Does a Browser Work?**
- Browsers request HTML documents from a server.
- They parse the raw data into readable content.
- The parsed content is structured into a DOM (Document Object Model).
- The DOM is rendered into a visual format.

Don't worry about the internal mechanics for now—focus on learning HTML first. In the next tutorial, we’ll set up VS Code and essential extensions for HTML development.
        `,
        image: "/banner/HTML-Working.png",
    },
    {
      path: '/tutorials/html-home/working',
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
            <h1 className="text-3xl font-bold mb-4">{tutorial ? tutorial.title : "HTML Tutorial"}</h1>

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