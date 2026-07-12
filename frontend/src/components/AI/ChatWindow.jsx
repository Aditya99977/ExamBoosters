import { useEffect, useRef } from "react";

import EmptyState from "./EmptyState";
import MessageBubble from "./MessageBubble";
import TypingLoader from "./TypingLoader";

const ChatWindow = ({
    messages = [],
    loading = false,
    onSuggestionClick,
}) => {

    const bottomRef = useRef(null);

    // ===================================
    // Auto Scroll
    // ===================================

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages, loading]);

    // ===================================
    // Empty State
    // ===================================

    if (!messages.length) {

        return (

            <div className="flex flex-1 items-center justify-center bg-slate-50">

                <EmptyState
                    onSuggestionClick={onSuggestionClick}
                />

            </div>

        );

    }

    // ===================================
    // Chat Messages
    // ===================================

    return (

        <div className="flex-1 overflow-y-auto bg-slate-50">

            <div className="mx-auto flex w-full max-w-5xl flex-col px-8 py-10">

                {messages.map((message) => (

                    <MessageBubble
                        key={message.id}
                        message={message}
                    />

                ))}

                {loading && (

                    <TypingLoader />

                )}

                <div ref={bottomRef} />

            </div>

        </div>

    );

};

export default ChatWindow;