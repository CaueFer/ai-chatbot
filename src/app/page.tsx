"use client";

import { HeroSection } from "@/components/HeroSection";
import { VanishInput } from "@/components/ui/VanishInput";
import { Input } from "@nextui-org/input";
import { useEffect } from "react";

export default function Home() {
  const placeholders = [
    "Digite a URL do site para resumir.",
    "Resuma sites com IA.",
    "Faça as perguntas que quiser!",
    "Digite a URL do site para resumir.",
    "Encontre respostas para suas dúvidas agora mesmo!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center py-24 bg-black">
      <HeroSection id="scrollDiv" />

      <div className="relative w-full z-50 flex justify-center">
        <div
          id="targetDiv"  
          className="w-full  flex flex-col gap-4 h-[40vh] py-10 bg-transparent absolute bottom-0 z-50 bg-black backdrop-blur-sm"
        >
          <VanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
          {/* <div className="w-full flex">
            <button
              className="z-0 max-w-[165px] group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent active:scale-[0.97] outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground md:h-11 md:w-auto"
              role="button"
              tabIndex={0}
            >
              RESOOOME
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                className="group-hover:translate-x-0.5 outline-none transition-transform"
                tabIndex={-1}
              >
                <path
                  d="M16.835 6.91821L23.9166 13.9999L16.835 21.0815"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></path>
                <path
                  d="M4.08325 14H23.7183"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
