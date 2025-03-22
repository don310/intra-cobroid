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
      "path": "/tutorials/python/remove-list-items",
      "title": "Remove List Items",
      "content": `
  ### Remove List Items
  
  In Python, you can remove items from a list using several methods, each with unique behavior and use cases. Below are the primary ways to remove items from a list:
  
  ---
  
  #### 1. pop() Method
  
  The \`pop()\` method removes and returns an item from a list. By default, it removes the last item unless an index is provided. If an index is specified, it removes the item at that specific index.
  
  ##### Example 1: Removing the last item
  \`\`\`python
  colors = ["Red", "Green", "Blue", "Yellow", "Green"]
  removed_item = colors.pop()
  print(colors)          # Updated list
  print(removed_item)    # Removed item
  # Output:
  # ['Red', 'Green', 'Blue', 'Yellow']
  # Green
  \`\`\`
  
  ##### Example 2: Removing an item at a specific index
  \`\`\`python
  colors = ["Red", "Green", "Blue", "Yellow", "Green"]
  removed_item = colors.pop(1)  # Removes the item at index 1
  print(colors)                 # Updated list
  print(removed_item)           # Removed item
  # Output:
  # ['Red', 'Blue', 'Yellow', 'Green']
  # Green
  \`\`\`
  
  ---
  
  #### 2. remove() Method
  
  The \`remove()\` method deletes the first occurrence of a specified value. If the item does not exist in the list, it raises a \`ValueError\`.
  
  ##### Example: Removing a specific item
  \`\`\`python
  colors = ["violet", "indigo", "blue", "green", "yellow"]
  colors.remove("blue")
  print(colors)
  # Output:
  # ['violet', 'indigo', 'green', 'yellow']
  \`\`\`
  
  ---
  
  #### 3. del Keyword
  
  The \`del\` keyword is used to delete elements at a specific index or delete the entire list.
  
  ##### Example 1: Deleting an item at a specific index
  \`\`\`python
  colors = ["violet", "indigo", "blue", "green", "yellow"]
  del colors[3]  # Deletes the item at index 3
  print(colors)
  # Output:
  # ['violet', 'indigo', 'blue', 'yellow']
  \`\`\`
  
  ##### Example 2: Deleting the entire list
  \`\`\`python
  colors = ["violet", "indigo", "blue", "green", "yellow"]
  del colors
  # print(colors)  # Attempting to print will raise an error
  # Output:
  # NameError: name 'colors' is not defined
  \`\`\`
  
  ---
  
  #### 4. clear() Method
  
  The \`clear()\` method removes all items from the list, leaving it empty. Unlike \`del\`, it does not delete the variable itself.
  
  ##### Example: Clearing all items
  \`\`\`python
  colors = ["violet", "indigo", "blue", "green", "yellow"]
  colors.clear()
  print(colors)
  # Output:
  # []
  \`\`\`
  
  ---
  
  ### Summary of Methods
  
  | **Method** | **Action**                                      | **Modifies List?** | **Deletes List?** |
  |------------|-------------------------------------------------|---------------------|--------------------|
  | \`pop()\`  | Removes and returns an item by index (default is last item). | ✅ Yes              | ❌ No             |
  | \`remove()\` | Removes the first occurrence of a specified value. | ✅ Yes              | ❌ No             |
  | \`del\`     | Deletes an item by index or deletes the entire list. | ✅ Yes (Index)      | ✅ Yes (Entire List) |
  | \`clear()\` | Clears all items, leaving an empty list.       | ✅ Yes              | ❌ No             |
  
  ---
  
  ### Additional Examples
  
  #### Removing Specific Elements
  To remove multiple occurrences of a value:
  \`\`\`python
  colors = ["red", "green", "blue", "green", "yellow", "green"]
  while "green" in colors:
      colors.remove("green")
  print(colors)
  # Output:
  # ['red', 'blue', 'yellow']
  \`\`\`
  
  #### Removing Even or Odd Numbers from a List
  Using list comprehension to filter specific elements:
  \`\`\`python
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  numbers = [num for num in numbers if num % 2 != 0]  # Keep only odd numbers
  print(numbers)
  # Output:
  # [1, 3, 5, 7, 9]
  \`\`\`
  
  ---
  
  ### Conclusion
  
  - Use \`pop()\` to remove and retrieve items by index.
  - Use \`remove()\` to delete specific items by value.
  - Use \`del\` for deleting items by index or the entire list.
  - Use \`clear()\` to empty the list.
  
  With these methods, you can effectively manage and manipulate list items in Python.
      `,
      "image": "/banner/Remove-List-Items.png"
    },  
  {
    path: '/tutorials/python/change-list-items',
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
