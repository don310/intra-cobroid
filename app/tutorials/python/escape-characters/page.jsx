'use client';  // Add this to indicate that this component should be rendered on the client side.

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
    path: "/tutorials/python/escape-characters",
    title: "Escape Characters",
    content: `
### Escape Characters in Python

Escape characters in Python allow you to include special characters within strings that are otherwise illegal or have special meanings. These characters are denoted with a backslash \\\\, followed by a specific character.

---

### Common Escape Characters in Python

| Escape Sequence | Description                          |
|------------------|--------------------------------------|
| \\\'            | Inserts a single quote (\)          |
| \\\\"           | Inserts a double quote (\")          |
| \\\\            | Inserts a backslash (\\\\)           |
| \\n             | Inserts a new line                  |
| \\t             | Inserts a tab                       |
| \\b             | Inserts a backspace                 |
| \\r             | Inserts a carriage return           |
| \\f             | Inserts a form feed                 |
| \\v             | Inserts a vertical tab              |

---

### **1. Inserting Single and Double Quotes**

Escape characters allow you to include quotes inside a string.

#### Example
\`\`\`python
# Using single and double quotes
str1 = "She said, \\"Wow, amazing!\\""
str2 = 'It\\'s a bright day!'
print(str1)
print(str2)
\`\`\`

**Output:**
\`\`\`
She said, "Wow, amazing!"
It's a bright day!
\`\`\`

---

### **2. Adding a New Line (\\n)**

The \\n escape sequence is used to insert a line break.

#### Example
\`\`\`python
# Breaking text into multiple lines
quote = "Programming is fun.\\nIt requires patience and practice."
print(quote)
\`\`\`

**Output:**
\`\`\`
Programming is fun.
It requires patience and practice.
\`\`\`

---

### **3. Adding a Tab (\\t)**

The \\t escape sequence adds a horizontal tab, making the text indented.

#### Example
\`\`\`python
# Aligning text with tabs
data = "Name:\\tJohn\\nAge:\\t30\\nRole:\\tDeveloper"
print(data)
\`\`\`

**Output:**
\`\`\`
Name:    John
Age:     30
Role:    Developer
\`\`\`

---

### **4. Adding a Backspace (\\b)**

The \\b escape sequence erases the character before it.

#### Example
\`\`\`python
# Removing unwanted spaces
text = "Hel\\blo, Python!"
print(text)
\`\`\`

**Output:**
\`\`\`
Helo, Python!
\`\`\`

---

### **5. Inserting a Backslash (\\\\)**

The \\\\ escape sequence is used to insert a backslash character.

#### Example
\`\`\`python
# Showing file paths
path = "C:\\\\Users\\\\John\\\\Documents\\\\report.txt"
print(path)
\`\`\`

**Output:**
\`\`\`
C:\\Users\\John\\Documents\\report.txt
\`\`\`

---

### **6. Carriage Return (\\r)**

The \\r escape sequence moves the cursor to the beginning of the line, overwriting the text.

#### Example
\`\`\`python
# Rewriting a line
text = "Hello, World!\\rPython"
print(text)
\`\`\`

**Output:**
\`\`\`
Python World!
\`\`\`

---

### **7. Form Feed (\\f)**

The \\f escape sequence adds a form feed, often used for page breaks in older systems.

#### Example
\`\`\`python
# Form feed example
text = "Page 1\\fPage 2"
print(text)
\`\`\`

**Output:**
\`\`\`
Page 1
Page 2
\`\`\`

---

### **8. Vertical Tab (\\v)**

The \\v escape sequence inserts a vertical tab, often for aligning text vertically.

#### Example
\`\`\`python
# Adding vertical space
text = "Column 1\\vColumn 2"
print(text)
\`\`\`

**Output:**
\`\`\`
Column 1
        Column 2
\`\`\`

---

### Summary

Escape characters are a fundamental part of working with strings in Python, allowing you to include special characters or control the text format effectively. These escape sequences simplify tasks like formatting file paths, adding new lines, or including quotes in your strings. Experiment with these escape characters to see how they enhance string handling!
    `,
    image: "/banner/Python-Escape-Characters.png"
  },{
    path: '/tutorials/python/lists' 
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
      setCurrentIndex(matchingIndex); // Set the current index based on the path
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
                Previous
              </button>
              <button
                onClick={() => handleNavigation("next")}
                disabled={currentIndex === tutorialContent.length - 1}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Next
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
