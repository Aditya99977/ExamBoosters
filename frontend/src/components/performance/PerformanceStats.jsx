function PerformanceStats({ stats }) {

    const cards = [

        {

            title: "Tests Attempted",

            value: stats?.mockTestsCompleted || 0,

            color: "primary"

        },

        {

            title: "Highest Score",

            value: stats?.highestScore || 0,

            color: "success"

        },

        {

            title: "Average Score",

            value: stats?.averageScore || 0,

            color: "warning"

        },

        {

            title: "Accuracy",

            value: `${stats?.accuracy || 0}%`,

            color: "info"

        }

    ];

    return (

        <div className="row g-4 mb-4">

            {

                cards.map((card, index) => (

                    <div

                        className="col-lg-3 col-md-6"

                        key={index}

                    >

                        <div className={`card border-0 shadow rounded-4 bg-${card.color} text-white`}>

                            <div className="card-body text-center">

                                <h6>

                                    {card.title}

                                </h6>

                                <h2 className="fw-bold">

                                    {card.value}

                                </h2>

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default PerformanceStats;