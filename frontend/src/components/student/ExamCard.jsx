function ExamCard({
    exam,
    selected,
    onSelect,
}) {
    return (
        <button
            type="button"
            className={`exam-card ${selected ? "selected" : ""}`}
            onClick={() => onSelect(exam)}
        >
            <div className="exam-card__icon">
                {exam.icon}
            </div>

            <div className="exam-card__content">

                <h5>
                    {exam.name}
                </h5>

                <p>
                    {exam.description}
                </p>

                <span className="exam-category">
                    {exam.category}
                </span>

            </div>

            {selected && (
                <div className="exam-card__selected">
                    ✓
                </div>
            )}
        </button>
    );
}

export default ExamCard;