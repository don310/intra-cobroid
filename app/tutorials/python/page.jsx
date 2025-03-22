"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import SecondaryNavbar from '@/app/components/secondaryNavbar';
import SideNavbar from '@/app/components/PySideNav';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { useRouter } from 'next/navigation';

const tutorialContent = [
  {
    path: '/tutorials/python',
    title: "Introduction to Python",
    content: `
### **What is Python?**
Python is a popular programming language created by Guido van Rossum and released in 1991. It is used for:
- Web development (server-side)
- Software development
- Mathematics
- System scripting

---

### **What can Python do?**
- Python can create web applications, manage workflows, connect to databases, and modify files.
- It is suitable for handling big data and performing complex mathematics.
- Python is ideal for rapid prototyping or production-ready software development.

---

### **Why Python?**
- Works on multiple platforms (Windows, Mac, Linux, Raspberry Pi, etc.).
- Simple syntax resembling the English language, allowing fewer lines of code.
- Python runs on an interpreter system, enabling quick prototyping.
- Supports procedural, object-oriented, and functional programming.

---

### **Python Syntax Compared to Other Languages**

- Python was designed for readability, with some similarities to the English language and influence from mathematics.
- Python uses new lines to complete a command, unlike other programming languages, which often use semicolons or parentheses.
- Python relies on indentation (whitespace) to define scope, such as the scope of loops, functions, and classes. Other programming languages typically use curly-brackets for this purpose.

---

###\n
    `,
    image: "/banner/Introduction-to-Python.png",
    code: `# Hello, World! in Python\nprint("Hello, World!")`,
  },
  {
    path: '/tutorials/python/installation',
  }
];

const TutorialPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const [isCompilerVisible, setCompilerVisible] = useState(false);
  const [tutorial, setTutorial] = useState(null);
  const [codeSnippet, setCodeSnippet] = useState('');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [output, setOutput] = useState("");

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

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([codeSnippet], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "code.py";
    document.body.appendChild(element);
    element.click();
  };


  const handleRunCode = async () => {
    try {
      console.log("Running code:", codeSnippet); // Check the code before sending it to JDoodle

      const response = await fetch("https://api.jdoodle.com/v1/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: "fe57875498fd966bcf6974024212b3cf",
          clientSecret: "37db606782f5cd16413709ec1d137467c9cda699c52c5b45db22ac1c9d3a42ce",
          script: codeSnippet,  // Pass the defined code snippet here
          language: "python3",
          versionIndex: "0",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to run code. Please try again.");
      }

      const data = await response.json();
      console.log(data);

      if (data.output) {
        setOutput(data.output.trim() || "No output received");
      } else {
        setOutput("No output received");
      }
    } catch (error) {
      console.error("Error:", error);
      setOutput(`Error executing code: ${error.message}`);
    }
  };
 
  
  const handleReset = () => {
    setCodeSnippet(tutorial?.code || "");
    setOutput("");
  };

  const toggleCompiler = () => {
    setCompilerVisible((prevVisible) => !prevVisible);
    if (!isCompilerVisible) handleReset();
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

            {!isCompilerVisible && (
              <button
                onClick={toggleCompiler}
                className="mt-4 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
              >
                Test it now
              </button>
            )}

            {isCompilerVisible && (
              <div className="mt-6 border-t border-gray-300 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Python Code Compiler</h2>
                  {/* Action Icons in Compiler Header */}
                  <div className="flex space-x-2">
                    <button onClick={handleDownload} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">⬇️</button>
                    <button onClick={handleCopy} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">📋</button>
                    <button onClick={handleReset} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">🔄</button>
                    <button onClick={toggleCompiler} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">❌</button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {/* Python Code Editor Section */}
                  <div className="flex-1 p-4 bg-gray-100 rounded-lg border border-gray-300">
                    <h3 className="text-lg font-medium mb-2">Python Code</h3>
                    <textarea
                      className="w-full h-40 p-2 mt-2 border rounded"
                      placeholder="Write your Python code here..."
                      value={codeSnippet}
                      onChange={(e) => setCodeSnippet(e.target.value)}
                    />
                    <button
                      onClick={handleRunCode}
                      className="mt-2 px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
                    >
                      Run Code
                    </button>
                  </div>

                  {/* Output Section */}
                  <div className="flex-1 p-4 bg-gray-100 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-medium mb-2">Output</h3>
                  <div className="mt-2 h-40 bg-gray-200 p-4 rounded overflow-auto">
                    {output ? <pre>{output}</pre> : <p>Hello, World!</p>}
                  </div>
                  </div>
                </div>
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