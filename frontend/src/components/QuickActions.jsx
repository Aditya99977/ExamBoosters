import {
    FaBook,
    FaClipboardList,
    FaChartLine,
    FaMedal
} from "react-icons/fa";

function QuickActions() {

    const actions = [

        {
            title: "Practice",
            icon: <FaBook />,
            color: "primary"
        },

        {
            title: "Mock Test",
            icon: <FaClipboardList />,
            color: "success"
        },

        {
            title: "Performance",
            icon: <FaChartLine />,
            color: "warning"
        },

        {
            title: "Leaderboard",
            icon: <FaMedal />,
            color: "danger"
        }

    ];

    return (

        <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

                <h4 className="fw-bold mb-4">

                    ⚡ Quick Actions

                </h4>

                <div className="row">

                    {

                        actions.map((action, index) => (

                            <div
                                key={index}
                                className="col-6 mb-3"
                            >

                                <button
                                    className={`btn btn-${action.color} w-100 py-3 rounded-4`}
                                >

                                    <div className="fs-3 mb-2">

                                        {action.icon}

                                    </div>

                                    {action.title}

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

}

export default QuickActions;