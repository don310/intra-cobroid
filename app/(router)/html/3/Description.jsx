import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">3. Image Elements</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About This Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video presents a comprehensive introduction to image elements in HTML5. 
        You will learn how to use the img tag to insert images into your web pages. 
        From important attributes like src for specifying the image location to alt for alternative descriptions, 
        this video will provide a deep understanding of the correct usage and best practices to enrich visual content 
        in web development using HTML5.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://www.youtube.com/watch?v=9g1Zz83FXyc&list=PLFIM0718LjIX-K5eeHRImnZhPUMhsw9A7&index=3"
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
