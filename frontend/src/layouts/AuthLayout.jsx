function AuthLayout({ children }) {

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#0B1020",
                position: "relative",
                overflow: "hidden",
            }}
        >

            {/* Top Left Glow */}

            <div
                style={{
                    position: "absolute",
                    width: "550px",
                    height: "550px",
                    borderRadius: "50%",
                    background: "rgba(37,99,235,.18)",
                    filter: "blur(120px)",
                    top: "-220px",
                    left: "-180px",
                }}
            />

            {/* Bottom Right Glow */}

            <div
                style={{
                    position: "absolute",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "rgba(96,165,250,.12)",
                    filter: "blur(140px)",
                    bottom: "-260px",
                    right: "-180px",
                }}
            />

            {/* Center Glow */}

            <div
                style={{
                    position: "absolute",
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                    background: "rgba(59,130,246,.10)",
                    filter: "blur(90px)",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            <div
                className="container-fluid"
                style={{
                    position: "relative",
                    zIndex: 2,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px 20px",
                }}
            >

                <div
                    style={{
                        width: "100%",
                    }}
                >

                    {children}

                </div>

            </div>

        </div>

    );

}

export default AuthLayout;