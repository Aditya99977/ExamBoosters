import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <Routes>

            {/* Public Routes */}

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            {/* Protected Student Routes */}

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            {/* Protected Admin Route */}

            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            {/* 404 Page */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>

    );

}

export default App;