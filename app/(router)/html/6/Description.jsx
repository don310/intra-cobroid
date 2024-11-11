import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">6. SVG</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About this Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video is a comprehensive introduction to the use of SVG (Scalable Vector Graphics) in HTML5. You will learn how SVG allows for the creation of scalable vector graphics, maintaining image quality even when resized. By using XML code, you can create images, icons, graphics, and animations with high flexibility and performance. Learn the basics of SVG and how you can integrate it into your HTML5 projects to enhance the visual and interactive quality of your web pages.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://youtu.be/QZ8_WA14tE0?si=kNRbt5JOlExeHOyf&index=6"
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
