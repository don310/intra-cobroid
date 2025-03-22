"use client";

import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import SecondaryNavbar from "@/app/components/secondaryNavbar";
import SideNavbar from "@/app/components/PySideNav";
import Footer from "@/app/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

const tutorialContent = [
    {
      path: "/tutorials/python/manipulating-tuples",
      title: "Manipulating Tuples in Python",
      content: `
  ### Manipulating Tuples in Python
  
  Tuples are immutable, meaning their elements cannot be changed directly. However, we can manipulate tuple contents by converting them into lists, performing the required modifications, and then converting them back into tuples.
  
  #### Example 1: Adding, Removing, and Changing Tuple Items
  
  To add, remove, or modify items in a tuple, first convert it into a list:
  
  \`\`\`python
  countries = ("Spain", "Italy", "India", "England", "Germany")
  temp = list(countries)  # Convert tuple to list
  temp.append("Russia")   # Add an item
  temp.pop(3)             # Remove an item
  temp[2] = "Finland"     # Modify an item
  countries = tuple(temp) # Convert list back to tuple
  print(countries)
  \`\`\`
  
  **Output:**
  \`\`\`python
  ('Spain', 'Italy', 'Finland', 'Germany', 'Russia')
  \`\`\`
  
  Thus, we can temporarily convert the tuple into a list, modify it using list methods, and then convert it back into a tuple.
  
  ---
  
  #### Example 2: Concatenating Tuples
  
  Instead of converting to a list, we can concatenate two tuples directly:
  
  \`\`\`python
  countries = ("Pakistan", "Afghanistan", "Bangladesh", "Sri Lanka")
  countries2 = ("Vietnam", "India", "China")
  southEastAsia = countries + countries2
  print(southEastAsia)
  \`\`\`
  
  **Output:**
  \`\`\`python
  ('Pakistan', 'Afghanistan', 'Bangladesh', 'Sri Lanka', 'Vietnam', 'India', 'China')
  \`\`\`
  
  Concatenation allows us to merge tuples without altering their immutable nature.
  
  ---
  
  #### Example 3: Multiplying Tuples
  
  You can repeat tuple elements by multiplying them:
  
  \`\`\`python
  num_tuple = (1, 2, 3)
  repeated_tuple = num_tuple * 3
  print(repeated_tuple)
  \`\`\`
  
  **Output:**
  \`\`\`python
  (1, 2, 3, 1, 2, 3, 1, 2, 3)
  \`\`\`
  
  ---
  
  #### Example 4: Unpacking Tuples
  
  You can extract elements from a tuple into individual variables:
  
  \`\`\`python
  fruits = ("apple", "banana", "cherry")
  a, b, c = fruits
  print(a)
  print(b)
  print(c)
  \`\`\`
  
  **Output:**
  \`\`\`
  apple
  banana
  cherry
  \`\`\`
  
  This method allows you to easily assign values from a tuple to multiple variables.
  
  ---
  
  ### Conclusion
  
  Although tuples are immutable, we can manipulate them by:
  
  - Converting to lists for modification
  - Concatenating tuples
  - Multiplying tuples to repeat elements
  - Unpacking tuples into variables
  
  By using these techniques, we can work efficiently with tuple data structures in Python.
  `,
      image: "/banner/python-tuples-indexes.png",
    },
    {
        path: '/tutorials/python/unpack-tuples',
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
