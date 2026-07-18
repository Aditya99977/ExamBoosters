function PracticeHero({
    title = "Practice Questions",
    description = "Choose a subject and start solving questions to improve your preparation.",
    subjects = [],
    selectedSubject,
    onSelectSubject,
}) {

    return (

        <>

            {/* Hero */}

            <div
                className="rounded-4 overflow-hidden mb-5 position-relative"
                style={{
                    background:
                        "linear-gradient(135deg,#2563EB 0%,#1D4ED8 50%,#0F172A 100%)",
                }}
            >

                <div
                    className="position-absolute"
                    style={{
                        width: 260,
                        height: 260,
                        right: -80,
                        top: -80,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,.08)",
                    }}
                />

                <div
                    className="position-relative p-5"
                >

                    <span className="badge bg-light text-primary rounded-pill px-3 py-2 mb-3">
                        Practice Mode
                    </span>

                    <h1
                        className="text-white fw-bold mb-3"
                        style={{
                            fontSize: "clamp(2rem,4vw,3.2rem)",
                        }}
                    >
                        {title}
                    </h1>

                    <p
                        className="text-white-50 mb-0"
                        style={{
                            maxWidth: "700px",
                        }}
                    >
                        {description}
                    </p>

                </div>

            </div>

            {/* Subjects */}

            {subjects.length > 0 && (

                <div className="row g-4 mb-5">

                    {subjects.map((item) => {

                        const isSelected =
                            selectedSubject === item.name;

                        return (

                            <div
                                className="col-md-6 col-xl-3"
                                key={item.name}
                            >

                                <div
                                    onClick={() =>
                                        onSelectSubject(item.name)
                                    }
                                    className="rounded-4 p-4 h-100"
                                    style={{
                                        cursor: "pointer",
                                        transition: ".25s",

                                        background: isSelected
                                            ? "linear-gradient(135deg,#2563EB,#1D4ED8)"
                                            : "#131D31",

                                        border: isSelected
                                            ? "1px solid #3B82F6"
                                            : "1px solid rgba(255,255,255,.08)",
                                    }}
                                >

                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center mb-4"
                                        style={{
                                            width: 58,
                                            height: 58,
                                            background: "#1E293B",
                                            fontSize: "26px",
                                        }}
                                    >
                                        {item.icon}
                                    </div>

                                    <h5 className="text-white fw-bold">
                                        {item.name}
                                    </h5>

                                    {item.description && (

                                        <p className="text-secondary mb-4">

                                            {item.description}

                                        </p>

                                    )}

                                    <span
                                        className={
                                            isSelected
                                                ? "text-white fw-semibold"
                                                : "text-primary fw-semibold"
                                        }
                                    >
                                        {isSelected
                                            ? "Selected"
                                            : "Select Subject →"}
                                    </span>

                                </div>

                            </div>

                        );

                    })}

                </div>

            )}

        </>

    );

}

export default PracticeHero;