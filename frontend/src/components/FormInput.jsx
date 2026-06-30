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

                <label className="form-label fw-semibold">

                    {label}

                </label>

                <input

                    ref={ref}

                    type={type}

                    placeholder={placeholder}

                    className={`form-control form-control-lg rounded-3 ${
                        error ? "is-invalid" : ""
                    }`}

                    {...props}

                />

                {

                    error && (

                        <div className="invalid-feedback">

                            {error}

                        </div>

                    )

                }

            </div>

        );

    }

);

FormInput.displayName = "FormInput";

export default FormInput;