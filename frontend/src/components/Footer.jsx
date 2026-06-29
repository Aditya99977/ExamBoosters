import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {

    return (

        <footer className="bg-dark text-white pt-5 pb-3">

            <div className="container">

                <div className="row">

                    <div className="col-lg-4 mb-4">

                        <h3 className="fw-bold text-primary">

                            🚀 ExamBooster

                        </h3>

                        <p>

                            AI-powered Government Exam Preparation Platform
                            helping students prepare smarter.

                        </p>

                    </div>

                    <div className="col-lg-4 mb-4">

                        <h5>Quick Links</h5>

                        <ul className="list-unstyled">

                            <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>

                            <li><Link className="text-white text-decoration-none" to="/login">Login</Link></li>

                            <li><Link className="text-white text-decoration-none" to="/register">Register</Link></li>

                        </ul>

                    </div>

                    <div className="col-lg-4 mb-4">

                        <h5>Connect</h5>

                        <p><FaEnvelope /> support@exambooster.in</p>

                        <div className="fs-3">

                            <FaGithub className="me-3" />

                            <FaLinkedin />

                        </div>

                    </div>

                </div>

                <hr />

                <p className="text-center mb-0">

                    © 2026 ExamBooster | Built by Aditya Thakur

                </p>

            </div>

        </footer>

    );

}

export default Footer;