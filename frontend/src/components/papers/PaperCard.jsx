import {
    Download,
    Calendar,
    BookOpen,
    GraduationCap,
    FileText,
} from "lucide-react";

function PaperCard({
    paper,
    onDownload,
}) {

    return (

        <div className="col-lg-4 col-md-6">

            <div
                className="rounded-4 h-100 d-flex flex-column"
                style={{
                    background: "#131D31",
                    border: "1px solid rgba(255,255,255,.08)",
                    transition: "all .25s ease",
                }}
            >

                {/* Header */}

                <div className="p-4">

                    <div className="d-flex justify-content-between align-items-start mb-4">

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: 60,
                                height: 60,
                                background:
                                    "rgba(37,99,235,.15)",
                            }}
                        >

                            <FileText
                                size={28}
                                color="#2563EB"
                            />

                        </div>

                        <span className="badge bg-success rounded-pill">

                            {paper.status}

                        </span>

                    </div>

                    <h4
                        className="text-white fw-bold mb-3"
                        style={{
                            minHeight: 60,
                        }}
                    >

                        {paper.title}

                    </h4>

                    <p
                        className="text-secondary mb-0"
                        style={{
                            minHeight: 70,
                        }}
                    >

                        {paper.description ||

                            "No description available."}

                    </p>

                </div>

                {/* Details */}

                <div className="px-4 pb-4">

                    <div className="row g-3">

                        <div className="col-12">

                            <div
                                className="rounded-3 p-3"
                                style={{
                                    background: "#0F172A",
                                }}
                            >

                                <div className="d-flex align-items-center">

                                    <GraduationCap
                                        size={18}
                                        className="text-primary me-2"
                                    />

                                    <div>

                                        <small className="text-secondary">

                                            Exam

                                        </small>

                                        <div className="text-white">

                                            {paper.exam}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-6">

                            <div
                                className="rounded-3 p-3"
                                style={{
                                    background: "#0F172A",
                                }}
                            >

                                <BookOpen
                                    size={18}
                                    className="text-primary mb-2"
                                />

                                <small className="text-secondary d-block">

                                    Subject

                                </small>

                                <div className="text-white">

                                    {paper.subject}

                                </div>

                            </div>

                        </div>

                        <div className="col-6">

                            <div
                                className="rounded-3 p-3"
                                style={{
                                    background: "#0F172A",
                                }}
                            >

                                <Calendar
                                    size={18}
                                    className="text-primary mb-2"
                                />

                                <small className="text-secondary d-block">

                                    Year

                                </small>

                                <div className="text-white">

                                    {paper.year}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="mt-auto p-4">

                    <button
                        className="btn btn-primary w-100 py-3 fw-semibold"
                        onClick={() =>
                            onDownload(paper._id)
                        }
                    >

                        <Download
                            size={18}
                            className="me-2"
                        />

                        Download PDF

                    </button>

                </div>

            </div>

        </div>

    );

}

export default PaperCard;