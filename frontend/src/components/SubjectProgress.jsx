function SubjectProgress() {

    const subjects = [

        {

            name: "Reasoning",

            progress: 90,

            color: "bg-success"

        },

        {

            name: "English",

            progress: 75,

            color: "bg-primary"

        },

        {

            name: "Quantitative Aptitude",

            progress: 82,

            color: "bg-warning"

        },

        {

            name: "General Awareness",

            progress: 60,

            color: "bg-danger"

        }

    ];

    return (

        <div className="card border-0 shadow-sm rounded-4 mt-4">

            <div className="card-body p-4">

                <h4 className="fw-bold mb-4">

                    📚 Subject Progress

                </h4>

                {

                    subjects.map((subject, index) => (

                        <div key={index} className="mb-4">

                            <div className="d-flex justify-content-between">

                                <strong>

                                    {subject.name}

                                </strong>

                                <span>

                                    {subject.progress}%

                                </span>

                            </div>

                            <div className="progress mt-2">

                                <div

                                    className={`progress-bar ${subject.color}`}

                                    role="progressbar"

                                    style={{

                                        width: `${subject.progress}%`

                                    }}

                                >

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default SubjectProgress;