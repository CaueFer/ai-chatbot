import { Input } from "@nextui-org/input";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="py-10 text-center flex flex-col gap-4">
        <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
          RESOOOME IA
        </h1>
        <h2 className="text-xl">Digite o link abaixo e resuma o site com IA</h2>
      </div>

      <div className="relative w-full max-w-3xl flex flex-col">
        <Input
          isClearable
          type="text"
          label=""
          placeholder="Digite ou cole a url do site"
          classNames={{
            inputWrapper: [
              "py-6",
              "px-4",
            ],
            input: [
              "text-lg"
            ]
          }}
        />
        <button
          className="z-0 mt-4 max-w-[165px] group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent active:scale-[0.97] outline-none focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2 px-6 min-w-24 h-12 text-medium gap-3 rounded-full [&amp;>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground md:h-11 md:w-auto"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            ></path>
            <path
              d="M4.08325 14H23.7183"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
