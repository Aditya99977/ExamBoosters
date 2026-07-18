import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

function QuestionCard({
    question,
    currentQuestion,
    totalQuestions,
    selectedAnswer,
    onAnswerSelect,
    onPrevious,
    onNext,
    isFirst,
    isLast,
}) {
    if (!question) {
        return (
            <div
                className="rounded-4 p-5 text-center"
                style={{
                    background: "#131D31",
                    border: "1px solid rgba(255,255,255,.08)",
                }}
            >
                <h4 className="text-white mb-0">
                    No question available.
                </h4>
            </div>
        );
    }

    const progress =
        (currentQuestion / totalQuestions) * 100;

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
                className="p-4"
                style={{
                    borderBottom:
                        "1px solid rgba(255,255,255,.08)",
                }}
            >
                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <small className="text-secondary">
                            Question
                        </small>

                        <h3 className="text-white fw-bold mb-0">
                            {currentQuestion}
                        </h3>

                    </div>

                    <div className="text-end">

                        <small className="text-secondary">
                            Total
                        </small>

                        <h3 className="text-white fw-bold mb-0">
                            {totalQuestions}
                        </h3>

                    </div>

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
                            }}
                        />
                    </div>

                </div>

            </div>

            {/* Question */}

            <div className="p-4">

                <div
                    className="rounded-4 p-4 mb-4"
                    style={{
                        background: "#0F172A",
                    }}
                >
                    <small
                        className="text-uppercase"
                        style={{
                            color: "#3B82F6",
                            letterSpacing: 1,
                        }}
                    >
                        Question
                    </small>

                    <h4
                        className="text-white mt-3 mb-0"
                        style={{
                            lineHeight: 1.8,
                        }}
                    >
                        {question.question}
                    </h4>

                </div>

                {/* Options */}

                <div className="d-grid gap-3">

                    {question.options.map(
                        (option, index) => {

                            const active =
                                selectedAnswer === option;

                            return (

                                <button
                                    key={index}
                                    type="button"
                                    className="text-start rounded-4 p-4"
                                    onClick={() =>
                                        onAnswerSelect(option)
                                    }
                                    style={{
                                        background: active
                                            ? "rgba(37,99,235,.15)"
                                            : "#182338",

                                        border: active
                                            ? "1px solid #2563EB"
                                            : "1px solid rgba(255,255,255,.08)",

                                        color: "#fff",

                                        transition:
                                            ".25s ease",
                                    }}
                                >

                                    <div className="d-flex align-items-center">

                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: 42,
                                                height: 42,
                                                background: active
                                                    ? "#2563EB"
                                                    : "#0F172A",
                                            }}
                                        >

                                            {String.fromCharCode(
                                                65 + index
                                            )}

                                        </div>

                                        <div className="flex-grow-1">

                                            {option}

                                        </div>

                                        <Circle
                                            size={18}
                                            fill={
                                                active
                                                    ? "#2563EB"
                                                    : "transparent"
                                            }
                                        />

                                    </div>

                                </button>

                            );

                        }

                    )}

                </div>

                {/* Footer */}

                <div className="d-flex gap-3 mt-5">

                    <button
                        className="btn btn-outline-light flex-fill py-3"
                        disabled={isFirst}
                        onClick={onPrevious}
                    >
                        <ChevronLeft
                            size={18}
                            className="me-2"
                        />

                        Previous

                    </button>

                    <button
                        className="btn btn-primary flex-fill py-3"
                        onClick={onNext}
                    >
                        {isLast
                            ? "Review Test"
                            : "Next Question"}

                        <ChevronRight
                            size={18}
                            className="ms-2"
                        />

                    </button>

                </div>

            </div>

        </div>
    );
}

export default QuestionCard;