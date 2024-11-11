import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">4. Audio and Video</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About this Video</h2>
      <p className="text-[14px] mt-5 italic">
        This video provides a practical guide on how to use audio and video elements in HTML5. You will learn how to embed and control audio and video files directly on your web page using the audio and video tags. From attributes like src to specify the media source, to control options like autoplay and controls, this video walks you through practical steps to present multimedia content easily and effectively in web development using HTML5.
      </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://youtu.be/XmAAv5I9Qr8?si=QPlmck6lgoDtJa0C&index=4"
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
