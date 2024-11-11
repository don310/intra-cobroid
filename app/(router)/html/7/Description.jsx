import React from "react";
import Video from "./Video";

function Description() {
  return (
    <div>
      <h2 className="text-[20px] font-semibold">7. Form Elements</h2>
      <h2 className="text-gray-400 text-[14px] mb-3">Deepak Suyal</h2>
      {/* Video */}
      <Video />

      {/* Description */}
      <h2 className="mt-5 text-[20px] font-semibold">About this Video</h2>
      <p className="text-[14px] mt-5 italic">
      In this video, we explore HTML5 form elements and their role in creating interactive and user-friendly web forms. You’ll learn about input types like text, email, password, and more, along with how to effectively use the `form`, `label`, and `fieldset` elements. Additionally, the video demonstrates how to implement built-in validation using HTML attributes such as `required`, `minlength`, and `pattern`, ensuring users provide accurate and valid data before submission.
    </p>
      <h2 className="mt-5 text-[20px] font-semibold">
        Video Source:{" "}
        <a
          href="https://youtu.be/llmmmE6ZqFk?si=3es4UuRMdrI-uGus&index=7"
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
