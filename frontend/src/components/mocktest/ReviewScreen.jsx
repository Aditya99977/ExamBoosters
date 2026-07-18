import {
    CheckCircle2,
    Circle,
    Send,
    ArrowLeft,
} from "lucide-react";

function ReviewScreen({
    exam,
    totalQuestions,
    answers,
    onBack,
    onSubmit,
    onQuestionSelect,
}) {

    const answered = Object.keys(answers).length;

    const notAnswered = totalQuestions - answered;

    const progress =
        totalQuestions > 0
            ? (answered / totalQuestions) * 100
            : 0;

    return (

        <div
            className="rounded-4"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >

            {/* Header */}

            <div
                className="p-5"
                style={{
                    borderBottom:
                        "1px solid rgba(255,255,255,.08)",
                }}
            >

                <span className="badge bg-primary mb-3">
                    Review
                </span>

                <h2 className="text-white fw-bold mb-2">
                    {exam}
                </h2>

                <p className="text-secondary mb-0">
                    Review your answers before submitting the mock
                    test.
                </p>

            </div>

            <div className="p-5">

                {/* Summary */}

                <div className="row g-4 mb-5">

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
                                {answered}
                            </h2>

                            <p className="text-secondary mb-0">
                                Answered
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 text-center h-100"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <Circle
                                size={32}
                                color="#94A3B8"
                            />

                            <h2 className="text-white fw-bold mt-3">
                                {notAnswered}
                            </h2>

                            <p className="text-secondary mb-0">
                                Remaining
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 text-center h-100"
                            style={{
                                background: "#0F172A",
                            }}
                        >

                            <h2 className="text-primary fw-bold">
                                {totalQuestions}
                            </h2>

                            <p className="text-secondary mb-0">
                                Total Questions
                            </p>

                        </div>

                    </div>

                </div>

                {/* Progress */}

                <div className="mb-5">

                    <div className="d-flex justify-content-between mb-2">

                        <small className="text-secondary">
                            Completion
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
                            }}
                        />

                    </div>

                </div>

                {/* Question Palette */}

                <h5 className="text-white fw-bold mb-4">
                    Jump to Question
                </h5>

                <div className="row g-2 mb-5">

                    {Array.from({
                        length: totalQuestions,
                    }).map((_, index) => {

                        const done = answers[index];

                        return (

                            <div
                                className="col-2 col-md-1"
                                key={index}
                            >

                                <button
                                    onClick={() =>
                                        onQuestionSelect(index)
                                    }
                                    className="w-100 rounded-3 fw-semibold"
                                    style={{
                                        height: 48,
                                        background: done
                                            ? "rgba(34,197,94,.15)"
                                            : "#182338",

                                        border: done
                                            ? "1px solid #22C55E"
                                            : "1px solid rgba(255,255,255,.08)",

                                        color: done
                                            ? "#22C55E"
                                            : "#fff",
                                    }}
                                >

                                    {index + 1}

                                </button>

                            </div>

                        );

                    })}

                </div>

                {/* Actions */}

                <div className="d-flex gap-3">

                    <button
                        className="btn btn-outline-light flex-fill py-3"
                        onClick={onBack}
                    >

                        <ArrowLeft
                            size={18}
                            className="me-2"
                        />

                        Back to Test

                    </button>

                    <button
                        className="btn btn-danger flex-fill py-3"
                        onClick={onSubmit}
                    >

                        <Send
                            size={18}
                            className="me-2"
                        />

                        Submit Test

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ReviewScreen;