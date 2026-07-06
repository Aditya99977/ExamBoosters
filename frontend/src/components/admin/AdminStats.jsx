import {

    FaUsers,

    FaQuestionCircle,

    FaClipboardList,

    FaChartLine

} from "react-icons/fa";

function AdminStats({

    stats

}) {

    const cards = [

        {

            title: "Total Users",

            value: stats?.users || 0,

            icon: <FaUsers size={28} />,

            color: "primary"

        },

        {

            title: "Questions",

            value: stats?.questions || 0,

            icon: <FaQuestionCircle size={28} />,

            color: "success"

        },

        {

            title: "Mock Tests",

            value: stats?.mockTests || 0,

            icon: <FaClipboardList size={28} />,

            color: "warning"

        },

        {

            title: "Attempts",

            value: stats?.attempts || 0,

            icon: <FaChartLine size={28} />,

            color: "danger"

        }

    ];

    return (

        <div className="row">

            {

                cards.map((card, index) => (

                    <div

                        key={index}

                        className="col-md-6 col-xl-3 mb-4"

                    >

                        <div className={`card border-0 shadow bg-${card.color} text-white`}>

                            <div className="card-body">

                                <div className="d-flex justify-content-between align-items-center">

                                    <div>

                                        <h6>

                                            {card.title}

                                        </h6>

                                        <h2 className="fw-bold">

                                            {card.value}

                                        </h2>

                                    </div>

                                    <div>

                                        {card.icon}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default AdminStats;