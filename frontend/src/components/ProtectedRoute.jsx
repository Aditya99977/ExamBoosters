import { Navigate } from "react-router-dom";

import Loader from "./Loader";

import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <Loader />;
    }

    // User is not logged in
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // User has not selected an exam yet
    if (
        user.role === "student" &&
        !user.preferredExam &&
        window.location.pathname !== "/select-exam"
    ) {
        return <Navigate to="/select-exam" replace />;
    }

    return children;
}

export default ProtectedRoute;