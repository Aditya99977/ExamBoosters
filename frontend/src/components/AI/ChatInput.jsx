import { useRef } from "react";
import {
    SendHorizontal,
    Loader2,
    Sparkles,
} from "lucide-react";

const ChatInput = ({
    input,
    setInput,
    onSend,
    loading,
}) => {

    const textareaRef = useRef(null);

    // ============================
    // Send on Enter
    // ============================

    const handleKeyDown = (e) => {

        if (
            e.key === "Enter" &&
            !e.shiftKey
        ) {

            e.preventDefault();

            if (!loading && input.trim()) {

                onSend();

            }

        }

    };

    return (

        <div className="border-t border-slate-200 bg-white px-8 py-6">

            <div className="mx-auto w-full max-w-5xl">

                <div className="rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">

                    <div className="flex items-end gap-4 p-4">

                        {/* AI Icon */}

                        <div className="mb-1 rounded-2xl bg-blue-50 p-3 text-blue-600">

                            <Sparkles size={20} />

                        </div>

                        {/* Text Area */}

                        <textarea
                            ref={textareaRef}
                            rows={1}
                            value={input}
                            disabled={loading}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                            onKeyDown={handleKeyDown}
                            placeholder="Ask ExamBooster AI anything..."
                            className="max-h-40 flex-1 resize-none bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
                        />

                        {/* Send Button */}

                        <button
                            onClick={onSend}
                            disabled={
                                loading ||
                                !input.trim()
                            }
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                        >

                            {loading ? (

                                <Loader2
                                    size={20}
                                    className="animate-spin"
                                />

                            ) : (

                                <SendHorizontal size={20} />

                            )}

                        </button>

                    </div>

                    {/* Footer */}

                    <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3 text-xs text-slate-400">

                        <span>

                            Press <strong>Enter</strong> to send

                        </span>

                        <span>

                            <strong>Shift + Enter</strong> for new line

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ChatInput;