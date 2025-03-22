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
      path: "/tutorials/python/tuples-indexes",
      title: "Tuple Indexes in Python",
      content: `
  ### Tuple Indexes in Python
  
  Each item in a tuple has a unique index. This index allows us to access specific items from the tuple. The first item has an index of [0], the second [1], the third [2], and so on.
  
  #### Example 1: Accessing Tuple Items using Positive Indexing
  
  \`\`\`python
  country = ("Spain", "Italy", "India", "England", "Germany")
  #            [0]      [1]      [2]       [3]        [4]
  print(country[1])
  print(country[3])
  print(country[0])
  \`\`\`
  **Output:**
  \`\`\`
  Italy
  England
  Spain
  \`\`\`
  
  #### Example 2: Accessing Tuple Items using Negative Indexing
  
  Negative indexing allows us to access tuple items from the end. The last item has index [-1], second last [-2], and so on.
  
  \`\`\`python
  print(country[-1])
  print(country[-3])
  print(country[-4])
  \`\`\`
  **Output:**
  \`\`\`
  Germany
  India
  Italy
  \`\`\`
  
  #### Example 3: Checking if an Item Exists in a Tuple
  
  The \`in\` keyword helps us check for an item's presence in a tuple.
  
  \`\`\`python
  if "Germany" in country:
      print("Germany is present.")
  else:
      print("Germany is absent.")
  \`\`\`
  **Output:**
  \`\`\`
  Germany is present.
  \`\`\`
  
  #### Example 4: Checking for an Absent Item
  
  \`\`\`python
  if "Russia" in country:
      print("Russia is present.")
  else:
      print("Russia is absent.")
  \`\`\`
  **Output:**
  \`\`\`
  Russia is absent.
  \`\`\`
  
  #### Example 5: Accessing a Range of Indexes
  
  You can print a range of tuple items using the syntax:
  
  \`Tuple[start : end : step]\`
  
  **Example:**
  
  \`\`\`python
  animals = ("cat", "dog", "bat", "mouse", "pig", "horse", "donkey", "goat", "cow")
  print(animals[3:7])  # using positive indexes
  print(animals[-7:-2]) # using negative indexes
  \`\`\`
  **Output:**
  \`\`\`
  ('mouse', 'pig', 'horse', 'donkey')
  ('bat', 'mouse', 'pig', 'horse', 'donkey')
  \`\`\`
  
  #### Example 6: Printing Elements from a Given Index till the End
  
  \`\`\`python
  print(animals[4:])   # using positive indexes
  print(animals[-4:])  # using negative indexes
  \`\`\`
  **Output:**
  \`\`\`
  ('pig', 'horse', 'donkey', 'goat', 'cow')
  ('horse', 'donkey', 'goat', 'cow')
  \`\`\`
  
  #### Example 7: Printing Elements from Start to a Given Index
  
  \`\`\`python
  print(animals[:6])   # using positive indexes
  print(animals[:-3])  # using negative indexes
  \`\`\`
  **Output:**
  \`\`\`
  ('cat', 'dog', 'bat', 'mouse', 'pig', 'horse')
  ('cat', 'dog', 'bat', 'mouse', 'pig', 'horse')
  \`\`\`
  
  #### Example 8: Printing Alternate Values
  
  \`\`\`python
  print(animals[::2])    # using positive indexes
  print(animals[-8:-1:2]) # using negative indexes
  \`\`\`
  **Output:**
  \`\`\`
  ('cat', 'bat', 'pig', 'donkey', 'cow')
  ('dog', 'mouse', 'horse', 'goat')
  \`\`\`
  
  #### Example 9: Printing Every 3rd Consecutive Item in a Given Range
  
  \`\`\`python
  print(animals[1:8:3])
  \`\`\`
  **Output:**
  \`\`\`
  ('dog', 'pig', 'goat')
  \`\`\`
  
  #### Conclusion
  
  Tuple indexes allow precise access to elements within a tuple using both positive and negative indexing methods. By using indexing techniques, we can efficiently extract and manipulate data stored in tuples.
  `,
      image: "/banner/python-tuples-indexes.png",
    },
    {
        path: '/tutorials/python/manipulating-tuples',
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
