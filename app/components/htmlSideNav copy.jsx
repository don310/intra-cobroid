'use client';

import React from 'react';
import { Code2 } from 'lucide-react';
import Logo from '@/components/Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNavbar() {
  const path = usePathname();

  const menu = [
    {
      mainHeading: 'INTRODUCTION',
      topics: [
        { id: 1, name: 'HTML Introduction', path: '/tutorials/html-home' },
        { id: 2, name: 'HTML Working', path: '/tutorials/html-home/working' },
        { id: 3, name: 'HTML Installation', path: '/tutorials/html-home/installation' },
        { id: 4, name: 'HTML Execution', path: '/tutorials/html-home/execution' },
        { id: 5, name: 'HTML Page Structure', path: '/tutorials/html-home/page-structure' },
        { id: 6, name: 'HTML Tags', path: '/tutorials/html-home/tags' },
        { id: 7, name: 'HTML Elements', path: '/tutorials/html-home/elements' },
        { id: 8, name: 'HTML Attributes', path: '/tutorials/html-home/attributes' },
        { id: 9, name: 'HTML Comments', path: '/tutorials/html-home/comments' },
        { id: 10, name: 'HTML Id & Classes', path: '/tutorials/html-home/id-classes' },
      ]
    },
    {
      mainHeading: 'HTML BASIC TAGS',
      topics: [
        { id: 11, name: 'Heading Tags', path: '/tutorials/html/headings' },
        { id: 12, name: 'Paragraph Tag', path: '/tutorials/html/paragraphs' },
        { id: 13, name: 'Horizontal Line Tag', path: '/tutorials/html/lists' },
        { id: 14, name: 'Anchor Tag', path: '/tutorials/html/tables' },
        { id: 15, name: 'Image Tag', path: '/tutorials/html/forms' },
        { id: 16, name: 'Pre Tag', path: '/tutorials/html/forms' },
      ]
    },
    {
        mainHeading: 'INLINE & BLOCK ELEMENTS',
        topics: [
          { id: 17, name: 'HTML Inline Elements', path: '/tutorials/html/headings' },
          { id: 18, name: 'HTML Block Elements', path: '/tutorials/html/paragraphs' },
        ]
      },
      {
        mainHeading: 'HTML LISTS',
        topics: [
          { id: 19, name: 'HTML Lists', path: '/tutorials/html/headings' },
          { id: 20, name: 'HTML Unordered List', path: '/tutorials/html/paragraphs' },
          { id: 21, name: 'HTML Ordered List', path: '/tutorials/html/lists' },
          { id: 22, name: 'HTML Definition Lists', path: '/tutorials/html/tables' },
        ]
      },
      {
        mainHeading: 'HTML TABLES',
        topics: [
          { id: 23, name: 'HTML Tables', path: '/tutorials/html/headings' },
          { id: 24, name: 'More on Tables', path: '/tutorials/html/paragraphs' },
        ]
      },
      {
        mainHeading: 'HTML FORMS',
        topics: [
          { id: 25, name: 'Introduction to HTML Forms', path: '/tutorials/html/headings' },
          { id: 26, name: 'HTML Input Types', path: '/tutorials/html/paragraphs' },
          { id: 27, name: 'Textarea & Select', path: '/tutorials/html/paragraphs' },
          { id: 28, name: 'More on forms', path: '/tutorials/html/paragraphs' },
        ]
      },
      {
        mainHeading: 'HEAD ELEMENTS',
        topics: [
          { id: 29, name: 'HTML Meta Tags', path: '/tutorials/html/headings' },
          { id: 30, name: 'Link & Script Tags', path: '/tutorials/html/paragraphs' },
        ]
      },
      {
        mainHeading: 'HTML MEDIA',
        topics: [
          { id: 31, name: 'Video & Audio Tags', path: '/tutorials/html/headings' },
          { id: 32, name: 'SVG in HTML', path: '/tutorials/html/paragraphs' },
          { id: 33, name: 'iFrames in HTML', path: '/tutorials/html/paragraphs' },
        ]
      },
      {
        mainHeading: 'Miscellaneous Tags',
        topics: [
          { id: 34, name: 'HTML Code Tag', path: '/tutorials/html/headings' },
          { id: 35, name: 'HTML Semantic Tags', path: '/tutorials/html/paragraphs' },
          { id: 36, name: 'HTML Canvas', path: '/tutorials/html/paragraphs' },
          { id: 37, name: 'HTML Global Attributes', path: '/tutorials/html/paragraphs' },
          { id: 38, name: 'HTML Entities', path: '/tutorials/html/paragraphs' },
          { id: 39, name: 'HTML Quotation Tag', path: '/tutorials/html/paragraphs' },
          { id: 40, name: 'Obsolete HTML Tags', path: '/tutorials/html/paragraphs' },
          { id: 41, name: 'Character Sets', path: '/tutorials/html/paragraphs' },
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
                  className={`flex gap-3 mt-1 p-3 text-[18px] items-center cursor-pointer
                    hover:bg-primary hover:bg-opacity-10 rounded-md transition-all
                    duration-300 ease-in-out group
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
