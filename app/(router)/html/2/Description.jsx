import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">2. What is Semantic HTML5?</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About This Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video will introduce you to the basic concepts of Semantic HTML5. You will learn how Semantic HTML5 helps in building a clear and meaningful structure for your web pages. From using elements like header, footer, and article, to the importance of properly defining content for accessibility and SEO, this video will guide you through practical steps to understand and implement Semantic HTML5 in your web projects.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://www.youtube.com/watch?v=o3m15BWi2HM&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=2"
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
