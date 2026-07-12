import {
    BrainCircuit,
    Sparkles,
    Plus,
} from "lucide-react";

const ChatHeader = ({
    exam,
    subject,
    setExam,
    setSubject,
    onNewChat,
}) => {

    return (

        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

            {/* Left Section */}

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

                    <BrainCircuit size={24} />

                </div>

                <div>

                    <div className="flex items-center gap-2">

                        <h1 className="text-2xl font-bold text-slate-900">

                            AI Tutor

                        </h1>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                            Online

                        </span>

                    </div>

                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                        <Sparkles size={14} />

                        Powered by Gemini AI

                    </p>

                </div>

            </div>

            {/* Right Section */}

            <div className="flex items-center gap-4">

                {/* Exam */}

                <select
                    value={exam}
                    onChange={(e) =>
                        setExam(e.target.value)
                    }
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >

                    <option value="">
                        Select Exam
                    </option>

                    <option value="SSC CGL">
                        SSC CGL
                    </option>

                    <option value="SSC CHSL">
                        SSC CHSL
                    </option>

                    <option value="UPSC">
                        UPSC
                    </option>

                    <option value="Railway">
                        Railway
                    </option>

                    <option value="Bank PO">
                        Bank PO
                    </option>

                </select>

                {/* Subject */}

                <select
                    value={subject}
                    onChange={(e) =>
                        setSubject(e.target.value)
                    }
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >

                    <option value="">
                        Select Subject
                    </option>

                    <option value="Reasoning">
                        Reasoning
                    </option>

                    <option value="Quantitative Aptitude">
                        Quantitative Aptitude
                    </option>

                    <option value="English">
                        English
                    </option>

                    <option value="General Knowledge">
                        General Knowledge
                    </option>

                    <option value="Computer">
                        Computer
                    </option>

                </select>

                {/* New Chat */}

                <button
                    onClick={onNewChat}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >

                    <Plus size={18} />

                    New Chat

                </button>

            </div>

        </header>

    );

};

export default ChatHeader;