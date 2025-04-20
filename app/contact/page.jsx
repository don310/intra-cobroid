"use client";

import React from "react";
import Header from "@/app/components/Header";  // Corrected import path
import SideNavbar from "@/app/components/SideNavbar";
import Footer from "@/app/components/Footer";
import { MdEmail } from "react-icons/md";
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";

function Contact() {
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

        {/* Main Content with Top Margin to Avoid Overlap with Header */}
        <div className="ptbg-white shadow--20 flex-1 p-8">
          <div className="md rounded-lg p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6">
            📩 Reach out to us through the contact form below, or connect with us on social media 🌐
          </p>

            {/* Flex Container for Form and Map */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
              {/* Contact Form */}
              <form
                action="https://formspree.io/f/mwpkpypb"
                method="POST"
                className="bg-white shadow-md rounded-lg p-6 border border-gray-300"
              >
                <div className="mb-4">
                  <label className="block text-lg font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-lg font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>

              {/* Google Map Embed */}
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
                <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.2215450127715!2d78.03219161511776!3d30.316494381784915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929d3f6f4328d%3A0xc7b8e5ae67b5bda1!2sDehradun%2C%20Uttarakhand%2C%20India!5e0!3m2!1sen!2sin!4v1649271799607!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  className="border rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
              <div className="flex space-x-4">
                <a
                  href="mailto:intracobroid@gmail.com"
                  className="text-blue-600 text-2xl hover:text-blue-800"
                  aria-label="Email"
                >
                  <MdEmail />
                </a>
                <a
                  href="https://www.instagram.com/@intracobroid"
                  className="text-pink-600 text-2xl hover:text-pink-800"
                  aria-label="Instagram"
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/intracobroid/"
                  className="text-blue-700 text-2xl hover:text-blue-900"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/IntraCobroid"
                  className="text-gray-800 text-2xl hover:text-gray-900"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.youtube.com/@IntraCobroid_CSE_ITE"
                  className="text-red-600 text-2xl hover:text-red-800"
                  aria-label="YouTube"
                >
                  <AiFillYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
