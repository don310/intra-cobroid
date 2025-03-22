import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      {/* Title */}
      <h2 className="text-[20px] font-semibold">2. Inline, Internal & External CSS</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>

      {/* Video */}
      <Video />

      {/* Description Section */}
      <h2 className="mt-5 text-[20px] font-semibold">About This Video</h2>
      <p className="text-[14px] mt-5 italic">
        In this video, you'll learn about the three ways to apply CSS styles to a web page: Inline CSS, Internal CSS, and External CSS. Each method will be explained with examples, showcasing their advantages and use cases. By the end of the video, you'll have a clear understanding of how to style your HTML elements effectively and the scenarios in which each method is most suitable.
      </p>

      {/* Source Section */}
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://www.youtube.com/watch?v=Obe-ZEh2btk&index=2"
          target="blank"
          className="text-blue-500 hover:underline"
        >
          Click Here
        </a>
      </h2>
    </div>
  );
}

export default Description;
