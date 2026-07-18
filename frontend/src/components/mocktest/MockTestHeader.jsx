import {
    ClipboardCheck,
    Clock3,
    FileText,
    Play,
} from "lucide-react";

function MockTestHeader({
    exam,
    totalQuestions,
    duration,
    onStart,
    started,
}) {
    return (
        <div
            className="rounded-4 overflow-hidden mb-4"
            style={{
                background:
                    "linear-gradient(135deg,#2563EB 0%,#1D4ED8 45%,#0F172A 100%)",
            }}
        >
            <div className="container-fluid p-5">

                <div className="row align-items-center">

                    {/* Left */}

                    <div className="col-lg-8">

                        <span className="badge bg-light text-primary rounded-pill px-3 py-2 mb-3">
                            Mock Test
                        </span>

                        <h1
                            className="fw-bold text-white mb-3"
                            style={{
                                fontSize: "clamp(2rem,4vw,3.2rem)",
                            }}
                        >
                            {exam}
                        </h1>

                        <p
                            className="text-white-50 mb-4"
                            style={{
                                maxWidth: "650px",
                            }}
                        >
                            Attempt a full-length mock test in a
                            real exam environment. Your progress,
                            score and accuracy will be calculated
                            automatically after submission.
                        </p>

                        {!started && (
                            <button
                                className="btn btn-light btn-lg rounded-pill px-4 fw-semibold"
                                onClick={onStart}
                            >
                                <Play
                                    size={18}
                                    className="me-2"
                                />

                                Start Mock Test
                            </button>
                        )}

                    </div>

                    {/* Right */}

                    <div className="col-lg-4 mt-5 mt-lg-0">

                        <div className="row g-3">

                            <div className="col-12">

                                <div
                                    className="rounded-4 p-3"
                                    style={{
                                        background:
                                            "rgba(255,255,255,.08)",
                                        border:
                                            "1px solid rgba(255,255,255,.08)",
                                    }}
                                >

                                    <div className="d-flex align-items-center">

                                        <ClipboardCheck
                                            size={22}
                                            className="text-white me-3"
                                        />

                                        <div>

                                            <small className="text-white-50">

                                                Exam

                                            </small>

                                            <div className="text-white fw-semibold">

                                                {exam}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="col-6">

                                <div
                                    className="rounded-4 p-3 h-100"
                                    style={{
                                        background:
                                            "rgba(255,255,255,.08)",
                                        border:
                                            "1px solid rgba(255,255,255,.08)",
                                    }}
                                >

                                    <FileText
                                        size={22}
                                        className="text-white mb-3"
                                    />

                                    <small className="text-white-50 d-block">
                                        Questions
                                    </small>

                                    <div className="text-white fw-bold fs-4">
                                        {totalQuestions}
                                    </div>

                                </div>

                            </div>

                            <div className="col-6">

                                <div
                                    className="rounded-4 p-3 h-100"
                                    style={{
                                        background:
                                            "rgba(255,255,255,.08)",
                                        border:
                                            "1px solid rgba(255,255,255,.08)",
                                    }}
                                >

                                    <Clock3
                                        size={22}
                                        className="text-white mb-3"
                                    />

                                    <small className="text-white-50 d-block">
                                        Duration
                                    </small>

                                    <div className="text-white fw-bold fs-4">
                                        {duration} min
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MockTestHeader;