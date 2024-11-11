import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">8. List & Table Elements</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About this Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video explores the use of List and Table elements in HTML, two essential components for organizing content on web pages. You'll learn about different types of lists, including ordered (`&lt;ol&gt;`), unordered (`&lt;ul&gt;`), and definition lists (`&lt;dl&gt;`), and how to use them effectively to structure your content. Additionally, the video covers HTML tables (`&lt;table&gt;`), demonstrating how to create rows, columns, headers, and footers to display tabular data neatly.
      </p>

      <p className="text-[14px] mt-5 italic">
        By understanding how to use lists and tables, you can improve the readability and structure of your web pages. Practical examples will help you implement these elements in real-world scenarios, ensuring that your content is well-organized and easy to understand.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://youtu.be/HAw1bmsbpRo?si=BUtUA4CeXqdE6lzS&index=8"
          target="blank"
          className="
        text-blue-500
        hover:underline
        "
        >
          Click Here
        </a>
      </h2>
    </div>
  );
}

export default Description;
