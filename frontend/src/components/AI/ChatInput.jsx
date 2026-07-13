import {
    Paperclip,
    Mic,
    SendHorizontal,
    Smile,
} from "lucide-react";

const ChatInput = () => {

    return (

        <div className="mx-auto w-full max-w-5xl">

            <div
                className="
                flex
                items-center
                gap-4
                rounded-[32px]
                bg-[#182338]
                px-6
                py-4
                shadow-2xl
                shadow-black/20
                transition-all
                duration-300
                focus-within:shadow-blue-500/20
                focus-within:ring-2
                focus-within:ring-blue-500/20
            "
            >

                {/* Upload */}

                <button
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    transition
                    hover:bg-slate-700
                "
                >

                    <Paperclip
                        size={20}
                        className="text-slate-400"
                    />

                </button>

                {/* Input */}

                <input
                    type="text"
                    placeholder="Ask ExamBooster AI anything..."
                    className="
                    flex-1
                    bg-transparent
                    text-lg
                    outline-none
                    placeholder:text-slate-500
                "
                />

                {/* Emoji */}

                <button
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    transition
                    hover:bg-slate-700
                "
                >

                    <Smile
                        size={20}
                        className="text-slate-400"
                    />

                </button>

                {/* Voice */}

                <button
                    className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    transition
                    hover:bg-slate-700
                "
                >

                    <Mic
                        size={20}
                        className="text-slate-400"
                    />

                </button>

                {/* Send */}

                <button
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-violet-600
                    shadow-lg
                    shadow-blue-500/20
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:shadow-blue-500/40
                "
                >

                    <SendHorizontal size={20} />

                </button>

            </div>

            <p className="mt-4 text-center text-xs text-slate-500">

                ExamBooster AI may generate incorrect responses. Always verify important information.

            </p>

        </div>

    );

};

export default ChatInput;