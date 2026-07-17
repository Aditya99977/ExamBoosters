import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

import {
    getProfile,
    uploadProfileImage,
} from "../services/profileService";

function Profile() {

    const navigate = useNavigate();

    const fileInputRef = useRef(null);

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

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

    if (loading) return <Loader />;

    const initials = profile?.name
        ?.split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    const imageUrl = profile?.profileImage
        ? `http://localhost:5000/uploads/${profile.profileImage}`
        : null;

    const handleImageUpload = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const formData = new FormData();

        formData.append("profileImage", file);

        try {

            setUploading(true);

            const res = await uploadProfileImage(formData);

            setProfile(prev => ({
                ...prev,
                profileImage: res.profileImage,
            }));

        }

        catch (err) {

            console.error(err);

            alert("Failed to upload image.");

        }

        finally {

            setUploading(false);

        }

    };

    return (

        <>

            <Navbar />

            <div
                style={{
                    minHeight: "100vh",
                    background: "#0B1120",
                    padding: "50px 0",
                }}
            >

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-xl-9">

                            <div
                                className="rounded-4 overflow-hidden"
                                style={{
                                    background: "#111827",
                                    border: "1px solid rgba(255,255,255,.08)",
                                    boxShadow: "0 20px 50px rgba(0,0,0,.25)",
                                }}
                            >

                                <div
                                    className="text-center"
                                    style={{
                                        background: "linear-gradient(135deg,#1D4ED8,#3B82F6)",
                                        padding: "60px 30px 90px",
                                    }}
                                >

                                    <div
                                        className="position-relative d-inline-block"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => fileInputRef.current.click()}
                                    >

                                        {imageUrl ? (

                                            <img
                                                src={imageUrl}
                                                alt="Profile"
                                                style={{
                                                    width: "120px",
                                                    height: "120px",
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                    border: "5px solid rgba(255,255,255,.2)",
                                                }}
                                            />

                                        ) : (

                                            <div
                                                className="d-flex align-items-center justify-content-center fw-bold"
                                                style={{
                                                    width: "120px",
                                                    height: "120px",
                                                    borderRadius: "50%",
                                                    background: "#fff",
                                                    color: "#2563EB",
                                                    fontSize: "40px",
                                                    border: "5px solid rgba(255,255,255,.2)",
                                                }}
                                            >
                                                {initials}
                                            </div>

                                        )}

                                        <div
                                            className="position-absolute bottom-0 end-0 rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                                background: "#2563EB",
                                                color: "#fff",
                                                border: "3px solid white",
                                            }}
                                        >
                                            📷
                                        </div>

                                    </div>

                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={handleImageUpload}
                                    />

                                    <h2 className="text-white fw-bold mt-4">{profile.name}</h2>

                                    <p style={{ color: "rgba(255,255,255,.85)" }}>
                                        {profile.email}
                                    </p>

                                    {uploading && (
                                        <p className="text-white mb-0">
                                            Uploading image...
                                        </p>
                                    )}

                                </div>

                                <div className="p-5">

                                    <div className="row g-4">

                                        {[
                                            ["Target Exam", profile.examTarget],
                                            ["Tests Attempted", profile.testsAttempted],
                                            ["Highest Score", profile.highestScore],
                                            ["Account Status", "Active"],
                                        ].map(([title, value], i) => (

                                            <div className="col-md-6" key={i}>

                                                <div
                                                    className="rounded-4 p-4 h-100"
                                                    style={{ background: "#182338" }}
                                                >

                                                    <small style={{ color: "#94A3B8" }}>
                                                        {title}
                                                    </small>

                                                    <h4 className="text-white mt-2 mb-0">
                                                        {value}
                                                    </h4>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                    <div className="text-center mt-5">

                                        <button
                                            className="btn btn-primary rounded-pill px-5 py-3 fw-semibold"
                                            style={{
                                                background: "linear-gradient(135deg,#2563EB,#3B82F6)",
                                                border: "none",
                                            }}
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

            </div>

        </>

    );

}

export default Profile;
