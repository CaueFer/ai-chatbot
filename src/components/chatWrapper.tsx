"use client";

import { Message, useChat } from "ai/react";
import { Messages } from "./Messages";
import { ChatInput } from "./ui/ChatInput";
import NavLeftBar from "./NavLeftBar";
import { useEffect, useState } from "react";

export const ChatWrapper = ({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) => {
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);

  const {
    messages,
    setMessages,
    handleInputChange,
    handleSubmit,
    input,
    setInput,
  } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });

  const handleSubmitInterceptor = () => {
    setIsLoadingMessage(true);

    console.log(messages)

    handleSubmit();


    // FUNCAO TESTES;
    
    // new Promise<void>((resolve) => {
    //   setTimeout(() => {
    //     setMessages((prev: Message[]) => [
    //       ...prev,
    //       {
    //         content: "TESTE OLA TESTE OLA TSTE OLA TESTE OLA TESTE",
    //         role: "system",
    //         id: "000",
    //       },
    //     ]);
    //     resolve();
    //   }, 4000);
    // });
  };

  useEffect(() => {
    if (messages.at(-1)?.role !== "user") setIsLoadingMessage(false);
  }, [messages]);

  return (
    <div className="flex min-h-full min-w-screen">
      <div className="min-h-full w-[285px]  relative">
        <NavLeftBar />
      </div>

      <div className="relative min-h-full flex-grow bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
        <div className="flex-1 text-white bg-zinc-900 justify-between flex flex-col">
          <Messages messages={messages} isLoadingMessage={isLoadingMessage}/>
        </div>

        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmitInterceptor}
          setInput={setInput}
        />
      </div>
    </div>
  );
};
