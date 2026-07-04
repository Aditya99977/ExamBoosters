function QuestionPalette({

    totalQuestions,

    currentQuestion,

    answers,

    onQuestionSelect

}) {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    📌 Question Palette

                </h5>

                <div className="d-flex flex-wrap gap-2">

                    {

                        Array.from(

                            {

                                length: totalQuestions

                            }

                        ).map((_, index) => {

                            const answered =

                                answers[index];

                            return (

                                <button

                                    key={index}

                                    className={`btn ${
                                        currentQuestion === index
                                            ? "btn-primary"
                                            : answered
                                            ? "btn-success"
                                            : "btn-outline-secondary"
                                    }`}

                                    style={{

                                        width: "45px",

                                        height: "45px"

                                    }}

                                    onClick={() =>

                                        onQuestionSelect(index)

                                    }

                                >

                                    {index + 1}

                                </button>

                            );

                        })

                    }

                </div>

                <hr />

                <div className="mt-3">

                    <p className="mb-2">

                        <span className="badge bg-primary">

                            Current

                        </span>

                    </p>

                    <p className="mb-2">

                        <span className="badge bg-success">

                            Answered

                        </span>

                    </p>

                    <p className="mb-0">

                        <span className="badge bg-secondary">

                            Not Answered

                        </span>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default QuestionPalette;