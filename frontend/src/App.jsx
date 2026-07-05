import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Practice from "./pages/Practice";
import MockTest from "./pages/MockTest";
import NotFound from "./pages/NotFound";
import Performance from "./pages/Performance";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <Routes>

            {/* ==============================
                Public Routes
            ============================== */}

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            {/* ==============================
                Protected Student Routes
            ============================== */}

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <StudentDashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/practice"
                element={
                    <ProtectedRoute>
                        <Practice />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/mock-tests"
                element={
                    <ProtectedRoute>
                        <MockTest />
                    </ProtectedRoute>
                }
            />
            <Route
                 path="/performance"
                 element={
                     <ProtectedRoute>
                      <Performance />
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

            <Route
                path="/edit-profile"
                element={
                    <ProtectedRoute>
                        <EditProfile />
                    </ProtectedRoute>
                }
            />

            {/* ==============================
                Protected Admin Route
            ============================== */}

            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            {/* ==============================
                404 Route
            ============================== */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>

    );

}

export default App;