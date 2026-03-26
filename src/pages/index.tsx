import { Hero } from "@/components/widgets/hero";
import { Point } from "@/components/widgets/point";
import { Power } from "@/components/widgets/power";
import { Testimoni } from "@/components/widgets/testimoni";
import { CTA } from "@/components/widgets/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Point />
      <Power />
      <Testimoni />
      <CTA />
    </>
  );
}
