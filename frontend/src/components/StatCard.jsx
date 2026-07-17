function StatCard({

    title,

    value,

    subtitle,

    icon,

    color

}) {

    return (

        <div className="col-xl-3 col-md-6 mb-4">

            <div
                className="h-100 rounded-4 position-relative overflow-hidden"
                style={{
                    background: "#111827",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "all .25s ease",
                    boxShadow: "0 10px 30px rgba(0,0,0,.18)",
                }}
            >

                {/* Decorative Glow */}

                <div
                    style={{
                        position: "absolute",
                        width: "120px",
                        height: "120px",
                        top: "-45px",
                        right: "-45px",
                        borderRadius: "50%",
                        background: "rgba(59,130,246,.12)",
                        filter: "blur(10px)",
                    }}
                />

                <div className="p-4 position-relative">

                    <div className="d-flex justify-content-between align-items-start">

                        <div>

                            <p
                                className="mb-2"
                                style={{
                                    color: "#94A3B8",
                                    fontSize: ".95rem",
                                    fontWeight: 500,
                                }}
                            >
                                {title}
                            </p>

                            <h2
                                className="fw-bold text-white mb-2"
                                style={{
                                    fontSize: "2.2rem",
                                }}
                            >
                                {value}
                            </h2>

                            <span
                                style={{
                                    color,
                                    fontWeight: 600,
                                    fontSize: ".92rem",
                                }}
                            >
                                {subtitle}
                            </span>

                        </div>

                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "18px",
                                background:
                                    "linear-gradient(135deg,#2563EB,#3B82F6)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontSize: "24px",
                                flexShrink: 0,
                                boxShadow:
                                    "0 12px 24px rgba(37,99,235,.30)",
                            }}
                        >
                            {icon}
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StatCard;