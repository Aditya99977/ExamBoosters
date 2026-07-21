import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function CTA() {
    return (
        <section
            style={{
                background: "#0B1020",
                padding: "10px 0",
            }}
        >
            <div className="container">

                <div
                    className="text-center mx-auto"
                    style={{
                        maxWidth: "980px",
                        background:
                            "linear-gradient(135deg,#1D4ED8 0%, #2563EB 45%, #3B82F6 100%)",
                        borderRadius: "24px",
                        padding: "70px 50px",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow:
                            "0 30px 80px rgba(37,99,235,.30)",
                    }}
                >

                    {/* Background Glow */}

                    <div
                        style={{
                            position: "absolute",
                            width: "420px",
                            height: "420px",
                            borderRadius: "50%",
                            background:
                                "rgba(255,255,255,.08)",
                            filter: "blur(120px)",
                            top: "-180px",
                            right: "-120px",
                        }}
                    />

                    <div
                        style={{
                            position: "relative",
                            zIndex: 2,
                        }}
                    >

                        <span
                            style={{
                                display: "inline-block",
                                background:
                                    "rgba(255,255,255,.15)",
                                border:
                                    "1px solid rgba(255,255,255,.18)",
                                color: "#fff",
                                padding: "8px 18px",
                                borderRadius: "999px",
                                fontSize: ".9rem",
                                fontWeight: 600,
                                marginBottom: "22px",
                                letterSpacing: ".5px",
                            }}
                        >
                            🚀 START YOUR LEARNING JOURNEY
                        </span>

                        <h2
                            className="fw-bold"
                            style={{
                                color: "#fff",
                                fontSize: "clamp(2.3rem,4vw,3.5rem)",
                                lineHeight: 1.15,
                                marginBottom: "20px",
                            }}
                        >
                            Ready to Unlock
                            <br />
                            Your Full Potential?
                        </h2>

                        <p
                            className="mx-auto"
                            style={{
                                color: "rgba(255,255,255,.90)",
                                maxWidth: "650px",
                                fontSize: "1.15rem",
                                lineHeight: 1.8,
                                marginBottom: "42px",
                            }}
                        >
                            Join <strong>VNAverse</strong> and experience
                            AI-powered learning, personalized education,
                            realistic mock tests, performance analytics,
                            and intelligent study tools designed to help
                            you achieve your academic and career goals.
                        </p>

                        <Link
                            to="/register"
                            className="btn fw-semibold rounded-pill d-inline-flex align-items-center"
                            style={{
                                background: "#FFFFFF",
                                color: "#1D4ED8",
                                padding: "16px 34px",
                                fontSize: "1.05rem",
                                border: "none",
                                transition: ".3s",
                                boxShadow:
                                    "0 15px 40px rgba(0,0,0,.18)",
                            }}
                        >
                            Join VNAverse

                            <ArrowRight
                                size={20}
                                style={{
                                    marginLeft: "10px",
                                }}
                            />

                        </Link>

                        <div
                            className="d-flex justify-content-center flex-wrap mt-5"
                            style={{
                                gap: "28px",
                            }}
                        >

                            <div
                                className="d-flex align-items-center"
                                style={{
                                    color: "#fff",
                                }}
                            >
                                <CheckCircle2
                                    size={18}
                                    style={{
                                        marginRight: "8px",
                                    }}
                                />
                                Free to Get Started
                            </div>

                            <div
                                className="d-flex align-items-center"
                                style={{
                                    color: "#fff",
                                }}
                            >
                                <CheckCircle2
                                    size={18}
                                    style={{
                                        marginRight: "8px",
                                    }}
                                />
                                Personalized Learning
                            </div>

                            <div
                                className="d-flex align-items-center"
                                style={{
                                    color: "#fff",
                                }}
                            >
                                <CheckCircle2
                                    size={18}
                                    style={{
                                        marginRight: "8px",
                                    }}
                                />
                                AI-Powered Learning
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default CTA;