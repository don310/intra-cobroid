import React from "react";
import Image from "next/image";

const CSSData = [
  {
    image: "/assets/css/1.png",
    title: "Introduction",
    part: "Part 1",
    link: "/css/1"
  },
  {
    image: "/assets/css/2.webp",
    title: "Inline, Internal & External",
    part: "Part 2",
    link: "./css/2"
  },
  {
    image: "/assets/css/3.webp",
    title: "Font & Font Properties",
    part: "Part 3",
    link: "./css/3"
  },
  {
    image: "/assets/css/4.webp",
    title: "Border and Background",
    part: "Part 4",
    link: "./css/4"
  },
  {
    image: "/assets/css/5.webp",
    title: "Box Model, Margin, Padding",
    part: "Part 5",
    link: "./css/5"
  },
  {
    image: "/assets/css/6.webp",
    title: "Practice - 1",
    part: "Part 6",
    link: "./css/6"
  },
  {
    image: "/assets/css/7.webp",
    title: "Practice - 2",
    part: "Part 7",
    link: "./css/7"
  },
  {
    image: "/assets/css/8.webp",
    title: "Float & Clear",
    part: "Part 8",
    link: "./css/8"
  },
];

const CSSCard = ({ image, title, part, link }) => {
  return (
    <div className="flex flex-col gap-5 cursor-pointer">
      <a href={link} className="block border border-primary rounded-md hover:shadow-md hover:shadow-primary transition duration-300 ease-in-out">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
        />
        <div className="course-item-details flex flex-col gap-2 p-3">
          <h2 className="text-[20px] font-bold text-primary">{title}</h2>
          <p className="text-gray-500 dark:text-white">{part}</p>
        </div>
      </a>
    </div>
  );
};

export default function CSS() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-5 p-8">
      {CSSData.map((item) => (
        <CSSCard key={item.title} {...item} />
      ))}
    </div>
  );
}
