import { useEffect, useState } from "react";

import Sidebar from "../components/ai/Sidebar";
import ChatHeader from "../components/ai/ChatHeader";
import ChatWindow from "../components/ai/ChatWindow";
import ChatInput from "../components/ai/ChatInput";

import {
    sendMessage,
    getChatHistory,
} from "../services/aiService";

import { mapHistoryToMessages } from "../utils/chatMapper";

const AITutor = () => {

    // ===========================
    // States
    // ===========================

    const [allMessages, setAllMessages] = useState([]);

    const [messages, setMessages] = useState([]);

    const [input, setInput] = useState("");

    const [loading, setLoading] = useState(false);

    const [exam, setExam] = useState("");

    const [subject, setSubject] = useState("");

    const [chats, setChats] = useState([]);

    const [activeChat, setActiveChat] = useState(null);

    const [user, setUser] = useState(null);

    // ===========================
    // Load Chat History
    // ===========================

    const loadChatHistory = async () => {

        try {

            const history = await getChatHistory();

            const mappedMessages =
                mapHistoryToMessages(history);

            setAllMessages(mappedMessages);

            setMessages(mappedMessages);

            const sidebarChats = history.map((chat) => ({

                id: chat._id,

                title:
                    chat.question.length > 45
                        ? `${chat.question.substring(0, 45)}...`
                        : chat.question,

                createdAt: chat.createdAt,

                exam: chat.exam,

                subject: chat.subject,

            }));

            setChats(sidebarChats);

            if (sidebarChats.length) {

                setActiveChat(sidebarChats[0]);

            }

        }

        catch (err) {

            console.error(err);

        }

    };

    useEffect(() => {

        loadChatHistory();

    }, []);

    // ===========================
    // Send Message
    // ===========================

    const handleSendMessage = async (
        messageText = input
    ) => {

        if (!messageText.trim()) return;

        if (!exam || !subject) {

            alert("Please select Exam & Subject");

            return;

        }

        const userMessage = {

            id: Date.now(),

            sender: "user",

            text: messageText,

            exam,

            subject,

            time: new Date().toLocaleTimeString([], {

                hour: "2-digit",

                minute: "2-digit",

            }),

        };

        setMessages((prev) => [

            ...prev,

            userMessage,

        ]);

        setInput("");

        setLoading(true);

        try {

            const data = await sendMessage({

                exam,

                subject,

                message: messageText,

            });

            const aiMessage = {

                id: `${data.chatId}-ai`,

                sender: "ai",

                text: data.response,

                exam,

                subject,

                time: new Date().toLocaleTimeString([], {

                    hour: "2-digit",

                    minute: "2-digit",

                }),

            };

            setMessages((prev) => [

                ...prev,

                aiMessage,

            ]);

            await loadChatHistory();

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    // ===========================
    // New Chat
    // ===========================

    const handleNewChat = () => {

        setMessages([]);

        setInput("");

        setActiveChat(null);

    };

    // ===========================
    // Select Chat
    // ===========================

    const handleSelectChat = (chat) => {

        setActiveChat(chat);

        const filtered = allMessages.filter(

            (msg) =>

                msg.exam === chat.exam &&

                msg.subject === chat.subject

        );

        setMessages(filtered);

        setExam(chat.exam);

        setSubject(chat.subject);

    };

    // ===========================
    // Render
    // ===========================

    return (

        <div className="flex h-screen overflow-hidden bg-slate-100">

            {/* Sidebar */}

            <div className="w-[320px] border-r border-slate-200 bg-white">

                <Sidebar

                    chats={chats}

                    activeChat={activeChat}

                    onSelectChat={handleSelectChat}

                    onNewChat={handleNewChat}

                    user={user}

                />

            </div>

            {/* Main */}

            <div className="flex flex-1 flex-col">

                <ChatHeader

                    exam={exam}

                    subject={subject}

                    setExam={setExam}

                    setSubject={setSubject}

                    onNewChat={handleNewChat}

                />

                <div className="flex-1 overflow-hidden">

                    <ChatWindow

                        messages={messages}

                        loading={loading}

                        onSuggestionClick={(prompt) =>

                            setInput(prompt)

                        }

                    />

                </div>

                <ChatInput

                    input={input}

                    setInput={setInput}

                    onSend={handleSendMessage}

                    loading={loading}

                />

            </div>

        </div>

    );

};

export default AITutor;