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

                display: false

            }

        }

    };

    return (

        <div className="card border-0 shadow-sm rounded-4 mt-4">

            <div className="card-body">

                <h4 className="fw-bold mb-4">

                    📈 Weekly Performance

                </h4>

                <Line
                    data={chartData}
                    options={options}
                />

            </div>

        </div>

    );

}

export default PerformanceChart;