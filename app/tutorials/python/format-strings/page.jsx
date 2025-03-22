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
    path: "/tutorials/python/format-strings",
    title: "String Formatting",
    content: `
  ### String Formatting in Python
  
  String formatting in Python provides several ways to combine strings and other data types, like integers and floats, into a single string. This feature is crucial for creating dynamic and readable outputs in applications.
  
  As seen in the Python Variables chapter, directly combining strings and numbers like this will raise an error:
  
  #### Example (Incorrect Way)
  \`\`\`python
  age = 36
  txt = "My name is John, I am " + age  # This will raise a TypeError
  print(txt)
  \`\`\`
  
  ### Correct Ways to Format Strings
  
  Python provides two popular methods to combine strings with other data types:
  1. **Using f-Strings (introduced in Python 3.6)**
  2. **Using the \`format()\` Method**
  
  ---
  
  ### **1. F-Strings**
  F-strings are the modern and preferred method for string formatting in Python. To create an f-string, prefix the string with \`f\` and use curly brackets \`{}\` as placeholders for variables or expressions.
  
  #### Example
  \`\`\`python
  age = 25
  txt = f"My name is Sarah, and I am {age} years old."
  print(txt)
  \`\`\`
  **Output:**
  \`\`\`
  My name is Sarah, and I am 25 years old.
  \`\`\`
  
  ---
  
  ### **Placeholders and Modifiers in F-Strings**
  F-strings allow placeholders to include:
  1. **Variables**
  2. **Operations**
  3. **Functions**
  4. **Formatting Modifiers**
  
  ---
  
  #### **Using Variables**
  You can directly insert variables into placeholders.
  
  #### Example
  \`\`\`python
  price = 150
  txt = f"The total price is {price} dollars."
  print(txt)
  \`\`\`
  **Output:**
  \`\`\`
  The total price is 150 dollars.
  \`\`\`
  
  ---
  
  #### **Formatting with Modifiers**
  Modifiers can format data inside the placeholder. For instance:
  - \`:.2f\` formats a number to 2 decimal places.
  
  #### Example
  \`\`\`python
  price = 123.4567
  txt = f"The price after discount is {price:.2f} dollars."
  print(txt)
  \`\`\`
  **Output:**
  \`\`\`
  The price after discount is 123.46 dollars.
  \`\`\`
  
  ---
  
  #### **Performing Math Operations**
  Placeholders can also perform calculations directly.
  
  #### Example
  \`\`\`python
  quantity = 3
  price_per_item = 20
  txt = f"The total cost for {quantity} items is {quantity * price_per_item} dollars."
  print(txt)
  \`\`\`
  **Output:**
  \`\`\`
  The total cost for 3 items is 60 dollars.
  \`\`\`
  
  ---
  
  ### **2. Using the \`format()\` Method**
  Before f-strings, the \`format()\` method was widely used for string formatting. It allows you to insert variables into a string using curly brackets \`{}\`.
  
  #### Example
  \`\`\`python
  age = 30
  txt = "I am {} years old.".format(age)
  print(txt)
  \`\`\`
  **Output:**
  \`\`\`
  I am 30 years old.
  \`\`\`
  
  ---
  
  #### **Using Multiple Placeholders**
  The \`format()\` method can handle multiple placeholders.
  
  #### Example
  \`\`\`python
  name = "Alice"
  age = 28
  txt = "My name is {}, and I am {} years old.".format(name, age)
  print(txt)
  \`\`\`
  **Output:**
  \`\`\`
  My name is Alice, and I am 28 years old.
  \`\`\`
  
  ---
  
  #### **Positional and Keyword Arguments**
  You can specify the order of variables using positional or keyword arguments.
  
  #### Example
  \`\`\`python
  # Positional arguments
  txt = "{1} is learning {0}.".format("Python", "Emma")
  print(txt)
  
  # Keyword arguments
  txt = "{name} is {age} years old.".format(name="Bob", age=35)
  print(txt)
  \`\`\`
  **Output:**
  \`\`\`
  Emma is learning Python.
  Bob is 35 years old.
  \`\`\`
  
  ---
  
  ### Summary
  String formatting is an essential skill in Python, offering both readability and flexibility. F-strings are highly recommended for most use cases, but \`format()\` is still useful for complex scenarios. Experiment with these techniques to master dynamic string creation!
    `,
    image: "/banner/Python-String-Formatting.png"
  },
  {
    path: '/tutorials/python/escape-characters',
  }
]
  
  
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