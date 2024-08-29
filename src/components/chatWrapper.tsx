"use client"

import { useChat } from "ai/react";

export const ChatWrapper = () => {
    const {} = useChat({
        api: "/api/chat-stream",
        body: {}
    })
};
