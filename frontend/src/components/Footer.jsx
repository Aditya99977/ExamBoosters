import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer
            style={{
                background: "#111827",
                color: "#F8FAFC",
                paddingTop: "10px",
                paddingBottom: "30px",
            }}
        >
            <div className="container">
                <div className="row gy-5">

                    <div className="col-lg-5">
                        <h2
                            className="fw-bold mb-3"
                            style={{ color: "#3B82F6" }}
                        >
                            🚀 ExamBooster
                        </h2>

                        <p
                            style={{
                                color: "#CBD5E1",
                                lineHeight: 1.8,
                                maxWidth: "430px",
                            }}
                        >
                            AI-powered Government Exam Preparation Platform
                            helping aspirants prepare smarter with AI learning,
                            realistic mock tests, detailed analytics and
                            thousands of quality practice questions.
                        </p>
                    </div>

                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-3" style={{ color: "#F8FAFC" }}>
                            Quick Links
                        </h5>

                        <div
                            style={{
                                width: "42px",
                                height: "3px",
                                borderRadius: "999px",
                                background: "#3B82F6",
                                marginBottom: "20px",
                            }}
                        />

                        <div className="d-flex flex-column gap-3">
                            <Link to="/" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                                Home
                            </Link>

                            <Link to="/login" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                                Login
                            </Link>

                            <Link to="/register" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                                Register
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3" style={{ color: "#F8FAFC" }}>
                            Connect
                        </h5>

                        <div
                            style={{
                                width: "42px",
                                height: "3px",
                                borderRadius: "999px",
                                background: "#3B82F6",
                                marginBottom: "20px",
                            }}
                        />

                        <div
                            className="d-flex align-items-center mb-4"
                            style={{ color: "#CBD5E1" }}
                        >
                            <Mail size={18} color="#60A5FA" />
                            <span style={{ marginLeft: "12px" }}>
                                support@exambooster.in
                            </span>
                        </div>

                        <div className="d-flex gap-3">

                            <a
                                href="https://github.com/Aditya99977"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    background: "#151F36",
                                    border: "1px solid rgba(255,255,255,.06)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#60A5FA",
                                    textDecoration: "none",
                                    transition: ".3s",
                                }}
                            >
                                <FaGithub size={22} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aditya-thakur-67745141a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    background: "#151F36",
                                    border: "1px solid rgba(255,255,255,.06)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#60A5FA",
                                    textDecoration: "none",
                                    transition: ".3s",
                                }}
                            >
                                <FaLinkedin size={22} />
                            </a>

                        </div>
                    </div>

                </div>

                <hr
                    style={{
                        marginTop: "60px",
                        marginBottom: "25px",
                        borderColor: "rgba(255,255,255,.08)",
                    }}
                />

                <div
                    className="d-flex flex-column flex-md-row justify-content-between align-items-center"
                    style={{
                        color: "#94A3B8",
                        fontSize: ".95rem",
                    }}
                >
                    <p className="mb-2 mb-md-0">
                        © 2026 ExamBooster. All rights reserved.
                    </p>

                    <p className="mb-0 d-flex align-items-center">
                        Built with ❤️ by Aditya Thakur
                        <ArrowUpRight size={16} style={{ marginLeft: "6px" }} />
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
