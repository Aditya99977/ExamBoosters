function Exams() {

    const exams = [

        "IBPS Clerk",

        "IBPS PO",

        "SBI Clerk",

        "SBI PO",

        "SSC CGL",

        "SSC CHSL",

        "RRB NTPC",

        "RRB Group D"

    ];

    return (

        <section className="section bg-white">

            <div className="container text-center">

                <h2 className="fw-bold mb-5">

                    Supported Exams

                </h2>

                {

                    exams.map((exam, index) => (

                        <span

                            key={index}

                            className="badge bg-primary m-2 p-3 fs-6 rounded-pill"

                        >

                            {exam}

                        </span>

                    ))

                }

            </div>

        </section>

    );

}

export default Exams;