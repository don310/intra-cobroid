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
      path: '/tutorials/python/data-conversion',
      title: 'Python Data Conversion',
      content: `
  ### Data Conversion
  
  In Python, **type conversion** refers to the process of converting data from one type to another. This is an essential part of working with Python, as it ensures that data is in the appropriate format for different operations. Python provides built-in functions for data type conversion. 
  
  ---
  
  #### Converting Integer to Float
  
  To convert an integer to a floating-point number, you can use the \`float()\` function. This conversion will result in a floating-point number with a decimal part.
  
  **Example:**
  \`\`\`python
  num1 = 25
  num2 = float(num1)
  
  print(num2)
  \`\`\`
  
  **Output:**
  \`\`\`
  25.0
  \`\`\`
  
  Here, the integer \`25\` is converted to \`25.0\`, which is a float.
  
  ---
  
  #### Converting Integer to Complex Number
  
  To convert an integer to a complex number, use the \`complex()\` function. A complex number in Python is represented as \`a + bj\`, where \`a\` is the real part and \`b\` is the imaginary part.
  
  **Example:**
  \`\`\`python
  num1 = 25
  num2 = complex(num1)
  
  print(num2)
  \`\`\`
  
  **Output:**
  \`\`\`
  (25+0j)
  \`\`\`
  
  In this case, the integer \`25\` is converted to the complex number \`(25+0j)\`, where \`0j\` represents the imaginary part (which is 0).
  
  ---
  
  #### Converting Float to Integer
  
  To convert a float to an integer, use the \`int()\` function. The \`int()\` function rounds the given number to the nearest integer by truncating the decimal part (it doesn't round the number, it simply discards the fractional part).
  
  **Example:**
  \`\`\`python
  num1 = 8.7
  num2 = int(num1)
  
  print(num2)
  \`\`\`
  
  **Output:**
  \`\`\`
  8
  \`\`\`
  
  Here, the float \`8.7\` is converted to \`8\`, as \`int()\` truncates the decimal part without rounding.
  
  ---
  
  #### Converting Float to Complex Number
  
  To convert a float to a complex number, use the \`complex()\` function. The real part is the given float, and the imaginary part is \`0j\`.
  
  **Example:**
  \`\`\`python
  num1 = 8.4
  num2 = complex(num1)
  
  print(num2)
  \`\`\`
  
  **Output:**
  \`\`\`
  (8.4+0j)
  \`\`\`
  
  In this case, the float \`8.4\` is converted to the complex number \`(8.4+0j)\`.
  
  ---
  
  #### Converting Complex Numbers to Other Types
  
  It’s important to note that **complex numbers cannot be directly converted to integers or floats**. Attempting to do so will result in an error.
  
  **Example:**
  
  \`\`\`python
  num1 = 3 + 5j
  num2 = int(num1)   # This will raise an error!
  \`\`\`
  
  **Output:**
  \`\`\`
  TypeError: can't convert complex to int
  \`\`\`
  
  **Explanation:** Complex numbers, which have both a real and imaginary part, cannot be converted into integers or floats, as these types can only represent real numbers. Therefore, trying to convert a complex number to an integer or float will throw a  \`TypeError\`.
  
  ---
  
  #### Additional Examples of Data Conversion
  
  **Example 1: Converting Negative Integer to Float and Complex**
  \`\`\`python
  num1 = -25
  num2 = float(num1)
  num3 = complex(num1)
  
  print(num2)   # Output: -25.0
  print(num3)   # Output: (-25+0j)
  \`\`\`
  
  **Example 2: Converting Float to Integer and Complex**
  \`\`\`python
  num1 = 8.4
  num2 = int(num1)
  num3 = complex(num1)
  
  print(num2)   # Output: 8
  print(num3)   # Output: (8.4+0j)
  \`\`\`
  
  **Example 3: Trying to Convert Complex to Integer (Error Handling)**
  \`\`\`python
  num1 = 3 + 4j
  try:
      num2 = int(num1)
  except TypeError as e:
      print(f"Error: {e}")
  \`\`\`
  
  **Output:**
  \`\`\`
  Error: can't convert complex to int
  \`\`\`
  
  This example shows how we handle the conversion error of complex numbers.
  
  ---
  
  ### Summary
  
  Data conversion in Python is a fundamental concept that helps in ensuring the appropriate handling of data. Python offers the following functions for conversion:
  
  - **int()**: Converts a value to an integer.
  - **float()**: Converts a value to a floating-point number.
  - **complex()**: Converts a value to a complex number.
  
  Remember, **complex numbers cannot be converted to integers or floats** directly, and trying to do so will result in a \`TypeError\`.
  
      `,
      image: '/banner/Python-Data-Conversion.png',
    },
    {
         path: '/tutorials/python/type-casting'
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