import { BrainCircuit } from "lucide-react";

const TypingLoader = () => {
    return (
        <div className="flex items-start gap-4 animate-pulse">

            {/* AI Avatar */}

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
                <BrainCircuit size={22} className="text-white" />
            </div>

            {/* Bubble */}

            <div
                className="
                    rounded-[28px]
                    border
                    border-slate-700
                    bg-slate-900/80
                    backdrop-blur-xl
                    px-6
                    py-5
                    min-w-[220px]
                "
            >

                <div className="flex items-center gap-2">

                    <span className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"></span>

                    <span
                        className="h-3 w-3 rounded-full bg-indigo-500 animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                    ></span>

                    <span
                        className="h-3 w-3 rounded-full bg-violet-500 animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                    ></span>

                </div>

                <p className="mt-4 text-sm text-slate-400">
                    ExamBooster AI is thinking...
                </p>

            </div>

        </div>
    );
};

export default TypingLoader;