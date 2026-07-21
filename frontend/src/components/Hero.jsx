import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="position-relative overflow-hidden d-flex align-items-center"
            style={{
                minHeight: "90vh",
                background:
                    "radial-gradient(circle at 15% 20%, rgba(59,130,246,.22), transparent 32%), radial-gradient(circle at 85% 80%, rgba(96,165,250,.16), transparent 30%), linear-gradient(135deg,#0B1020 0%,#0F172A 45%,#111827 100%)",
            }}
        >
            {/* Top Glow */}
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: "520px",
                    height: "520px",
                    top: "-120px",
                    left: "-120px",
                    background: "rgba(59,130,246,.25)",
                    filter: "blur(170px)",
                }}
            />

            {/* Bottom Glow */}
            <div
                className="position-absolute rounded-circle"
                style={{
                    width: "420px",
                    height: "420px",
                    bottom: "-120px",
                    right: "-120px",
                    background: "rgba(96,165,250,.18)",
                    filter: "blur(170px)",
                }}
            />

            <div
                className="mx-auto position-relative"
                style={{
                    maxWidth: "1550px",
                    width: "100%",
                    padding: "0 70px",
                    zIndex: 2,
                }}
            >
                <div
                    className="row align-items-center"
                    style={{
                        columnGap: "20px",
                    }}
                >
                    {/* Left Content */}
                    <div className="col-lg-5">

                        <span
                            className="badge rounded-pill px-4 py-2 mb-4"
                            style={{
                                background: "rgba(59,130,246,.12)",
                                border: "1px solid rgba(96,165,250,.25)",
                                color: "#60A5FA",
                                fontSize: ".95rem",
                                fontWeight: 500,
                            }}
                        >
                            🚀 AI-Powered Learning Ecosystem
                        </span>

                        <h1
                            className="fw-bold mb-4"
                            style={{
                                color: "#F8FAFC",
                                fontSize: "clamp(3.6rem,5vw,4.6rem)",
                                lineHeight: 1.12,
                                letterSpacing: "-2px",
                            }}
                        >
                            Learn Smarter.
                            <br />

                            Grow Faster.

                            <span
                                style={{
                                    display: "block",
                                    marginTop: "8px",
                                    background:
                                        "linear-gradient(90deg,#60A5FA,#3B82F6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Unlock Your Full Potential
                            </span>
                        </h1>

                        <p
                            style={{
                                color: "#CBD5E1",
                                fontSize: "1.18rem",
                                lineHeight: 1.9,
                                maxWidth: "650px",
                            }}
                        >
                            <strong style={{ color: "#FFFFFF" }}>
                                VNAverse
                            </strong>{" "}
                            (Vision Nexus Academy) is an AI-powered learning
                            ecosystem that empowers students, professionals,
                            and competitive exam aspirants through intelligent
                            practice, personalized learning, realistic mock
                            tests, performance analytics, and AI-driven
                            educational experiences designed to unlock every
                            learner's full potential.
                        </p>

                        <div className="d-flex gap-3 flex-wrap mt-5">

                            <Link
                                to="/register"
                                className="btn rounded-pill fw-semibold"
                                style={{
                                    padding: "16px 42px",
                                    background:
                                        "linear-gradient(135deg,#2563EB,#4F8CFF)",
                                    color: "#fff",
                                    border: "none",
                                    boxShadow:
                                        "0 18px 45px rgba(59,130,246,.35)",
                                }}
                            >
                                Start Learning
                            </Link>

                            <Link
                                to="/login"
                                className="btn rounded-pill fw-semibold"
                                style={{
                                    padding: "16px 42px",
                                    background: "transparent",
                                    color: "#F8FAFC",
                                    border:
                                        "1px solid rgba(96,165,250,.35)",
                                }}
                            >
                                Login
                            </Link>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="col-lg-6 ms-lg-auto">

                        <div
                            style={{
                                background: "#151F36",
                                padding: "16px",
                                borderRadius: "32px",
                                border:
                                    "1px solid rgba(255,255,255,.08)",
                                boxShadow:
                                    "0 40px 100px rgba(0,0,0,.45)",
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400"
                                alt="Students learning with VNAverse"
                                className="img-fluid w-100"
                                style={{
                                    borderRadius: "22px",
                                    aspectRatio: "16 / 10",
                                    objectFit: "cover",
                                }}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;