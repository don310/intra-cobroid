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
      path: "/tutorials/python/strings-operations",
      title: "Operations on Strings",
      content: `
  ### **Introduction**
  A string in Python is a sequence of characters enclosed within single or double quotes. Python provides a variety of operations that can be performed on strings, such as finding their length, slicing, iterating through them, and much more. This tutorial explores these operations with detailed examples and their outputs.
  
  ---
  
  ### **1. Finding the Length of a String**
  The \`len()\` function returns the number of characters in a string.
  
  **Example:**
  \`\`\`python
  fruit = "Mango"
  length = len(fruit)
  print("Mango is a", length, "letter word.")
  \`\`\`
  
  **Output:**
  \`\`\`
  Mango is a 5 letter word.
  \`\`\`
  
  ---
  
  ### **2. String as an Array**
  Strings in Python can be treated as arrays where each character has an index starting from 0. You can access individual characters or slices of a string using indexing.
  
  **Example:**
  \`\`\`python
  pie = "ApplePie"
  print(pie[0])    # Access first character
  print(pie[6])    # Access character at index 6
  \`\`\`
  
  **Output:**
  \`\`\`
  A
  i
  \`\`\`
  
  ---
  
  ### **3. String Slicing**
  Slicing allows us to extract a portion of a string by specifying the start and end indices. The syntax is \`string[start:end]\`.
  
  #### **Examples of Slicing:**
  
  - **Slicing from Start:**
  \`\`\`python
  pie = "ApplePie"
  print(pie[:5])
  \`\`\`
  
  **Output:**
  \`\`\`
  Apple
  \`\`\`
  
  - **Slicing till End:**
  \`\`\`python
  print(pie[5:])
  \`\`\`
  
  **Output:**
  \`\`\`
  Pie
  \`\`\`
  
  - **Slicing in Between:**
  \`\`\`python
  print(pie[2:6])
  \`\`\`
  
  **Output:**
  \`\`\`
  pleP
  \`\`\`
  
  - **Slicing with Negative Index:**
  \`\`\`python
  print(pie[-8:])
  \`\`\`
  
  **Output:**
  \`\`\`
  ApplePie
  \`\`\`
  
  ---
  
  ### **4. Looping Through a String**
  Strings are iterable, allowing you to loop through each character.
  
  **Example:**
  \`\`\`python
  alphabets = "ABCDE"
  for letter in alphabets:
      print(letter)
  \`\`\`
  
  **Output:**
  \`\`\`
  A
  B
  C
  D
  E
  \`\`\`
  
  ---
  
  ### **5. String Concatenation**
  Combine strings using the \`+\` operator.
  
  **Example:**
  \`\`\`python
  str1 = "Hello"
  str2 = "World"
  result = str1 + " " + str2
  print(result)
  \`\`\`
  
  **Output:**
  \`\`\`
  Hello World
  \`\`\`
  
  ---
  
  ### **6. String Repetition**
  Repeat a string multiple times using the \`*\` operator.
  
  **Example:**
  \`\`\`python
  word = "Hi"
  print(word * 3)
  \`\`\`
  
  **Output:**
  \`\`\`
  HiHiHi
  \`\`\`
  
  ---
  
  ### **7. Common String Methods**
  Python provides numerous methods to manipulate strings.
  
  #### a. \`upper()\` and \`lower()\`  
  Convert a string to uppercase or lowercase.
  
  \`\`\`python
  text = "Python"
  print(text.upper())  # PYTHON
  print(text.lower())  # python
  \`\`\`
  
  #### b. \`strip()\`  
  Remove leading or trailing whitespace.
  
  \`\`\`python
  text = "  Hello  "
  print(text.strip())
  \`\`\`
  
  **Output:**
  \`\`\`
  Hello
  \`\`\`
  
  #### c. \`replace()\`  
  Replace a substring with another substring.
  
  \`\`\`python
  text = "I love Python"
  print(text.replace("love", "enjoy"))
  \`\`\`
  
  **Output:**
  \`\`\`
  I enjoy Python
  \`\`\`
  
  #### d. \`split()\`  
  Split a string into a list based on a delimiter.
  
  \`\`\`python
  text = "apple,banana,orange"
  fruits = text.split(",")
  print(fruits)
  \`\`\`
  
  **Output:**
  \`\`\`
  ['apple', 'banana', 'orange']
  \`\`\`
  
  ---
  
  ### **8. Checking Substring Presence**
  Use the \`in\` operator to check if a substring exists in a string.
  
  **Example:**
  \`\`\`python
  text = "Welcome to Python Programming"
  print("Python" in text)    # True
  print("Java" in text)      # False
  \`\`\`
  
  **Output:**
  \`\`\`
  True
  False
  \`\`\`
  
  ---
  
  ### **9. Reversing a String**
  Reverse a string using slicing with a step of \`-1\`.
  
  **Example:**
  \`\`\`python
  text = "Python"
  reversed_text = text[::-1]
  print(reversed_text)
  \`\`\`
  
  **Output:**
  \`\`\`
  nohtyP
  \`\`\`
  
  ---
  
  ### **10. Joining a List into a String**
  Concatenate a list of strings using the \`join()\` method.
  
  **Example:**
  \`\`\`python
  words = ["Hello", "World", "Python"]
  sentence = " ".join(words)
  print(sentence)
  \`\`\`
  
  **Output:**
  \`\`\`
  Hello World Python
  \`\`\`
  
  ---
  
  ### **11. String Formatting**
  Python supports formatted strings (f-strings) and the \`format()\` method.
  
  #### **Using f-strings:**
  \`\`\`python
  name = "Alice"
  age = 25
  print(f"My name is {name} and I am {age} years old.")
  \`\`\`
  
  **Output:**
  \`\`\`
  My name is Alice and I am 25 years old.
  \`\`\`
  
  #### **Using \`format()\`:**
  \`\`\`python
  template = "My name is {} and I am {} years old."
  print(template.format("Alice", 25))
  \`\`\`
  
  **Output:**
  \`\`\`
  My name is Alice and I am 25 years old.
  \`\`\`
  
  ---
  
  ### **Summary**
  Strings in Python are versatile and powerful, offering a wide range of operations for text manipulation. This knowledge is fundamental for efficiently handling strings in Python programming.
  `,
      image: "/banner/Python-String-Operations.png",
    },{
        path: '/tutorials/python/string-methods',
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