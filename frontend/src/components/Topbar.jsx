function Topbar() {

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 17
            ? "Good Afternoon"
            : "Good Evening";

    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <div
            className="d-flex justify-content-between align-items-center flex-wrap mb-4"
            style={{
                padding: "18px 0",
            }}
        >

            <div>

                <p
                    className="mb-2"
                    style={{
                        color: "#94A3B8",
                        fontSize: ".95rem",
                        fontWeight: 500,
                    }}
                >
                    {today}
                </p>

                <h2
                    className="fw-bold mb-2"
                    style={{
                        color: "#F8FAFC",
                    }}
                >
                    {greeting} 👋
                </h2>

                <p
                    className="mb-0"
                    style={{
                        color: "#94A3B8",
                    }}
                >
                    Welcome back to <strong>VNAverse</strong>! Continue your learning journey today.
                </p>

            </div>

            <div className="mt-3 mt-md-0 d-flex align-items-center gap-3">

                <span
                    style={{
                        background: "rgba(34,197,94,.15)",
                        color: "#22C55E",
                        padding: "10px 18px",
                        borderRadius: "999px",
                        fontWeight: 600,
                        border: "1px solid rgba(34,197,94,.25)",
                    }}
                >
                    ● Learning Active
                </span>

            </div>

        </div>

    );

}

export default Topbar;