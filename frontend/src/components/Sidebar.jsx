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

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaHome />,
        },
        {
            name: "Practice",
            path: "/practice",
            icon: <FaBook />,
        },
        {
            name: "Mock Tests",
            path: "/mock-tests",
            icon: <FaClipboardList />,
        },
        {
            name: "Previous Year Papers",
            path: "/previous-year-papers",
            icon: <FaFilePdf />,
        },
        {
            name: "Performance",
            path: "/performance",
            icon: <FaChartBar />,
        },
        {
            name: "AI Tutor",
            icon: <FaRobot />,
            disabled: true,
        },
        {
            name: "Profile",
            path: "/profile",
            icon: <FaUser />,
        },
    ];

    return (
        <aside
            className="position-fixed d-flex flex-column"
            style={{
                width: "270px",
                height: "100vh",
                background: "#0F172A",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                padding: "28px 20px",
            }}
        >
            {/* Brand */}

            <div className="mb-5">
                <div
                    className="d-flex align-items-center"
                    style={{ gap: "14px" }}
                >
                    <img
                        src="/logo.png"
                        alt="VNAverse Logo"
                        style={{
                            width: "52px",
                            height: "52px",
                            objectFit: "contain",
                            borderRadius: "14px",
                            background: "#ffffff",
                            padding: "4px",
                        }}
                    />

                    <div>
                        <h4
                            className="text-white fw-bold mb-0"
                            style={{
                                letterSpacing: ".4px",
                                fontSize: "1.35rem",
                            }}
                        >
                            VNAverse
                        </h4>

                        <small
                            style={{
                                color: "#94A3B8",
                                fontSize: "12px",
                                letterSpacing: ".5px",
                            }}
                        >
                            Vision Nexus Academy
                        </small>
                    </div>
                </div>
            </div>

            {/* Navigation */}

            <div
                className="d-flex flex-column"
                style={{
                    gap: "8px",
                    flex: 1,
                }}
            >
                {menuItems.map((item) =>
                    item.disabled ? (
                        <div
                            key={item.name}
                            style={{
                                color: "#64748B",
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                padding: "14px 16px",
                                borderRadius: "16px",
                                background: "rgba(255,255,255,0.03)",
                                border:
                                    "1px solid rgba(255,255,255,0.05)",
                                cursor: "not-allowed",
                                position: "relative",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "16px",
                                    width: "18px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </span>

                            <span>{item.name}</span>

                            <span
                                style={{
                                    marginLeft: "auto",
                                    background: "#F59E0B",
                                    color: "#fff",
                                    fontSize: ".65rem",
                                    padding: "3px 8px",
                                    borderRadius: "999px",
                                    fontWeight: "600",
                                }}
                            >
                                Soon
                            </span>
                        </div>
                    ) : (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            style={({ isActive }) => ({
                                textDecoration: "none",
                                color: isActive
                                    ? "#ffffff"
                                    : "#CBD5E1",
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                padding: "14px 16px",
                                borderRadius: "16px",
                                background: isActive
                                    ? "linear-gradient(135deg,#2563EB,#3B82F6)"
                                    : "transparent",
                                border: isActive
                                    ? "1px solid rgba(255,255,255,0.08)"
                                    : "1px solid transparent",
                                fontWeight: isActive ? "600" : "500",
                                transition: "all .25s ease",
                            })}
                        >
                            <span
                                style={{
                                    fontSize: "16px",
                                    width: "18px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </span>

                            <span>{item.name}</span>
                        </NavLink>
                    )
                )}
            </div>

            {/* Logout */}

            <button
                onClick={handleLogout}
                className="btn text-white mt-4"
                style={{
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontWeight: "600",
                    transition: ".25s",
                }}
            >
                <FaSignOutAlt />

                Logout
            </button>
        </aside>
    );
}

export default Sidebar;