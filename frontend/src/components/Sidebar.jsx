import { NavLink, useNavigate } from "react-router-dom";

import {

    FaHome,

    FaBook,

    FaClipboardList,

    FaChartBar,

    FaUser,

    FaSignOutAlt

} from "react-icons/fa";

function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    const linkStyle = ({ isActive }) => ({

        color: "white",

        textDecoration: "none",

        padding: "10px 15px",

        borderRadius: "8px",

        backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",

        transition: "0.3s"

    });

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

                <NavLink
                    to="/dashboard"
                    style={linkStyle}
                >

                    <FaHome className="me-2" />

                    Dashboard

                </NavLink>

                <NavLink
                    to="/practice"
                    style={linkStyle}
                >

                    <FaBook className="me-2" />

                    Practice

                </NavLink>

                <NavLink
                    to="/mock-tests"
                    style={linkStyle}
                >

                    <FaClipboardList className="me-2" />

                    Mock Tests

                </NavLink>

                <NavLink
                    to="/performance"
                    style={linkStyle}
                >

                    <FaChartBar className="me-2" />

                    Performance

                </NavLink>

                <NavLink
                    to="/profile"
                    style={linkStyle}
                >

                    <FaUser className="me-2" />

                    Profile

                </NavLink>

                <button
                    className="btn btn-outline-light mt-5 text-start"
                    onClick={handleLogout}
                >

                    <FaSignOutAlt className="me-2" />

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Sidebar;