import { Navigate } from "react-router-dom";

import Loader from "./Loader";

import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {

    const {

        user,

        loading

    } = useAuth();

    if (loading) {

        return <Loader />;

    }

    if (!user) {

        return <Navigate to="/login" replace />;

    }

    return children;

}

export default ProtectedRoute;
