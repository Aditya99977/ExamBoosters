import {
    BookOpen,
    ClipboardCheck,
    BarChart3,
    Bot,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {

    const features = [
        {
            icon: BookOpen,
            title: "Smart Learning",
            description:
                "Access structured learning resources designed to help you master concepts faster.",
        },
        {
            icon: ClipboardCheck,
            title: "Practice & Mock Tests",
            description:
                "Challenge yourself with realistic mock tests and thousands of high-quality practice questions.",
        },
        {
            icon: BarChart3,
            title: "Performance Analytics",
            description:
                "Track your progress with detailed insights, accuracy reports, and personalized recommendations.",
        },
        {
            icon: Bot,
            title: "AI Learning Assistant",
            description:
                "Learn smarter with AI-powered guidance, personalized recommendations, and intelligent support.",
        },
    ];

    return (
        <section
            style={{
                background: "#0B1020",
                paddingTop: "10px",
                paddingBottom: "90px",
            }}
        >
            <div className="container">

                <div className="text-center mb-4">

                    <span
                        style={{
                            color: "#60A5FA",
                            textTransform: "uppercase",
                            letterSpacing: "1.2px",
                            fontWeight: 600,
                            fontSize: ".95rem",
                        }}
                    >
                        FEATURES
                    </span>

                    <h2
                        className="fw-bold mt-2 mb-2"
                        style={{
                            color: "#F8FAFC",
                            fontSize: "clamp(2.2rem,4vw,3rem)",
                        }}
                    >
                        Everything You Need to Learn Smarter
                    </h2>

                    <p
                        className="mx-auto mb-0"
                        style={{
                            color: "#CBD5E1",
                            maxWidth: "680px",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        VNAverse combines AI-powered learning, intelligent
                        practice, personalized education, performance
                        analytics, and mock tests into one modern learning
                        ecosystem designed to help you unlock your full
                        potential.
                    </p>

                </div>

                <div className="row g-4 mt-3">

                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Features;