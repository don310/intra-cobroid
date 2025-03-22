"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import SecondaryNavbar from '@/app/components/secondaryNavbar';
import SideNavbar from '@/app/components/jsSideNav';
import Footer from '@/app/components/Footer';
import { usePathname } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { useRouter } from 'next/navigation';

const tutorialContent = [
  {
    path: "/tutorials/css-home",
    title: "CSS Introduction",
    content: `
### **CSS Introduction**
Let's start this journey of learning CSS together. I'm Deepak, the same guy from the IntraCobroid YouTube channel. This tutorial will serve as a resource for students to learn CSS and use the code from these lessons as a reference.

Without further ado, let's dive into learning CSS.

---

### **What is CSS?**
CSS stands for Cascading Style Sheets. It is a stylesheet language that is used to describe the visual presentation of a web page written in HTML (Hypertext Markup Language).

HTML creates the structure of the page, while CSS adds styling to that structure. This tutorial assumes that you have prior knowledge of HTML. If that's not the case, you can follow the HTML tutorial first.

---

### **Why the Word "Cascade"?**
The term "cascade" refers to the priority scheme determining which CSS rules are applied when multiple rules target an element. This scheme takes into account specificity and inheritance, ensuring that the most specific and latest rules are applied.

---

### **Why Use CSS?**
CSS is used to provide styling to HTML elements, making web pages visually appealing and user-friendly.

Consider the video below to understand how CSS can transform a webpage:

Let's take this HTML page for example. Here is how it looks without CSS:

(Insert image: cwh_tutorial_before_css.png)

This is how it looks after adding CSS:

(Insert image: cwh_tutorial_after_css.png)

---

### **Analogy to Understand CSS**
Imagine reading a book with only plain text. It's quite dull, isn't it? Now picture a book enriched with different colors, fonts, and styles. That's what CSS does to a webpage.

---

### **How Does CSS Work?**
CSS operates by selecting HTML elements and applying styles to them. Styles dictate the appearance of elements on a webpage. You can target HTML elements, classes, or IDs, defining properties like colors, fonts, margins, etc.


\`\`\`css
/* Example of a CSS rule */
selector {
    property: value;
}
\`\`\`

---

### **Quick Follow-Up Task:**
1. Right-click on the screen and select "Inspect" or press (Ctrl + Shift + C).
2. Click on the arrow icon in the top-left corner of the inspection pane.
3. Select elements on the page to toggle the CSS rules.

---

### **Key Features of CSS:**
- Styles and layouts of web pages.
- Works alongside HTML and XML documents.
- Enables responsive design for different screen sizes.
- Supports interactive effects like hover states and animations.
- CSS is now modularized, with ongoing updates rather than version numbers.
- Allows reusability of the same rules across multiple HTML documents.

---

### **A Bit of History**
CSS was created by Håkon Wium Lie to enhance the visual aspects of websites. Initially, websites were mainly used by researchers and lacked visual appeal. As websites became more widespread, the need for better design grew.

---

### **Important References:**
- For beginners, start with the HTML tutorial.
- For more insights, check out [CSS on Wikipedia](https://en.wikipedia.org/wiki/CSS).
- For advanced users, the [W3C CSS Specifications](https://www.w3.org/Style/CSS/) is a valuable resource.

**In the next tutorial, we'll continue our journey and learn about CSS selectors!**
    `,
    image: "/banner/Introduction-to-CSS.png",
  },
  {
    path: '/tutorials/css-home/selectors',
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
            <h1 className="text-3xl font-bold mb-4">{tutorial ? tutorial.title : "CSS Tutorial"}</h1>

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