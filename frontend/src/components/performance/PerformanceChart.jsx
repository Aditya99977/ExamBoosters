import {

    Chart as ChartJS,

    CategoryScale,

    LinearScale,

    PointElement,

    LineElement,

    Title,

    Tooltip,

    Legend

} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(

    CategoryScale,

    LinearScale,

    PointElement,

    LineElement,

    Title,

    Tooltip,

    Legend

);

function PerformanceChart({ performance }) {

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

                borderColor: "#2563EB",

                backgroundColor: "rgba(37,99,235,0.2)",

                tension: 0.4,

                fill: true

            }

        ]

    };

    const options = {

        responsive: true,

        plugins: {

            legend: {

                position: "top"

            }

        },

        scales: {

            y: {

                beginAtZero: true

            }

        }

    };

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <h4 className="fw-bold mb-4">

                    📈 Performance Trend

                </h4>

                {

                    performance.length === 0 ? (

                        <div className="alert alert-info">

                            No performance data available.

                        </div>

                    ) : (

                        <Line

                            data={data}

                            options={options}

                        />

                    )

                }

            </div>

        </div>

    );

}

export default PerformanceChart;