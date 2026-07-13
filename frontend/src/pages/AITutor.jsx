import Sidebar from "../components/ai/Sidebar";
import ChatHeader from "../components/ai/ChatHeader";
import EmptyState from "../components/ai/EmptyState";

const AITutor = () => {
    return (
        <div className="h-screen w-full bg-slate-950 text-white overflow-hidden">

            <div className="flex h-full">

                {/* Sidebar */}

                <Sidebar />

                {/* Main */}

                <div className="flex flex-1 flex-col">

                    {/* Header */}

                    <ChatHeader />

                    {/* Chat Area */}

                    <main className="relative flex-1 overflow-y-auto">

                        {/* Background Glow */}

                        <div className="absolute inset-0 overflow-hidden pointer-events-none">

                            <div className="absolute -top-44 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[180px]" />

                            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[150px]" />

                        </div>

                        <div className="relative z-10 h-full">

                            <EmptyState />

                        </div>

                    </main>

                </div>

            </div>

        </div>
    );
};

export default AITutor;