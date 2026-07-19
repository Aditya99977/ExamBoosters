import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    verifyEmail,
    resendVerificationEmail,
} from "../services/authService";

function VerifyEmail() {

    const { token } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState("");

    const [email, setEmail] = useState("");

    const [resending, setResending] = useState(false);

    useEffect(() => {

        const verify = async () => {

            try {

                const response = await verifyEmail(token);

                setSuccess(true);

                setMessage(response.message);

            }

            catch (error) {

                setSuccess(false);

                setMessage(

                    error.response?.data?.message ||

                    "Verification failed."

                );

            }

            finally {

                setLoading(false);

            }

        };

        verify();

    }, [token]);

    const handleResend = async () => {

        if (!email) {

            alert("Please enter your email.");

            return;

        }

        try {

            setResending(true);

            const response = await resendVerificationEmail(email);

            alert(response.message);

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Unable to resend email."

            );

        }

        finally {

            setResending(false);

        }

    };

    if (loading) {

        return (

            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
                    background: "#0f172a",
                }}
            >

                <div className="text-center text-white">

                    <div
                        className="spinner-border text-primary mb-4"
                        role="status"
                    />

                    <h2>

                        Verifying your email...

                    </h2>

                    <p className="text-secondary">

                        Please wait while we verify your account.

                    </p>

                </div>

            </div>

        );

    }

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "#0f172a",
                padding: "20px",
            }}
        >

            <div
                className="card shadow-lg"
                style={{
                    maxWidth: "520px",
                    width: "100%",
                    borderRadius: "18px",
                    padding: "40px",
                }}
            >
                {success ? (
                    <div className="text-center">
                        <div
                            style={{
                                fontSize: "70px",
                            }}
                        >
                            ✅
                        </div>

                        <h2
                            className="fw-bold mt-3"
                            style={{
                                color: "#16a34a",
                            }}
                        >
                            Email Verified
                        </h2>

                        <p className="text-muted mt-3">
                            {message}
                        </p>

                        <button
                            className="btn btn-primary w-100 mt-4"
                            onClick={() => navigate("/login")}
                        >
                            Go to Login
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center">
                            <div
                                style={{
                                    fontSize: "70px",
                                }}
                            >
                                ❌
                            </div>

                            <h2 className="fw-bold mt-3 text-danger">
                                Verification Failed
                            </h2>

                            <p className="text-muted mt-3">
                                {message}
                            </p>
                        </div>

                        <hr className="my-4" />

                        <label className="form-label fw-semibold">
                            Enter your email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            className="btn btn-warning w-100 mt-3"
                            onClick={handleResend}
                            disabled={resending}
                        >
                            {resending ? "Sending..." : "Resend Verification Email"}
                        </button>

                        <button
                            className="btn btn-outline-secondary w-100 mt-3"
                            onClick={() => navigate("/login")}
                        >
                            Back to Login
                        </button>
                    </>
                )}
            </div>

        </div>

    );

}

export default VerifyEmail;