function QuestionCard({ session, actions }) {

    const {
        currentQuestion,
        currentIndex,
        questions,
        score,
        selectedAnswer,
        answered,
        showResult,
        isCorrect,
    } = session;

    const {
        setSelectedAnswer,
        checkAnswer,
        nextQuestion,
        previousQuestion,
    } = actions;

    const progress =
        questions.length > 0
            ? ((currentIndex + 1) / questions.length) * 100
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

            <div className="p-4 border-bottom border-secondary">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <small className="text-secondary">
                            Question
                        </small>

                        <h4 className="text-white fw-bold mb-0">
                            {currentIndex + 1} / {questions.length}
                        </h4>

                    </div>

                    <div className="text-end">

                        <small className="text-secondary">
                            Score
                        </small>

                        <h4 className="text-success fw-bold mb-0">
                            {score}
                        </h4>

                    </div>

                </div>

                <div
                    className="progress mt-4"
                    style={{
                        height: "8px",
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

            {/* Question */}

            <div className="p-4">

                <h4
                    className="text-white mb-4"
                    style={{
                        lineHeight: "1.8",
                    }}
                >
                    {currentQuestion.question}
                </h4>

                <div className="d-grid gap-3">

                    {currentQuestion.options.map(
                        (option, index) => {

                            const isSelected =
                                selectedAnswer === option;

                            const isAnswerCorrect =
                                option ===
                                currentQuestion.correctAnswer;

                            let background = "#182338";

                            let border =
                                "1px solid rgba(255,255,255,.08)";

                            if (!answered && isSelected) {

                                background =
                                    "rgba(37,99,235,.15)";

                                border =
                                    "1px solid #2563EB";

                            }

                            if (
                                answered &&
                                isAnswerCorrect
                            ) {

                                background =
                                    "rgba(34,197,94,.18)";

                                border =
                                    "1px solid #22C55E";

                            }

                            if (
                                answered &&
                                isSelected &&
                                !isAnswerCorrect
                            ) {

                                background =
                                    "rgba(239,68,68,.18)";

                                border =
                                    "1px solid #EF4444";

                            }

                            return (

                                <button
                                    key={index}
                                    type="button"
                                    className="text-start rounded-4 p-4"
                                    disabled={answered}
                                    onClick={() =>
                                        setSelectedAnswer(option)
                                    }
                                    style={{
                                        background,
                                        border,
                                        color: "#fff",
                                        transition: ".2s",
                                    }}
                                >

                                    <div className="d-flex align-items-center">

                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: 42,
                                                height: 42,
                                                background:
                                                    isSelected
                                                        ? "#2563EB"
                                                        : "#0F172A",
                                            }}
                                        >
                                            {String.fromCharCode(
                                                65 + index
                                            )}
                                        </div>

                                        <div>

                                            {option}

                                        </div>

                                    </div>

                                </button>

                            );

                        }

                    )}

                </div>

                {/* Result */}

                {answered && showResult && (

                    <div
                        className={`alert mt-4 ${
                            isCorrect
                                ? "alert-success"
                                : "alert-danger"
                        }`}
                    >

                        {isCorrect
                            ? "Correct Answer!"
                            : `Correct Answer: ${currentQuestion.correctAnswer}`}

                    </div>

                )}

                {/* Buttons */}

                <div className="d-flex justify-content-between mt-5">

                    <button
                        className="btn btn-outline-light"
                        onClick={previousQuestion}
                        disabled={currentIndex === 0}
                    >
                        Previous
                    </button>

                    {!answered ? (

                        <button
                            className="btn btn-primary"
                            disabled={!selectedAnswer}
                            onClick={checkAnswer}
                        >
                            Check Answer
                        </button>

                    ) : (

                        <button
                            className="btn btn-primary"
                            onClick={nextQuestion}
                        >
                            {currentIndex ===
                            questions.length - 1
                                ? "Finish Practice"
                                : "Next Question"}
                        </button>

                    )}

                </div>

            </div>

        </div>

    );

}

export default QuestionCard;