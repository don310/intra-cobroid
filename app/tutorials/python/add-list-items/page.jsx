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
      "path": "/tutorials/python/add-list-items",
      "title": "Add List Items",
      "content": `
  ### Add List Items
  
  In Python, you can add items to a list using three primary methods: **append()**, **insert()**, and **extend()**. Each method offers unique functionality, as explained below:
  
  ---
  
  #### 1. append()
  
  This method adds a single item to the end of an existing list. It does not modify the original elements but appends the new item as the last element.
  
  **Example**:
  \`\`\`python
  colors = ["violet", "indigo", "blue"]
  colors.append("green")
  print(colors)
  # Output: ['violet', 'indigo', 'blue', 'green']
  \`\`\`
  
  ---
  
  #### 2. insert()
  
  To add an item at a specific position, use the \`insert()\` method. It takes two arguments:
  - **Index**: The position where the item should be inserted.
  - **Item**: The value to insert.
  
  **Example**:
  \`\`\`python
  colors = ["violet", "indigo", "blue"]
  # Indexes:   [0]       [1]       [2]
  
  colors.insert(1, "green")  # Inserts "green" at index 1
  print(colors)
  # Output: ['violet', 'green', 'indigo', 'blue']
  \`\`\`
  
  Here, the list updates, shifting the existing elements to accommodate the new item.
  
  ---
  
  #### 3. extend()
  
  The \`extend()\` method adds the items from another collection (list, tuple, set, or dictionary) to an existing list. Each item from the collection is unpacked and appended individually.
  
  ##### Example 1: Adding a list to a list
  \`\`\`python
  colors = ["violet", "indigo", "blue"]
  rainbow = ["green", "yellow", "orange", "red"]
  
  colors.extend(rainbow)
  print(colors)
  # Output: ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
  \`\`\`
  
  ##### Example 2: Adding a tuple to a list
  \`\`\`python
  cars = ["Hyundai", "Tata", "Mahindra"]
  cars2 = ("Mercedes", "Volkswagen", "BMW")
  
  cars.extend(cars2)
  print(cars)
  # Output: ['Hyundai', 'Tata', 'Mahindra', 'Mercedes', 'Volkswagen', 'BMW']
  \`\`\`
  
  ##### Example 3: Adding a set to a list
  \`\`\`python
  cars = ["Hyundai", "Tata", "Mahindra"]
  cars2 = {"Mercedes", "Volkswagen", "BMW"}
  
  cars.extend(cars2)
  print(cars)
  # Output: ['Hyundai', 'Tata', 'Mahindra', 'Mercedes', 'BMW', 'Volkswagen']
  \`\`\`
  
  ##### Example 4: Adding a dictionary to a list
  When adding a dictionary using \`extend()\`, only the keys are added, not the values.
  
  \`\`\`python
  students = ["Sakshi", "Aaditya", "Ritika"]
  students2 = {"Yash": 18, "Devika": 19, "Soham": 19}
  
  students.extend(students2)
  print(students)
  # Output: ['Sakshi', 'Aaditya', 'Ritika', 'Yash', 'Devika', 'Soham']
  \`\`\`
  
  ---
  
  #### Concatenating Two Lists
  You can concatenate two lists using the \`+\` operator. This creates a new list containing elements from both.
  
  **Example**:
  \`\`\`python
  colors = ["violet", "indigo", "blue", "green"]
  colors2 = ["yellow", "orange", "red"]
  
  new_colors = colors + colors2
  print(new_colors)
  # Output: ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
  \`\`\`
  
  ---
  
  ### Conclusion
  
  - Use \`append()\` to add a single item.
  - Use \`insert()\` to add an item at a specific index.
  - Use \`extend()\` to add multiple items from a collection.
  
  Understanding these methods will allow you to efficiently manage and manipulate lists in Python.
      `,
      "image": "/banner/Add-List-Items.png"
    },  
  {
    path: '/tutorials/python/remove-list-items',
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
