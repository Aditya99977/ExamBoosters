import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
    Trophy,
    RotateCw,
    LayoutDashboard,
    CheckCircle2,
    Target,
} from "lucide-react";

function ResultCard({
    result,
    onRetry,
}) {

    const navigate = useNavigate();

    const performance = useMemo(() => {

        const accuracy = result?.accuracy ?? 0;

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

    }, [result?.accuracy]);

    if (!result) return null;

    return (

        <div
            className="rounded-4 overflow-hidden"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >

            {/* Hero */}

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
                        width: 150,
                        height: 150,
                        border: `8px solid ${performance.color}`,
                    }}
                >

                    <div>

                        <h1
                            className="fw-bold text-white mb-0"
                        >
                            {result.accuracy}%
                        </h1>

                        <small className="text-white-50">
                            Accuracy
                        </small>

                    </div>

                </div>

                <h2 className="text-white fw-bold">
                    Mock Test Completed
                </h2>

                <p className="text-white-50 mb-0">
                    {result.exam}
                </p>

            </div>

            {/* Content */}

            <div className="p-5">

                <div className="row g-4">

                    {/* Score */}

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 text-center h-100"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <Trophy
                                size={32}
                                color="#F59E0B"
                            />

                            <h2 className="text-white fw-bold mt-3">
                                {result.score}
                            </h2>

                            <p className="text-secondary mb-0">
                                Score
                            </p>

                        </div>

                    </div>

                    {/* Correct */}

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 text-center h-100"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <CheckCircle2
                                size={32}
                                color="#22C55E"
                            />

                            <h2
                                className="fw-bold mt-3"
                                style={{
                                    color: "#22C55E",
                                }}
                            >
                                {result.score}/
                                {result.totalQuestions}
                            </h2>

                            <p className="text-secondary mb-0">
                                Correct Answers
                            </p>

                        </div>

                    </div>

                    {/* Performance */}

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 text-center h-100"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <Target
                                size={32}
                                color={performance.color}
                            />

                            <h2
                                className="fw-bold mt-3"
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

                {/* Submitted */}

                <div
                    className="rounded-4 p-4 mt-5"
                    style={{
                        background: "#0F172A",
                    }}
                >

                    <small className="text-secondary">
                        Submitted On
                    </small>

                    <h5 className="text-white mt-2 mb-0">

                        {new Date(
                            result.submittedAt
                        ).toLocaleString()}

                    </h5>

                </div>

                {/* Actions */}

                <div className="d-flex gap-3 mt-5">

                    <button
                        className="btn btn-primary flex-fill py-3"
                        onClick={onRetry}
                    >

                        <RotateCw
                            size={18}
                            className="me-2"
                        />

                        Retry Test

                    </button>

                    <button
                        className="btn btn-outline-light flex-fill py-3"
                        onClick={() =>
                            navigate("/dashboard")
                        }
                    >

                        <LayoutDashboard
                            size={18}
                            className="me-2"
                        />

                        Dashboard

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ResultCard;
