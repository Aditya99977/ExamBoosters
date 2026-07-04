function QuestionCard({

    question,

    currentQuestion,

    totalQuestions,

    selectedAnswer,

    onAnswerSelect,

    onPrevious,

    onNext,

    isFirst,

    isLast

}) {

    if (!question) {

        return (

            <div className="alert alert-info">

                No question available.

            </div>

        );

    }

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body p-4">

                <h5 className="text-primary mb-3">

                    Question {currentQuestion} of {totalQuestions}

                </h5>

                <div className="progress mb-4">

                    <div

                        className="progress-bar"

                        role="progressbar"

                        style={{

                            width: `${(currentQuestion / totalQuestions) * 100}%`

                        }}

                    >

                        {currentQuestion}/{totalQuestions}

                    </div>

                </div>

                <h4 className="mb-4">

                    {question.question}

                </h4>

                {

                    question.options.map((option, index) => (

                        <div

                            key={index}

                            className="form-check border rounded p-3 mb-3"

                        >

                            <input

                                className="form-check-input"

                                type="radio"

                                name="answer"

                                id={`option-${index}`}

                                value={option}

                                checked={selectedAnswer === option}

                                onChange={(e) =>

                                    onAnswerSelect(

                                        e.target.value

                                    )

                                }

                            />

                            <label

                                className="form-check-label ms-2"

                                htmlFor={`option-${index}`}

                            >

                                {option}

                            </label>

                        </div>

                    ))

                }

                <div className="d-flex justify-content-between mt-4">

                    <button

                        className="btn btn-outline-secondary"

                        onClick={onPrevious}

                        disabled={isFirst}

                    >

                        ⬅ Previous

                    </button>

                    <button

                        className="btn btn-primary"

                        onClick={onNext}

                    >

                        {

                            isLast

                                ? "Review Test"

                                : "Next ➡"

                        }

                    </button>

                </div>

            </div>

        </div>

    );

}

export default QuestionCard;