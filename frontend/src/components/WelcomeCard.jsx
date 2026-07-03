import { FaFire, FaBullseye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function WelcomeCard({ user }) {

    const navigate = useNavigate();

    return (

        <div
            className="card border-0 shadow rounded-4 mb-4"
            style={{
                background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                color: "white"
            }}
        >

            <div className="card-body p-5">

                <div className="row align-items-center">

                    <div className="col-lg-8">

                        <h2 className="fw-bold mb-3">

                            👋 Welcome, {user?.name}

                        </h2>

                        <p className="mb-4 fs-5">

                            Target Exam: <strong>{user?.examTarget}</strong>

                        </p>

                        <div className="d-flex flex-wrap gap-4">

                            <div>

                                <FaFire className="me-2 text-warning" />

                                <strong>Study Streak</strong>

                                <br />

                                🔥 Coming Soon

                            </div>

                            <div>

                                <FaBullseye className="me-2" />

                                <strong>Today's Goal</strong>

                                <br />

                                🎯 Complete 2 Mock Tests

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

                        <button

                            className="btn btn-light btn-lg rounded-pill px-5 fw-bold"

                            onClick={() => navigate("/practice")}

                        >

                            Start Practice

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default WelcomeCard;