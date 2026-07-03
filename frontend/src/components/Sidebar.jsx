import { Link } from "react-router-dom";

import {

    FaHome,

    FaBook,

    FaClipboardList,

    FaChartBar,

    FaUser,

    FaSignOutAlt

} from "react-icons/fa";

function Sidebar() {

    return (

        <div
            className="bg-primary text-white position-fixed"
            style={{
                width: "260px",
                height: "100vh",
                padding: "30px"
            }}
        >

            <h3 className="fw-bold mb-5">

                🚀 ExamBooster

            </h3>

            <div className="d-flex flex-column gap-3">

                <Link
                    className="text-white text-decoration-none"
                    to="/dashboard"
                >

                    <FaHome className="me-2" />

                    Dashboard

                </Link>

                <Link
                    className="text-white text-decoration-none"
                    to="/practice"
                >

                    <FaBook className="me-2" />

                    Practice

                </Link>

                <Link
                    className="text-white text-decoration-none"
                    to="/mock-tests"
                >

                    <FaClipboardList className="me-2" />

                    Mock Tests

                </Link>

                <Link
                    className="text-white text-decoration-none"
                    to="/performance"
                >

                    <FaChartBar className="me-2" />

                    Performance

                </Link>

                <Link
                    className="text-white text-decoration-none"
                    to="/profile"
                >

                    <FaUser className="me-2" />

                    Profile

                </Link>

                <Link
                    className="text-white text-decoration-none mt-5"
                    to="/"
                >

                    <FaSignOutAlt className="me-2" />

                    Logout

                </Link>

            </div>

        </div>

    );

}

export default Sidebar;