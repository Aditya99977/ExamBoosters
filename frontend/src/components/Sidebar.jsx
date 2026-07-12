import { NavLink, useNavigate } from "react-router-dom";

import {
    FaHome,
    FaBook,
    FaClipboardList,
    FaChartBar,
    FaUser,
    FaSignOutAlt,
    FaFilePdf,
    FaRobot,
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

        backgroundColor: isActive
            ? "rgba(255,255,255,0.2)"
            : "transparent",

        transition: "0.3s"

    });

    const menuItems = [

        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome className="me-2" />
        },

        {
            name: "Practice",
            path: "/practice",
            icon: <FaBook className="me-2" />
        },

        {
            name: "Mock Tests",
            path: "/mock-tests",
            icon: <FaClipboardList className="me-2" />
        },

        {
            name: "Previous Year Papers",
            path: "/previous-year-papers",
            icon: <FaFilePdf className="me-2" />
        },

        {
            name: "Performance",
            path: "/performance",
            icon: <FaChartBar className="me-2" />
        },

        {
            name: "AI Tutor",
            path: "/ai-tutor",
            icon: <FaRobot className="me-2" />
        },

        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser className="me-2" />
        }

    ];

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

                {menuItems.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={linkStyle}
                    >

                        {item.icon}

                        {item.name}

                    </NavLink>

                ))}

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