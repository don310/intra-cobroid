import React from "react";
import Header from "@/app/components/Header";
import SideNavbar from "@/app/components/SideNavbar";
import Footer from "@/app/components/Footer";

const notesData = [
  {
    id: "cNotes",
    title: "C Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/c.png",
  },
  {
    id: "c++Notes",
    title: "C++ Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/C++.png",
  },
  {
    id: "pythonNotes",
    title: "Python Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/python.png",
  },
  {
    id: "htmlNotes",
    title: "HTML Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/html.png",
  },
  {
    id: "cssNotes",
    title: "CSS Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/css.png",
  },
  {
    id: "javascriptNotes",
    title: "JavaScript Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/js.png",
  },
  {
    id: "reactNotes",
    title: "React Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/react.png",
  },
  {
    id: "phpNotes",
    title: "PHP Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/php.png",
  },
  {
    id: "jqueryNotes",
    title: "JQuery Notes",
    description: "Download Notes Here",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/jquery.jfif",
  },
  {
    id: "comingSoon",
    title: "Coming Soon",
    description: "More Notes Will Be Available Soon",
    pdfLink: "#",
    chapterwiseLink: "#",
    image: "/pic/mysql.jfif",
  },
];

function Notes() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Sticky Sidebar */}
      <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg">
        <SideNavbar />
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex flex-col">
        {/* Full-Width Header */}
        <div className="w-full bg-white shadow-md">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
            <h1 className="text-3xl font-semibold mb-4">Notes</h1>
            <p className="mb-4">
              Welcome to the Notes page 📚. Access study materials and notes
              here 📝.
            </p>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {notesData.map((note) => (
                <div
                  key={note.id}
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
                >
                  <img
                    src={note.image}
                    alt={`${note.title} image`}
                    className="w-full h-40 object-contain rounded-md mb-2"
                  />
                  <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                  <p className="mb-2">{note.description}</p>
                  <a
                    href={note.pdfLink}
                    className="text-blue-500 hover:underline"
                  >
                    PDF Notes
                  </a>
                  <br />
                  <a
                    href={note.chapterwiseLink}
                    className="text-blue-500 hover:underline"
                  >
                    Chapterwise Notes
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Notes;
