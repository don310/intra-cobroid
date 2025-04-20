'use client';

import React from 'react';
import { Code2 } from 'lucide-react';
import Logo from '../../components/Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNavbar() {
  const path = usePathname();

  const menu = [
    {
      mainHeading: 'INTRODUCTION',
      topics: [
        { id: 1, name: 'JS Introduction', path: '/tutorials/js-home' },
        { id: 2, name: 'JS Execution', path: '/tutorials/js-home/execution' },
        { id: 3, name: 'Node.js Installation', path: '/tutorials/js-home/installation' },
      ]
    },
    {
      mainHeading: 'JAVASCRIPT VARIABLES',
      topics: [
        { id: 4, name: 'What are Variables?', path: '/tutorials/js/variables' },
        { id: 5, name: 'Variable Naming Rules', path: '/tutorials/js/naming-rules' },
        { id: 6, name: 'Primitives and Objects', path: '/tutorials/js/primitives-objects' },
        { id: 7, name: 'Operators and Expressions', path: '/tutorials/js/operators' },
        { id: 8, name: 'var vs let vs const', path: '/tutorials/js/var-let-const' },
      ]
    },
    {
      mainHeading: 'JAVASCRIPT BASICS',
      topics: [
        { id: 9, name: 'If else conditionals', path: '/tutorials/js/if-else' },
        { id: 10, name: 'If else ladder', path: '/tutorials/js/if-else-ladder' },
        { id: 11, name: 'Switch case', path: '/tutorials/js/switch-case' },
        { id: 12, name: 'Ternary Operator', path: '/tutorials/js/ternary-operator' },
        { id: 13, name: 'For Loops', path: '/tutorials/js/for-loops' },
        { id: 14, name: 'While Loop', path: '/tutorials/js/while-loop' },
        { id: 15, name: 'Functions', path: '/tutorials/js/functions' },
      ]
    },
    {
      mainHeading: 'JAVASCRIPT OBJECTS',
      topics: [
        { id: 16, name: 'Strings', path: '/tutorials/js/strings' },
        { id: 17, name: 'Arrays and Array Methods', path: '/tutorials/js/arrays' },
        { id: 18, name: 'Loops with Arrays', path: '/tutorials/js/array-loops' },
        { id: 19, name: 'Map, Filter and Reduce', path: '/tutorials/js/map-filter-reduce' },
        { id: 20, name: 'Date', path: '/tutorials/js/date' },
        { id: 21, name: 'Math', path: '/tutorials/js/math' },
        { id: 22, name: 'Number', path: '/tutorials/js/number' },
        { id: 23, name: 'Boolean', path: '/tutorials/js/boolean' },
      ]
    },
    {
      mainHeading: 'DOM & BOM',
      topics: [
        { id: 24, name: 'Window Object', path: '/tutorials/js/window-object' },
        { id: 25, name: 'History Object', path: '/tutorials/js/history-object' },
        { id: 26, name: 'Navigator Object', path: '/tutorials/js/navigator-object' },
        { id: 27, name: 'Screen Object', path: '/tutorials/js/screen-object' },
        { id: 28, name: 'Document Object', path: '/tutorials/js/document-object' },
        { id: 29, name: 'getElementbyId', path: '/tutorials/js/getElementById' },
        { id: 30, name: 'getElementsByClassName', path: '/tutorials/js/getElementsByClassName' },
        { id: 31, name: 'getElementsByName', path: '/tutorials/js/getElementsByName' },
        { id: 32, name: 'getElementsByTagName', path: '/tutorials/js/getElementsByTagName' },
        { id: 33, name: 'innerHTML', path: '/tutorials/js/innerHTML' },
        { id: 34, name: 'outerHTML', path: '/tutorials/js/outerHTML' },
      ]
    },
    {
      mainHeading: 'OOPs',
      topics: [
        { id: 35, name: 'Class', path: '/tutorials/js/class' },
        { id: 36, name: 'Objects', path: '/tutorials/js/objects' },
        { id: 37, name: 'Constructor', path: '/tutorials/js/constructor' },
        { id: 38, name: 'Static Method', path: '/tutorials/js/static-method' },
        { id: 39, name: 'Encapsulation', path: '/tutorials/js/encapsulation' },
        { id: 40, name: 'Inheritance', path: '/tutorials/js/inheritance' },
        { id: 41, name: 'Polymorphism', path: '/tutorials/js/polymorphism' },
        { id: 42, name: 'Abstraction', path: '/tutorials/js/abstraction' },
      ]
    },
  ];

  return (
    <div className="p-5 dark:bg-slate-900 shadow-md bg-white h-screen z-50 overflow-y-auto">
      <Logo />
      <hr className="mt-7" />
      <div>
        {menu.map((section, index) => (
          <div key={index}>
            <div className="text-primary font-bold text-lg mt-5 mb-2">
              {section.mainHeading}
            </div>
            {section.topics.map((item) => (
              <Link href={item.path} key={item.id}>
                <div
                  className={`flex gap-3 mt-1 p-3 text-[18px] items-center cursor-pointer hover:bg-primary hover:bg-opacity-10 rounded-md transition-all duration-300 ease-in-out group ${path.startsWith(item.path) ? 'bg-teal-700 bg-opacity-50' : ''}`}
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
