import { ArrowRight } from "lucide-react";

function AuthButton({

    text,

    loading = false,

    type = "submit"

}) {

    return (

        <button

            type={type}

            disabled={loading}

            style={{

                width: "100%",

                height: "60px",

                border: "none",

                borderRadius: "16px",

                background:
                    "linear-gradient(135deg,#2563EB,#4F8DFD)",

                color: "#FFFFFF",

                fontWeight: 700,

                fontSize: "1.05rem",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "10px",

                cursor: loading ? "not-allowed" : "pointer",

                transition: "all .3s ease",

                boxShadow:
                    "0 18px 45px rgba(37,99,235,.35)",

            }}

            onMouseEnter={(e) => {

                if (!loading) {

                    e.currentTarget.style.transform =
                        "translateY(-2px)";

                    e.currentTarget.style.boxShadow =
                        "0 25px 55px rgba(37,99,235,.45)";

                }

            }}

            onMouseLeave={(e) => {

                e.currentTarget.style.transform = "translateY(0)";

                e.currentTarget.style.boxShadow =
                    "0 18px 45px rgba(37,99,235,.35)";

            }}

        >

            {

                loading ? (

                    <>

                        <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                        />

                        Processing...

                    </>

                ) : (

                    <>

                        {text}

                        <ArrowRight size={18} />

                    </>

                )

            }

        </button>

    );

}

export default AuthButton;