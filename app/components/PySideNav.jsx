'use client';

import React from 'react';
import { Code2 } from 'lucide-react';
import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNavbar() {
  const path = usePathname();

  // Main headings and their corresponding topics with paths
  const menu = [
    {
      mainHeading: 'Introduction',
      topics: [
        { id: 1, name: 'Python Introduction', path: '/tutorials/python' },
        { id: 2, name: 'Installation & Getting Started', path: '/tutorials/python/installation' },
        { id: 3, name: 'What is Syntax?', path: '/tutorials/python/syntax' },
        { id: 4, name: 'Python Comments', path: '/tutorials/python/comments' },
        { id: 5, name: 'Python Variables', path: '/tutorials/python/variables' },
      ]
    },
    {
      mainHeading: 'Python Data Types & Operators',
      topics: [
        { id: 6, name: 'Data Types', path: '/tutorials/python/data-types' },
        { id: 7, name: 'Python Numbers', path: '/tutorials/python/numbers' },
        { id: 8, name: 'Data Conversion', path: '/tutorials/python/data-conversion' },
        { id: 9, name: 'TypeCasting', path: '/tutorials/python/type-casting' },
        { id: 10, name: 'Python Operators', path: '/tutorials/python/operators' },
        { id: 11, name: 'Python Booleans', path: '/tutorials/python/booleans' },
      ]
    },
    {
      mainHeading: 'Python Strings',
      topics: [
        { id: 12, name: 'Python Strings', path: '/tutorials/python/strings' },
        { id: 13, name: 'Operation on Strings', path: '/tutorials/python/strings-operations' },
        { id: 14, name: 'String Methods', path: '/tutorials/python/string-methods' },
        { id: 15, name: 'Format Strings', path: '/tutorials/python/format-strings' },
        { id: 16, name: 'Escape Characters', path: '/tutorials/python/escape-characters' },
      ]
    },
    {
      mainHeading: 'Python Lists',
      topics: [
        { id: 17, name: 'Python Lists', path: '/tutorials/python/lists' },
        { id: 18, name: 'List Indexes', path: '/tutorials/python/list-indexes' },
        { id: 19, name: 'Add List Items', path: '/tutorials/python/add-list-items' },
        { id: 20, name: 'Remove List Items', path: '/tutorials/python/remove-list-items' },
        { id: 21, name: 'Change List Items', path: '/tutorials/python/change-list-items' },
        { id: 23, name: 'List Comprehension', path: '/tutorials/python/list-comprehension' },
        { id: 24, name: 'List Methods', path: '/tutorials/python/list-method' },
      ]
    },
    {
      mainHeading: 'Python Tuples',
      topics: [
        { id: 25, name: 'Python Tuples', path: '/tutorials/python/tuples' },
        { id: 26, name: 'Tuple Indexes', path: '/tutorials/python/tuples-indexes' },
        { id: 27, name: 'Manipulating Tuples', path: '/tutorials/python/manipulating-tuples' },
        { id: 28, name: 'Unpack Tuples', path: '/tutorials/python/unpack-tuples' },
      ]
    },
    {
      mainHeading: 'Python Sets',
      topics: [
        { id: 29, name: 'Python Sets', path: '/tutorials/python/python-sets' },
        { id: 30, name: 'Add/Remove Set Items', path: '/tutorials/python/add-remove-set-items' },
        { id: 31, name: 'Join Sets', path: '/tutorials/python/join-sets' },
        { id: 32, name: 'Set Methods', path: '/tutorials/python/sets-methods' },
      ]
    },
    {
      mainHeading: 'Python Dictionaries',
      topics: [
        { id: 33, name: 'Python Dictionaries', path: '/tutorials/python/python-dictionaries' },
        { id: 34, name: 'Access Items', path: '/tutorials/python/access-items' },
        { id: 35, name: 'Add/Remove Items', path: '/tutorials/python/add-remove-items' },
        { id: 36, name: 'Copy Dictionaries', path: '/tutorials/python/copy-dictionaries' },
      ]
    },
    {
      mainHeading: 'Conditional Statements',
      topics: [
        { id: 37, name: 'if Statement', path: '/tutorials/python/if-statement' },
        { id: 38, name: 'if-else Statement', path: '/tutorials/python/if-else-statement' },
        { id: 39, name: 'elif Statement', path: '/tutorials/python/elif-statement' },
        { id: 40, name: 'Nested if Statement', path: '/tutorials/python/nested-if-statement' },
      ]
    },
    {
      mainHeading: 'Python Loops',
      topics: [
        { id: 41, name: 'Python for Loop', path: '/tutorials/python/for-loop' },
        { id: 42, name: 'Python while Loop', path: '/tutorials/python/while-loop' },
        { id: 43, name: 'Nested Loops', path: '/tutorials/python/nested-loop' },
        { id: 44, name: 'Control Statements', path: '/tutorials/python/control-statements' },
      ]
    },
    {
      mainHeading: 'Python Functions',
      topics: [
        { id: 45, name: 'Python Functions', path: '/tutorials/python/python-functions' },
        { id: 46, name: 'Function Arguments', path: '/tutorials/python/function-arguments' },
        { id: 47, name: 'return Statement', path: '/tutorials/python/return-statement' },
        { id: 48, name: 'Python Recursion', path: '/tutorials/python/recursion' },
      ]
    },
    {
      mainHeading: 'Python Modules',
      topics: [
        { id: 49, name: 'Python Modules', path: '/tutorials/python/modules' },
        { id: 50, name: 'Python Packages', path: '/tutorials/python/packages' },
      ]
    },
    {
      mainHeading: 'Python OOPS',
      topics: [
        { id: 51, name: 'Python OOPS', path: '/tutorials/python/oops' },
        { id: 52, name: 'self method', path: '/tutorials/python/self-method' },
        { id: 53, name: '__init__ method', path: '/tutorials/python/init-method' },
      ]
    },
    {
      mainHeading: 'Advanced Topics',
      topics: [
        { id: 54, name: 'Python Iterators', path: '/tutorials/python/python-iterators' },
        { id: 55, name: 'JSON', path: '/tutorials/python/json' },
        { id: 56, name: 'Python try...except', path: '/tutorials/python/try-except' },
        { id: 57, name: 'Python PIP', path: '/tutorials/python/pip' },
        { id: 58, name: 'Data & Time', path: '/tutorials/python/date-time' },
      ]
    },
    {
      mainHeading: 'File Handling',
      topics: [
        { id: 59, name: 'Python File', path: '/tutorials/python/file' },
        { id: 60, name: 'Handling', path: '/tutorials/python/handling' },
        { id: 61, name: 'Read/Write Files', path: '/tutorials/python/read-write-files' }
      ]
    },
    // Additional main headings and topics here, formatted similarly
  ];

  return (
    <div className="p-5 dark:bg-slate-900 shadow-md bg-white h-screen z-50 overflow-y-auto">
      <Logo />
      <hr className="mt-7" />

      {/* Language menu */}
      <div>
        {menu.map((section, index) => (
          <div key={index}>
            {/* Main heading (non-clickable, bold, text-primary) */}
            <div className="text-primary font-bold text-lg mt-5 mb-2">
              {section.mainHeading}
            </div>
            {/* Topics under main heading */}
            {section.topics.map((item) => (
              <Link href={item.path} key={item.id}>
                <div
                  className={`flex gap-3 mt-1 p-3 text-[18px] items-center cursor-pointer
                    hover:bg-primary
                    hover:bg-opacity-10
                    rounded-md
                    transition-all
                    duration-300
                    ease-in-out
                    group
                    ${path.startsWith(item.path) ? 'bg-teal-700 bg-opacity-50' : ''}`}
                >
                  <Code2 size="24" className="group-hover:animate-bounce text-primary" />
                  <span className="dark:text-white">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNavbar;
