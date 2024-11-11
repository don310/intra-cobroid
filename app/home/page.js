import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ModeToggle } from "@/components/ui/toggle";
import { FaCode, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-4">
        <div>
          <h4 className="font-bold text-lg">IntraCobroid</h4>
          <p className="mt-4 text-gray-400">
            Elevate Your Learning Journey with Cutting-Edge Education Technology.
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
  const careerDomains = [
    { title: "Web Development", image: "/svg/learn-web-dev.svg", description: "See Programs", link: "/web-development-program" },
    { title: "App Development", image: "/svg/app-development-icon.svg", description: "See Programs", link: "/app-development-program" },
    { title: "Data Analytics", image: "/svg/data-science-icon.svg", description: "See Programs", link: "/data-analytics-program" },
    { title: "Digital Marketing", image: "/svg/digital-marketing-icon.svg", description: "See Programs", link: "/digital-marketing-program" },
    { title: "Cyber Security", image: "/svg/cyber-security-icon.svg", description: "See Programs", link: "/cyber-security-program" },
    { title: "Design", image: "/svg/design-icon.svg", description: "See Programs", link: "/design-program" },
  ];

  const impactNumbers = [
    { title: "150K+", description: "Students Trained", detail: "Empowering futures through skilled students trained by our EdTech expertise" },
    { title: "3K+", description: "Interns", detail: "Practical experience provided for thousands of interns" },
    { title: "100+", description: "Training Domains", detail: "Wide variety of career paths and skills covered" },
    { title: "3M+", description: "Learners On YouTube", detail: "@wscubetech | 5K Videos" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Full-Width Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FaCode className="text-4xl text-primary" />
        <Link href="">
          <span className="text-3xl font-bold tracking-wider text-primary">IntraCobroid</span>
        </Link>
      </div>
      <nav className="ml-auto flex space-x-6">
        {["home", "categories", "blog", "notes", "tutorial", "contact"].map((item) => (
          <Link href={`/${item}`} key={item} className="text-lg text-gray-700 hover:text-blue-500 capitalize">
            {item}
          </Link>
        ))}
      </nav>
      <div className="flex items-center ml-4">
        <ModeToggle />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
    

      {/* Main Banner */}
      <section className="bg-primary text-white py-16 mt-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Don’t Just Upskill, Get Career-ready, Get Hired</h1>
          <p className="mb-6 text-lg">Top Mentorship Programs in Tech, Marketing, & Data - Delivered by industry experts.</p>
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Explore Programs
          </button>
        </div>
      </section>

      {/* Career Domains Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Explore Top Career Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {careerDomains.map((domain, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <img src={domain.image} alt={domain.title} className="w-full h-32 object-contain mb-4" />
            <h3 className="font-bold text-lg mb-2">{domain.title}</h3>
            <Link href={domain.link} className="text-blue-500 hover:text-blue-700">
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
                <h3 className="text-4xl font-bold text-primary">{impact.title}</h3>
                <p className="font-semibold mt-2">{impact.description}</p>
                <p className="text-gray-400 mt-2">{impact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
