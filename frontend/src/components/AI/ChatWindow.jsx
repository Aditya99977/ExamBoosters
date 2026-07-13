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

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages, loading]);

    if (!messages.length) {

        return (

            <div className="flex flex-1 items-center justify-center">

                <EmptyState
                    onSuggestionClick={onSuggestionClick}
                />

            </div>

        );

    }

    return (

        <div className="flex-1 overflow-y-auto">

            <div className="mx-auto w-full max-w-5xl px-8 py-12">

                <div className="space-y-10">

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

        </div>

    );

};

export default ChatWindow;