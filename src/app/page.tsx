"use client";

import { HeroSection } from "@/components/HeroSection";
import NavTopBar from "@/components/NavTopBar";
import { VanishInput } from "@/components/ui/VanishInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const placeholders = [
    "Digite a URL do site para resumir.",
    "Resuma sites com IA.",
    "Digite a URL do site para resumir.",
    "Faça as perguntas que quiser!",
    "Digite a URL do site para resumir.",
    "Encontre respostas para suas dúvidas agora mesmo!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.length <= 0) return;

    try {
      new URL(input);
      setErrorMsg("");

      router.push("/" + input);
    } catch (_) {
      setErrorMsg("Por favor, insira um link válido.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavTopBar />
      <section className="flex min-h-screen w-screen flex-col items-center justify-center bg-black relative overflox-x-clip">
        <HeroSection id="scrollDiv" />

        <div className="relative w-full z-50 flex flex-col justify-center">
          <div
            id="targetDiv"
            className="w-full flex flex-col justify-start gap-4 h-[57vh] md:h-[50vh] px-14 py-[3.25rem] md:py-14 bg-transparent absolute bottom-0 z-50 bg-black backdrop-blur-sm snap-center"
          >
            <VanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            >
              <p className="text-xs text-start text-white w-auto md:w-[576px] md:pl-10 mx-auto min-h-[20px]">
                {errorMsg}
              </p>
            </VanishInput>
            <button
              className="font-bold flex flex-row gap-3 items-center justify-center bg-white rounded-full px-4 py-2 mt-[22px] z-30 md:text-base text-black  w-fit min-w-[134px] mx-auto"
              onClick={scrollToTop}
            >
              VOLTAR
              <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                className="group-hover:translate-x-0.5 outline-none transition-transform rotate-[-90deg]"
                tabIndex={-1}
                aria-label="voltar"
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
          </div>
        </div>
      </section>
    </>
  );
}
