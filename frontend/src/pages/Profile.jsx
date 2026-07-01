import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

import { getProfile } from "../services/profileService";

function Profile() {

    const navigate = useNavigate();

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const data = await getProfile();

                setProfile(data);

            }

            catch (err) {

                console.log(err);

            }

            finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, []);

    if (loading) {

        return <Loader />;

    }

    return (

        <>

            <Navbar />

            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="card shadow border-0 rounded-4">

                            <div className="card-body p-5">

                                <div className="text-center mb-4">

                                    <div
                                        className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            fontSize: "40px"
                                        }}
                                    >
                                        👤
                                    </div>

                                    <h2 className="mt-3 fw-bold">

                                        My Profile

                                    </h2>

                                    <p className="text-muted">

                                        Manage your ExamBooster account

                                    </p>

                                </div>

                                <hr />

                                <div className="row g-4">

                                    <div className="col-md-6">

                                        <h6 className="text-muted">

                                            Name

                                        </h6>

                                        <h5>

                                            {profile.name}

                                        </h5>

                                    </div>

                                    <div className="col-md-6">

                                        <h6 className="text-muted">

                                            Email

                                        </h6>

                                        <h5>

                                            {profile.email}

                                        </h5>

                                    </div>

                                    <div className="col-md-6">

                                        <h6 className="text-muted">

                                            Target Exam

                                        </h6>

                                        <h5>

                                            {profile.examTarget}

                                        </h5>

                                    </div>

                                    <div className="col-md-6">

                                        <h6 className="text-muted">

                                            Tests Attempted

                                        </h6>

                                        <h5>

                                            {profile.testsAttempted || 0}

                                        </h5>

                                    </div>

                                    <div className="col-md-6">

                                        <h6 className="text-muted">

                                            Highest Score

                                        </h6>

                                        <h5>

                                            {profile.score || 0}

                                        </h5>

                                    </div>

                                    <div className="col-md-6">

                                        <h6 className="text-muted">

                                            Account Status

                                        </h6>

                                        <span className="badge bg-success">

                                            Active

                                        </span>

                                    </div>

                                </div>

                                <div className="mt-5 text-center">

                                    <button
                                        className="btn btn-primary rounded-pill px-4"
                                        onClick={() => navigate("/edit-profile")}
                                    >

                                        Edit Profile

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Profile;