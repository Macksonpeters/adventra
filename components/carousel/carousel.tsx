"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Image from "next/image";
import KiloOne from "../../public/images/kilo/kilomanjaro one.jpg";
import KiloTwo from "../../public/images/kilo/kilo 2.jpg";
import KiloThree from "../../public/images/kilo/kilo 3.jpg";
import KiloFour from "../../public/images/kilo/kilo 4.jpg";
import KiloFive from "../../public/images/kilo/kilo 5.jpg";

export const HeroCarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  const carouselData = [
    {
      title: "Adventra",
      heading: "Summit Mt. Kilimanjaro",
      body: "Join us for an unforgettable trek to the top of Africa's highest peak. Experience the thrill of conquering the mighty Kilimanjaro as you ascend through diverse landscapes. Witness breathtaking views, push your limits, and create lasting memories on this epic adventure.",
    },
    {
      title: "Adventra",
      heading: "Safari in Serengeti",
      body: "Embark on a thrilling safari adventure in the Serengeti, where the wild comes alive. Witness the majestic Big Five and countless other species in their natural habitat. From stunning sunrises to awe-inspiring wildlife encounters, this safari promises a journey like no other.",
    },
    {
      title: "Adventra",
      heading: "Dive in Zanzibar",
      body: "Explore the vibrant underwater world of Zanzibar's pristine waters. Dive into crystal-clear seas, discovering colorful coral reefs teeming with exotic marine life. Whether you're a seasoned diver or a first-timer, this adventure offers a unique glimpse into the ocean's hidden wonders.",
    },
    {
      title: "Adventra",
      heading: "Explore Sahara Dunes",
      body: "Venture into the vast Sahara Desert, where endless golden dunes meet the sky. Ride camels across this iconic landscape, experience the serenity of the desert, and spend nights under the starry sky. This journey offers a deep connection to nature and a taste of timeless adventure.",
    },
  ];

  return (
    <div>
      <div className="text-white w-full ">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
          stopOnHover={true}
          swipeable={false}
          transitionTime={2000}
          //   dynamicHeight={false}
          onChange={handleSlideChange}
          interval={5000}
        >
          {carouselData?.map((item: any, index: number) => {
            return (
              <div
                className={`min-h-[55vh] sm:min-h-[450px] lg:min-h-[350px] overflow-x-hidden flex flex-col mx-auto justify-center items-center gap-5 px-5  ${
                  index === activeIndex
                    ? "carousel-zoom-out"
                    : "carousel-zoom-in"
                }`}
              >
                <p className="text-[18px] md:text-[24px] font-[700]">
                  {item.title}
                </p>
                <h2 className="text-[30px] md:text-[48px] font-[800]">
                  {item.heading}
                </h2>
                <p className="text-[15px] md:text-[18px] w-[80%] sm:w-[65%]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </Carousel>

        <div className="mx-auto flex justify-center py-[100px] ">
          <a
            href="/#explore"
            className="h-[55px] cursor-pointer flex items-center justify-center min-w-[230px] rounded-[100px] text-white bg-[#2a2570] hover:bg-[#8c62a2]"
          >
            Register your interest
          </a>
        </div>
      </div>
    </div>
  );
};

interface Props {
  feature: number;
}

export const FeatureCarouselComponent = ({ feature }: Props) => {
  const featuresImages = [
    [KiloOne, KiloTwo, KiloThree, KiloFour, KiloFive],
    [KiloOne, KiloTwo, KiloThree, KiloFour, KiloFive],
    [KiloOne, KiloTwo, KiloThree, KiloFour, KiloFive],
    [KiloOne, KiloTwo, KiloThree, KiloFour, KiloFive],
    [KiloOne, KiloTwo, KiloThree, KiloFour, KiloFive],
  ];

  return (
    <div>
      <div className="text-white w-full ">
        <Carousel
          className=""
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
          stopOnHover={true}
          swipeable={false}
          transitionTime={2000}
          interval={5000}
        >
          {featuresImages[feature]?.map((item, index) => {
            return (
              <div
                key={index}
                className={` overflow-x-hidden flex-col mx-auto justify-center items-center gap-5 px-5 `}
              >
                <Image
                  alt={"img"}
                  width={0}
                  height={0}
                  className="w-[30px] h-[500px]"
                  src={item}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
