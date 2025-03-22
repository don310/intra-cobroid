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
      "path": "/tutorials/python/change-list-items",
      "title": "Change List Items",
      "content": `
  ### Change List Items
  
  In Python, you can easily change items in a list by specifying the index or a range of indices where the replacement should occur. Below is a detailed explanation with examples.
  
  ---
  
  #### Changing a Single Item
  
  To change a single item, specify the index of the item you want to replace, and assign it a new value.
  
  ##### Example:
  \`\`\`python
  names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
  names[2] = "Millie"
  print(names)
  # Output:
  # ['Harry', 'Sarah', 'Millie', 'Oleg', 'Steve']
  \`\`\`
  
  ---
  
  #### Changing Multiple Items
  
  You can change multiple items by specifying an index range and assigning a list of new values.
  
  ##### Example:
  \`\`\`python
  names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
  names[2:4] = ["Juan", "Anastasia"]
  print(names)
  # Output:
  # ['Harry', 'Sarah', 'Juan', 'Anastasia', 'Steve']
  \`\`\`
  
  ---
  
  #### Changing with a Mismatch in Range and Replacement Size
  
  ##### Case 1: Fewer Items in the Replacement List
  
  If the number of items in the replacement list is fewer than the range specified, only the items provided will replace the original ones, and the extra items in the range will be removed.
  
  \`\`\`python
  names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
  names[1:4] = ["Juan", "Anastasia"]
  print(names)
  # Output:
  # ['Harry', 'Juan', 'Anastasia', 'Steve']
  \`\`\`
  
  ##### Case 2: More Items in the Replacement List
  
  If the replacement list contains more items than the specified range, the additional items will be inserted into the list.
  
  \`\`\`python
  names = ["Harry", "Sarah", "Nadia", "Oleg", "Steve"]
  names[2:3] = ["Juan", "Anastasia", "Bruno", "Olga", "Rosa"]
  print(names)
  # Output:
  # ['Harry', 'Sarah', 'Juan', 'Anastasia', 'Bruno', 'Olga', 'Rosa', 'Oleg', 'Steve']
  \`\`\`
  
  ---
  
  ### Summary of Key Points
  
  - **Single Item Replacement**: Specify the exact index to replace.
  - **Multiple Item Replacement**: Specify a range of indices and provide a list of new items.
  - **Range vs. Replacement Size**:
    - If fewer items are provided, the range shrinks.
    - If more items are provided, the range expands to accommodate the new items.
  
  ---
  
  ### Additional Examples
  
  #### Example 1: Changing Items Dynamically
  
  You can dynamically change list items based on a condition or logic.
  
  \`\`\`python
  ages = [10, 15, 20, 25, 30]
  ages[1:4] = [age + 5 for age in ages[1:4]]  # Increase the ages by 5
  print(ages)
  # Output:
  # [10, 20, 25, 30, 30]
  \`\`\`
  
  #### Example 2: Replace and Extend
  
  Combine replacement with an extension of the list.
  
  \`\`\`python
  fruits = ["Apple", "Banana", "Cherry", "Date"]
  fruits[2:3] = ["Mango", "Peach", "Grapes"]
  print(fruits)
  # Output:
  # ['Apple', 'Banana', 'Mango', 'Peach', 'Grapes', 'Date']
  \`\`\`
  
  ---
  
  ### Conclusion
  
  - Use simple indexing to replace a single item.
  - Use slicing to replace multiple items.
  - Adjust the size of your replacement list according to the desired behavior (shrink, expand, or match the range).
  
  These techniques allow you to effectively manipulate lists in Python, ensuring flexibility in managing your data structures.
      `,
      "image": "/banner/Change-List-Items.png"
    },
  {
    path: '/tutorials/python/list-comprehension',
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
