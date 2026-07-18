import { useEffect, useMemo, useState } from "react";
import { Clock3 } from "lucide-react";

function Timer({
    duration,
    onTimeUp,
}) {

    const [timeLeft, setTimeLeft] = useState(duration * 60);

    useEffect(() => {

        if (timeLeft <= 0) {

            onTimeUp();

            return;

        }

        const timer = setInterval(() => {

            setTimeLeft((prev) => prev - 1);

        }, 1000);

        return () => clearInterval(timer);

    }, [timeLeft, onTimeUp]);

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    const totalSeconds = duration * 60;

    const progress = useMemo(() => {

        return (timeLeft / totalSeconds) * 100;

    }, [timeLeft, totalSeconds]);

    const timerState = useMemo(() => {

        if (timeLeft <= 60) {

            return {
                color: "#EF4444",
                background: "rgba(239,68,68,.12)",
                border: "#EF4444",
                label: "Critical",
            };

        }

        if (timeLeft <= 300) {

            return {
                color: "#F59E0B",
                background: "rgba(245,158,11,.12)",
                border: "#F59E0B",
                label: "Hurry Up",
            };

        }

        return {
            color: "#22C55E",
            background: "rgba(34,197,94,.12)",
            border: "#22C55E",
            label: "Remaining",
        };

    }, [timeLeft]);

    return (

        <div
            className="rounded-4 mb-4"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >

            <div className="p-4">

                <div className="d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center">

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{
                                width: 50,
                                height: 50,
                                background: timerState.background,
                            }}
                        >

                            <Clock3
                                size={24}
                                color={timerState.color}
                            />

                        </div>

                        <div>

                            <small className="text-secondary">

                                Time Remaining

                            </small>

                            <h3
                                className="fw-bold text-white mb-0"
                            >

                                {String(minutes).padStart(2, "0")}:

                                {String(seconds).padStart(2, "0")}

                            </h3>

                        </div>

                    </div>

                    <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                            background: timerState.background,
                            color: timerState.color,
                            border: `1px solid ${timerState.border}`,
                        }}
                    >

                        {timerState.label}

                    </span>

                </div>

                <div className="mt-4">

                    <div className="d-flex justify-content-between mb-2">

                        <small className="text-secondary">

                            Progress

                        </small>

                        <small className="text-secondary">

                            {Math.round(progress)}%

                        </small>

                    </div>

                    <div
                        className="progress"
                        style={{
                            height: 8,
                            background: "#0F172A",
                        }}
                    >

                        <div
                            className="progress-bar"
                            style={{
                                width: `${progress}%`,
                                background: timerState.color,
                            }}
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Timer;