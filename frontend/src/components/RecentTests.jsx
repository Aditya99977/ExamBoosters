function RecentTests({ tests = [] }) {

    return (

        <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

                <h4 className="fw-bold mb-4">

                    📋 Recent Mock Tests

                </h4>

                {

                    tests.length === 0 ? (

                        <p className="text-muted">

                            No mock tests completed yet.

                        </p>

                    ) : (

                        tests.map((test, index) => (

                            <div
                                key={index}
                                className="d-flex justify-content-between align-items-center border-bottom py-3"
                            >

                                <div>

                                    <strong>

                                        {test.exam}

                                    </strong>

                                    <br />

                                    <small className="text-muted">

                                        {new Date(test.submittedAt).toLocaleDateString()}

                                    </small>

                                </div>

                                <span className="badge bg-success fs-6">

                                    {test.score}

                                </span>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}

export default RecentTests;