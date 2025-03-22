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
    path: "/tutorials/python/variables",
    title: "Python Variables",
    content: `
### Python Variables

**Variables** in Python are placeholders that store data values. Unlike some other programming languages, Python determines the type of the variable dynamically when the value is assigned.

---

### Creating Variables

In Python, you simply assign a value to create a variable. The type is inferred automatically:

**Example:**
\`\`\`python
username = "JohnDoe"    # type: str
user_age = 25           # type: int
is_member = False       # type: bool
\`\`\`

---

### Rules for Naming Variables

When creating variable names in Python, follow these rules:
1. Variable names must start with a letter or an underscore (\`_\`).
2. They can only contain alphanumeric characters and underscores (A-Z, a-z, 0-9, \`_\`).
3. Variable names are case-sensitive (\`name\` and \`Name\` are different).
4. Variable names cannot start with a number or include special characters.

**Examples:**
\`\`\`python
valid_variable = "Hello"    # valid
_valid_variable = 123       # valid
Variable123 = True          # valid

3variable = "Oops!"         # invalid (starts with a number)
@variable = "Invalid!"      # invalid (special character)
\`\`\`

---

### Improving Readability in Multi-word Variables

To improve readability, you can format multi-word variable names using the following styles:
1. **Pascal Case:** \`VariableName\`
2. **Camel Case:** \`variableName\`
3. **Snake Case:** \`variable_name\`

**Example:**
\`\`\`python
UserName = "Alice"          # Pascal Case
userName = "Bob"            # Camel Case
user_name = "Charlie"       # Snake Case
\`\`\`

---

### Scope of Variables

The **scope** of a variable defines where it can be accessed. Variables can be either **local** or **global**.

#### Local Variables
A local variable is created within a function and can only be accessed inside that function.

**Example:**
\`\`\`python
def greet():
    message = "Hello!"  # local variable
    print(message)

greet()
# print(message)  # This will raise an error because 'message' is not accessible outside the function.
\`\`\`

#### Global Variables
A global variable is defined outside any function and can be accessed throughout the program.

**Example:**
\`\`\`python
app_name = "PythonApp"  # global variable

def display_name():
    print("App Name:", app_name)

display_name()
print("Global Variable:", app_name)
\`\`\`

#### Using \`global\` Keyword
To modify a global variable inside a function, use the \`global\` keyword:

**Example:**
\`\`\`python
counter = 0  # global variable

def increment():
    global counter
    counter += 1
    print("Counter inside function:", counter)

increment()
print("Counter outside function:", counter)
\`\`\`

---

Understanding variables and their scope is crucial for writing clean and maintainable Python programs!

    `,
    image: "/banner/Python-Variables.png",
  },
  {
    path: '/tutorials/python/data-types',
  },
];

const TutorialPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const [isCompilerVisible, setCompilerVisible] = useState(false);
  const [tutorial, setTutorial] = useState(null);
  const [codeSnippet, setCodeSnippet] = useState('');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [output, setOutput] = useState("");

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

  
  const handleReset = () => {
    setCodeSnippet(tutorial?.code || "");
    setOutput("");
  };

  const toggleCompiler = () => {
    setCompilerVisible((prevVisible) => !prevVisible);
    if (!isCompilerVisible) handleReset();
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