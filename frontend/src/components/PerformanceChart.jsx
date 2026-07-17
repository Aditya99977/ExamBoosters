import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function PerformanceChart({ data = [] }) {

    const chartData = {

        labels:
            data.length > 0
                ? data.map(item =>
                    new Date(item.date).toLocaleDateString()
                )
                : ["No Data"],

        datasets: [
            {
                label: "Weekly Score",

                data:
                    data.length > 0
                        ? data.map(item => item.score)
                        : [0],

                borderColor: "#3B82F6",

                backgroundColor: "rgba(59,130,246,.12)",

                fill: true,

                tension: 0.45,

                borderWidth: 3,

                pointRadius: 5,

                pointHoverRadius: 7,

                pointBackgroundColor: "#3B82F6",

                pointBorderColor: "#FFFFFF",

                pointBorderWidth: 2,
            }
        ]

    };

    const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                display: false

            },

            tooltip: {

                backgroundColor: "#111827",

                borderColor: "rgba(255,255,255,.08)",

                borderWidth: 1,

                titleColor: "#fff",

                bodyColor: "#CBD5E1",

                padding: 12,

                displayColors: false,

            }

        },

        scales: {

            x: {

                grid: {

                    display: false,

                },

                ticks: {

                    color: "#94A3B8",

                }

            },

            y: {

                beginAtZero: true,

                grid: {

                    color: "rgba(255,255,255,.06)",

                },

                ticks: {

                    color: "#94A3B8",

                    stepSize: 20,

                }

            }

        }

    };

    return (

        <div
            className="rounded-4 mt-4"
            style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,.18)",
            }}
        >

            <div className="p-4">

                <div className="mb-4">

                    <h4
                        className="fw-bold text-white mb-1"
                    >
                        📈 Weekly Performance
                    </h4>

                    <p
                        className="mb-0"
                        style={{
                            color: "#94A3B8",
                            fontSize: ".95rem",
                        }}
                    >
                        Monitor your scores and stay consistent throughout the week.
                    </p>

                </div>

                <div
                    style={{
                        height: "300px",
                    }}
                >

                    <Line
                        data={chartData}
                        options={options}
                    />

                </div>

            </div>

        </div>

    );

}

export default PerformanceChart;