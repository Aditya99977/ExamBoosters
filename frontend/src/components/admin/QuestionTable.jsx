import { FaEdit, FaTrash } from "react-icons/fa";

function QuestionTable({

    questions = []

}) {

    return (

        <div className="card shadow border-0 rounded-4 mt-4">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h4 className="fw-bold">

                        📚 Question Bank

                    </h4>

                    <input

                        type="text"

                        className="form-control"

                        placeholder="Search Questions..."

                        style={{

                            width: "300px"

                        }}

                    />

                </div>

                <div className="table-responsive">

                    <table className="table table-hover align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>#</th>

                                <th>Question</th>

                                <th>Subject</th>

                                <th>Difficulty</th>

                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                questions.length === 0 ? (

                                    <tr>

                                        <td

                                            colSpan="5"

                                            className="text-center"

                                        >

                                            No questions found.

                                        </td>

                                    </tr>

                                ) : (

                                    questions.map(

                                        (question, index) => (

                                            <tr key={question._id}>

                                                <td>

                                                    {index + 1}

                                                </td>

                                                <td>

                                                    {question.question}

                                                </td>

                                                <td>

                                                    {question.subject}

                                                </td>

                                                <td>

                                                    {question.difficulty}

                                                </td>

                                                <td>

                                                    <button

                                                        className="btn btn-warning btn-sm me-2"

                                                    >

                                                        <FaEdit />

                                                    </button>

                                                    <button

                                                        className="btn btn-danger btn-sm"

                                                    >

                                                        <FaTrash />

                                                    </button>

                                                </td>

                                            </tr>

                                        )

                                    )

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default QuestionTable;