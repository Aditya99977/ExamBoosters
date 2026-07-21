import {
    BookOpen,
    ClipboardCheck,
    Brain,
    Users,
} from "lucide-react";

function Stats() {

    const stats = [
        {
            number: "10,000+",
            title: "Learning Resources",
            icon: BookOpen,
        },
        {
            number: "500+",
            title: "Practice Tests",
            icon: ClipboardCheck,
        },
        {
            number: "AI",
            title: "Powered Learning",
            icon: Brain,
        },
        {
            number: "50,000+",
            title: "Future Learners",
            icon: Users,
        },
    ];

    return (
        <section
            style={{
                background: "#0B1020",
                padding: "50px 0 70px",
            }}
        >
            <div className="container">

                <div className="text-center mb-5">

                    <span
                        style={{
                            color: "#60A5FA",
                            fontSize: ".9rem",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            fontWeight: 600,
                        }}
                    >
                        Trusted by Future Learners
                    </span>

                </div>

                <div
                    style={{
                        background: "#151F36",
                        border: "1px solid rgba(255,255,255,.05)",
                        borderRadius: "12px",
                        overflow: "hidden",
                    }}
                >

                    <div className="row g-0">

                        {stats.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    className="col-lg-3 col-md-6"
                                    key={index}
                                >

                                    <div
                                        className="stat-item text-center h-100"
                                        style={{
                                            padding: "36px 28px",
                                            borderRight:
                                                index !== stats.length - 1
                                                    ? "1px solid rgba(255,255,255,.03)"
                                                    : "none",
                                            transition: "all .3s ease",
                                            cursor: "default",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background =
                                                "rgba(59,130,246,.035)";

                                            const accent =
                                                e.currentTarget.querySelector(".accent");

                                            const num =
                                                e.currentTarget.querySelector(".stat-number");

                                            const iconWrap =
                                                e.currentTarget.querySelector(".icon-wrap");

                                            if (accent)
                                                accent.style.width = "56px";

                                            if (num)
                                                num.style.transform = "scale(1.04)";

                                            if (iconWrap)
                                                iconWrap.style.boxShadow =
                                                    "0 0 25px rgba(59,130,246,.30)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background =
                                                "transparent";

                                            const accent =
                                                e.currentTarget.querySelector(".accent");

                                            const num =
                                                e.currentTarget.querySelector(".stat-number");

                                            const iconWrap =
                                                e.currentTarget.querySelector(".icon-wrap");

                                            if (accent)
                                                accent.style.width = "34px";

                                            if (num)
                                                num.style.transform = "scale(1)";

                                            if (iconWrap)
                                                iconWrap.style.boxShadow =
                                                    "0 0 15px rgba(59,130,246,.12)";
                                        }}
                                    >

                                        <div
                                            className="accent mx-auto mb-4"
                                            style={{
                                                width: "34px",
                                                height: "3px",
                                                borderRadius: "999px",
                                                background:
                                                    "linear-gradient(90deg,#60A5FA,#3B82F6)",
                                                transition: ".3s",
                                            }}
                                        />

                                        <h2
                                            className="stat-number fw-bold mb-3"
                                            style={{
                                                fontSize: "2.8rem",
                                                transition: ".3s",
                                                background:
                                                    "linear-gradient(135deg,#60A5FA,#3B82F6)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {item.number}
                                        </h2>

                                        <div
                                            className="icon-wrap d-inline-flex align-items-center justify-content-center mb-3"
                                            style={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "50%",
                                                background:
                                                    "rgba(59,130,246,.10)",
                                                border:
                                                    "1px solid rgba(96,165,250,.15)",
                                                boxShadow:
                                                    "0 0 15px rgba(59,130,246,.12)",
                                                transition: ".3s",
                                            }}
                                        >

                                            <Icon
                                                size={24}
                                                color="#60A5FA"
                                            />

                                        </div>

                                        <p
                                            className="mb-0"
                                            style={{
                                                color: "#CBD5E1",
                                                fontSize: ".95rem",
                                                fontWeight: 500,
                                                letterSpacing: ".3px",
                                            }}
                                        >
                                            {item.title}
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

export default Stats;