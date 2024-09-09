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

  const [disableChatInput, setDisableChatInput] = useState(false);

  const [formattedMessages, setFormattedMessages] = useState<Message[]>([]);

  const {
    messages,
    setMessages,
    handleInputChange,
    handleSubmit,
    input,
    setInput,
    error,
  } = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
    initialMessages,
  });

  const handleSubmitInterceptor = () => {
    setIsLoadingMessage(true);

    setInput((prev) => prev + " responda tudo em pt-br.");

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

  useEffect(() => {
    const formatted = messages.map((message) => {
      let content = message.content
        .replace(/\*\*(.*?)\*\*/g, "<h2>$1</h2>") 
        .replace(/\n/g, "<br>") 
        .replace(/\*(.*?)\*/g, "<strong>$1</strong>");

      return { ...message, content: content };
    });

    setFormattedMessages(formatted);
  }, [messages]);

  useEffect(() => {
    if (error) {
      setIsLoadingMessage(false);
      setDisableChatInput(true);

      const id: string = Math.floor(Math.random() * 100).toString();
      setMessages((prev: Message[]) => [
        ...prev,
        {
          content: "Limite diário atingido!",
          role: "error",
          id: id,
        },
      ]);
    }
    else setDisableChatInput(false);
  }, [error]);

  useEffect(() => {
    setDisableChatInput(false);

    console.log('ativei dnv')
  }, [])

  return (
    <div className="flex min-h-full min-w-screen">
      <div className="min-h-full w-[285px]  relative">
        <NavLeftBar />
      </div>

      <div className="relative min-h-full flex-grow bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
        <div className="flex-1 text-white bg-zinc-900 justify-between flex flex-col">
          <Messages
            messages={formattedMessages}
            isLoadingMessage={isLoadingMessage}
          />
        </div>

        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmitInterceptor}
          setInput={setInput}
          disable={disableChatInput}
        />
      </div>
    </div>
  );
};
