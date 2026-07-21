import { Sparkles } from "lucide-react";

function AuthCard({
    title,
    subtitle,
    children,
}) {
    return (
        <div className="d-flex justify-content-center">
            <div
                style={{
                    width: "100%",
                    maxWidth: "560px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        background: "rgba(21,31,54,.94)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,.08)",
                        borderRadius: "24px",
                        boxShadow: "0 35px 90px rgba(0,0,0,.50)",
                        overflow: "hidden",
                    }}
                >
                    {/* Top Gradient */}

                    <div
                        style={{
                            height: "5px",
                            background:
                                "linear-gradient(90deg,#2563EB,#60A5FA)",
                        }}
                    />

                    <div className="p-5">

                        {/* Logo */}

                        <div className="text-center">

                            <div
                                className="d-flex justify-content-center mb-3"
                            >
                                <img
                                    src="/logo.png"
                                    alt="VNAverse Logo"
                                    style={{
                                        width: "78px",
                                        height: "78px",
                                        objectFit: "contain",
                                        background: "#FFFFFF",
                                        borderRadius: "18px",
                                        padding: "6px",
                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,.25)",
                                    }}
                                />
                            </div>

                            <h2
                                className="fw-bold mb-0"
                                style={{
                                    color: "#3B82F6",
                                    fontSize: "2rem",
                                }}
                            >
                                VNAverse
                            </h2>

                            <p
                                style={{
                                    color: "#94A3B8",
                                    fontSize: ".95rem",
                                    letterSpacing: ".3px",
                                    marginBottom: "18px",
                                }}
                            >
                                Vision Nexus Academy
                            </p>

                            <h3
                                className="fw-bold"
                                style={{
                                    color: "#FFFFFF",
                                    fontSize: "1.8rem",
                                    marginBottom: "10px",
                                }}
                            >
                                {title}
                            </h3>

                            <p
                                style={{
                                    color: "#94A3B8",
                                    marginBottom: "22px",
                                    fontSize: "1rem",
                                }}
                            >
                                {subtitle}
                            </p>

                        </div>

                        {/* AI Badge */}

                        <div className="d-flex justify-content-center mb-4">

                            <span
                                className="d-flex align-items-center"
                                style={{
                                    background:
                                        "rgba(59,130,246,.10)",
                                    color: "#60A5FA",
                                    padding: "8px 18px",
                                    borderRadius: "999px",
                                    border:
                                        "1px solid rgba(96,165,250,.15)",
                                    fontSize: ".88rem",
                                    fontWeight: 600,
                                }}
                            >
                                <Sparkles
                                    size={15}
                                    style={{
                                        marginRight: "8px",
                                    }}
                                />

                                Powered by AI

                            </span>

                        </div>

                        {children}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AuthCard;