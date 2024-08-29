import { ChatWrapper } from "@/components/chatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import React from "react";

interface chatbotPageProps {
  params: {
    url: string | string[] | undefined;
  };
}

function fullUrl({ url }: { url: string[] }) {
  const decodedParts = url.map((urlPart) => decodeURIComponent(urlPart));

  return decodedParts.join("/");
}

const chatbotPage = async ({ params }: chatbotPageProps) => {
  const reconstructUrl = fullUrl({ url: params.url as string[] });

  const sessionId = "mock-session";

  const isAlreadyIndexed = await redis.sismember(
    "indexed-urls",
    reconstructUrl
  );

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructUrl,
      config: { chunkOverlap: 50, chunkSize: 300 },
    });

    await redis.sadd("indexed-urls", reconstructUrl);
  }

  return (
    <ChatWrapper sessionId={sessionId}/>
  );
};

export default chatbotPage;
