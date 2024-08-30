"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { HeroSectionBg } from "./ui/HeroSectionBg";

interface HeroSectionProps {
  id: HTMLElement["id"];
}

export function HeroSection({ id }: HeroSectionProps) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div className="h-[400vh] bg-black w-full relative overflow-clip" ref={ref} id={id}>
      <HeroSectionBg
        title="RESOOOMER IA"
        description="Obtenha um resumo instantâneo com IA."
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
