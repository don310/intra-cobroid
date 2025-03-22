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
      path: "/tutorials/python/string-methods",
      title: "String Methods",
      content: `
  Python strings are versatile, offering a variety of built-in methods that make string manipulation simple and efficient. These methods can alter, format, and analyze strings, providing powerful tools for developers. In this tutorial, we'll explore the most commonly used string methods with detailed examples.
  
  1. **Converting to Upper Case: \`upper()\`**
     - Converts all lowercase letters in a string to uppercase.
     - **Example**:
       \`\`\`python
       text = "hello world"
       print(text.upper())
       \`\`\`
       **Output**:  
       \`\`\`plaintext
       HELLO WORLD
       \`\`\`
  
  2. **Converting to Lower Case: \`lower()\`**
     - Converts all uppercase letters in a string to lowercase.
     - **Example**:
       \`\`\`python
       text = "HELLO WORLD"
       print(text.lower())
       \`\`\`
       **Output**:  
       \`\`\`plaintext
       hello world
       \`\`\`
  
  3. **Stripping Whitespaces: \`strip()\`**
     - Removes leading and trailing whitespaces from a string.
     - **Example**:
       \`\`\`python
       text = "   Python   "
       print(text.strip())
       \`\`\`
       **Output**:  
       \`\`\`plaintext
       Python
       \`\`\`
  
  4. **Replacing Parts of a String: \`replace()\`**
     - Replaces a specified substring with another substring.
     - **Example**:
       \`\`\`python
       text = "Python is fun"
       print(text.replace("fun", "awesome"))
       \`\`\`
       **Output**:  
       \`\`\`plaintext
       Python is awesome
       \`\`\`
  
  5. **Splitting Strings: \`split()\`**
     - Splits a string into a list of substrings, based on a specified delimiter.
     - **Example**:
       \`\`\`python
       text = "apple,banana,cherry"
       print(text.split(","))
       \`\`\`
       **Output**:  
       \`\`\`plaintext
       ['apple', 'banana', 'cherry']
       \`\`\`
  
  6. **Capitalizing the First Letter: \`capitalize()\`**
   - Converts the first character of the string to uppercase and the rest to lowercase.
   - **Example**:
     \`\`\`python
     text = "python programming"
     print(text.capitalize())
     \`\`\`
     **Output**:  
     \`\`\`plaintext
     Python programming
     \`\`\`

7. **Counting Substring Occurrences: \`count()\`**
   - Counts how many times a substring appears in the string.
   - **Example**:
     \`\`\`python
     text = "banana"
     print(text.count("a"))
     \`\`\`
     **Output**:  
     \`\`\`plaintext
     3
     \`\`\`

8. **Checking if String Starts or Ends with a Substring: \`startswith()\` and \`endswith()\`**
   - \`startswith()\` checks if a string starts with a specified substring.
   - \`endswith()\` checks if a string ends with a specified substring.
   - **Example**:
     \`\`\`python
     text = "Welcome to Python"
     print(text.startswith("Welcome"))
     print(text.endswith("Python"))
     \`\`\`
     **Output**:  
     \`\`\`plaintext
     True
     True
     \`\`\`

9. **Finding Substrings: \`find()\`**
   - Returns the index of the first occurrence of a substring. If the substring is not found, it returns -1.
   - **Example**:
     \`\`\`python
     text = "Hello, world!"
     print(text.find("world"))
     \`\`\`
     **Output**:  
     \`\`\`plaintext
     7
     \`\`\`

10. **Checking for Alphanumeric Characters: \`isalnum()\`**
    - Returns \`True\` if the string contains only letters and numbers, and \`False\` otherwise.
    - **Example**:
      \`\`\`python
      text = "Python123"
      print(text.isalnum())
      \`\`\`
      **Output**:  
      \`\`\`plaintext
      True
      \`\`\`

11. **Swapping Case: \`swapcase()\`**
    - Swaps uppercase letters to lowercase and vice versa.
    - **Example**:
      \`\`\`python
      text = "Python Is Fun"
      print(text.swapcase())
      \`\`\`
      **Output**:  
      \`\`\`plaintext
      pYTHON iS fUN
      \`\`\`

12. **Formatting Titles: \`title()\`**
    - Capitalizes the first letter of each word in the string.
    - **Example**:
      \`\`\`python
      text = "python is amazing"
      print(text.title())
      \`\`\`
      **Output**:  
      \`\`\`plaintext
      Python Is Amazing
      \`\`\`

13. **Aligning Text to the Center: \`center()\`**
    - Centers the text within a specified width, optionally padded with a specified character.
    - **Example**:
      \`\`\`python
      text = "Python"
      print(text.center(20, "-"))
      \`\`\`
      **Output**:  
      \`\`\`plaintext
      -------Python-------
      \`\`\`
  
  **Conclusion**  
  Python provides a vast collection of string methods, each designed to simplify common string operations. Mastering these methods will make your programming more efficient and expressive. Explore more methods and experiment with their capabilities to gain deeper insights!`,
      image: "/banner/Python-String-Methods.png",
    },{
        path: '/tutorials/python/format-strings',
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