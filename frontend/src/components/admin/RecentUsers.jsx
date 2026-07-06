import { FaUserCircle } from "react-icons/fa";

function RecentUsers({

    users = []

}) {

    return (

        <div className="card shadow border-0 rounded-4 mt-4">

            <div className="card-body">

                <h4 className="fw-bold mb-4">

                    👥 Recent Users

                </h4>

                {

                    users.length === 0 ? (

                        <div className="text-center text-muted py-4">

                            No users found.

                        </div>

                    ) : (

                        <div className="table-responsive">

                            <table className="table table-hover align-middle">

                                <thead className="table-dark">

                                    <tr>

                                        <th>#</th>

                                        <th>User</th>

                                        <th>Email</th>

                                        <th>Exam Target</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        users.map((user, index) => (

                                            <tr key={user._id}>

                                                <td>

                                                    {index + 1}

                                                </td>

                                                <td>

                                                    <FaUserCircle className="me-2" />

                                                    {user.name}

                                                </td>

                                                <td>

                                                    {user.email}

                                                </td>

                                                <td>

                                                    {user.examTarget || "N/A"}

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

export default RecentUsers;