import React from "react";

function Video() {
  return (
    <div className="flex relative">
      <iframe
        width="560"
        height="315"
        src="https://youtube.com/embed/Obe-ZEh2btk?si=Cm9nGddT3qIo8y7-" 
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md w-full"
      ></iframe>
    </div>
  );
}

export default Video;
