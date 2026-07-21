function Loader() {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "#F8FAFC",
            }}
        >
            <img
                src="/logo.png"
                alt="VNAverse Logo"
                style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain",
                    animation: "pulse 1.6s ease-in-out infinite",
                }}
            />

            <h4
                className="mt-4 fw-bold mb-1"
                style={{
                    color: "#0F172A",
                    letterSpacing: ".5px",
                }}
            >
                VNAverse
            </h4>

            <p
                className="text-secondary mb-4"
                style={{
                    fontSize: "14px",
                    letterSpacing: ".3px",
                }}
            >
                Vision Nexus Academy
            </p>

            <div
                className="spinner-border text-primary"
                role="status"
                style={{
                    width: "2.5rem",
                    height: "2.5rem",
                }}
            >
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>

            <style>{`
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }

                    50% {
                        transform: scale(1.08);
                        opacity: 0.85;
                    }

                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}

export default Loader;