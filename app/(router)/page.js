"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ModeToggle } from "@/components/ui/toggle";
import {
  FaCode,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-4">
        <div>
          <h4 className="font-bold text-lg">IntraCobroid</h4>
          <p className="mt-4 text-gray-400">
            Elevate Your Learning Journey with Cutting-Edge Education
            Technology.
          </p>
          <div className="flex space-x-4 mt-6">
            <FaFacebookF className="text-gray-500 hover:text-white" />
            <FaTwitter className="text-gray-500 hover:text-white" />
            <FaInstagram className="text-gray-500 hover:text-white" />
            <FaLinkedinIn className="text-gray-500 hover:text-white" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg">Company</h4>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>Contact</li>
            <li>About</li>
            <li>WsCube Tech Blog</li>
            <li>Self-Paced Courses</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">Our Programs</h4>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>Data Analytics</li>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>Cyber Security</li>
            <li>App Development</li>
            <li>Design</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">Support</h4>
          <ul className="mt-4 text-gray-400 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>FAQ's</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-12 text-gray-500">
        © 2024, All Rights Reserved By IntraCobroid
      </p>
    </footer>
  );
}

// Home Component
function Home() {
  const [query, setQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
   if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  const careerDomains = [
    {
      title: "Web Development",
      image: "/svg/learn-web-dev.svg",
      description: "See Programs",
      link: "/web-development-program",
    },
    {
      title: "App Development",
      image: "/svg/app-development-icon.svg",
      description: "See Programs",
      link: "/app-development-program",
    },
    {
      title: "Data Analytics",
      image: "/svg/data-science-icon.svg",
      description: "See Programs",
      link: "/data-analytics-program",
    },
    {
      title: "Digital Marketing",
      image: "/svg/digital-marketing-icon.svg",
      description: "See Programs",
      link: "/digital-marketing-program",
    },
    {
      title: "Cyber Security",
      image: "/svg/cyber-security-icon.svg",
      description: "See Programs",
      link: "/cyber-security-program",
    },
    {
      title: "Design",
      image: "/svg/design-icon.svg",
      description: "See Programs",
      link: "/design-program",
    },
  ];

  const impactNumbers = [
    {
      title: "150K+",
      description: "Students Trained",
      detail:
        "Empowering futures through skilled students trained by our EdTech expertise",
    },
    {
      title: "3K+",
      description: "Interns",
      detail: "Practical experience provided for thousands of interns",
    },
    {
      title: "100+",
      description: "Training Domains",
      detail: "Wide variety of career paths and skills covered",
    },
    {
      title: "3M+",
      description: "Learners On YouTube",
      detail: "@intracobroid | 5K Videos",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
  {/* Full-Width Fixed Header */}
  <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 px-3 py-3 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      {/* Logo with link */}
      <Link href="/">
        <Image
          src="/pic/logo.png"
          alt="IntraCobroid Logo"
          width={130} // Adjusted width
          height={90} // Adjusted height
          className="object-contain cursor-pointer"
        />
      </Link>
    </div>

    {/* Navigation Links */}
    <nav className="ml-auto flex space-x-4">
      {["home", "categories", "blog", "notes", "tutorial", "contact"].map((item) => (
        <Link
          href={`/${item}`}
          key={item}
          className="text-sm md:text-lg text-gray-700 hover:text-blue-500 capitalize"
        >
          {item}
        </Link>
      ))}
    </nav>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="ml-4 relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tutorials..."
          className="border rounded-lg pl-3 pr-10 py-1 text-gray-700 focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
          <button
            type="submit"
            className="absolute right-2 text-blue-500 hover:text-blue-700"
          >
            🔍
          </button>
      </form>
        
        {/* Mode Toggle and User Button */}
        <div className="flex items-center ml-4 space-x-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </header>

      {/* Main Banner */}
      <section className="bg-primary text-white py-16 mt-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">
            Don’t Just Upskill, Get Career-ready, Get Hired
          </h1>
          <p className="mb-6 text-lg">
            Top Mentorship Programs in Tech, Marketing, & Data - Delivered by
            industry experts.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Explore Programs
          </button>
        </div>
      </section>

      {/* Career Domains Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Top Career Domains
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {careerDomains.map((domain, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src={domain.image}
                alt={domain.title}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{domain.title}</h3>
              <Link
                href={domain.link}
                className="text-blue-500 hover:text-blue-700"
              >
                {domain.description}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Impact Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((impact, index) => (
              <div key={index} className="p-4">
                <h3 className="text-4xl font-bold text-primary">
                  {impact.title}
                </h3>
                <p className="font-semibold mt-2">{impact.description}</p>
                <p className="text-gray-400 mt-2">{impact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Feedback Section */}
      <section className="bg-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Learning Community
        </h2>
        <p className="mb-6 text-lg">
          Take your skills to the next level. Start your journey today!
        </p>
        <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </section>

       {/* Feedback Section */}
       <section className="bg-gray-100 py-16">
       <div className="container mx-auto text-center">
         <h2 className="text-3xl font-bold text-gray-800 mb-4">
           Students ❤️ IntraCobroid
         </h2>
         <p className="text-lg text-gray-600 mb-10">Hear from our students</p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Feedback 1 */}
           <div className="bg-white p-6 shadow-lg rounded-lg">
             <p className="text-gray-600 mb-4">
               "I don't have words to thank this man, I'm really grateful to
               have this channel and website in my daily routine. If you're a
               mere beginner, then you can trust this guy and can put your time
               into his content. I can assure you that it'll be worth it."
             </p>
             <div className="flex items-center mt-4">
               <img
                 src="/feedPic/mohit.jpg"
                 alt="Mohit Kumar"
                 className="w-12 h-12 rounded-full mr-4"
               />
               <div className="text-left">
                 <h4 className="font-bold text-gray-800">Mohit Negi</h4>
                 <p className="text-gray-500 text-sm">Web Developer</p>
               </div>
             </div>
           </div>
           {/* Feedback 2 */}
           <div className="bg-white p-6 shadow-lg rounded-lg">
             <p className="text-gray-600 mb-4">
               "For everyone who wants to level up their #Coding and #Dev
               skills - seriously, this channel is for you! Both basic and
               advanced stacks are covered on this channel, and one can learn
               according to his skill levels. And the icing on the cake is,
               everything is available for free."
             </p>
             <div className="flex items-center mt-4">
               <img
                 src="/feedPic/piyush.jfif"
                 alt="Rakesh Shetty"
                 className="w-12 h-12 rounded-full mr-4"
               />
               <div className="text-left">
                 <h4 className="font-bold text-gray-800">Piyush Sharma</h4>
                 <p className="text-gray-500 text-sm">Web Developer</p>
               </div>
             </div>
           </div>
           {/* Feedback 3 */}
           <div className="bg-white p-6 shadow-lg rounded-lg">
             <p className="text-gray-600 mb-4">
               "I’ve found this platform to be invaluable for gaining the
               latest tech insights and tutorials that are easy to follow and
               well-structured. The best part is the dedication to quality and
               accessibility. Highly recommend it to all aspiring developers!"
             </p>
             <div className="flex items-center mt-4">
               <img
                 src="/feedPic/priya.webp"
                 alt="Priya Sharma"
                 className="w-12 h-12 rounded-full mr-4"
               />
               <div className="text-left">
                 <h4 className="font-bold text-gray-800">Priya Sharma</h4>
                 <p className="text-gray-500 text-sm">Software Engineer</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
