import Loader from "../../components/Loader";
import ExamCard from "../../components/student/ExamCard";
import useExamSelection from "../../hooks/useExamSelection";

import "../../assets/css/selectExam.css";

function SelectExam() {
    const {
        loading,
        saving,
        error,

        searchQuery,
        setSearchQuery,

        groupedExams,

        selectedExam,
        handleSelectExam,

        continueToDashboard,
    } = useExamSelection();

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="select-exam-page">
            <div className="select-exam-container">
                <div className="select-exam-header">
                    <h1>Welcome to VNAverse 👋</h1>

                    <p>
                        Let's personalize your learning journey.
                        Choose the exam you're preparing for.
                    </p>
                </div>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search your target exam..."
                        value={searchQuery}
                        onChange={(e) =>
                            setSearchQuery(e.target.value)
                        }
                    />
                </div>

                {error && (
                    <div className="exam-error">
                        {error}
                    </div>
                )}

                {groupedExams.Banking.length > 0 && (
                    <section className="exam-section">
                        <div className="section-title">
                            🏦 Banking Exams
                        </div>

                        <div className="exam-grid">
                            {groupedExams.Banking.map((exam) => (
                                <ExamCard
                                    key={exam._id}
                                    exam={exam}
                                    selected={
                                        selectedExam?._id === exam._id
                                    }
                                    onSelect={handleSelectExam}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {groupedExams.SSC.length > 0 && (
                    <section className="exam-section">
                        <div className="section-title">
                            🏛 SSC Exams
                        </div>

                        <div className="exam-grid">
                            {groupedExams.SSC.map((exam) => (
                                <ExamCard
                                    key={exam._id}
                                    exam={exam}
                                    selected={
                                        selectedExam?._id === exam._id
                                    }
                                    onSelect={handleSelectExam}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {groupedExams.Railway.length > 0 && (
                    <section className="exam-section">
                        <div className="section-title">
                            🚆 Railway Exams
                        </div>

                        <div className="exam-grid">
                            {groupedExams.Railway.map((exam) => (
                                <ExamCard
                                    key={exam._id}
                                    exam={exam}
                                    selected={
                                        selectedExam?._id === exam._id
                                    }
                                    onSelect={handleSelectExam}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {selectedExam && (
                    <div className="selected-exam-card">
                        <h5>Selected Exam</h5>

                        <div className="selected-exam-name">
                            {selectedExam.name}
                        </div>

                        <p>
                            {selectedExam.description}
                        </p>
                    </div>
                )}

                <div className="continue-section">
                    <button
                        className="continue-btn"
                        disabled={!selectedExam || saving}
                        onClick={continueToDashboard}
                    >
                        {saving ? "Saving..." : "Continue"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SelectExam;