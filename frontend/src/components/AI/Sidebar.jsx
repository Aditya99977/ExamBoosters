import {
    GraduationCap,
    Plus,
    Search,
    MessageSquare,
    History,
    Bookmark,
    Settings,
    ChevronRight,
} from "lucide-react";

const chats = [
    "DBMS Normalization",
    "Operating System",
    "Python Interview",
];

const Sidebar = () => {

    return (

        <aside className="w-72 bg-[#0A1120] flex flex-col">

            {/* Logo */}

            <div className="px-6 pt-8">

                <div className="flex items-center gap-4">

                    <div
                        className="
                        h-14
                        w-14
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-violet-600
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        shadow-blue-500/20
                    "
                    >

                        <GraduationCap size={28} />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold">

                            ExamBooster

                        </h2>

                        <p className="text-sm text-slate-500">

                            AI Tutor

                        </p>

                    </div>

                </div>

                {/* New Chat */}

                <button
                    className="
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-violet-600
                    py-3
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-xl
                    hover:shadow-blue-500/20
                "
                >

                    <Plus size={18} />

                    New Chat

                </button>

            </div>

            {/* Search */}

            <div className="px-6 pt-7">

                <div
                    className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-[#131D31]
                    px-4
                    py-3
                "
                >

                    <Search
                        size={18}
                        className="text-slate-500"
                    />

                    <input
                        placeholder="Search..."
                        className="
                        flex-1
                        bg-transparent
                        outline-none
                        text-sm
                        placeholder:text-slate-500
                    "
                    />

                </div>

            </div>

            {/* Recent */}

            <div className="mt-8 px-6">

                <p className="mb-4 text-xs uppercase tracking-[4px] text-slate-600">

                    Recent Chats

                </p>

                <div className="space-y-1">

                    {chats.map(chat => (

                        <button
                            key={chat}
                            className="
                            group
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-3
                            transition
                            hover:bg-[#131D31]
                        "
                        >

                            <MessageSquare
                                size={17}
                                className="text-blue-400"
                            />

                            <span className="truncate text-sm">

                                {chat}

                            </span>

                        </button>

                    ))}

                </div>

            </div>

            {/* Menu */}

            <div className="mt-8 px-6 space-y-2">

                <Menu
                    icon={<History size={19} />}
                    title="History"
                />

                <Menu
                    icon={<Bookmark size={19} />}
                    title="Bookmarks"
                />

                <Menu
                    icon={<Settings size={19} />}
                    title="Settings"
                />

            </div>

            <div className="flex-1"/>

            {/* User */}

            <div className="px-6 pb-8">

                <div
                    className="
                    rounded-2xl
                    bg-[#131D31]
                    p-4
                "
                >

                    <div className="flex items-center gap-3">

                        <div
                            className="
                            h-12
                            w-12
                            rounded-full
                            bg-gradient-to-r
                            from-blue-600
                            to-violet-600
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-lg
                        "
                        >

                            A

                        </div>

                        <div>

                            <h3 className="font-semibold">

                                Aditya

                            </h3>

                            <p className="text-sm text-slate-500">

                                Premium Member

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </aside>

    );

};

const Menu = ({ icon, title }) => (

    <button
        className="
        group
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        px-3
        py-3
        transition
        hover:bg-[#131D31]
    "
    >

        <div className="flex items-center gap-3">

            {icon}

            {title}

        </div>

        <ChevronRight
            size={17}
            className="opacity-0 transition group-hover:opacity-100"
        />

    </button>

);

export default Sidebar;