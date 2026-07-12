import {
    BrainCircuit,
    BookOpen,
    PenTool,
    GraduationCap,
    Code2,
    Sparkles,
} from "lucide-react";

const EmptyState = ({ onSuggestionClick }) => {

    const suggestions = [
        {
            title: "Learn a Topic",
            description: "Understand concepts step by step.",
            prompt: "Teach me Coding Decoding from scratch.",
            icon: <BookOpen size={20} />,
        },
        {
            title: "Practice Questions",
            description: "Generate exam-level MCQs.",
            prompt: "Generate 10 SSC CGL Reasoning MCQs.",
            icon: <PenTool size={20} />,
        },
        {
            title: "Interview Preparation",
            description: "Prepare for technical interviews.",
            prompt: "Help me prepare for an AI Internship interview.",
            icon: <GraduationCap size={20} />,
        },
        {
            title: "Programming Help",
            description: "Learn coding with examples.",
            prompt: "Explain Binary Search with C++ example.",
            icon: <Code2 size={20} />,
        },
    ];

    return (

        <div className="flex flex-1 items-center justify-center px-10">

            <div className="w-full max-w-4xl text-center">

                {/* AI Logo */}

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl">

                    <BrainCircuit size={42} />

                </div>

                {/* Heading */}

                <h1 className="text-4xl font-bold text-slate-900">

                    Welcome to ExamBooster AI

                </h1>

                <p className="mt-4 text-lg text-slate-500">

                    Your personal AI tutor for competitive exam preparation.

                </p>

                {/* AI Badge */}

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">

                    <Sparkles size={16} />

                    Powered by Gemini AI

                </div>

                {/* Suggestion Cards */}

                <div className="mt-14 grid gap-5 md:grid-cols-2">

                    {suggestions.map((item) => (

                        <button
                            key={item.title}
                            onClick={() =>
                                onSuggestionClick(item.prompt)
                            }
                            className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                        >

                            <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-600">

                                {item.icon}

                            </div>

                            <h3 className="text-lg font-semibold text-slate-800">

                                {item.title}

                            </h3>

                            <p className="mt-2 text-sm text-slate-500">

                                {item.description}

                            </p>

                        </button>

                    ))}

                </div>

                {/* Footer */}

                <p className="mt-12 text-sm text-slate-400">

                    Ask questions, practice concepts, solve doubts and prepare for your dream job with AI.

                </p>

            </div>

        </div>

    );

};

export default EmptyState;