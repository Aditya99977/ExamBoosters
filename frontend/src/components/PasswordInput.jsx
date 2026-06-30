import { useState, forwardRef } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

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

                <label className="form-label fw-semibold">

                    {label}

                </label>

                <div className="input-group">

                    <input

                        ref={ref}

                        type={showPassword ? "text" : "password"}

                        placeholder={placeholder}

                        className={`form-control form-control-lg ${
                            error ? "is-invalid" : ""
                        }`}

                        {...props}

                    />

                    <button

                        type="button"

                        className="btn btn-outline-secondary"

                        onClick={() => setShowPassword(!showPassword)}

                    >

                        {

                            showPassword

                                ? <FaEyeSlash />

                                : <FaEye />

                        }

                    </button>

                </div>

                {

                    error && (

                        <div className="text-danger mt-1">

                            {error}

                        </div>

                    )

                }

            </div>

        );

    }

);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;