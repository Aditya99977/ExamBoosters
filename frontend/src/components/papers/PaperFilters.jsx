import {
    Search,
    Filter,
    RotateCcw,
} from "lucide-react";

function PaperFilters({
    filters,
    setFilters,
}) {

    const handleChange = (e) => {

        setFilters({

            ...filters,

            [e.target.name]: e.target.value,

        });

    };

    const clearFilters = () => {

        setFilters({

            search: "",

            exam: "",

            subject: "",

            year: "",

        });

    };

    return (

        <div
            className="rounded-4 p-4 mb-5"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >

            {/* Header */}

            <div className="d-flex align-items-center mb-4">

                <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                        width: 52,
                        height: 52,
                        background: "rgba(37,99,235,.15)",
                    }}
                >

                    <Filter
                        size={24}
                        color="#2563EB"
                    />

                </div>

                <div>

                    <h3 className="text-white fw-bold mb-1">

                        Filter Papers

                    </h3>

                    <p className="text-secondary mb-0">

                        Quickly find previous year papers using the filters below.

                    </p>

                </div>

            </div>

            {/* Filters */}

            <div className="row g-4">

                {/* Search */}

                <div className="col-lg-3">

                    <label className="form-label text-light fw-semibold">

                        Search

                    </label>

                    <div className="position-relative">

                        <Search
                            size={18}
                            className="position-absolute"
                            style={{
                                left: 15,
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#94A3B8",
                            }}
                        />

                        <input
                            type="text"
                            name="search"
                            value={filters.search}
                            onChange={handleChange}
                            placeholder="Search paper..."
                            className="form-control ps-5 py-3"
                            style={{
                                background: "#0F172A",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,.08)",
                            }}
                        />

                    </div>

                </div>

                {/* Exam */}

                <div className="col-lg-3">

                    <label className="form-label text-light fw-semibold">

                        Exam

                    </label>

                    <input
                        type="text"
                        name="exam"
                        value={filters.exam}
                        onChange={handleChange}
                        placeholder="SSC CGL"
                        className="form-control py-3"
                        style={{
                            background: "#0F172A",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,.08)",
                        }}
                    />

                </div>

                {/* Subject */}

                <div className="col-lg-3">

                    <label className="form-label text-light fw-semibold">

                        Subject

                    </label>

                    <input
                        type="text"
                        name="subject"
                        value={filters.subject}
                        onChange={handleChange}
                        placeholder="Reasoning"
                        className="form-control py-3"
                        style={{
                            background: "#0F172A",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,.08)",
                        }}
                    />

                </div>

                {/* Year */}

                <div className="col-lg-3">

                    <label className="form-label text-light fw-semibold">

                        Year

                    </label>

                    <input
                        type="number"
                        name="year"
                        value={filters.year}
                        onChange={handleChange}
                        placeholder="2025"
                        className="form-control py-3"
                        style={{
                            background: "#0F172A",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,.08)",
                        }}
                    />

                </div>

            </div>

            {/* Footer */}

            <div className="d-flex justify-content-end mt-4">

                <button
                    className="btn btn-outline-light px-4 py-2"
                    onClick={clearFilters}
                >

                    <RotateCcw
                        size={16}
                        className="me-2"
                    />

                    Clear Filters

                </button>

            </div>

        </div>

    );

}

export default PaperFilters;