import {
    ClipboardCheck,
    Trophy,
    Target,
    TrendingUp,
} from "lucide-react";

function PerformanceStats({ stats }) {

    const cards = [

        {
            title: "Tests Attempted",
            value: stats?.mockTestsCompleted || 0,
            icon: ClipboardCheck,
            color: "#2563EB",
        },

        {
            title: "Highest Score",
            value: stats?.highestScore || 0,
            icon: Trophy,
            color: "#22C55E",
        },

        {
            title: "Average Score",
            value: stats?.averageScore || 0,
            icon: TrendingUp,
            color: "#F59E0B",
        },

        {
            title: "Accuracy",
            value: `${stats?.accuracy || 0}%`,
            icon: Target,
            color: "#8B5CF6",
        },

    ];

    return (

        <div className="row g-4 mb-5">

            {cards.map((card, index) => {

                const Icon = card.icon;

                return (

                    <div
                        className="col-lg-3 col-md-6"
                        key={index}
                    >

                        <div
                            className="rounded-4 h-100 p-4"
                            style={{
                                background: "#131D31",
                                border: "1px solid rgba(255,255,255,.08)",
                            }}
                        >

                            <div className="d-flex justify-content-between align-items-start mb-4">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                    style={{
                                        width: 60,
                                        height: 60,
                                        background: `${card.color}20`,
                                    }}
                                >

                                    <Icon
                                        size={28}
                                        color={card.color}
                                    />

                                </div>

                                <span
                                    className="badge rounded-pill"
                                    style={{
                                        background: `${card.color}20`,
                                        color: card.color,
                                        border: `1px solid ${card.color}`,
                                    }}
                                >

                                    Live

                                </span>

                            </div>

                            <small className="text-secondary">

                                {card.title}

                            </small>

                            <h2
                                className="fw-bold text-white mt-2 mb-0"
                            >

                                {card.value}

                            </h2>

                        </div>

                    </div>

                );

            })}

        </div>

    );

}

export default PerformanceStats;