import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">5. Canvas</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About this Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video is a brief guide introducing you to the use of the canvas element in HTML5. You will learn how to create dynamic image areas in your web page using JavaScript to draw shapes, text, and interactively manipulate images. By understanding the basics of the canvas, you can enhance your web development skills and create engaging visual experiences for users.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://www.youtube.com/BfDW71SCs1Y?si=s6bkLKk1JladzVCZ&index=5"
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
