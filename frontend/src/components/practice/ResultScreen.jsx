import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function ResultScreen({
    score,
    questions,
    retryPractice,
}) {

    const navigate = useNavigate();

    const totalQuestions = questions.length;

    const accuracy = useMemo(() => {

        if (totalQuestions === 0) return 0;

        return Math.round(
            (score / totalQuestions) * 100
        );

    }, [score, totalQuestions]);

    const performance = useMemo(() => {

        if (accuracy >= 90) {

            return {
                title: "Excellent",
                color: "#22C55E",
            };

        }

        if (accuracy >= 75) {

            return {
                title: "Very Good",
                color: "#3B82F6",
            };

        }

        if (accuracy >= 60) {

            return {
                title: "Good",
                color: "#F59E0B",
            };

        }

        return {
            title: "Needs Improvement",
            color: "#EF4444",
        };

    }, [accuracy]);

    return (

        <div
            className="rounded-4 overflow-hidden"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >

            {/* Header */}

            <div
                className="text-center py-5 px-4"
                style={{
                    background:
                        "linear-gradient(135deg,#2563EB,#1D4ED8,#0F172A)",
                }}
            >

                <div
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4"
                    style={{
                        width: 140,
                        height: 140,
                        border: `8px solid ${performance.color}`,
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "2rem",
                    }}
                >

                    {accuracy}%

                </div>

                <h2 className="text-white fw-bold">
                    Practice Completed
                </h2>

                <p className="text-white-50 mb-0">
                    Review your performance and continue improving.
                </p>

            </div>

            {/* Stats */}

            <div className="p-5">

                <div className="row g-4">

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 h-100 text-center"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <h2
                                className="fw-bold mb-2"
                                style={{
                                    color: performance.color,
                                }}
                            >
                                {score}
                            </h2>

                            <p className="text-secondary mb-0">
                                Correct Answers
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 h-100 text-center"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <h2 className="text-white fw-bold mb-2">
                                {totalQuestions}
                            </h2>

                            <p className="text-secondary mb-0">
                                Total Questions
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 h-100 text-center"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <h2
                                className="fw-bold mb-2"
                                style={{
                                    color: performance.color,
                                }}
                            >
                                {performance.title}
                            </h2>

                            <p className="text-secondary mb-0">
                                Performance
                            </p>

                        </div>

                    </div>

                </div>

                {/* Accuracy */}

                <div
                    className="rounded-4 p-4 mt-5"
                    style={{
                        background: "#0F172A",
                    }}
                >

                    <div className="d-flex justify-content-between mb-3">

                        <span className="text-white">

                            Accuracy

                        </span>

                        <strong
                            style={{
                                color: performance.color,
                            }}
                        >
                            {accuracy}%
                        </strong>

                    </div>

                    <div
                        className="progress"
                        style={{
                            height: "12px",
                            background: "#1E293B",
                        }}
                    >

                        <div
                            className="progress-bar"
                            style={{
                                width: `${accuracy}%`,
                                background:
                                    performance.color,
                            }}
                        />

                    </div>

                </div>

                {/* Actions */}

                <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">

                    <button
                        className="btn btn-primary btn-lg px-5"
                        onClick={retryPractice}
                    >
                        Retry Practice
                    </button>

                    <button
                        className="btn btn-outline-light btn-lg px-5"
                        onClick={() =>
                            navigate("/dashboard")
                        }
                    >
                        Back to Dashboard
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ResultScreen;