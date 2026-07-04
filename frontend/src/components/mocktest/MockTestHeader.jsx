function MockTestHeader({

    exam,

    totalQuestions,

    duration,

    onStart,

    started

}) {

    return (

        <div className="card shadow-sm border-0 rounded-4 mb-4">

            <div className="card-body p-4">

                <div className="row align-items-center">

                    <div className="col-lg-8">

                        <h2 className="fw-bold mb-3">

                            📝 Mock Test

                        </h2>

                        <p className="mb-2">

                            <strong>

                                Exam:

                            </strong>

                            {" "}

                            {exam}

                        </p>

                        <p className="mb-2">

                            <strong>

                                Questions:

                            </strong>

                            {" "}

                            {totalQuestions}

                        </p>

                        <p className="mb-0">

                            <strong>

                                Duration:

                            </strong>

                            {" "}

                            {duration} Minutes

                        </p>

                    </div>

                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                        {

                            !started && (

                                <button

                                    className="btn btn-primary btn-lg px-5"

                                    onClick={onStart}

                                >

                                    ▶ Start Mock Test

                                </button>

                            )

                        }

                    </div>

                </div>

            </div>

        </div>

    );

}

export default MockTestHeader;