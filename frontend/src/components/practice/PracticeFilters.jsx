function PracticeFilters({
    subjects = [ { value: "quantitative_aptitude", label: "Quantitative Aptitude" }, { value: "computer_knowledge", label: "Computer Knowledge" }, { value: "reasoning", label: "Reasoning" }, { value: "general_awareness", label: "General Awareness" }, { value: "english_language", label: "English Language" } ],
    difficulties = [ { value: "easy", label: "Easy" }, { value: "medium", label: "Medium" }, { value: "hard", label: "Hard" } ],
    subject,
    difficulty,
    setSubject,
    setDifficulty,
    loading,
    startPractice,
}) {
    return (
        <div
            className="rounded-4 p-4 mb-5"
            style={{
                background: "#131D31",
                border: "1px solid rgba(255,255,255,.08)",
            }}
        >
            <div className="mb-4">

                <h3 className="text-white fw-bold mb-2">
                    Practice Configuration
                </h3>

                <p className="text-secondary mb-0">
                    Configure your practice session before getting started.
                </p>

            </div>

            <div className="row g-4">

                {/* Subject */}

                <div className="col-lg-5">

                    <label className="form-label text-light fw-semibold">
                        Subject
                    </label>

                    <select
                        className="form-select py-3"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{
                            background: "#0F172A",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,.08)",
                        }}
                    >
                        <option value="">
                            All Subjects
                        </option>

                        {subjects.map((item) => (

                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>

                        ))}

                    </select>

                </div>

                {/* Difficulty */}

                <div className="col-lg-5">

                    <label className="form-label text-light fw-semibold">
                        Difficulty
                    </label>

                    <select
                        className="form-select py-3"
                        value={difficulty}
                        onChange={(e) =>
                            setDifficulty(e.target.value)
                        }
                        style={{
                            background: "#0F172A",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,.08)",
                        }}
                    >
                        <option value="">
                            All Difficulty Levels
                        </option>

                        {difficulties.map((item) => (

                            <option
                                key={item.value}
                                value={item.value}
                            >
                                {item.label}
                            </option>

                        ))}

                    </select>

                </div>

                {/* Start Button */}

                <div className="col-lg-2 d-grid">

                    <label className="form-label opacity-0">
                        Action
                    </label>

                    <button
                        className="btn btn-primary py-3 fw-semibold rounded-3"
                        disabled={loading}
                        onClick={startPractice}
                        style={{
                            background:
                                "linear-gradient(135deg,#2563EB,#1D4ED8)",
                            border: "none",
                        }}
                    >
                        {loading ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                />
                                Loading...
                            </>
                        ) : (
                            "Start Practice"
                        )}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default PracticeFilters;