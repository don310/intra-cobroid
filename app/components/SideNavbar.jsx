"use client";

import React from 'react';
import { Code2, Monitor, Laptop, BarChart, Search, Shield, Layout } from 'lucide-react'; // Import additional icons
import Logo from '../../components/Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const menuItems = [
  {
    id: 1,
    name: 'Web Development',
    path: '/web-development',
    icon: <Monitor size={24} />, // Custom icon for Web Development
    subcategories: [
      { name: 'HTML', path: '/html' },
      { name: 'CSS', path: '/css' },
      { name: 'JavaScript', path: '/javascript' },
      { name: 'Tailwind CSS', path: '/tailwind' },
      { name: 'React', path: '/react' },
    ],
  },
  {
    id: 2,
    name: 'App Development',
    path: '/app-development',
    icon: <Laptop size={24} />, // Custom icon for App Development
    subcategories: [
      { name: 'Flutter', path: '/flutter' },
      { name: 'React Native', path: '/react-native' },
    ],
  },
  {
    id: 3,
    name: 'Data Analytics',
    path: '/data-analytics',
    icon: <BarChart size={24} />, // Custom icon for Data Analytics
    subcategories: [
      { name: 'Python', path: '/python' },
      { name: 'R', path: '/r' },
    ],
  },
  {
    id: 4,
    name: 'Digital Marketing',
    path: '/digital-marketing',
    icon: <Search size={24} />, // Custom icon for Digital Marketing
    subcategories: [
      { name: 'SEO', path: '/seo' },
      { name: 'Content Marketing', path: '/content-marketing' },
    ],
  },
  {
    id: 5,
    name: 'Cyber Security',
    path: '/cyber-security',
    icon: <Shield size={24} />, // Custom icon for Cyber Security
    subcategories: [
      { name: 'Ethical Hacking', path: '/ethical-hacking' },
      { name: 'Network Security', path: '/network-security' },
    ],
  },
  {
    id: 6,
    name: 'Design',
    path: '/design',
    icon: <Layout size={24} />, // Custom icon for Design
    subcategories: [
      { name: 'UI/UX Design', path: '/ui-ux-design' },
      { name: 'Graphic Design', path: '/graphic-design' },
    ],
  },
];

function SideNavbar() {
  const path = usePathname();

  return (
    <div className="p-5 dark:bg-slate-900 shadow-md bg-white h-screen z-50 overflow-y-auto w-50"> {/* Increased width */}
      <Logo />
      <hr className="mt-7" />
      <div>
        {menuItems.map((category) => (
          <div key={category.id}>
            <Link href={category.path}>
              <div
                className={`flex gap-4 mt-1 p-3 text-[18px] items-center cursor-pointer rounded-md transition-all duration-300 ease-in-out group
                  ${path.startsWith(category.path) ? 'bg-teal-700 text-3xl font-bolder tracking-wider bg-opacity-50' : ''} 
                  hover:bg-primary hover:bg-opacity-10`}
              >
                {/* Displaying the category icon */}
                {category.icon}
                <span className="dark:text-white">{category.name}</span>
              </div>
            </Link>

            {category.subcategories && (
              <div className="ml-6 mt-2">
                {category.subcategories.map((subitem) => (
                  <Link key={subitem.path} href={subitem.path}>
                    <div
                      className={`flex gap-4 mt-1 p-3 text-[16px] items-center cursor-pointer rounded-md transition-all duration-300 ease-in-out group
                        ${path.startsWith(subitem.path) ? 'bg-teal-700 text-3xl font-bolder tracking-wider bg-opacity-50' : ''} 
                        hover:bg-primary hover:bg-opacity-10`}
                    >
                      <Code2 size={20} className="group-hover:animate-bounce text-primary" />
                      <span className="dark:text-white">{subitem.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNavbar;
