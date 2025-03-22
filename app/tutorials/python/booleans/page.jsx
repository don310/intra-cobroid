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
      path: '/tutorials/python/booleans',
      title: "Python Booleans",
      content: `
  ### **What are Booleans?**
  A Boolean is a data type that can hold only two values: **True** or **False**. These are the building blocks for logical operations and control flow in Python.
  
  ---
  
  ### **Why Are Booleans Needed?**
  Booleans are used to represent the truth values of expressions. For example, in conditional statements like \`if\` and \`else\`, the condition needs to evaluate to either \`True\` or \`False\` to decide which block of code should execute.
  
  #### Example:
  \`\`\`python
  x = 13
  if(x > 13):
      print("X is a prime number.")
  else:
      print("X is not a prime number.")
  \`\`\`
  The condition \`x > 13\` is either True or False. Here, \`13 > 13\` is False, so the \`else\` block will execute.
  
  ---
  
  ### **The bool() Function**
  The \`bool()\` function evaluates any value and returns either **True** or **False**. The \`bool()\` function is often used to convert values from different data types into boolean values.
  
  #### Example:
  \`\`\`python
  print(bool(0))  # False
  print(bool(23))  # True
  \`\`\`
  
  ---
  
  ### **Boolean Evaluation for Different Data Types**
  
  1. **None**
     - **None** is a special value in Python, often used to represent a "null" or "undefined" value. It is considered **False** when evaluated as a Boolean.
  
     \`\`\`python
     print("None: ", bool(None))
     # Output: None: False
     \`\`\`
  
  2. **Numbers**
     - In Python, **0** is considered **False**, while any non-zero number (whether integer, float, or complex) is considered **True**.
  
     \`\`\`python
     print("Zero:", bool(0))          # False
     print("Integer:", bool(23))      # True
     print("Float:", bool(3.142))     # True
     print("Complex:", bool(5+2j))    # True
     \`\`\`
  
  3. **Strings**
     - An **empty string** (\`\`\`""\`\`\`) is considered **False**, while any non-empty string is considered **True**.
  
     \`\`\`python
     print("Any string:", bool("Nilesh"))        # True
     print("A string containing number:", bool("8.5")) # True
     print("Empty string:", bool(""))           # False
     \`\`\`
  
  4. **Lists**
     - An **empty list** (\`\`\`[]\`\`\`) is considered **False**, while a non-empty list is considered **True**.
  
     \`\`\`python
     print("Empty List:", bool([]))          # False
     print("List:", bool([1, 2, 5, 2, 1, 3])) # True
     \`\`\`
  
  5. **Tuples**
     - An **empty tuple** (\`\`\`()\`\`\`) is considered **False**, while a non-empty tuple is considered **True**.
  
     \`\`\`python
     print("Empty Tuple:", bool(()))              # False
     print("Tuple:", bool(("Horse", "Rhino", "Tiger"))) # True
     \`\`\`
  
  6. **Sets**
     - An **empty set** (\`\`\`{}\`\`\`) is considered **False**, while a non-empty set is considered **True**.
  
     \`\`\`python
     print("Empty Set:", bool(set()))             # False
     print("Set:", bool({"Mike", 22, "Science"}))  # True
     \`\`\`
  
  7. **Dictionaries**
     - An **empty dictionary** (\`\`\`{}\`\`\`) is considered **False**, while a non-empty dictionary is considered **True**.
  
     \`\`\`python
     print("Empty Dictionary:", bool({}))               # False
     print("Dictionary:", bool({"name": "Lakshmi", "age": 24, "job": "unemployed"}))  # True
     \`\`\`
  
  ---
  
  ### **Summary**
  In Python, Booleans are used to evaluate whether expressions or values are true or false. The \`bool()\` function is a useful tool for evaluating various data types. Here are the key points:
  
  - **False values**: None, 0, empty strings, empty lists, empty tuples, empty sets, and empty dictionaries.
  - **True values**: Any non-zero numbers, non-empty strings, lists, tuples, sets, and dictionaries.
  
  These evaluations help control the flow of logic in your program, particularly in \`if\` statements, loops, and other conditional constructs.
      `,
      image: "/banner/Python-Booleans.png",
    },
{
  path: '/tutorials/python/strings',
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