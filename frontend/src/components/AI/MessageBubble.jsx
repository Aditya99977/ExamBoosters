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

        }

        catch (err) {

            console.error(err);

        }

    };

    return (

        <div
            className={`mb-8 flex w-full ${
                isUser
                    ? "justify-end"
                    : "justify-start"
            }`}
        >

            {/* AI Avatar */}

            {!isUser && (

                <div className="mr-4 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

                    <BrainCircuit size={20} />

                </div>

            )}

            {/* Bubble */}

            <div
                className={`group relative max-w-4xl rounded-3xl px-6 py-5 shadow-sm transition-all duration-300

                ${
                    isUser
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 bg-white text-slate-800"
                }`}
            >

                {/* Copy Button */}

                {!isUser && (

                    <button
                        onClick={handleCopy}
                        className="absolute right-5 top-5 opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >

                        {copied ? (

                            <Check
                                size={18}
                                className="text-green-600"
                            />

                        ) : (

                            <Copy
                                size={18}
                                className="text-slate-400 hover:text-blue-600"
                            />

                        )}

                    </button>

                )}

                {/* Message */}

                <div
                    className={`prose max-w-none break-words

                    ${
                        isUser
                            ? "prose-invert"
                            : "prose-slate"
                    }`}
                >

                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                    >

                        {message.text}

                    </ReactMarkdown>

                </div>

                {/* Time */}

                <p
                    className={`mt-5 text-xs

                    ${
                        isUser
                            ? "text-blue-100"
                            : "text-slate-400"
                    }`}
                >

                    {message.time}

                </p>

            </div>

            {/* User Avatar */}

            {isUser && (

                <div className="ml-4 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">

                    <User size={18} />

                </div>

            )}

        </div>

    );

};

export default MessageBubble;