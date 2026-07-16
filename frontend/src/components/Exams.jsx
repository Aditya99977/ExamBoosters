import { Landmark } from "lucide-react";

function Exams() {

    const exams = [
        "IBPS Clerk",
        "IBPS PO",
        "SBI Clerk",
        "SBI PO",
        "SSC CGL",
        "SSC CHSL",
        "RRB NTPC",
        "RRB Group D",
    ];

    return (

        <section
            style={{
                background: "#0B1020",
                padding: "10px 0",
            }}
        >

            <div className="container text-center">

                <span
                    style={{
                        color: "#60A5FA",
                        textTransform: "uppercase",
                        letterSpacing: "1.2px",
                        fontWeight: 600,
                        fontSize: ".95rem",
                    }}
                >
                    Supported Exams
                </span>

                <h2
                    className="fw-bold mt-3"
                    style={{
                        color: "#F8FAFC",
                        fontSize: "clamp(2.2rem,4vw,3rem)",
                    }}
                >
                    Prepare for India's Most Popular
                    <br />
                    Government Exams
                </h2>

                <p
                    className="mx-auto mt-3 mb-5"
                    style={{
                        color: "#CBD5E1",
                        maxWidth: "650px",
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                    }}
                >
                    Practice exam-specific questions, AI-powered explanations,
                    and full-length mock tests tailored for your target exam.
                </p>

                <div className="d-flex justify-content-center flex-wrap gap-3">

                    {exams.map((exam, index) => (

                        <div
                            key={index}
                            className="d-flex align-items-center"
                            style={{
                                background: "#151F36",
                                border: "1px solid rgba(255,255,255,.05)",
                                borderRadius: "999px",
                                color: "#F8FAFC",
                                padding: "14px 22px",
                                transition: ".3s",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor =
                                    "rgba(96,165,250,.35)";
                                e.currentTarget.style.background = "#18233D";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor =
                                    "rgba(255,255,255,.05)";
                                e.currentTarget.style.background = "#151F36";
                            }}
                        >
                            <Landmark
                                size={16}
                                color="#60A5FA"
                                style={{ marginRight: "10px" }}
                            />

                            <span
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                {exam}
                            </span>

                        </div>

                    ))}

                </div>

                <p
                    className="mt-5 mb-0"
                    style={{
                        color: "#94A3B8",
                        fontSize: ".95rem",
                    }}
                >
                    More government exams will be added regularly.
                </p>

            </div>

        </section>

    );

}

export default Exams;