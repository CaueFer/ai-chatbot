"use client";

import { HeroSection } from "@/components/HeroSection";
import NavTopBar from "@/components/NavTopBar";
import { VanishInput } from "@/components/ui/VanishInput";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    if (e) e.preventDefault();

    if (input.length <= 0) return;

    redirect();
  };

  const onSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    if (e) e.preventDefault();

    if (input.length <= 0) return setIsLoading(false);

    redirect();
  };

  const redirect = () => {
    try {
      new URL(input);
      setErrorMsg("");

      router.push("/" + input);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 10000)
    } catch (_) {
      setErrorMsg("Por favor, insira um link válido.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavTopBar />
      <section className="flex min-h-screen max-w-screen flex-col items-center justify-center bg-black relative overflow-x-clip">
        <HeroSection id="scrollDiv" />

        <div className="relative w-full z-50 flex flex-col justify-center">
          <div
            id="targetDiv"
            className="w-full flex flex-col justify-start gap-4 h-[57vh] md:h-[50vh] px-14 py-[3.25rem] md:py-14 bg-transparent absolute bottom-0 z-50 bg-black backdrop-blur-sm snap-center"
          >
            <VanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmitForm}
            >
              <p className="text-xs text-start text-white w-auto md:w-[576px] md:pl-10 mx-auto min-h-[20px]">
                {errorMsg}
              </p>
              <button
                className={cn(
                  "font-bold flex flex-row gap-3 items-center justify-center bg-white rounded-full px-5 py-3 mt-[-5px] z-30 md:text-base text-black  w-fit min-w-[134px] mx-auto group"
                )}
                onClick={onSubmitButton}
              >
                {!isLoading ? (
                  <span className="flex flex-row justify-center items-center gap-3 align-middle">
                    RESOOMER
                    <svg
                      aria-hidden="true"
                      fill="none"
                      focusable="false"
                      height="1em"
                      role="presentation"
                      viewBox="0 0 24 24"
                      width="1em"
                      className="group-hover:translate-x-0.5 outline-none transition-transform rotate-[0deg]"
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
                  </span>
                ) : (
                  <span className="flex flex-row justify-center items-center gap-3">
                    RESOOMER
                    <svg
                      className="animate-spin text-gray-500 text-end align-middle"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
            </VanishInput>
          </div>
        </div>
      </section>
    </>
  );
}
