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
    path: '/tutorials/python/lists',
    title: 'Python Lists',
    content: `
### Python Lists

Lists are ordered collections of data items. They allow you to store multiple items in a single variable. List items are separated by commas and enclosed within square brackets \`[]\`. One of the key features of lists is that they are changeable, meaning you can alter them after creation.

#### Key Features of Lists:
- **Ordered**: The items in a list are stored in a specific order.
- **Changeable**: You can modify, add, or remove items from a list.
- **Allow Duplicates**: Lists can have multiple identical items.

#### Creating a List:

In Python, lists can hold elements of any data type, including integers, strings, and other objects. Here are a few examples:

**Example 1**: List of integers:
\`\`\`python
lst1 = [1, 2, 2, 3, 5, 4, 6]
print(lst1)
\`\`\`

**Output**:
\`\`\`
[1, 2, 2, 3, 5, 4, 6]
\`\`\`

**Example 2**: List of strings:
\`\`\`python
lst2 = ["Red", "Green", "Blue"]
print(lst2)
\`\`\`

**Output**:
\`\`\`
["Red", "Green", "Blue"]
\`\`\`

#### Modifying Lists:

Lists are mutable, meaning you can change their contents.

**Example 1**: Changing an item in the list:
\`\`\`python
lst1[0] = 10
print(lst1)
\`\`\`

**Output**:
\`\`\`
[10, 2, 2, 3, 5, 4, 6]
\`\`\`

**Example 2**: Adding an item to a list:
\`\`\`python
lst1.append(7)
print(lst1)
\`\`\`

**Output**:
\`\`\`
[10, 2, 2, 3, 5, 4, 6, 7]
\`\`\`

**Example 3**: Removing an item from a list:
\`\`\`python
lst1.remove(2)
print(lst1)
\`\`\`

**Output**:
\`\`\`
[10, 2, 3, 5, 4, 6, 7]
\`\`\`

#### List Operations:

You can perform various operations on lists, such as slicing and concatenation.

**Example 1**: Slicing a list:
\`\`\`python
lst3 = [1, 2, 3, 4, 5]
print(lst3[1:4])
\`\`\`

**Output**:
\`\`\`
[2, 3, 4]
\`\`\`

**Example 2**: Concatenating two lists:
\`\`\`python
lst4 = ["Apple", "Banana"]
lst5 = ["Orange", "Grapes"]
combined_list = lst4 + lst5
print(combined_list)
\`\`\`

**Output**:
\`\`\`
["Apple", "Banana", "Orange", "Grapes"]
\`\`\`

#### Important Notes:
- **Negative Indexing**: You can access items in a list from the end using negative indices. \`lst[-1]\` gives the last item, \`lst[-2]\` gives the second last item, and so on.
- **List Length**: You can get the number of items in a list using \`len(lst)\`.
  
**Example**: Using negative indexing:
\`\`\`python
print(lst1[-1])  # Outputs: 7
\`\`\`

#### Conclusion:
Python lists are versatile data structures that allow you to store and manipulate data efficiently. Whether you're working with numbers, strings, or even other lists, you can leverage lists to manage your data in Python.
    `,
    image: '/banner/Python-Lists.png',
  },
  {
    path: '/tutorials/python/list-indexes',
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
