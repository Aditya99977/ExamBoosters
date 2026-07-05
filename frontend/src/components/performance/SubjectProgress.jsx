function SubjectProgress({ subjects }) {

    return (

        <div className="card shadow-sm border-0 rounded-4 mb-4">

            <div className="card-body">

                <h4 className="fw-bold mb-4">

                    📚 Subject-wise Progress

                </h4>

                {

                    subjects.map((subject, index) => (

                        <div

                            key={index}

                            className="mb-4"

                        >

                            <div className="d-flex justify-content-between mb-2">

                                <strong>

                                    {subject.subject}

                                </strong>

                                <span>

                                    {subject.progress}%

                                </span>

                            </div>

                            <div className="progress">

                                <div

                                    className="progress-bar bg-success"

                                    role="progressbar"

                                    style={{

                                        width: `${subject.progress}%`

                                    }}

                                >

                                    {subject.progress}%

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