"use client";

import { HeroSection } from "@/components/HeroSection";
import NavTopBar from "@/components/NavTopBar";
import { VanishInput } from "@/components/ui/VanishInput";

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
    <>
      <NavTopBar />
      <section className="flex min-h-screen flex-col items-center justify-center  bg-black">
        <HeroSection id="scrollDiv" />

        <div className="relative w-full z-50 flex flex-col justify-center">
          <div
            id="targetDiv"
            className="w-full flex flex-col gap-4 h-[50vh] py-20 bg-transparent absolute bottom-0 z-50 bg-black backdrop-blur-sm snap-center"
          >
            <VanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </section>
    </>
  );
}
