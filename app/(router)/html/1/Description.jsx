import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. What is HTML5?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About This Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video is a comprehensive introduction to HTML5, the latest standard in web markup languages. You will be guided to understand the basics of HTML5, including document structure, new elements, and enhanced functionalities. From header and footer tags to audio and video elements, you will explore a wide range of HTML5 features and their benefits in developing modern, responsive, and interactive websites.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://www.youtube.com/watch?v=Q2VqCG13ejA&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7"
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

