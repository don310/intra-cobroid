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
    path: "/tutorials/python/list-method",
    title: "List Methods in Python",
    content: `
### List Methods in Python

Python provides several built-in methods to manipulate lists, which are useful for adding, removing, and modifying elements. Some of the common list methods include \`sort()\`, \`reverse()\`, \`index()\`, \`count()\`, and \`copy()\`. Let's dive into these methods with explanations and examples.

#### 1. \`sort()\` Method:
The \`sort()\` method sorts the elements of a list in ascending order by default. If you want to sort it in descending order, you can pass the \`reverse=True\` parameter.

**Example 1: Sorting in Ascending Order**:
\`\`\`python
colors = ["violet", "indigo", "blue", "green"]
colors.sort()
print(colors)
\`\`\`
**Output**:
\`\`\`
['blue', 'green', 'indigo', 'violet']
\`\`\`

**Example 2: Sorting in Descending Order**:
\`\`\`python
colors = ["violet", "indigo", "blue", "green"]
colors.sort(reverse=True)
print(colors)
\`\`\`
**Output**:
\`\`\`
['violet', 'indigo', 'green', 'blue']
\`\`\`

#### 2. \`reverse()\` Method:
The \`reverse()\` method reverses the order of the list in place.

**Example**:
\`\`\`python
colors = ["violet", "indigo", "blue", "green"]
colors.reverse()
print(colors)
\`\`\`
**Output**:
\`\`\`
['green', 'blue', 'indigo', 'violet']
\`\`\`

#### 3. \`index()\` Method:
The \`index()\` method returns the index of the first occurrence of the specified item in the list.

**Example**:
\`\`\`python
colors = ["violet", "green", "indigo", "blue", "green"]
print(colors.index("green"))
\`\`\`
**Output**:
\`\`\`
1
\`\`\`

**Example with Numbers**:
\`\`\`python
num = [4, 2, 5, 3, 6, 1, 2, 1, 3, 2, 8, 9, 7]
print(num.index(3))
\`\`\`
**Output**:
\`\`\`
3
\`\`\`

#### 4. \`count()\` Method:
The \`count()\` method returns the number of occurrences of a specified item in the list.

**Example**:
\`\`\`python
colors = ["violet", "green", "indigo", "blue", "green"]
print(colors.count("green"))
\`\`\`
**Output**:
\`\`\`
2
\`\`\`

**Example with Numbers**:
\`\`\`python
num = [4, 2, 5, 3, 6, 1, 2, 1, 3, 2, 8, 9, 7]
print(num.count(2))
\`\`\`
**Output**:
\`\`\`
3
\`\`\`

#### 5. \`copy()\` Method:
The \`copy()\` method creates a shallow copy of the list. This is useful when you want to perform operations on a list without modifying the original list.

**Example**:
\`\`\`python
colors = ["violet", "green", "indigo", "blue"]
newlist = colors.copy()
print(colors)
print(newlist)
\`\`\`
**Output**:
\`\`\`
['violet', 'green', 'indigo', 'blue']
['violet', 'green', 'indigo', 'blue']
\`\`\`

#### Conclusion
Mastering these methods will allow you to handle Python lists more effectively, making your code cleaner and more efficient.
`,
    image: "/banner/python-list-methods.png",
  },
  {
    path: '/tutorials/python/tuples',
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
