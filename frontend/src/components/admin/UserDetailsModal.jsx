function UserDetailsModal({

    show,

    user,

    tests = [],

    onClose

}) {

    if (!show || !user) {

        return null;

    }

    const highestScore = tests.length

        ? Math.max(...tests.map(test => test.score))

        : 0;

    const averageScore = tests.length

        ? (

            tests.reduce(

                (sum, test) => sum + test.score,

                0

            ) / tests.length

        ).toFixed(2)

        : 0;

    return (

        <div

            className="modal fade show"

            style={{

                display: "block",

                backgroundColor: "rgba(0,0,0,0.5)"

            }}

        >

            <div className="modal-dialog modal-xl">

                <div className="modal-content">

                    <div className="modal-header">

                        <h4 className="modal-title">

                            👤 User Details

                        </h4>

                        <button

                            className="btn-close"

                            onClick={onClose}

                        ></button>

                    </div>

                    <div className="modal-body">

                        <div className="row mb-4">

                            <div className="col-md-6">

                                <h6>Name</h6>

                                <p>{user.name}</p>

                            </div>

                            <div className="col-md-6">

                                <h6>Email</h6>

                                <p>{user.email}</p>

                            </div>

                            <div className="col-md-4">

                                <h6>Role</h6>

                                <p>{user.role}</p>

                            </div>

                            <div className="col-md-4">

                                <h6>Exam Target</h6>

                                <p>{user.examTarget}</p>

                            </div>

                            <div className="col-md-4">

                                <h6>Joined</h6>

                                <p>

                                    {

                                        new Date(

                                            user.createdAt

                                        ).toLocaleDateString()

                                    }

                                </p>

                            </div>

                        </div>

                        <div className="row text-center mb-4">

                            <div className="col-md-4">

                                <div className="card">

                                    <div className="card-body">

                                        <h2>

                                            {tests.length}

                                        </h2>

                                        <p>

                                            Total Tests

                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card">

                                    <div className="card-body">

                                        <h2>

                                            {highestScore}

                                        </h2>

                                        <p>

                                            Highest Score

                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="card">

                                    <div className="card-body">

                                        <h2>

                                            {averageScore}

                                        </h2>

                                        <p>

                                            Average Score

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <h5 className="mb-3">

                            Test History

                        </h5>

                        <div className="table-responsive">

                            <table className="table table-bordered">

                                <thead>

                                    <tr>

                                        <th>#</th>

                                        <th>Exam</th>

                                        <th>Score</th>

                                        <th>Questions</th>

                                        <th>Accuracy</th>

                                        <th>Date</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        tests.length === 0 && (

                                            <tr>

                                                <td

                                                    colSpan="6"

                                                    className="text-center"

                                                >

                                                    No Tests Found

                                                </td>

                                            </tr>

                                        )

                                    }

                                    {

                                        tests.map(

                                            (

                                                test,

                                                index

                                            ) => (

                                                <tr

                                                    key={

                                                        test._id

                                                    }

                                                >

                                                    <td>

                                                        {

                                                            index + 1

                                                        }

                                                    </td>

                                                    <td>

                                                        {

                                                            test.exam

                                                        }

                                                    </td>

                                                    <td>

                                                        {

                                                            test.score

                                                        }

                                                    </td>

                                                    <td>

                                                        {

                                                            test.totalQuestions

                                                        }

                                                    </td>

                                                    <td>

                                                        {

                                                            test.accuracy

                                                        }

                                                        %

                                                    </td>

                                                    <td>

                                                        {

                                                            new Date(

                                                                test.createdAt

                                                            ).toLocaleDateString()

                                                        }

                                                    </td>

                                                </tr>

                                            )

                                        )

                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <div className="modal-footer">

                        <button

                            className="btn btn-secondary"

                            onClick={onClose}

                        >

                            Close

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default UserDetailsModal;