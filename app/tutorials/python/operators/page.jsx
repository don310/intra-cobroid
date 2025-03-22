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
      path: "/tutorials/python/operators",
      title: "Python Operators",
      content: `
  ### **What are Python Operators?**
  Python provides a variety of operators that are used to perform different kinds of operations. These operators can be categorized into several types based on their functionality.
  
  ---
  
  ### **1. Arithmetic Operators:**
  Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, etc.
  
  | Name               | Operator | Example   | Explanation                                               |
  |--------------------|----------|-----------|-----------------------------------------------------------|
  | Addition           | +        | a + b     | Adds two operands.                                         |
  | Subtraction        | -        | a - b     | Subtracts the second operand from the first.              |
  | Multiplication     | *        | a * b     | Multiplies two operands.                                   |
  | Division           | /        | a / b     | Divides the first operand by the second (float result).    |
  | Exponential        | **       | a ** b    | Raises a to the power of b.                                |
  | Modulus            | %        | a % b     | Returns the remainder when a is divided by b.              |
  | Floor Division     | //       | a // b    | Divides a by b and returns the integer part of the quotient. |
  
  **Example:**
  \`\`\`python
  a = 10
  b = 3
  print(a + b) 
  print(a - b) 
  print(a * b)  
  print(a / b)  
  print(a ** b)
  print(a % b)  
  print(a // b) 
  \`\`\`
  
  **Output**:
  \`\`\`
  13
  7
  30
  3.3333333333333335
  1000
  1
  3
  \`\`\`
  ---
  
  ### **2. Assignment Operators:**
  Assignment operators are used to assign values to variables.
  
  | Name                  | Operator | Example    | Explanation                                                 |
  |-----------------------|----------|------------|-------------------------------------------------------------|
  | Assignment            | =        | a = b      | Assigns the value of b to a.                                 |
  | Addition Assignment   | +=       | a += b     | Adds b to a and assigns the result to a.                     |
  | Subtraction Assignment| -=       | a -= b     | Subtracts b from a and assigns the result to a.              |
  | Multiplication Assignment| *=    | a *= b     | Multiplies a by b and assigns the result to a.               |
  | Division Assignment   | /=       | a /= b     | Divides a by b and assigns the result to a.                  |
  | Modulus Assignment    | %=       | a %= b     | Assigns the remainder of a divided by b to a.                |
  | Floor Division Assignment| //=   | a //= b    | Performs floor division and assigns the result to a.         |
  
  **Example:**
  \`\`\`python
  a = 10
  b = 3
  a += b 
  a -= b  
  a *= b  
  a /= b 
  a %= b  
  a //= b 
  \`\`\`
  
  **Output**:
  \`\`\`
  13
  10
  30
  10.0
  1
  0
  \`\`\`

  ---
  
  ### **3. Bitwise Operators:**
  Bitwise operators are used to perform operations on binary numbers.
  
  | Name                  | Operator | Example   | Explanation                                                    |
  |-----------------------|----------|-----------|----------------------------------------------------------------|
  | Bitwise AND           | &        | a & b     | Performs bitwise AND between a and b.                          |
  | Bitwise OR            | \|       | a \| b    | Performs bitwise OR between a and b.                           |
  | Bitwise NOT           | ~        | ~a        | Inverts the bits of a.                                         |
  | Bitwise XOR           | ^        | a ^ b     | Performs bitwise XOR between a and b.                          |
  | Bitwise Right Shift   | >>       | a >> b    | Shifts the bits of a to the right by b places.                 |
  | Bitwise Left Shift    | <<       | a << b    | Shifts the bits of a to the left by b places.                  |
  
  **Example:**
  \`\`\`python
  a = 5  
  b = 3  
  print(a & b)  
  print(a | b)  
  print(~a)     
  print(a ^ b)  
  print(a >> 1) 
  print(a << 1)
  \`\`\`

  **Output**:
  \`\`\`
  1 
  7 
  -6
  6 
  2 
  10
  \`\`\`
  
  ---
  
  ### **4. Comparison Operators:**
  Comparison operators are used to compare two values and return a boolean result.
  
  | Name                       | Operator | Example  | Explanation                                                 |
  |----------------------------|----------|----------|-------------------------------------------------------------|
  | Equal                      | ==       | a == b   | Returns True if a is equal to b.                            |
  | Not Equal                  | !=       | a != b   | Returns True if a is not equal to b.                        |
  | Less Than                  | <        | a < b    | Returns True if a is less than b.                           |
  | Greater Than               | >        | a > b    | Returns True if a is greater than b.                        |
  | Less Than or Equal To      | <=       | a <= b   | Returns True if a is less than or equal to b.               |
  | Greater Than or Equal To   | >=       | a >= b   | Returns True if a is greater than or equal to b.            |
  
  **Example:**
  \`\`\`python
  a = 10
  b = 5
  print(a == b)  
  print(a != b)   
  print(a < b)    
  print(a > b)    
  print(a <= b)   
  print(a >= b)   
  \`\`\`
  
  **Output**:
  \`\`\`
  False
  True
  False
  True
  False
  True
  \`\`\`

  ---
  
  ### **5. Identity Operators:**
  Identity operators are used to compare the memory locations of two objects.
  
  | Name         | Operator | Example  | Explanation                                                |
  |--------------|----------|----------|------------------------------------------------------------|
  | is           | is       | a is b   | Returns True if both a and b refer to the same object.      |
  | is not       | is not   | a is not b | Returns True if both a and b do not refer to the same object. |
  
  **Example:**
  \`\`\`python
  a = [1, 2, 3]
  b = a
  print(a is b)     
  print(a is not b) 
  \`\`\`
  
  **Output**:
  \`\`\`
  True
  False
  \`\`\`

  ---
  
  ### **6. Logical Operators:**
  Logical operators are used to perform logical operations, often with boolean values.
  
  | Name | Operator | Example   | Explanation                                             |
  |------|----------|-----------|---------------------------------------------------------|
  | AND  | and      | a and b   | Returns True if both a and b are True.                  |
  | OR   | or       | a or b    | Returns True if either a or b is True.                  |
  | NOT  | not      | not a     | Reverses the logical state of a.                        |
  
  **Example:**
  \`\`\`python
  a = True
  b = False
  print(a and b)  
  print(a or b)  
  print(not a)    
  \`\`\`
  
  **Output**:
  \`\`\`
  False
  True
  False
  \`\`\`

  ---
  
  ### **7. Membership Operators:**
  Membership operators are used to test if a value is a member of a sequence (like a list, string, or tuple).
  
  | Name    | Operator  | Example    | Explanation                                                    |
  |---------|-----------|------------|---------------------------------------------------------------|
  | in      | in        | a in b     | Returns True if a is found in sequence b.                      |
  | not in  | not in    | a not in b | Returns True if a is not found in sequence b.                  |
  
  **Example:**
  \`\`\`python
  a = 3
  b = [1, 2, 3, 4, 5]
  print(a in b)     
  print(a not in b) 
  \`\`\`
  
  **Output**:
  \`\`\`
  True
  False
  \`\`\`

  ---
  
  ### **8. Conditional (Ternary) Operator:**
  A shorthand for conditional expressions.
  
  | Name      | Operator | Example                           | Explanation                                      |
  |-----------|----------|-----------------------------------|--------------------------------------------------|
  | Ternary   | x if condition else y | a if b > c else d | Returns a if b > c, else returns d.           |
  
  **Example:**
  \`\`\`python
  a = 5
  b = 3
  result = "Yes" if a > b else "No"
  print(result)  
  \`\`\`

  **Output**:
  \`\`\`
  Yes
  \`\`\`

  `,
      image: "/banner/python-operators.png",
    },
    {
      path: '/tutorials/python/booleans',
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