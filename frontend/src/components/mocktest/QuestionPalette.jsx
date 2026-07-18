import {
    CheckCircle2,
    Circle,
    CircleDot,
} from "lucide-react";

function QuestionPalette({
    totalQuestions,
    currentQuestion,
    answers,
    onQuestionSelect,
}) {
    return (
        <div
            className="rounded-4"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >
            <div className="p-4">

                {/* Header */}

                <h4 className="text-white fw-bold mb-4">
                    Question Palette
                </h4>

                {/* Legend */}

                <div className="mb-4">

                    <div className="d-flex align-items-center mb-3">

                        <CircleDot
                            size={18}
                            color="#2563EB"
                        />

                        <small className="text-secondary ms-2">
                            Current Question
                        </small>

                    </div>

                    <div className="d-flex align-items-center mb-3">

                        <CheckCircle2
                            size={18}
                            color="#22C55E"
                        />

                        <small className="text-secondary ms-2">
                            Answered
                        </small>

                    </div>

                    <div className="d-flex align-items-center">

                        <Circle
                            size={18}
                            color="#94A3B8"
                        />

                        <small className="text-secondary ms-2">
                            Not Answered
                        </small>

                    </div>

                </div>

                <hr
                    style={{
                        borderColor:
                            "rgba(255,255,255,.08)",
                    }}
                />

                {/* Question Numbers */}

                <div className="row g-2 mt-2">

                    {Array.from({
                        length: totalQuestions,
                    }).map((_, index) => {

                        const isCurrent =
                            currentQuestion === index;

                        const isAnswered =
                            answers[index];

                        let background = "#182338";

                        let border =
                            "1px solid rgba(255,255,255,.08)";

                        let color = "#fff";

                        if (isAnswered) {

                            background =
                                "rgba(34,197,94,.15)";

                            border =
                                "1px solid #22C55E";

                            color = "#22C55E";

                        }

                        if (isCurrent) {

                            background =
                                "rgba(37,99,235,.18)";

                            border =
                                "1px solid #2563EB";

                            color = "#3B82F6";

                        }

                        return (

                            <div
                                key={index}
                                className="col-3"
                            >

                                <button
                                    onClick={() =>
                                        onQuestionSelect(index)
                                    }
                                    className="w-100 rounded-3 fw-semibold"
                                    style={{
                                        height: 48,
                                        background,
                                        border,
                                        color,
                                        transition:
                                            ".25s ease",
                                    }}
                                >

                                    {index + 1}

                                </button>

                            </div>

                        );

                    })}

                </div>

                {/* Footer */}

                <div
                    className="rounded-4 mt-4 p-3"
                    style={{
                        background: "#0F172A",
                    }}
                >

                    <div className="d-flex justify-content-between">

                        <small className="text-secondary">

                            Answered

                        </small>

                        <strong
                            style={{
                                color: "#22C55E",
                            }}
                        >

                            {Object.keys(answers).length}

                        </strong>

                    </div>

                    <div className="d-flex justify-content-between mt-2">

                        <small className="text-secondary">

                            Remaining

                        </small>

                        <strong className="text-white">

                            {totalQuestions -
                                Object.keys(answers)
                                    .length}

                        </strong>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default QuestionPalette;