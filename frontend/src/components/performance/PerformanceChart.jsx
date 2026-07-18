import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import {
    TrendingUp,
} from "lucide-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function PerformanceChart({
    performance,
}) {

    const data = {

        labels: performance.map((item) =>
            new Date(item.date).toLocaleDateString()
        ),

        datasets: [

            {

                label: "Score",

                data: performance.map(
                    (item) => item.score
                ),

                borderColor: "#3B82F6",

                backgroundColor:
                    "rgba(59,130,246,.18)",

                pointBackgroundColor:
                    "#3B82F6",

                pointBorderColor:
                    "#ffffff",

                pointRadius: 5,

                pointHoverRadius: 7,

                borderWidth: 3,

                tension: .4,

                fill: true,

            },

        ],

    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                display: false,

            },

            tooltip: {

                backgroundColor: "#131D31",

                titleColor: "#fff",

                bodyColor: "#fff",

                borderColor: "#2563EB",

                borderWidth: 1,

            },

        },

        scales: {

            x: {

                grid: {

                    display: false,

                },

                ticks: {

                    color: "#94A3B8",

                },

            },

            y: {

                beginAtZero: true,

                grid: {

                    color:
                        "rgba(255,255,255,.06)",

                },

                ticks: {

                    color: "#94A3B8",

                },

            },

        },

    };

    return (

        <div
            className="rounded-4 h-100"
            style={{
                background: "#131D31",
                border:
                    "1px solid rgba(255,255,255,.08)",
            }}
        >

            {/* Header */}

            <div
                className="p-4"
                style={{
                    borderBottom:
                        "1px solid rgba(255,255,255,.08)",
                }}
            >

                <div className="d-flex align-items-center">

                    <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                            width: 52,
                            height: 52,
                            background:
                                "rgba(37,99,235,.15)",
                        }}
                    >

                        <TrendingUp
                            size={24}
                            color="#2563EB"
                        />

                    </div>

                    <div>

                        <h4 className="text-white fw-bold mb-1">

                            Performance Trend

                        </h4>

                        <p className="text-secondary mb-0">

                            Track your scores over time.

                        </p>

                    </div>

                </div>

            </div>

            {/* Chart */}

            <div className="p-4">

                {performance.length === 0 ? (

                    <div
                        className="rounded-4 p-5 text-center"
                        style={{
                            background: "#0F172A",
                        }}
                    >

                        <TrendingUp
                            size={60}
                            className="text-primary mb-4"
                        />

                        <h4 className="text-white fw-bold">

                            No Performance Data

                        </h4>

                        <p className="text-secondary mb-0">

                            Complete mock tests to see your performance trend.

                        </p>

                    </div>

                ) : (

                    <div
                        style={{
                            height: 350,
                        }}
                    >

                        <Line
                            data={data}
                            options={options}
                        />

                    </div>

                )}

            </div>

        </div>

    );

}

export default PerformanceChart;