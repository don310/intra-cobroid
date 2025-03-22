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
      path: '/tutorials/python/type-casting',
      title: 'Python Type Casting',
      content: `
  ### Type Casting
  
  Type casting in Python allows you to convert variables from one data type to another explicitly. This is useful when you want to control the type of a variable, especially when dealing with user input or processing data. In Python, type casting is done using constructor functions like \`int()\`, \`float()\`, and \`str()\`.
  
  #### Constructor Functions for Type Casting:
  
  - **int()**: Converts a value to an integer. If the value is a floating-point number, it removes the decimal part. If it's a string, it tries to convert it into an integer, provided the string represents a valid whole number.
    
  - **float()**: Converts a value to a floating-point number. If the value is an integer, it turns it into a float. If it's a string, the string must represent a valid number (either an integer or a floating-point number).
    
  - **str()**: Converts a value into a string. This works for numbers (integers or floats) or other data types that can be meaningfully represented as strings.
  
  #### Examples of Type Casting:
  
  1. **Casting to Integer (\`int()\`)**:
      - The \`int()\` function is used to convert a value to an integer. If the value is a float, it truncates (removes) the decimal part. If it's a string, the string must represent a valid integer.
  
      **Example 1**: Converting from a float:
      \`\`\`python
      x = int(2.8)  # x will be 2
      print(x)
      \`\`\`
  
      **Output**:
      \`\`\`
      2
      \`\`\`
  
      Explanation: The float value 2.8 is truncated to 2.
  
      **Example 2**: Converting from a string:
      \`\`\`python
      y = int("3")  # y will be 3
      print(y)
      \`\`\`
  
      **Output**:
      \`\`\`
      3
      \`\`\`
  
      Explanation: The string "3" is successfully converted to the integer 3.
  
  2. **Casting to Float (\`float()\`)**:
      - The \`float()\` function is used to convert a value into a floating-point number. It works with both integers and strings that represent numbers.
  
      **Example 1**: Converting from an integer:
      \`\`\`python
      x = float(1)   # x will be 1.0
      print(x)
      \`\`\`
  
      **Output**:
      \`\`\`
      1.0
      \`\`\`
  
      Explanation: The integer 1 is converted into the floating-point number 1.0.
  
      **Example 2**: Converting from a string:
      \`\`\`python
      y = float("3")   # y will be 3.0
      print(y)
      \`\`\`
  
      **Output**:
      \`\`\`
      3.0
      \`\`\`
  
      Explanation: The string "3" is successfully converted to the float 3.0.
  
      **Example 3**: Converting from a string with decimal:
      \`\`\`python
      w = float("4.2") # w will be 4.2
      print(w)
      \`\`\`
  
      **Output**:
      \`\`\`
      4.2
      \`\`\`
  
      Explanation: The string "4.2" is directly converted into the floating-point number 4.2.
  
  3. **Casting to String (\`str()\`)**:
      - The \`str()\` function converts any value (whether integer, float, or other types) into its string representation.
  
      **Example 1**: Converting from an integer:
      \`\`\`python
      num1 = 29
      print(str(num1))  # "29"
      \`\`\`
  
      **Output**:
      \`\`\`
      29
      \`\`\`
  
      Explanation: The integer 29 is converted to the string "29".
  
      **Example 2**: Converting from a float:
      \`\`\`python
      num2 = 6.67
      print(str(num2))  # "6.67"
      \`\`\`
  
      **Output**:
      \`\`\`
      6.67
      \`\`\`
  
      Explanation: The float 6.67 is converted to the string "6.67".
  
  #### Full Example:
  
  Here’s an example where we use all three type casting functions (\`int()\`, \`float()\`, and \`str()\`) together to demonstrate how different data types can be converted.
  
  \`\`\`python
  # Defining some values
  str1 = "7"          
  str2 = "3.142"
  str3 = "13"
  num1 = 29
  num2 = 6.67
  
  # Casting the string values to different types
  print(int(str1))    # Converts string "7" to int
  print(float(str2))  # Converts string "3.142" to float
  print(float(str3))  # Converts string "13" to float
  print(str(num1))    # Converts integer 29 to string
  print(str(num2))    # Converts float 6.67 to string
  \`\`\`
  
  **Output**:
  \`\`\`
  7
  3.142
  13.0
  29
  6.67
  \`\`\`
  
  #### Important Notes:
  - **Casting from Float to Int**: When converting from a float to an integer using \`int()\`, the decimal part is truncated, not rounded. If you want rounding, you can use the \`round()\` function instead.
    
  - **Casting from String to Numeric Types**: The string must represent a valid number. For example, "3.14" can be converted to a float, but a string like "Hello" will cause a ValueError.
  
  - **Using \`str()\`**: You can use \`str()\` to convert any type to a string, even if it’s not a number. It’s particularly useful for concatenating non-string types with strings.
  
  #### Advanced Example:
  
  Here's an example where you can use type casting when handling user input:
  
  \`\`\`python
  user_input = input("Enter a number: ")
  
  # Convert the user input to an integer
  number = int(user_input)
  print(f"The number you entered is: {number}")
  \`\`\`
  
  If the user enters "5", the output will be:
  \`\`\`
  The number you entered is: 5
  \`\`\`
  
  If the user enters "5.75", the \`int()\` function will raise an error, as it cannot directly convert floating-point strings to integers.
  
  You can handle such cases with try-except blocks to ensure proper error handling.
      `,
      image: '/banner/Python-Type-Casting.png',
    },
    {
      path: '/tutorials/python/operators',
    },
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