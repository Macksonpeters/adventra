"use client";

import { HeroCarouselComponent } from "../carousel/carousel";
import { useState } from "react";
import ComingSoonModal from "../modal/comingsoonmodal";

const Hero = () => {
  const [header, setHeader] = useState<any>(null);
  const [openComingSoon, setOpenComingSoon] = useState<any>(null);

  const headers = [
    {
      name: "home",
      path: "/#home",
    },
    {
      name: "features",
      path: "/#features",
    },
    {
      name: "Explore",
      path: "/#explore",
    },
    {
      name: "Blog",
      path: "/#blog",
    },
  ];

  const handleClick = (index: number) => {
    setHeader(index);
    if (index === 3) {
      setOpenComingSoon(true);
    }
  };

  return (
    <div className="adventraBackground" id="home">
      {" "}
      <div className="flex mx-auto justify-center">
        <ul className="flex gap-4 sm:gap-[120px] pt-10 pb-20 sm:py-20 flex-wrap">
          {headers?.map((item: any, index: any) => {
            return (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={`capitalize  hover:text-gray-400 ${
                  header == index
                    ? "text-gray-400 scale-110 sm:scale-125"
                    : "text-gray-200 scale-100"
                } transition-transform duration-300`}
              >
                <a href={item.path}>{item?.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        <HeroCarouselComponent />
      </div>
      <ComingSoonModal isOpen={openComingSoon} setIsOpen={setOpenComingSoon} />
    </div>
  );
};

export default Hero;
