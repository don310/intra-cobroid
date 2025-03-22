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
      mainHeading: 'CSS BASICS',
      topics: [
        { id: 1, name: 'Information & History', path: '/tutorials/css-home' },
        { id: 2, name: 'Your First CSS Website', path: '/tutorials/css-home/first-website' },
        { id: 3, name: 'How CSS Works?', path: '/tutorials/css-home/how-it-works' },
        { id: 4, name: 'Syntax of CSS', path: '/tutorials/css-home/syntax' },
        { id: 5, name: 'Ways to Add CSS', path: '/tutorials/css-home/ways-to-add' },
        { id: 6, name: 'CSS Selectors', path: '/tutorials/css-home/selectors' },
        { id: 7, name: 'CSS Comments', path: '/tutorials/css-home/comments' },
        { id: 8, name: 'CSS Specificity', path: '/tutorials/css-home/specificity' },
      ]
    },
    {
      mainHeading: 'CSS PROPERTIES',
      topics: [
        { id: 9, name: 'CSS Colors', path: '/tutorials/css/colors' },
        { id: 10, name: 'CSS Backgrounds', path: '/tutorials/css/backgrounds' },
        { id: 11, name: 'CSS Borders', path: '/tutorials/css/borders' },
        { id: 12, name: 'CSS Fonts', path: '/tutorials/css/fonts' },
        { id: 13, name: 'CSS Text Styling', path: '/tutorials/css/text-styling' },
        { id: 14, name: 'CSS Box Model', path: '/tutorials/css/box-model' },
        { id: 15, name: 'CSS Padding', path: '/tutorials/css/padding' },
        { id: 16, name: 'CSS Margin', path: '/tutorials/css/margin' },
        { id: 17, name: 'CSS Hover', path: '/tutorials/css/hover' },
      ]
    },
    {
      mainHeading: 'CSS ADVANCED',
      topics: [
        { id: 18, name: 'CSS FlexBox', path: '/tutorials/css/flexbox' },
        { id: 19, name: 'CSS Grid', path: '/tutorials/css/grid' },
        { id: 20, name: 'CSS Animations', path: '/tutorials/css/animations' },
        { id: 21, name: 'CSS Media Queries', path: '/tutorials/css/media-queries' },
        { id: 22, name: 'CSS Transitions', path: '/tutorials/css/transitions' },
        { id: 23, name: 'CSS Shadows', path: '/tutorials/css/shadows' },
        { id: 24, name: 'CSS Gradients', path: '/tutorials/css/gradients' },
      ]
    }
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
