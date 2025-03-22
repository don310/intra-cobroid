import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">1. Introduction</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About This Video</h2>
      <p className="text-[14px] mt-5 italic">
        In this video, you will learn the basics of CSS3, CSS, one of the programming languages
        used to style and format the design of web pages. From basic concepts to the latest features,
        you will be guided through clear explanations and practical examples to develop an understanding
        of how to use CSS3 to create attractive and responsive web designs.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://www.youtube.com/watch?v=24yxDULSUlo&index=1"
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
