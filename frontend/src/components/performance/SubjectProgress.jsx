import {
    BookOpen,
    TrendingUp,
} from "lucide-react";

function SubjectProgress({ subjects }) {

    if (!subjects || subjects.length === 0) {

        return (

            <div
                className="rounded-4 p-5 text-center"
                style={{
                    background: "#131D31",
                    border: "1px solid rgba(255,255,255,.08)",
                }}
            >

                <BookOpen
                    size={60}
                    className="text-primary mb-4"
                />

                <h4 className="text-white fw-bold">

                    No Subject Progress

                </h4>

                <p className="text-secondary mb-0">

                    Start solving questions to track your subject-wise performance.

                </p>

            </div>

        );

    }

    return (

        <div
            className="rounded-4 h-100"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >

            {/* Header */}

            <div
                className="p-4"
                style={{
                    borderBottom:
                        "1px solid rgba(255,255,255,.08)",
                }}
            >

                <div className="d-flex align-items-center">

                    <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                            width: 52,
                            height: 52,
                            background: "rgba(37,99,235,.15)",
                        }}
                    >

                        <TrendingUp
                            size={24}
                            color="#2563EB"
                        />

                    </div>

                    <div>

                        <h4 className="text-white fw-bold mb-1">

                            Subject Progress

                        </h4>

                        <p className="text-secondary mb-0">

                            Track your progress across different subjects.

                        </p>

                    </div>

                </div>

            </div>

            {/* Subjects */}

            <div className="p-4">

                {subjects.map((subject, index) => (

                    <div
                        key={index}
                        className="rounded-4 p-4 mb-3"
                        style={{
                            background: "#0F172A",
                        }}
                    >

                        <div className="d-flex justify-content-between align-items-center mb-3">

                            <div>

                                <h6 className="text-white fw-semibold mb-1">

                                    {subject.subject}

                                </h6>

                                <small className="text-secondary">

                                    Overall Progress

                                </small>

                            </div>

                            <span
                                className="badge rounded-pill"
                                style={{
                                    background:
                                        "rgba(37,99,235,.15)",
                                    color: "#3B82F6",
                                    border:
                                        "1px solid #2563EB",
                                }}
                            >

                                {subject.progress}%

                            </span>

                        </div>

                        <div
                            className="progress"
                            style={{
                                height: 10,
                                background: "#182338",
                            }}
                        >

                            <div
                                className="progress-bar"
                                style={{
                                    width: `${subject.progress}%`,
                                    background:
                                        "linear-gradient(90deg,#2563EB,#3B82F6)",
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default SubjectProgress;