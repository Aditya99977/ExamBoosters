function Stats() {

    const stats = [

        {
            number: "10,000+",
            title: "Practice Questions"
        },

        {
            number: "500+",
            title: "Mock Tests"
        },

        {
            number: "20+",
            title: "Government Exams"
        },

        {
            number: "50,000+",
            title: "Future Aspirants"
        }

    ];

    return (

        <section className="section bg-white">

            <div className="container">

                <div className="row text-center">

                    {

                        stats.map((item, index) => (

                            <div className="col-md-3 mb-4" key={index}>

                                <h2 className="fw-bold text-primary">

                                    {item.number}

                                </h2>

                                <p className="text-muted">

                                    {item.title}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Stats;