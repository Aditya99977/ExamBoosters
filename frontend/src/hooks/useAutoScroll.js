import { useEffect, useRef } from "react";

const useAutoScroll = (dependency) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [dependency]);

    return bottomRef;
};

export default useAutoScroll;