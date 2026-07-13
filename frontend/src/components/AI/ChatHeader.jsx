import {
    Sparkles,
    Bell,
    ChevronDown,
    Menu,
    UserCircle2,
} from "lucide-react";

const ChatHeader = () => {

    return (

        <header
            className="
            h-16
            px-8
            flex
            items-center
            justify-between
            bg-[#08111F]/80
            backdrop-blur-3xl
            sticky
            top-0
            z-50
        "
        >

            {/* Left */}

            <div className="flex items-center gap-4">

                <button
                    className="
                    lg:hidden
                    h-10
                    w-10
                    rounded-xl
                    bg-[#131D31]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#1B2943]
                    transition
                "
                >

                    <Menu size={20} />

                </button>

                <div>

                    <div className="flex items-center gap-3">

                        <h1 className="text-3xl font-bold tracking-tight">

                            ExamBooster AI

                        </h1>

                        <span
                            className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-emerald-500/10
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-emerald-400
                        "
                        >

                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

                            Online

                        </span>

                    </div>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                        <Sparkles
                            size={14}
                            className="text-blue-400"
                        />

                        Gemini 2.5 Flash

                    </div>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

                {/* Notification */}

                <button
                    className="
                    h-11
                    w-11
                    rounded-xl
                    bg-[#131D31]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#1B2943]
                    transition
                "
                >

                    <Bell size={19} />

                </button>

                {/* User */}

                <button
                    className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-[#131D31]
                    px-3
                    py-2
                    hover:bg-[#1B2943]
                    transition
                "
                >

                    <UserCircle2
                        size={36}
                        className="text-blue-500"
                    />

                    <div className="hidden md:block text-left">

                        <h3 className="font-semibold">

                            Aditya

                        </h3>

                        <p className="text-xs text-slate-500">

                            Premium

                        </p>

                    </div>

                    <ChevronDown
                        size={16}
                        className="text-slate-500"
                    />

                </button>

            </div>

        </header>

    );

};

export default ChatHeader;