import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">

            <div className="container">

                <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">

                    🚀 ExamBooster

                </Link>

                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#nav"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="nav">

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">

                            <Link className="nav-link" to="/">Home</Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/">Features</Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/">Exams</Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/login">

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

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;