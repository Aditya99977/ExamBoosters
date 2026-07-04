import { useEffect, useState } from "react";

function Timer({

    duration,

    onTimeUp

}) {

    const [timeLeft, setTimeLeft] = useState(duration * 60);

    useEffect(() => {

        if (timeLeft <= 0) {

            onTimeUp();

            return;

        }

        const timer = setInterval(() => {

            setTimeLeft(prev => prev - 1);

        }, 1000);

        return () => clearInterval(timer);

    }, [timeLeft, onTimeUp]);

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    const isWarning = timeLeft <= 300;

    return (

        <div
            className={`card shadow-sm border-0 rounded-4 mb-4 ${
                isWarning ? "bg-danger text-white" : "bg-light"
            }`}
        >

            <div className="card-body text-center">

                <h5 className="fw-bold">

                    ⏱ Time Remaining

                </h5>

                <h2 className="mb-0">

                    {String(minutes).padStart(2, "0")}:

                    {String(seconds).padStart(2, "0")}

                </h2>

            </div>

        </div>

    );

}

export default Timer;