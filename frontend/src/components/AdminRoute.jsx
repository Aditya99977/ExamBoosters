import { Navigate } from "react-router-dom";

import Loader from "./Loader";
import { useAuth } from "../hooks/useAuth";

function AdminRoute({ children }) {

    const { user, loading } = useAuth();

    if (loading) {
        return <Loader />;
    }

    // User not logged in
    if (!user) {
        return <Navigate to="/admin/login" replace />;
    }

    // User logged in but not an admin
    if (user.role !== "admin") {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}

export default AdminRoute;
