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
      path: "/tutorials/python/data-types",
      title: "Python Data Types",
      content: `
  ### Python Data Types
  
  In Python, a **data type** defines the kind of value a variable holds. Python is a dynamically-typed language, which means the type of a variable is determined during runtime. Below are Python's built-in data types:
  
  ---
  
  ### 1. Numeric Data Types
  Numeric types represent numbers and include:
  - **int:** Integer values (e.g., 10, -5, 0)
  - **float:** Decimal values (e.g., 3.14, -0.99, 1e-5)
  - **complex:** Numbers with a real and imaginary part (e.g., 2 + 3j)
  
  **Example:**
  \`\`\`python
  x = 10             # int
  y = 5.5            # float
  z = 3 + 4j         # complex
  
  print(type(x))    
  print(type(y))    
  print(type(z))     
  \`\`\`
  
  **Output:**
  \`\`\`
  <class 'int'>
  <class 'float'>
  <class 'complex'>
  \`\`\`
  
  ---
  
  ### 2. Text Data
  Text data is represented by the **str** type.
  
  **Example:**
  \`\`\`python
  message = "Hello, Python!"
  print(type(message))  
  \`\`\`
  
  **Output:**
  \`\`\`
  <class 'str'>
  \`\`\`
  
  ---
  
  ### 3. Boolean Data
  The **bool** type represents Boolean values: \`True\` or \`False\`.
  
  **Example:**
  \`\`\`python
  is_active = True
  print(type(is_active))  
  \`\`\`
  
  **Output:**
  \`\`\`
  <class 'bool'>
  \`\`\`
  
  ---
  
  ### 4. Sequenced Data
  Python provides multiple data types to handle ordered data:
  - **list:** A mutable sequence of elements.
  - **tuple:** An immutable sequence of elements.
  - **range:** A sequence of numbers.
  
  #### **List Example:**
  \`\`\`python
  fruits = ["apple", "banana", "cherry"]
  fruits[0] = "orange"  # Modifying a list
  print(fruits)         
  \`\`\`
  
  **Output:**
  \`\`\`
  ['orange', 'banana', 'cherry']
  \`\`\`
  
  #### **Tuple Example:**
  \`\`\`python
  colors = ("red", "green", "blue")
  # colors[0] = "yellow"  # Error: Tuples are immutable
  print(colors)          
  \`\`\`
  
  **Output:**
  \`\`\`
  ('red', 'green', 'blue')
  \`\`\`
  
  #### **Range Example:**
  \`\`\`python
  nums = range(1, 6)
  for n in nums:
      print(n)  
  \`\`\`
  
  **Output:**
  \`\`\`
  1
  2
  3
  4
  5
  \`\`\`
  
  ---
  
  ### 5. Mapped Data
  The **dict** type represents key-value pairs.
  
  **Example:**
  \`\`\`python
  person = {"name": "Alice", "age": 30, "is_student": False}
  print(person["name"])  
  print(type(person))    
  \`\`\`
  
  **Output:**
  \`\`\`
  Alice
  <class 'dict'>
  \`\`\`
  
  ---
  
  ### 6. Binary Data
  Python supports binary data types like \`bytes\`, \`bytearray\`, and \`memoryview\`.
  
  #### **Bytes Example:**
  \`\`\`python
  data = bytes("Python", "utf-8")
  print(data)  
  \`\`\`
  
  **Output:**
  \`\`\`
  b'Python'
  \`\`\`
  
  #### **Bytearray Example:**
  \`\`\`python
  byte_arr = bytearray(data)
  byte_arr[0] = 80
  print(byte_arr)  
  \`\`\`
  
  **Output:**
  \`\`\`
  bytearray(b'Python')
  \`\`\`
  
  #### **Memoryview Example:**
  \`\`\`python
  mem_view = memoryview(data)
  print(mem_view[0]) 
  \`\`\`
  
  **Output:**
  \`\`\`
  80
  \`\`\`
  
  ---
  
  ### 7. Set Data
  The **set** type represents an unordered collection of unique elements.
  
  **Example:**
  \`\`\`python
  unique_nums = {1, 2, 3, 3, 4}
  print(unique_nums)  
  \`\`\`
  
  **Output:**
  \`\`\`
  {1, 2, 3, 4}
  \`\`\`
  
  ---
  
  ### 8. None Type
  The **NoneType** represents a null or undefined value.
  
  **Example:**
  \`\`\`python
  x = None
  print(type(x))  
  \`\`\`
  
  **Output:**
  \`\`\`
  <class 'NoneType'>
  \`\`\`
  
  ---

  
Python supports a wide range of built-in data types, which are used to store values. These types are classified as:

- **Numeric Types:** Integer (int), Floating-point number (float), and Complex number (complex).
- **Sequence Types:** String (str), List (list), and Tuple (tuple).
- **Mapping Type:** Dictionary (dict).
- **Set Types:** Set (set).
- **Boolean Type:** Boolean (bool).
- **None Type:** Represents the absence of a value (None).

Each data type has its own characteristics, methods, and use cases that make it suitable for different programming tasks.

---

The **Python Data Types** play an essential role in variable storage and manipulation. Knowing the differences between these types will help you understand how to choose the right one based on your task needs.

---

  Explore Python's versatile data types to manage and manipulate data effectively in your programs!
      `,
      image: "/banner/Python-DataTypes.png",
    },
    {
      path: '/tutorials/python/numbers',
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