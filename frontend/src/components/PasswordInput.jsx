import { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef(

    (
        {
            label = "Password",
            placeholder,
            error,
            ...props
        },
        ref
    ) => {

        const [showPassword, setShowPassword] = useState(false);

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

                <div
                    style={{
                        position: "relative",
                    }}
                >

                    <input

                        ref={ref}

                        type={showPassword ? "text" : "password"}

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

                            padding: "0 56px 0 18px",

                            outline: "none",

                            fontSize: "1rem",

                            transition: ".25s ease",

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

                    <button

                        type="button"

                        onClick={() =>
                            setShowPassword(!showPassword)
                        }

                        style={{

                            position: "absolute",

                            right: "14px",

                            top: "50%",

                            transform: "translateY(-50%)",

                            border: "none",

                            background: "transparent",

                            color: "#94A3B8",

                            cursor: "pointer",

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                            padding: 0,

                        }}

                    >

                        {

                            showPassword

                                ? <EyeOff size={20} />

                                : <Eye size={20} />

                        }

                    </button>

                </div>

                {

                    error && (

                        <p

                            style={{

                                color: "#F87171",

                                fontSize: ".88rem",

                                marginTop: "8px",

                                marginBottom: 0,

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

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;