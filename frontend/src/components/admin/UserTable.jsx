import { useMemo, useState } from "react";

function UserTable({

    users = [],

    onView,

    onDelete

}) {

    const [search, setSearch] = useState("");

    /*
    =====================================
    Search Filter
    =====================================
    */

    const filteredUsers = useMemo(() => {

        return users.filter((user) => {

            const keyword = search.toLowerCase();

            return (

                user.name.toLowerCase().includes(keyword)

                ||

                user.email.toLowerCase().includes(keyword)

            );

        });

    }, [users, search]);

    return (

        <div className="card shadow-sm mt-4">

            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">

                <h5 className="mb-0">

                    👥 User Management

                </h5>

                <input

                    type="text"

                    className="form-control w-25"

                    placeholder="Search User..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                />

            </div>

            <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                    <thead className="table-light">

                        <tr>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Role</th>

                            <th>Exam</th>

                            <th>Tests</th>

                            <th>Avg Score</th>

                            <th>Highest</th>

                            <th>Joined</th>

                            <th width="170">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filteredUsers.length === 0 && (

                                <tr>

                                    <td

                                        colSpan="9"

                                        className="text-center py-4"

                                    >

                                        No users found.

                                    </td>

                                </tr>

                            )

                        }

                        {

                            filteredUsers.map((user) => (

                                <tr key={user._id}>

                                    <td>

                                        {user.name}

                                    </td>

                                    <td>

                                        {user.email}

                                    </td>

                                    <td>

                                        <span className={`badge ${

                                            user.role === "admin"

                                                ? "bg-danger"

                                                : "bg-success"

                                        }`}>

                                            {user.role}

                                        </span>

                                    </td>

                                    <td>

                                        {user.examTarget}

                                    </td>

                                    <td>

                                        {user.totalTests}

                                    </td>

                                    <td>

                                        {user.averageScore}

                                    </td>

                                    <td>

                                        {user.highestScore}

                                    </td>

                                    <td>

                                        {

                                            new Date(

                                                user.createdAt

                                            ).toLocaleDateString()

                                        }

                                    </td>

                                    <td>

                                        <button

                                            className="btn btn-sm btn-primary me-2"

                                            onClick={() =>

                                                onView(user)

                                            }

                                        >

                                            View

                                        </button>

                                        {

                                            user.role !== "admin" && (

                                                <button

                                                    className="btn btn-sm btn-danger"

                                                    onClick={() =>

                                                        onDelete(user)

                                                    }

                                                >

                                                    Delete

                                                </button>

                                            )

                                        }

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default UserTable;