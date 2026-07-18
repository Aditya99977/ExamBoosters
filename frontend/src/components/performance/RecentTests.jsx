import {
    Calendar,
    ClipboardCheck,
    Target,
    ChevronRight,
} from "lucide-react";

function RecentTests({
    tests,
}) {

    if (!tests || tests.length === 0) {

        return (

            <div
                className="rounded-4 p-5 text-center mt-4"
                style={{
                    background: "#131D31",
                    border: "1px solid rgba(255,255,255,.08)",
                }}
            >

                <ClipboardCheck
                    size={60}
                    className="text-primary mb-4"
                />

                <h3 className="text-white fw-bold">

                    No Mock Tests Yet

                </h3>

                <p className="text-secondary mb-0">

                    Complete your first mock test to see your recent attempts here.

                </p>

            </div>

        );

    }

    return (

        <div
            className="rounded-4 mt-4"
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

                <h4 className="text-white fw-bold mb-1">

                    Recent Mock Tests

                </h4>

                <p className="text-secondary mb-0">

                    Your latest mock test attempts.

                </p>

            </div>

            {/* Cards */}

            <div className="p-4">

                <div className="row g-4">

                    {tests.map((test, index) => (

                        <div
                            className="col-lg-6"
                            key={index}
                        >

                            <div
                                className="rounded-4 h-100 p-4"
                                style={{
                                    background: "#0F172A",
                                    border:
                                        "1px solid rgba(255,255,255,.06)",
                                }}
                            >

                                <div className="d-flex justify-content-between align-items-start mb-4">

                                    <div>

                                        <h5 className="text-white fw-bold mb-2">

                                            {test.exam}

                                        </h5>

                                        <small className="text-secondary">

                                            Mock Test

                                        </small>

                                    </div>

                                    <ChevronRight
                                        size={22}
                                        color="#3B82F6"
                                    />

                                </div>

                                <div className="row g-3">

                                    <div className="col-6">

                                        <div
                                            className="rounded-3 p-3"
                                            style={{
                                                background:
                                                    "#131D31",
                                            }}
                                        >

                                            <Target
                                                size={18}
                                                className="text-primary mb-2"
                                            />

                                            <small className="text-secondary d-block">

                                                Score

                                            </small>

                                            <div className="text-white fw-bold">

                                                {test.score}

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-6">

                                        <div
                                            className="rounded-3 p-3"
                                            style={{
                                                background:
                                                    "#131D31",
                                            }}
                                        >

                                            <ClipboardCheck
                                                size={18}
                                                className="text-success mb-2"
                                            />

                                            <small className="text-secondary d-block">

                                                Accuracy

                                            </small>

                                            <div
                                                className="fw-bold"
                                                style={{
                                                    color:
                                                        "#22C55E",
                                                }}
                                            >

                                                {test.accuracy}%

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div
                                    className="d-flex align-items-center mt-4"
                                >

                                    <Calendar
                                        size={16}
                                        className="text-secondary me-2"
                                    />

                                    <small className="text-secondary">

                                        {new Date(
                                            test.submittedAt
                                        ).toLocaleDateString()}

                                    </small>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default RecentTests;