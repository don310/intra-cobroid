import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">9. IDs & Classes</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About this Video</h2>
      <p className="text-[14px] mt-5 italic">
      This video explains the concept of IDs and Classes in HTML and CSS, two fundamental tools used to style and target elements on a webpage. You'll learn the differences between IDs, which are used to uniquely identify a single HTML element, and Classes, which allow you to target multiple elements with the same style. By understanding how to use IDs and Classes effectively, you'll be able to organize and structure your web pages in a way that makes styling and scripting more efficient and maintainable.
    </p>

    <p className="text-[14px] mt-5 italic">
      IDs are best used for unique elements like headers, while Classes are more versatile and used for groups of elements that share the same styling, like buttons or text blocks. The video also covers best practices for using these attributes in web development, helping you write cleaner and more modular code.
    </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://youtu.be/ijxoiPpSmf4?si=DKpbuEwJtvC5sxwm&index=9"
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
