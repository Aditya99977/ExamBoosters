function SubjectProgress({ data = [] }) {

    const getColor = (progress) => {

        if (progress >= 80) return "bg-success";

        if (progress >= 60) return "bg-primary";

        if (progress >= 40) return "bg-warning";

        return "bg-danger";

    };

    return (

        <div className="card border-0 shadow-sm rounded-4 mt-4">

            <div className="card-body p-4">

                <h4 className="fw-bold mb-4">

                    📚 Subject Progress

                </h4>

                {

                    data.length === 0 ? (

                        <div className="text-center py-4">

                            <p className="text-muted mb-0">

                                No subject progress available yet.

                            </p>

                            <small className="text-secondary">

                                Complete a mock test to see your performance.

                            </small>

                        </div>

                    ) : (

                        data.map((subject, index) => (

                            <div
                                key={index}
                                className="mb-4"
                            >

                                <div className="d-flex justify-content-between">

                                    <strong>

                                        {subject.subject}

                                    </strong>

                                    <span>

                                        {subject.progress}%

                                    </span>

                                </div>

                                <div className="progress mt-2">

                                    <div

                                        className={`progress-bar ${getColor(subject.progress)}`}

                                        role="progressbar"

                                        style={{

                                            width: `${subject.progress}%`

                                        }}

                                    >

                                    </div>

                                </div>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}

export default SubjectProgress;