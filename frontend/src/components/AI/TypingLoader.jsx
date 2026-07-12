import { BrainCircuit } from "lucide-react";

const TypingLoader = () => {

    return (

        <div className="mb-8 flex items-start">

            {/* AI Avatar */}

            <div className="mr-4 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

                <BrainCircuit size={20} />

            </div>

            {/* Bubble */}

            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm">

                <div className="mb-3 flex items-center gap-2">

                    <span className="font-semibold text-slate-700">

                        ExamBooster AI

                    </span>

                    <span className="rounded-full bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-700">

                        Thinking...

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-blue-600"
                        style={{
                            animationDelay: "0ms",
                        }}
                    />

                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-blue-600"
                        style={{
                            animationDelay: "150ms",
                        }}
                    />

                    <span
                        className="h-3 w-3 animate-bounce rounded-full bg-blue-600"
                        style={{
                            animationDelay: "300ms",
                        }}
                    />

                </div>

            </div>

        </div>

    );

};

export default TypingLoader;