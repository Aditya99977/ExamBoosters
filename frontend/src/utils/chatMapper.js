// ======================================
// Convert Backend Chat History
// into Frontend Message Format
// ======================================

export const mapHistoryToMessages = (history = []) => {
    return history.flatMap((chat) => [
        {
            id: `${chat._id}-user`,
            sender: "user",
            text: chat.question,
            exam: chat.exam,
            subject: chat.subject,
            time: new Date(chat.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            createdAt: chat.createdAt,
        },
        {
            id: `${chat._id}-ai`,
            sender: "ai",
            text: chat.response,
            exam: chat.exam,
            subject: chat.subject,
            time: new Date(chat.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            createdAt: chat.createdAt,
        },
    ]);
};