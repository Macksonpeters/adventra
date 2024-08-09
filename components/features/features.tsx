"use client";
import { useState } from "react";
import { FeatureCarouselComponent } from "../carousel/carousel";
import useInView from "../common/useInView";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Quattrocento_Sans } from "next/font/google";
import kilo from "../../public/images/kilo/kilo 2.jpg";
import Seren from "../../public/images/kilo/3309.jpg";
import Nile from "../../public/images/kilo/1.jpg";
import Safari from "../../public/images/kilo/ds.webp";
import Image from "next/image";

const quattrocento = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const Features = () => {
  const [feature, setFeature] = useState<any>(0);
  const isInView = useInView({ threshold: 0.5 }, "#features");

  const featuresData = [
    {
      header: "Discover the Serengeti",
      description:
        "The Serengeti, with its boundless plains and teeming wildlife, offered us a glimpse into a world where nature reigns supreme. Our journey through this iconic landscape was more than just a safari—it was an immersion into the very heartbeat of the wild. Each day brought us face-to-face with the raw, untamed beauty of the natural world, from the powerful elegance of a lion on the hunt to the delicate grace of a gazelle darting through the grasslands. The Serengeti is a place where the cycle of life unfolds in its purest form, unspoiled and relentless. Witnessing the Great Migration, where thousands of wildebeest and zebras move as one across the plains, was a humbling experience that left us in awe of nature's resilience and grandeur. As the sun dipped below the horizon, painting the sky in hues of orange and purple, we found ourselves filled with a sense of peace and wonder, a reminder of the simple, yet profound joy that comes from being in the presence of something so vast and eternal. The Serengeti was not just a destination, but a journey into the heart of the wild, where every moment was a reminder of the delicate balance of life and the sheer beauty of the world we inhabit.",
      body: [
        "Wildlife safari with expert guides – Spot lions, elephants, and more in their natural habitat",
        "Watch the Great Migration – Witness one of nature's most spectacular events",
        "Luxury tented camp stays – Enjoy comfort and style in the heart of the wilderness",
        "Hot air balloon ride at dawn – Soar above the plains for a bird's-eye view of the Serengeti",
        "Sundowner drinks in the bush – Relax with a drink as the sun sets over the savannah",
      ],
      image: Seren,
    },
    {
      header: "Conquer Kilimanjaro",
      description:
        "Our journey across the globe has been nothing short of transformative, with each adventure weaving a rich tapestry of experiences that connect us to the world in profound ways. Conquering Kilimanjaro was not just about reaching the summit of Africa's highest peak, but about the collective spirit of those who embarked on this journey. From the moment we set foot on the mountain's base, we were enveloped by a landscape that challenged and inspired us. The climb through the lush rainforests, teeming with life, was like stepping into a different world—one where every breath carried the scent of earth and the promise of discovery. As we ascended, the air thinned and the environment became more stark and surreal. The nights spent under the vast expanse of the starlit sky, far above the clouds, were filled with a tranquility that only such isolation can bring. These were moments of pure bliss, where the world seemed to pause, allowing us to truly appreciate the beauty of the natural world. The final push to the summit, guided by the first light of dawn, was a testament to the strength of the human spirit and the unparalleled beauty that nature has to offer. Standing at the peak, with the world spread out beneath us, we were reminded of the incredible power of the earth and the deep sense of peace that comes from being a part of something so much greater than ourselves.",
      body: [
        "Guided hike to the summit – Reach Africa's highest peak with expert support",
        "Explore the lush rainforest – Discover the diverse flora and fauna on your way up",
        "Camping under the stars – Experience the night sky like never before at high altitude",
        "Witness breathtaking sunrises – See the sun rise above the clouds from the mountain",
        "Experience local Tanzanian culture – Engage with local guides and learn their stories",
      ],
      image: kilo,
    },
    {
      header: "Sail the Nile",
      description:
        "Our voyage along the Nile was a journey through time, where each bend of the river revealed layers of history and culture that have shaped civilizations for millennia. Sailing on a traditional felucca, we drifted past ancient temples and bustling markets, feeling the pulse of Egypt’s vibrant heritage. The Nile, with its calm and steady flow, offered us a sense of peace and reflection, a stark contrast to the bustling energy of the cities we visited. As we explored the grand temples of Luxor and Aswan, we were transported to a time when the gods ruled and pharaohs left their indelible mark on the sands of history. The nights spent on deck, under a canopy of stars, were filled with the sounds of the river and the stories of the past, reminding us of the enduring nature of this ancient land. The Nile was more than just a river; it was a lifeline, a source of inspiration and wonder that has nourished cultures and communities for thousands of years. Our time on the Nile was a blend of relaxation and discovery, where the old world met the new, and we found ourselves deeply connected to the rich tapestry of life along its banks.",
      body: [
        "Cruise on a traditional felucca – Drift along the Nile on an authentic Egyptian sailboat",
        "Visit ancient Egyptian temples – Explore the historic sites of Luxor and Aswan",
        "Explore bustling Cairo markets – Immerse yourself in the vibrant local culture and trade",
        "Relax on deck with stunning views – Unwind as you take in the scenic beauty of the Nile",
        "Enjoy authentic Egyptian cuisine – Savor traditional dishes prepared by local chefs",
      ],
      image: Nile,
    },
    {
      header: "Explore the Sahara",
      description:
        "The Sahara, with its endless dunes and ancient history, was a journey into the very soul of the desert. Our adventure through this vast and mysterious landscape was one of contrasts—where the scorching heat of the day gave way to the cool, tranquil nights under a blanket of stars. Riding camels through the rolling dunes, we felt a deep connection to the nomadic tribes who have traversed these sands for centuries. The Sahara is a place where time seems to stand still, where the silence is so profound that it speaks volumes. The nights spent in Berber camps, sharing stories around a fire, were filled with a sense of community and belonging that transcended cultural boundaries. As we gazed up at the Milky Way, unhindered by light pollution, we were reminded of the vastness of the universe and our small place within it. The Sahara was not just a physical journey, but a spiritual one, where the simplicity of life in the desert offered a sense of clarity and peace that is often elusive in the modern world. It was an exploration of both the external landscape and our internal selves, leaving us with a deep appreciation for the beauty and serenity of the natural world.",
      body: [
        "Camel trek through the dunes – Traverse the golden sands like a true desert nomad",
        "Overnight in a Berber camp – Experience the hospitality of the indigenous Berber people",
        "Star-gazing in the desert – Witness the Milky Way in the clear, unpolluted skies",
        "Visit historic kasbahs – Explore the ancient fortresses and learn about their history",
        "Experience traditional Moroccan tea – Enjoy a ceremonial tea session with locals",
      ],
      image: Safari,
    },
    {
      header: "Unwind in Zanzibar",
      description:
        "Our journey to Zanzibar was a retreat into a paradise where time seemed to slow down, allowing us to fully immerse ourselves in the island's natural beauty and rich cultural heritage. The white sandy beaches, kissed by the gentle waves of the Indian Ocean, provided the perfect backdrop for relaxation and reflection. As we wandered through the narrow streets of Stone Town, we were captivated by the blend of African, Arabian, and European influences that have shaped this unique cultural tapestry. The scent of spices filled the air, a reminder of Zanzibar’s long history as a trading hub. Each day on the island offered a new adventure—from snorkeling in the vibrant coral reefs, teeming with marine life, to exploring the lush spice plantations that have earned Zanzibar its nickname as the 'Spice Island.' Evenings were spent watching the sun set over the ocean, painting the sky in shades of orange and pink, as we savored the taste of freshly caught seafood. Zanzibar was more than just a destination; it was an escape to a world where nature’s beauty and human history intertwine, offering a sense of peace and connection that is rare and precious. Whether lounging on the beach or exploring the island’s rich history, every moment in Zanzibar was a reminder of the simple joys of life and the timeless allure of the natural world.",
      body: [
        "Relax on pristine beaches – Unwind on the soft sands of Zanzibar's world-renowned shores",
        "Explore Stone Town – Wander through the historic streets and discover the island's cultural melting pot",
        "Snorkeling and diving – Experience the vibrant underwater world of Zanzibar's coral reefs",
        "Visit spice plantations – Learn about the island's famous spices and their role in global trade",
        "Sunset dhow cruise – Sail into the sunset on a traditional wooden dhow boat",
      ],
      image: Nile,
    },
  ];

  const handleNextFeature = () => {
    if (feature > -1 && feature < 4) {
      setFeature(feature + 1);
    }
  };

  const handlePreviousFeature = () => {
    if (feature > 0 && feature < 5) {
      setFeature(feature - 1);
    }
  };

  return (
    <div className="w-full bg-white mx-auto px-5 lg:px-[150px]" id="features">
      <div className={`animated-line ${isInView ? "animate" : ""}`} />

      <div className="flex flex-col lg:flex-row gap-10 items-end justify-end lg:w-[70%] py-20 ml-auto">
        <div className="flex lg:flex-col gap-3 items-center">
          <div
            onClick={handleNextFeature}
            className={`w-[max-content] cursor-pointer border rounded-full border-[#4c325a] text-[#4c325a] block py-4 px-4 hover:bg-[#c7a4da] hover:border-[#c7a4da] hover:text-white ${
              feature == 4 && "pointer-events-none opacity-25"
            }`}
          >
            <SlArrowRight className="text-[35px]  " />
          </div>
          <div
            onClick={handlePreviousFeature}
            className={`w-[max-content] cursor-pointer border rounded-full border-[#4c325a] text-[#4c325a] block py-4 px-4 hover:bg-[#c7a4da] hover:border-[#c7a4da] hover:text-white ${
              feature == 0 && "pointer-events-none opacity-25"
            }`}
          >
            <SlArrowLeft className="text-[35px]  " />
          </div>
        </div>
        <div className="flex flex-col items-center pb-5">
          {featuresData.map((item: any, index: number) => {
            return (
              <div key={index} className="index">
                {feature == index && (
                  <div className="w-[100%] flex flex-col gap-5">
                    <p className="text-[30px] md:text-[37px] font-[700] text-[#4c325a]">
                      {item?.header}
                    </p>

                    <p
                      className={`text-[18px] text-[#6e4386] text-justify ${quattrocento.className}`}
                    >
                      {item?.description}
                    </p>
                    <Image
                      src={item.image}
                      alt={item.header}
                      width={0}
                      height={0}
                      className="w-[100%] h-[200px] object-cover rounded-[10px]"
                    />

                    <ul className={`flex flex-col ${quattrocento.className}`}>
                      {item?.body.map((value: any, index: number) => {
                        return (
                          <li key={index} className={`text-[16px]  `}>
                            <span className="font-[700] capitalize text-[#4c325a]">
                              {value?.split("–")[0]}
                            </span>
                            <span className=" text-[#6e4386]">
                              {" – " + value?.split("–")[1]}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className={`animated-line ${isInView ? "" : "animate"}`} /> */}
    </div>
  );
};

export default Features;
