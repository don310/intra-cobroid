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
    "path": "/tutorials/python/list-comprehension",
    "title": "List Comprehension",
    "content": `
  ### List Comprehension 
  List comprehensions offer a concise way to create lists.
  
  List comprehensions are a concise way to create new lists by iterating over existing iterables such as lists, tuples, sets, dictionaries, or strings. They combine loops, conditions, and expressions into a single line of code, making them a powerful and readable tool for list manipulation.
  
  #### Syntax:
  \`\`\`python
  new_list = [expression(item) for item in iterable if condition]
  \`\`\`
  
  - **expression(item)**: Represents the value or transformation of each item to include in the new list.
  - **iterable**: The source data structure (e.g., list, tuple, set, string, etc.) to iterate through.
  - **condition**: An optional filter that determines if the item should be included in the new list.
  
  #### Examples:
  
  1. **Squares of Even Numbers**:
  \`\`\`python
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  squares_of_evens = [num ** 2 for num in numbers if num % 2 == 0]
  print(squares_of_evens)
  # Output: [4, 16, 36, 64]
  \`\`\`
  Explanation:
  - Expression: \`num ** 2\` calculates the square of each number.
  - Condition: \`num % 2 == 0\` ensures only even numbers are processed.
  
  2. **Extract Uppercase Characters from a String**:
  \`\`\`python
  text = "List Comprehension is Powerful!"
  uppercase_chars = [char for char in text if char.isupper()]
  print(uppercase_chars)
  # Output: ['L', 'C', 'P']
  \`\`\`
  Explanation:
  - Expression: \`char\` adds each character from the string to the list.
  - Condition: \`char.isupper()\` ensures only uppercase characters are included.
  
  3. **Filter Words Starting with a Vowel**:
  \`\`\`python
  words = ["apple", "banana", "orange", "grape", "umbrella"]
  vowel_words = [word for word in words if word[0].lower() in "aeiou"]
  print(vowel_words)
  # Output: ['apple', 'orange', 'umbrella']
  \`\`\`
  Explanation:
  - Expression: \`word\` adds each word to the new list.
  - Condition: \`word[0].lower() in "aeiou"\` checks if the first letter of the word is a vowel (case-insensitive).
  
  4. **Multiply Numbers by 3 and Exclude Multiples of 5**:
  \`\`\`python
  numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50]
  result = [num * 3 for num in numbers if num % 5 != 0]
  print(result)
  # Output: [90, 120]
  \`\`\`
  Explanation:
  - Expression: \`num * 3\` multiplies each number by 3.
  - Condition: \`num % 5 != 0\` excludes numbers that are multiples of 5.
  
  5. **Flatten a 2D List**:
  \`\`\`python
  matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  flattened = [num for row in matrix for num in row]
  print(flattened)
  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  \`\`\`
  Explanation:
  - The nested loop structure \`[num for row in matrix for num in row]\` iterates over each row and then each element in the row.
  - The result is a single list with all elements from the 2D list.
  
  #### Advanced Use Cases:
  
  6. **Generate a List of Tuples (number, square, cube)**:
  \`\`\`python
  numbers = [1, 2, 3, 4, 5]
  number_info = [(num, num ** 2, num ** 3) for num in numbers]
  print(number_info)
  # Output: [(1, 1, 1), (2, 4, 8), (3, 9, 27), (4, 16, 64), (5, 25, 125)]
  \`\`\`
  Explanation:
  - Expression: \`(num, num ** 2, num ** 3)\` creates a tuple containing the number, its square, and its cube.
  
  7. **Convert Dictionary Keys to Uppercase**:
  \`\`\`python
  original_dict = {"name": "Alice", "age": 25, "city": "Wonderland"}
  uppercase_keys = {key.upper(): value for key, value in original_dict.items()}
  print(uppercase_keys)
  # Output: {'NAME': 'Alice', 'AGE': 25, 'CITY': 'Wonderland'}
  \`\`\`
  Explanation:
  - This example shows dictionary comprehension, which works similarly to list comprehensions.
  - Expression: \`{key.upper(): value}\` creates a new dictionary with uppercase keys.
  
  #### Key Points:
  - **Readability and Compactness**: List comprehensions simplify code, but ensure they are concise to maintain readability.
  - **Performance**: List comprehensions are generally faster than traditional loops in most cases, as they are optimized in Python's interpreter.
  - **Versatility**: Can be used with various data structures like lists, strings, dictionaries, and sets.
  - **Conditional Logic**: List comprehensions allow you to filter data efficiently with conditions.
  
  #### Conclusion:
  List comprehensions provide a Pythonic way to create, filter, and transform lists efficiently. By understanding their syntax and capabilities, you can simplify complex list manipulations into elegant one-liners while maintaining clarity and performance.
  `,
    "image": "/images/list-comprehension.png"
}, 
  {
    path: '/tutorials/python/list-method',
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
