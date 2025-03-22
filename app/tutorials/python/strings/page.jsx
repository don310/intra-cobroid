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
      path: "/tutorials/python/strings",
      title: "Python Strings",
      content: `
  ### **What are Strings?**
  Strings in Python are sequences of characters enclosed in single (\`) or double (\`) quotes. Python does not have a character data type, so even a single character is treated as a string of length 1.
  
  **Example:**
  \`\`\`python
  s = "Hello"
  print(s)
  \`\`\`
  **Output:**
  \`\`\`
  Hello
  \`\`\`
  
  ---
  
  ### **Creating a String**
  You can create strings using single or double quotes. For multiline strings, triple quotes (''' or """) are used.
  
  **Example 1: Single/Double Quotes**
  \`\`\`python
  s1 = 'Hello'
  s2 = "World"
  print(s1, s2)
  \`\`\`
  **Output:**
  \`\`\`
  Hello World
  \`\`\`
  
  **Example 2: Multiline Strings**
  \`\`\`python
  s = """This is a
  multiline string."""
  print(s)
  \`\`\`
  **Output:**
  \`\`\`
  This is a
  multiline string.
  \`\`\`
  
  ---
  
  ### **Accessing Characters in Strings**
  Strings are indexed starting from 0. Negative indices allow access from the end.
  
  **Example:**
  \`\`\`python
  s = "Python"
  print(s[0])   # First character
  print(s[-1])  # Last character
  \`\`\`
  **Output:**
  \`\`\`
  P
  n
  \`\`\`
  
  ---
  
  ### **String Slicing**
  You can extract portions of a string using slicing: \`string[start:end]\`.
  
  **Example:**
  \`\`\`python
  s = "Python Programming"
  print(s[0:6])  # Characters from index 0 to 5
  print(s[7:])   # From index 7 to the end
  print(s[::-1]) # Reversed string
  \`\`\`
  **Output:**
  \`\`\`
  Python
  Programming
  gnimmargorP nohtyP
  \`\`\`
  
  ---
  
  ### **String Immutability**
  Strings cannot be modified in place. To "modify" a string, create a new one.
  
  **Example:**
  \`\`\`python
  s = "hello"
  s = "H" + s[1:]
  print(s)
  \`\`\`
  **Output:**
  \`\`\`
  Hello
  \`\`\`
  
  ---
  
  ### **String Methods**
  Python provides numerous methods to manipulate strings. Here are some commonly used ones:
  
  1. **len():** Returns the length of a string.
  \`\`\`python
  s = "GeeksforGeeks"
  print(len(s))
  \`\`\`
  **Output:**
  \`\`\`
  13
  \`\`\`
  
  2. **upper() and lower():** Convert string to uppercase or lowercase.
  \`\`\`python
  s = "Python"
  print(s.upper())  # PYTHON
  print(s.lower())  # python
  \`\`\`
  
  3. **strip():** Removes whitespace from both ends.
  \`\`\`python
  s = "  Hello  "
  print(s.strip())
  \`\`\`
  **Output:**
  \`\`\`
  Hello
  \`\`\`
  
  4. **replace():** Replaces a substring with another.
  \`\`\`python
  s = "I love Python"
  print(s.replace("Python", "programming"))
  \`\`\`
  **Output:**
  \`\`\`
  I love programming
  \`\`\`
  
  ---
  
  ### **Concatenating and Repeating Strings**
  1. **Concatenation:** Use \`+\` to combine strings.
  \`\`\`python
  s1 = "Hello"
  s2 = "World"
  print(s1 + " " + s2)
  \`\`\`
  **Output:**
  \`\`\`
  Hello World
  \`\`\`
  
  2. **Repetition:** Use \`*\` to repeat a string.
  \`\`\`python
  s = "Hi "
  print(s * 3)
  \`\`\`
  **Output:**
  \`\`\`
  Hi Hi Hi 
  \`\`\`
  
  ---
  
  ### **Formatting Strings**
  1. **Using f-strings:**
  \`\`\`python
  name = "Alice"
  age = 22
  print(f"My name is {name} and I am {age} years old.")
  \`\`\`
  **Output:**
  \`\`\`
  My name is Alice and I am 22 years old.
  \`\`\`
  
  2. **Using format():**
  \`\`\`python
  s = "My name is {} and I am {} years old."
  print(s.format("Alice", 22))
  \`\`\`
  **Output:**
  \`\`\`
  My name is Alice and I am 22 years old.
  \`\`\`
  
  ---
  
  ### **String Membership Testing**
  You can use the \`in\` keyword to check for substring presence.
  
  **Example:**
  \`\`\`python
  s = "IntraCobroid"
  print("Intra" in s)    # True
  print("Python" in s)   # False
  \`\`\`
  
  **Output:**
  \`\`\`
  True
  False
  \`\`\`
  `,
      image: "/banner/Python-Strings.png",
    },
    {
        path: '/tutorials/python/strings-operations',
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
        setCurrentIndex(matchingIndex); 
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
              
              {!tutorial && (
                  <div className="text-center">
                    <h2 className="text-xl font-semibold">Tutorial Not Found</h2>
                    <p>It seems the tutorial you are looking for does not exist.</p>
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