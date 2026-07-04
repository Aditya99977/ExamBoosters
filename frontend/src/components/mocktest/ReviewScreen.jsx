function ReviewScreen({

    exam,

    totalQuestions,

    answers,

    onBack,

    onSubmit,

    onQuestionSelect

}) {

    const answered = Object.keys(answers).length;

    const notAnswered = totalQuestions - answered;

    return (

        <div className="card shadow border-0 rounded-4">

            <div className="card-body p-5">

                <h2 className="fw-bold mb-4">

                    📝 Review Mock Test

                </h2>

                <p>

                    <strong>

                        Exam:

                    </strong>

                    {" "}

                    {exam}

                </p>

                <hr/>

                <div className="row text-center mb-4">

                    <div className="col-md-6">

                        <h4 className="text-success">

                            {answered}

                        </h4>

                        <p>

                            Answered

                        </p>

                    </div>

                    <div className="col-md-6">

                        <h4 className="text-danger">

                            {notAnswered}

                        </h4>

                        <p>

                            Not Answered

                        </p>

                    </div>

                </div>

                <h5 className="mb-3">

                    Question Palette

                </h5>

                <div className="d-flex flex-wrap gap-2 mb-4">

                    {

                        Array.from(

                            {

                                length: totalQuestions

                            }

                        ).map((_, index)=>(

                            <button

                                key={index}

                                className={`btn ${
                                    answers[index]

                                    ?

                                    "btn-success"

                                    :

                                    "btn-outline-secondary"
                                }`}

                                style={{

                                    width:"45px",

                                    height:"45px"

                                }}

                                onClick={()=>onQuestionSelect(index)}

                            >

                                {index+1}

                            </button>

                        ))

                    }

                </div>

                <div className="d-flex justify-content-between">

                    <button

                        className="btn btn-outline-primary"

                        onClick={onBack}

                    >

                        ⬅ Back to Test

                    </button>

                    <button

                        className="btn btn-danger"

                        onClick={onSubmit}

                    >

                        🚀 Submit Test

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ReviewScreen;