import { useNavigate } from "react-router-dom";

function ResultCard({

    result,

    onRetry

}) {

    const navigate = useNavigate();

    if (!result) {

        return null;

    }

    return (

        <div className="card shadow border-0 rounded-4">

            <div className="card-body text-center p-5">

                <h1 className="text-success mb-4">

                    🎉 Test Completed

                </h1>

                <h3>

                    {result.exam}

                </h3>

                <hr />

                <div className="row mt-4">

                    <div className="col-md-4">

                        <h5>

                            Score

                        </h5>

                        <h2 className="text-primary">

                            {result.score} / {result.totalQuestions}

                        </h2>

                    </div>

                    <div className="col-md-4">

                        <h5>

                            Accuracy

                        </h5>

                        <h2 className="text-success">

                            {result.accuracy}%

                        </h2>

                    </div>

                    <div className="col-md-4">

                        <h5>

                            Submitted

                        </h5>

                        <h6>

                            {

                                new Date(

                                    result.submittedAt

                                ).toLocaleString()

                            }

                        </h6>

                    </div>

                </div>

                <hr />

                <div className="mt-4">

                    <button

                        className="btn btn-primary me-3"

                        onClick={onRetry}

                    >

                        🔄 Retry Test

                    </button>

                    <button

                        className="btn btn-outline-secondary"

                        onClick={() =>

                            navigate("/dashboard")

                        }

                    >

                        🏠 Dashboard

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ResultCard;