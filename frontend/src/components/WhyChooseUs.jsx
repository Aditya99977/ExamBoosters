import {
    ShieldCheck,
    Bot,
    BarChart3,
    Clock3,
    CheckCircle2,
} from "lucide-react";

function WhyChooseUs() {

    const reasons = [
        {
            icon: ShieldCheck,
            title: "Trusted Platform",
            description:
                "Curated exam-focused questions reviewed for quality and relevance.",
        },
        {
            icon: Bot,
            title: "AI-Powered Learning",
            description:
                "Get instant explanations and personalized guidance while studying.",
        },
        {
            icon: BarChart3,
            title: "Performance Analytics",
            description:
                "Track your strengths, weak areas and overall improvement in one place.",
        },
        {
            icon: Clock3,
            title: "Study Anytime",
            description:
                "Practice whenever you want with a seamless experience across devices.",
        },
    ];

    return (
        <section
            style={{
                background: "#0B1020",
                padding: "90px 0",
            }}
        >
            <div className="container">

                <div className="row align-items-center g-5">

                    {/* Left Side */}

                    <div className="col-lg-5">

                        <span
                            style={{
                                color: "#60A5FA",
                                textTransform: "uppercase",
                                letterSpacing: "1.3px",
                                fontWeight: 600,
                                fontSize: ".95rem",
                            }}
                        >
                            Why Choose Us
                        </span>

                        <h2
                            className="fw-bold mt-3"
                            style={{
                                color: "#F8FAFC",
                                fontSize: "clamp(2.3rem,4vw,3.2rem)",
                                lineHeight: 1.2,
                            }}
                        >
                            Prepare Smarter.
                            <br />
                            Achieve Faster.
                        </h2>

                        <p
                            className="mt-4"
                            style={{
                                color: "#CBD5E1",
                                fontSize: "1.08rem",
                                lineHeight: 1.9,
                                maxWidth: "500px",
                            }}
                        >
                            ExamBooster combines quality practice questions,
                            AI-powered learning, mock tests, and detailed
                            analytics into one modern platform built for
                            ambitious government exam aspirants.
                        </p>

                    </div>

                    {/* Right Side */}

                    <div className="col-lg-7">

                        {reasons.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="d-flex align-items-start mb-4"
                                    style={{
                                        background: "#151F36",
                                        border: "1px solid rgba(255,255,255,.05)",
                                        borderRadius: "12px",
                                        padding: "24px",
                                        transition: ".3s ease",
                                    }}
                                    onMouseEnter={(e) => {

                                        e.currentTarget.style.borderColor =
                                            "rgba(96,165,250,.25)";

                                        e.currentTarget.style.background =
                                            "#18233D";

                                        e.currentTarget.style.transform =
                                            "translateX(6px)";

                                    }}
                                    onMouseLeave={(e) => {

                                        e.currentTarget.style.borderColor =
                                            "rgba(255,255,255,.05)";

                                        e.currentTarget.style.background =
                                            "#151F36";

                                        e.currentTarget.style.transform =
                                            "translateX(0)";

                                    }}
                                >

                                    <div
                                        className="d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{
                                            width: "58px",
                                            height: "58px",
                                            borderRadius: "50%",
                                            background:
                                                "rgba(59,130,246,.10)",
                                            border:
                                                "1px solid rgba(96,165,250,.15)",
                                            marginRight: "20px",
                                        }}
                                    >

                                        <Icon
                                            size={26}
                                            color="#60A5FA"
                                        />

                                    </div>

                                    <div className="flex-grow-1">

                                        <div className="d-flex align-items-center mb-2">

                                            <CheckCircle2
                                                size={18}
                                                color="#60A5FA"
                                                style={{
                                                    marginRight: "8px",
                                                }}
                                            />

                                            <h5
                                                className="fw-bold mb-0"
                                                style={{
                                                    color: "#F8FAFC",
                                                }}
                                            >
                                                {item.title}
                                            </h5>

                                        </div>

                                        <p
                                            className="mb-0"
                                            style={{
                                                color: "#CBD5E1",
                                                lineHeight: 1.8,
                                            }}
                                        >
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );

}

export default WhyChooseUs;