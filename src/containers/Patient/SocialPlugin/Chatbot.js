"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

const Chatbot = () => {
    return (
        <FacebookProvider appId="1565948963808728" chatSupport>
            <CustomChat pageId="1565948963808728" minimized={true} />
        </FacebookProvider>
    )
}

export default Chatbot;