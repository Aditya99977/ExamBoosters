import {
    BrainCircuit,
    User,
    Copy,
    Check,
} from "lucide-react";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MessageBubble = ({ message }) => {

    const isUser = message.sender === "user";

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {

        try {

            await navigator.clipboard.writeText(message.text);

            setCopied(true);

            setTimeout(() => {

                setCopied(false);

            }, 2000);

        } catch {

            console.error("Copy failed");

        }

    };

    return (

        <div
            className={`flex w-full items-start gap-4 animate-[fadeIn_.35s_ease] ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >

            {/* AI Avatar */}

            {!isUser && (

                <div
                    className="
                    h-12
                    w-12
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    via-indigo-600
                    to-violet-600
                    flex
                    items-center
                    justify-center
                    shadow-xl
                    shadow-blue-500/20
                    flex-shrink-0
                "
                >

                    <BrainCircuit size={22} />

                </div>

            )}

            {/* Bubble */}

            <div
                className={`group relative max-w-[75%] rounded-[28px] px-6 py-5 transition-all duration-300

                ${
                    isUser
                        ? `
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        text-white
                        shadow-xl
                        shadow-blue-500/20
                        `
                        : `
                        border
                        border-slate-700
                        bg-slate-900/80
                        backdrop-blur-xl
                        text-slate-100
                        hover:border-blue-500/30
                        `
                }`}
            >

                {/* Copy */}

                {!isUser && (

                    <button
                        onClick={handleCopy}
                        className="
                        absolute
                        top-5
                        right-5
                        opacity-0
                        group-hover:opacity-100
                        transition
                        "
                    >

                        {copied ? (

                            <Check
                                size={18}
                                className="text-green-400"
                            />

                        ) : (

                            <Copy
                                size={18}
                                className="text-slate-400 hover:text-blue-400"
                            />

                        )}

                    </button>

                )}

                {/* Markdown */}

                <div
                    className={`
                    prose
                    max-w-none
                    break-words
                    leading-8
                    ${
                        isUser
                            ? "prose-invert"
                            : "prose-invert"
                    }
                `}
                >

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                    >

                        {message.text}

                    </ReactMarkdown>

                </div>

                {/* Time */}

                <p
                    className={`mt-5 text-xs ${
                        isUser
                            ? "text-blue-100"
                            : "text-slate-500"
                    }`}
                >

                    {message.time}

                </p>

            </div>

            {/* User */}

            {isUser && (

                <div
                    className="
                    h-12
                    w-12
                    rounded-2xl
                    bg-slate-800
                    border
                    border-slate-700
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                "
                >

                    <User size={20} />

                </div>

            )}

        </div>

    );

};

export default MessageBubble;