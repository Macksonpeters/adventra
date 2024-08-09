import Explore from "@/components/explore/explore";
import Features from "@/components/features/features";
import Hero from "@/components/hero/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Explore />
    </div>
  );
}
