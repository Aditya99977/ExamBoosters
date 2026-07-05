function RecentTests({ tests }) {

    return (

        <div className="card shadow-sm border-0 rounded-4 mb-4">

            <div className="card-body">

                <h4 className="fw-bold mb-4">

                    📝 Recent Mock Tests

                </h4>

                {

                    tests.length === 0 ? (

                        <div className="alert alert-info">

                            No mock tests attempted yet.

                        </div>

                    ) : (

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead>

                                    <tr>

                                        <th>Exam</th>

                                        <th>Score</th>

                                        <th>Accuracy</th>

                                        <th>Date</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        tests.map((test, index) => (

                                            <tr key={index}>

                                                <td>

                                                    {test.exam}

                                                </td>

                                                <td>

                                                    {test.score}

                                                </td>

                                                <td>

                                                    {test.accuracy}%

                                                </td>

                                                <td>

                                                    {

                                                        new Date(

                                                            test.submittedAt

                                                        ).toLocaleDateString()

                                                    }

                                                </td>

                                            </tr>

                                        ))

                                    }

                                </tbody>

                            </table>

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default RecentTests;