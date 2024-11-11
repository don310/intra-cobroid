"use client";

import React, { useState } from "react";

function NextPart() {
  const [activePage, setActivePage] = useState(2);

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="p-5 text-center rounded-sm bg-white dark:bg-slate-900">
      <h2 className="text-[20px] font-bold">Learn HTML5</h2>
      <div className="flex flex-col gap-5 mt-5">
        {[
          { page: 1, title: "What is HTML5 ?", href: "/html/1" },
          { page: 2, title: "What is Semantic HTML5 ?", href: "/html/2" },
          { page: 3, title: "Images Elements", href: "/html/3" },
          { page: 4, title: "Audio and Video", href: "/html/4" },
          { page: 5, title: "Canvas", href: "/html/5" },
          { page: 6, title: "SVG", href: "/html/6" },
          { page: 7, title: "Form Validation", href: "/html/7" },
          { page: 8, title: "List & Table Elements", href: "/html/8" },
          { page: 9, title: "IDs & Classes", href: "/html/9" },
        ].map(({ page, title, href }) => (
          <a
            key={page}
            href={href}
            className={`block border rounded-md p-3 ${
              activePage === page
                ? "bg-primary"
                : "bg-gray-200 dark:bg-slate-900"
            } hover:shadow-md dark:hover:shadow-md dark:hover:shadow-primary transition duration-300 ease-in-out`}
            onClick={() => handleClick(page)}
            aria-current={activePage === page ? "page" : undefined}
          >
            {page}. {title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default NextPart;
