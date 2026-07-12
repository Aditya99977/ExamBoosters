import { useMemo, useState } from "react";
import {
    BrainCircuit,
    Search,
    Plus,
    MessageSquare,
    User,
    Crown,
} from "lucide-react";

const Sidebar = ({
    chats = [],
    activeChat,
    onSelectChat,
    onNewChat,
    user,
}) => {

    const [search, setSearch] = useState("");

    // ===============================
    // Search Filter
    // ===============================

    const filteredChats = useMemo(() => {

        if (!search.trim()) return chats;

        return chats.filter((chat) =>
            chat.title
                ?.toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [search, chats]);

    // ===============================
    // Group Chats
    // ===============================

    const groupedChats = useMemo(() => {

        const today = [];
        const yesterday = [];
        const older = [];

        const now = new Date();

        filteredChats.forEach((chat) => {

            const date = new Date(chat.createdAt);

            const diff =
                (now - date) /
                (1000 * 60 * 60 * 24);

            if (diff < 1) {

                today.push(chat);

            }

            else if (diff < 2) {

                yesterday.push(chat);

            }

            else {

                older.push(chat);

            }

        });

        return {

            today,

            yesterday,

            older,

        };

    }, [filteredChats]);

    // ===============================
    // Render Chat Section
    // ===============================

    const renderSection = (
        title,
        list
    ) => {

        if (!list.length) return null;

        return (

            <div className="mb-8">

                <h4 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">

                    {title}

                </h4>

                <div className="space-y-2">

                    {list.map((chat) => (

                        <button
                            key={chat.id}
                            onClick={() =>
                                onSelectChat(chat)
                            }
                            className={`group w-full rounded-2xl border p-3 text-left transition-all duration-300

                            ${
                                activeChat?.id ===
                                chat.id
                                    ? "border-blue-200 bg-blue-50 shadow"
                                    : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                            }`}
                        >

                            <div className="flex items-start gap-3">

                                <div
                                    className={`rounded-xl p-2

                                    ${
                                        activeChat?.id ===
                                        chat.id
                                            ? "bg-blue-600 text-white"
                                            : "bg-slate-200 text-slate-600"
                                    }`}
                                >

                                    <MessageSquare
                                        size={15}
                                    />

                                </div>

                                <div className="min-w-0 flex-1">

                                    <p className="truncate font-medium text-slate-800">

                                        {chat.title}

                                    </p>

                                    <p className="mt-1 text-xs text-slate-500">

                                        {chat.subject}

                                    </p>

                                </div>

                            </div>

                        </button>

                    ))}

                </div>

            </div>

        );

    };
        return (

        <aside className="flex h-full flex-col bg-white">

            {/* ===============================
                Header
            =============================== */}

            <div className="border-b border-slate-200 p-6">

                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white shadow-lg">

                        <BrainCircuit size={24} />

                    </div>

                    <div>

                        <h2 className="text-lg font-bold text-slate-900">

                            ExamBooster AI

                        </h2>

                        <p className="text-sm text-slate-500">

                            Learn Smarter. Score Higher.

                        </p>

                    </div>

                </div>

            </div>

            {/* ===============================
                New Chat
            =============================== */}

            <div className="p-5">

                <button
                    onClick={onNewChat}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >

                    <Plus size={18} />

                    New Chat

                </button>

            </div>

            {/* ===============================
                Search
            =============================== */}

            <div className="px-5 pb-5">

                <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">

                    <Search
                        size={18}
                        className="text-slate-400"
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search conversations..."
                        className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-slate-400"
                    />

                </div>

            </div>

            {/* ===============================
                Chat History
            =============================== */}

            <div className="flex-1 overflow-y-auto px-4">

                {filteredChats.length === 0 ? (

                    <div className="mt-16 text-center">

                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">

                            <MessageSquare
                                size={24}
                                className="text-slate-400"
                            />

                        </div>

                        <h3 className="font-semibold text-slate-700">

                            No Conversations

                        </h3>

                        <p className="mt-2 text-sm text-slate-500">

                            Start your first conversation with ExamBooster AI.

                        </p>

                    </div>

                ) : (

                    <>

                        {renderSection(
                            "Today",
                            groupedChats.today
                        )}

                        {renderSection(
                            "Yesterday",
                            groupedChats.yesterday
                        )}

                        {renderSection(
                            "Older",
                            groupedChats.older
                        )}

                    </>

                )}

            </div>
                        {/* ===============================
                Footer
            =============================== */}

            <div className="border-t border-slate-200 bg-white p-5">

                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 transition-all duration-300 hover:bg-slate-100">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow">

                        <User size={18} />

                    </div>

                    <div className="min-w-0 flex-1">

                        <p className="truncate font-semibold text-slate-800">

                            {user?.name || "Student"}

                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs font-medium text-amber-600">

                            <Crown size={13} />

                            Premium Member

                        </div>

                    </div>

                </div>

            </div>

        </aside>

    );

};

export default Sidebar;