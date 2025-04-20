"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/app/components/Header";
import SideNavbar from "@/app/components/SideNavbar";
import Footer from "@/app/components/Footer";

// Blog posts data with markdown content
const blogPosts = {
  "understanding-javascript-closures": {
    title: "Understanding JavaScript Closures",
    content: `
JavaScript closures are one of the most powerful features of the language. A closure is the combination of a function and the lexical environment within which that function was declared.

### What is a Closure?
A **closure** gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

#### Example of a Closure:

\`\`\`javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable:', outerVariable);
    console.log('Inner Variable:', innerVariable);
  };
}

const newFunction = outerFunction('outside');
newFunction('inside');
\`\`\`

In this example, the inner function has access to the outer function's variables even after the outer function has finished executing.

### Use Cases of Closures
1. **Data Privacy**: Closures help in encapsulating variables, making them private.
2. **Currying**: Functional programming often uses closures to create curried functions.

Understanding closures is key to mastering JavaScript, as it enables developers to write more robust and flexible code.
`,
    bannerImage: "/banner/closure.png",
  },
  "getting-started-with-react-hooks": {
    title: "Getting Started with React Hooks",
    content: `
React hooks allow you to use state and other React features without writing a class. With hooks, you can manage state, handle side effects, and access context, all inside functional components.

### Basic Hooks
Let's start with the two most commonly used hooks: **\`useState\`** and **\`useEffect\`**.

#### Example with \`useState\` and \`useEffect\`

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

In this example:
- The **\`useState\`** hook creates a state variable, \`count\`, which is updated using \`setCount\`.
- The **\`useEffect\`** hook updates the document's title whenever \`count\` changes.

### Custom Hooks
Custom hooks allow you to reuse logic across multiple components.

\`\`\`javascript
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
\`\`\`
`,
    bannerImage: "/banner/hooks.png",
  },
  "mastering-css-grid-layout": {
    title: "Mastering CSS Grid Layout",
    content: `
CSS Grid is a powerful layout system available in CSS. It allows you to create complex and responsive layouts more easily than with older techniques.

### CSS Grid Basics
The grid layout allows you to define rows and columns in a container, making layout structure more straightforward.

#### Example:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
\`\`\`

### Responsive Layouts
You can easily create responsive designs with CSS Grid by changing the number of columns based on screen size.

Mastering CSS Grid will open up new possibilities for creating dynamic and adaptable designs.
`,
    bannerImage: "/banner/css-grid.jfif",
  },
  "understanding-python-decorators": {
    title: "Understanding Python Decorators",
    content: `
Python decorators are a powerful way to modify the behavior of functions or methods without changing their actual code.

### What is a Decorator?
A **decorator** is a function that wraps another function, adding functionality to it.

#### Example:

\`\`\`python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
\`\`\`

### Common Use Cases
Decorators are commonly used for logging, enforcing access control, and tracking function execution times. They allow for cleaner, more modular code.
`,
    bannerImage: "/banner/python-decorators.png",
  },
};

// BlogPost component
export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound(); // If no post found, return 404
  }

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      {/* Sticky Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
        <SideNavbar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Full-Width Fixed Header */}
        <div className="fixed top-0 left-64 w-[calc(100%-16rem)] bg-white shadow-md z-10">
          <Header />
        </div>

        {/* Blog Post Content */}
        <div className="pt-24 p-8 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
            {/* Banner Section */}
            <div className="mb-6">
              <img src={post.bannerImage} alt={`${post.title} Banner`} className="w-full h-auto rounded-lg" />
            </div>
            
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="prose max-w-none">
              {/* Render blog post content with markdown parser */}
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
