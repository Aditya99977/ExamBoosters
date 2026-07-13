import {
    Sparkles,
    GraduationCap,
    ArrowUpRight,
} from "lucide-react";

import ChatInput from "./ChatInput";

const subjects = [
    "SSC CGL",
    "UPSC",
    "Banking",
    "Railway",
    "Reasoning",
    "Quant",
    "English",
    "Current Affairs",
];

const suggestions = [
    "Explain DBMS Normalization",
    "Generate 20 SSC Reasoning MCQs",
    "Summarize Operating System",
    "Create UPSC Revision Notes",
    "Solve Previous Year Questions",
    "Explain with Examples",
];

const EmptyState = () => {

    return (

        <div className="flex h-full items-center justify-center px-8">

            <div className="w-full max-w-5xl">

                {/* Hero */}

                <div className="text-center">

                    <div
                        className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#131D31]
                        px-5
                        py-2
                        text-blue-400
                    "
                    >

                        <Sparkles size={18} />

                        ExamBooster AI

                    </div>

                    <h1
                        className="
                        mt-8
                        text-6xl
                        font-black
                        tracking-tight
                    "
                    >

                        Good Afternoon 👋

                    </h1>

                    <p
                        className="
                        mx-auto
                        mt-5
                        max-w-2xl
                        text-lg
                        leading-8
                        text-slate-400
                    "
                    >

                        Ask anything about your competitive exam preparation.

                    </p>

                </div>

                {/* Input */}

                <div className="mt-12">

                    <ChatInput />

                </div>

                {/* Subjects */}

                <div
                    className="
                    mt-8
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                "
                >

                    {subjects.map(subject => (

                        <button
                            key={subject}
                            className="
                            rounded-full
                            bg-[#131D31]
                            px-5
                            py-2.5
                            text-sm
                            transition-all
                            duration-300
                            hover:bg-blue-600
                        "
                        >

                            {subject}

                        </button>

                    ))}

                </div>

                {/* Suggestions */}

                <div
                    className="
                    mt-14
                    grid
                    gap-3
                    md:grid-cols-2
                "
                >

                    {suggestions.map((item) => (

                        <button
                            key={item}
                            className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            bg-[#131D31]
                            px-5
                            py-4
                            text-left
                            transition-all
                            duration-300
                            hover:bg-[#1A2942]
                            hover:translate-x-1
                        "
                        >

                            <div className="flex items-center gap-3">

                                <GraduationCap
                                    size={20}
                                    className="text-blue-400"
                                />

                                <span>

                                    {item}

                                </span>

                            </div>

                            <ArrowUpRight
                                size={18}
                                className="
                                opacity-0
                                transition
                                group-hover:opacity-100
                            "
                            />

                        </button>

                    ))}

                </div>

            </div>

        </div>

    );

};

export default EmptyState;