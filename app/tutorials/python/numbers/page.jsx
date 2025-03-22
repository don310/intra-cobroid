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
      path: "/tutorials/python/numbers",
      title: "Python Numbers",
      content: `
  ### Python Numbers
  
  In Python, numbers are an essential data type and can be represented in three forms:
  
  - **int:** Integer values, which are whole numbers.
  - **float:** Decimal numbers, including numbers in scientific notation.
  - **complex:** Numbers that consist of both a real and an imaginary part.
  
  Let's explore each of these number types in detail, along with examples and outputs.
  
  ---
  
  ### 1. int (Integer)
  An int in Python represents a whole number, either positive or negative, without any decimal or fractional parts. Python supports arbitrarily large integers.
  
  #### Key Points:
  - Integers can be used in basic arithmetic operations.
  - They can also represent numbers in different numeral systems such as binary, octal, and hexadecimal.
  
  #### Examples:
  \`\`\`python
  # Basic integers
  num1 = 10      # Positive integer
  num2 = -25     # Negative integer
  num3 = 0       # Zero
  
  # Binary, Octal, Hexadecimal integers
  binary_num = 0b1011   # 11 in decimal
  octal_num = 0o15      # 13 in decimal
  hex_num = 0xA        # 10 in decimal
  
  # Output the types
  print(type(num1))      
  print(type(binary_num))  
  print(type(octal_num))   
  \`\`\`
  
  **Output:**
  \`\`\`
  <class 'int'>
  <class 'int'>
  <class 'int'>
  \`\`\`
  
  ---
  
  ### 2. float (Floating-Point Numbers)
  A float in Python is used to represent numbers that contain a decimal point or numbers written in scientific (exponential) notation.
  
  #### Key Points:
  - Floats are used when precision with decimals is required, such as in scientific calculations.
  - You can also work with very small or very large numbers using scientific notation.
  
  #### Examples:
  \`\`\`python
  # Decimal floats
  positive_float = 12.34
  negative_float = -98.76
  
  # Exponential (scientific) notation
  large_float = 3.5e10      # 3.5 * 10^10
  small_float = 4.2e-7      # 4.2 * 10^-7
  
  # Arithmetic operation with floats
  result = positive_float + large_float
  
  # Output the types and result
  print(type(positive_float))  
  print(type(small_float))     
  print("Result:", result)    
  \`\`\`
  
  **Output:**
  \`\`\`
  <class 'float'>
  <class 'float'>
  Result: 35000000012.34
  \`\`\`
  
  ---
  
  ### 3. complex (Complex Numbers)
  A complex number in Python is a number that has both a real and an imaginary part. It is written in the form a + bj, where a is the real part and b is the imaginary part.
  
  #### Key Points:
  - Complex numbers are particularly useful in fields like electrical engineering and quantum physics.
  - Python supports complex number operations such as addition, subtraction, multiplication, and division.
  
  #### Examples:
  \`\`\`python
  # Complex numbers
  complex_num1 = 3 + 5j
  complex_num2 = 1 - 2j
  
  # Arithmetic operations with complex numbers
  sum_result = complex_num1 + complex_num2
  multiplication_result = complex_num1 * complex_num2
  
  # Real and imaginary parts of a complex number
  real_part = complex_num1.real
  imaginary_part = complex_num1.imag
  
  # Output the results
  print(type(complex_num1))     
  print("Sum:", sum_result)      
  print("Product:", multiplication_result) 
  print("Real Part:", real_part) 
  print("Imaginary Part:", imaginary_part) 
  \`\`\`
  
  **Output:**
  \`\`\`
  <class 'complex'>
  Sum: (4+3j)
  Product: (13+1j)
  Real Part: 3.0
  Imaginary Part: 5.0
  \`\`\`
  
  ---
  
  ### Comparison of Number Types
  
  Here’s a quick comparison table for better understanding:
  
  | Property          | int           | float           | complex          |
  |-------------------|---------------|-----------------|------------------|
  | Representation    | Whole numbers | Decimal numbers | Real + Imaginary |
  | Example           | 42, -7, 0x1A  | 3.14, -0.001    | 2 + 3j, -1.5 + 0j|
  | Type Conversion   | int(x)        | float(x)        | complex(x)       |
  | Use Cases         | Counting, loops| Measurements, finance | Signal processing |
  
  ---
  
  ### Type Conversion Between Numbers
  
  In Python, it’s possible to convert between the different types of numbers (int, float, complex).
  
  #### Examples:
  \`\`\`python
  # Converting int to float
  int_val = 10
  float_val = float(int_val)
  print("Float:", float_val)  
  
  # Converting float to int (truncating the decimal part)
  float_num = 9.7
  int_num = int(float_num)
  print("Rounded Int:", int_num)  
  
  # Converting int and float to complex numbers
  complex_from_int = complex(int_val)
  complex_from_float = complex(float_val, 5.5)
  print("Complex from int:", complex_from_int) 
  print("Complex from float:", complex_from_float)  
  \`\`\`
  
  **Output:**
  \`\`\`
  Float: 10.0
  Rounded Int: 9
  Complex from int: (10+0j)
  Complex from float: (10.0+5.5j)
  \`\`\`
      `,
      image: "/banner/Python-Numbers.png",
    },
    {
        path: '/tutorials/python/data-conversion',
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