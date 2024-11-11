'use client';

import React from 'react';
import { Code2 } from 'lucide-react';
import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNavbar() {
  const path = usePathname();

  // Sample menu for languages with paths
  const menu = [
    { id: 1, name: 'Introduction', path: '/tutorials/introduction', icon: Code2 },
    { id: 2, name: 'Python Data Types & Operators', path: '/tutorials/python/data-types-operators', icon: Code2 },
    { id: 3, name: 'Python Strings', path: '/tutorials/python/strings', icon: Code2 },
    { id: 4, name: 'Python Lists', path: '/tutorials/python/lists', icon: Code2 },
    { id: 5, name: 'Python Tuples', path: '/tutorials/python/tuples', icon: Code2 },
    { id: 6, name: 'Python Sets', path: '/tutorials/python/sets', icon: Code2 },
    { id: 7, name: 'Python Dictionaries', path: '/tutorials/python/dictionaries', icon: Code2 },
    { id: 8, name: 'Conditional Statements', path: '/tutorials/python/conditional-statements', icon: Code2 },
    { id: 9, name: 'Python Loops', path: '/tutorials/python/loops', icon: Code2 },
    { id: 10, name: 'Python Functions', path: '/tutorials/python/functions', icon: Code2 },
    { id: 11, name: 'Python Modules', path: '/tutorials/python/modules', icon: Code2 },
    { id: 12, name: 'Python OOPS', path: '/tutorials/python/oops', icon: Code2 },
    { id: 13, name: 'Advanced Topics', path: '/tutorials/python/advanced-topics', icon: Code2 },
    { id: 14, name: 'File Handling', path: '/tutorials/python/file-handling', icon: Code2 }
  ];

  return (
    <div className="p-5 dark:bg-slate-900 shadow-md bg-white h-screen z-50 overflow-y-auto">
      <Logo />
      <hr className="mt-7" />

      {/* Language menu */}
      <div>
        {menu.map((item) => (
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
              <item.icon size="24" className="group-hover:animate-bounce text-primary" />
              <span className="dark:text-white">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNavbar;
