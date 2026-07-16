function FeatureCard({ icon: Icon, title, description }) {

    return (
        <div className="col-lg-3 col-md-6">

            <div
                className="feature-card h-100"
                style={{
                    background: "#151F36",
                    border: "1px solid rgba(255,255,255,.05)",
                    borderRadius: "12px",
                    padding: "34px 28px",
                    transition: ".35s ease",
                    position: "relative",
                    overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(96,165,250,.22)";
                    e.currentTarget.style.background = "#18233d";
                    e.currentTarget.querySelector(".accent").style.width = "58px";
                    e.currentTarget.querySelector(".learn").style.opacity = "1";
                    e.currentTarget.querySelector(".learn").style.transform = "translateY(0)";
                    e.currentTarget.querySelector(".icon-wrap").style.boxShadow =
                        "0 0 24px rgba(59,130,246,.30)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.05)";
                    e.currentTarget.style.background = "#151F36";
                    e.currentTarget.querySelector(".accent").style.width = "36px";
                    e.currentTarget.querySelector(".learn").style.opacity = "0";
                    e.currentTarget.querySelector(".learn").style.transform = "translateY(8px)";
                    e.currentTarget.querySelector(".icon-wrap").style.boxShadow =
                        "0 0 15px rgba(59,130,246,.12)";
                }}
            >
                <div
                    className="accent mb-4"
                    style={{
                        width: "36px",
                        height: "3px",
                        borderRadius: "999px",
                        background: "linear-gradient(90deg,#60A5FA,#3B82F6)",
                        transition: ".3s",
                    }}
                />

                <div
                    className="icon-wrap d-inline-flex align-items-center justify-content-center mb-4"
                    style={{
                        width: "58px",
                        height: "58px",
                        borderRadius: "50%",
                        background: "rgba(59,130,246,.10)",
                        border: "1px solid rgba(96,165,250,.15)",
                        boxShadow: "0 0 15px rgba(59,130,246,.12)",
                        transition: ".3s",
                    }}
                >
                    <Icon size={26} color="#60A5FA" />
                </div>

                <h4
                    className="fw-bold mb-3"
                    style={{
                        color: "#F8FAFC",
                        fontSize: "1.45rem",
                    }}
                >
                    {title}
                </h4>

                <p
                    style={{
                        color: "#CBD5E1",
                        lineHeight: 1.8,
                        minHeight: "86px",
                    }}
                >
                    {description}
                </p>

                <div
                    className="learn"
                    style={{
                        color: "#60A5FA",
                        fontWeight: 600,
                        opacity: 0,
                        transform: "translateY(8px)",
                        transition: ".3s",
                    }}
                >
                    Learn More →
                </div>

            </div>

        </div>
    );
}

export default FeatureCard;
