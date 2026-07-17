function SubjectProgress({ data = [] }) {

    const getColor = (progress) => {

        if (progress >= 80) return "#22C55E";

        if (progress >= 60) return "#3B82F6";

        if (progress >= 40) return "#F59E0B";

        return "#EF4444";

    };

    return (

        <div
            className="rounded-4 mt-4"
            style={{
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,.18)",
            }}
        >

            <div className="p-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h4
                            className="fw-bold text-white mb-1"
                        >
                            📚 Subject Progress
                        </h4>

                        <p
                            className="mb-0"
                            style={{
                                color: "#94A3B8",
                                fontSize: ".95rem",
                            }}
                        >
                            Track your performance across all subjects.
                        </p>

                    </div>

                </div>

                {

                    data.length === 0 ? (

                        <div className="text-center py-5">

                            <h6
                                className="text-white mb-2"
                            >
                                No progress available
                            </h6>

                            <p
                                className="mb-0"
                                style={{
                                    color: "#94A3B8",
                                }}
                            >
                                Complete a mock test to start tracking your performance.
                            </p>

                        </div>

                    ) : (

                        data.map((subject, index) => (

                            <div
                                key={index}
                                className="mb-4"
                            >

                                <div className="d-flex justify-content-between align-items-center mb-2">

                                    <span
                                        className="fw-semibold"
                                        style={{
                                            color: "#F8FAFC",
                                        }}
                                    >
                                        {subject.subject}
                                    </span>

                                    <span
                                        className="px-3 py-1 rounded-pill"
                                        style={{
                                            background: "rgba(255,255,255,.06)",
                                            color: getColor(subject.progress),
                                            fontWeight: 700,
                                            fontSize: ".85rem",
                                            border: "1px solid rgba(255,255,255,.08)",
                                        }}
                                    >
                                        {subject.progress}%
                                    </span>

                                </div>

                                <div
                                    style={{
                                        height: "10px",
                                        borderRadius: "999px",
                                        background: "#1E293B",
                                        overflow: "hidden",
                                    }}
                                >

                                    <div
                                        style={{
                                            width: `${subject.progress}%`,
                                            height: "100%",
                                            background: getColor(subject.progress),
                                            borderRadius: "999px",
                                            transition: "width .5s ease",
                                        }}
                                    />

                                </div>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}

export default SubjectProgress;