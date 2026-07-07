import {

    FaPlus,

    FaQuestionCircle,

    FaClipboardList,

    FaUsers

} from "react-icons/fa";

function QuickActions({

    onAddQuestion,

    onManageQuestions,

    onManageMockTests,

    onViewUsers

}) {

    return (

        <div className="card shadow border-0 rounded-4 mt-4">

            <div className="card-body">

                <h4 className="fw-bold mb-4">

                    ⚡ Quick Actions

                </h4>

                <div className="row g-3">

                    <div className="col-md-6 col-lg-3">

                        <button

                            className="btn btn-primary w-100 py-4"

                            onClick={onAddQuestion}

                        >

                            <FaPlus

                                size={28}

                                className="mb-2"

                            />

                            <br />

                            <strong>

                                Add Question

                            </strong>

                        </button>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <button

                            className="btn btn-success w-100 py-4"

                            onClick={onManageQuestions}

                        >

                            <FaQuestionCircle

                                size={28}

                                className="mb-2"

                            />

                            <br />

                            <strong>

                                Manage Questions

                            </strong>

                        </button>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <button

                            className="btn btn-warning w-100 py-4"

                            onClick={onManageMockTests}

                        >

                            <FaClipboardList

                                size={28}

                                className="mb-2"

                            />

                            <br />

                            <strong>

                                Manage Mock Tests

                            </strong>

                        </button>

                    </div>

                    <div className="col-md-6 col-lg-3">

                        <button

                            className="btn btn-danger w-100 py-4"

                            onClick={onViewUsers}

                        >

                            <FaUsers

                                size={28}

                                className="mb-2"

                            />

                            <br />

                            <strong>

                                View Users

                            </strong>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default QuickActions;