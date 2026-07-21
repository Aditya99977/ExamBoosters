import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top border-bottom">
            <div className="container">

                {/* Logo */}
                <Link
                    className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4 text-dark"
                    to="/"
                >
                    <img
                        src="/logo.png"
                        alt="VNAverse Logo"
                        width="42"
                        height="42"
                        className="rounded-circle"
                    />

                    <div className="d-flex flex-column lh-1">
                        <span className="fw-bold text-primary">
                            VNAverse
                        </span>

                        <small
                            className="text-muted fw-normal"
                            style={{ fontSize: "11px" }}
                        >
                            Vision Nexus Academy
                        </small>
                    </div>
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                    aria-controls="nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div
                    className="collapse navbar-collapse"
                    id="nav"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        {/* Public Navigation */}

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Features
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Exams
                            </Link>
                        </li>

                        {!user ? (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item ms-lg-3">
                                    <Link
                                        className="btn btn-primary rounded-pill px-4"
                                        to="/register"
                                    >
                                        Get Started
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                {/* Student Navigation */}

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/practice"
                                    >
                                        Practice
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/mock-tests"
                                    >
                                        Mock Tests
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/previous-year-papers"
                                    >
                                        Previous Papers
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/performance"
                                    >
                                        Performance
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                </li>

                                <li className="nav-item ms-lg-3">
                                    <button
                                        className="btn btn-danger rounded-pill px-4"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;