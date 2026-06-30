function AuthLayout({ children }) {

    return (

        <div

            className="d-flex align-items-center"

            style={{

                minHeight: "100vh",

                background:
                    "linear-gradient(135deg,#2563EB,#1E3A8A)"

            }}

        >

            <div className="container">

                {children}

            </div>

        </div>

    );

}

export default AuthLayout;