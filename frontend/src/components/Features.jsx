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
            title: "Question Bank",
            description: "Practice thousands of exam-oriented questions.",
        },
        {
            icon: ClipboardCheck,
            title: "Mock Tests",
            description: "Attempt realistic mock tests anytime.",
        },
        {
            icon: BarChart3,
            title: "Performance Analytics",
            description: "Track your improvement after every test.",
        },
        {
            icon: Bot,
            title: "AI Assistant",
            description: "Personalized learning recommendations.",
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
                        Features
                    </span>

                    <h2
                        className="fw-bold mt-2 mb-2"
                        style={{
                            color: "#F8FAFC",
                            fontSize: "clamp(2.2rem,4vw,3rem)",
                        }}
                    >
                        Why Students Love ExamBooster
                    </h2>

                    <p
                        className="mx-auto mb-0"
                        style={{
                            color: "#CBD5E1",
                            maxWidth: "620px",
                            fontSize: "1.05rem",
                        }}
                    >
                        Everything you need to crack government examinations.
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