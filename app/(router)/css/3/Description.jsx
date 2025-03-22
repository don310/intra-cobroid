import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      {/* Title */}
      <h2 className="text-[20px] font-semibold">2. Fonts & Font Properties</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Sandhika Galih</h2>

      {/* Video */}
      <Video />

      {/* Description Section */}
      <h2 className="mt-5 text-[20px] font-semibold">About This Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video introduces you to the CSS3 border-radius property, which enables you to design the corners of web elements more creatively. You will learn the basic concepts of the border-radius property and how to use it to create rounded or curved corsners for your web elements.
      </p>

      {/* Source Section */}
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://www.youtube.com/watch?v=3xbW5YHln78&list=PLFIM0718LjIVCmrSWbZPKCccCkfFw-Naa&index=2"
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
