import { forwardRef } from "react";

const FormInput = forwardRef(

    (
        {
            label,
            error,
            type = "text",
            placeholder,
            ...props
        },
        ref
    ) => {

        return (

            <div className="mb-4">

                <label

                    className="fw-semibold mb-2 d-block"

                    style={{

                        color: "#E2E8F0",

                        fontSize: ".95rem",

                    }}

                >

                    {label}

                </label>

                <input

                    ref={ref}

                    type={type}

                    placeholder={placeholder}

                    {...props}

                    style={{

                        width: "100%",

                        height: "58px",

                        background: "#0F172A",

                        color: "#F8FAFC",

                        border: error

                            ? "1px solid #EF4444"

                            : "1px solid rgba(255,255,255,.08)",

                        borderRadius: "14px",

                        padding: "0 18px",

                        outline: "none",

                        fontSize: "1rem",

                        transition: "all .25s ease",

                    }}

                    onFocus={(e) => {

                        e.target.style.border =
                            "1px solid #3B82F6";

                        e.target.style.boxShadow =
                            "0 0 0 4px rgba(59,130,246,.15)";

                    }}

                    onBlur={(e) => {

                        e.target.style.boxShadow = "none";

                        e.target.style.border = error
                            ? "1px solid #EF4444"
                            : "1px solid rgba(255,255,255,.08)";

                    }}

                />

                {

                    error && (

                        <p

                            style={{

                                color: "#F87171",

                                fontSize: ".88rem",

                                marginTop: "8px",

                                marginBottom: "0",

                            }}

                        >

                            {error}

                        </p>

                    )

                }

            </div>

        );

    }

);

FormInput.displayName = "FormInput";

export default FormInput;