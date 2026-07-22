import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";

import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import MockTestManagement from "./pages/MockTestManagement";
import PaperManagement from "./pages/PaperManagement";

import PreviousYearPapers from "./pages/PreviousYearPapers";

import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

import Practice from "./pages/Practice";
import MockTest from "./pages/MockTest";
import Performance from "./pages/Performance";

import NotFound from "./pages/NotFound";

/*
====================================
Authentication
====================================
*/

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

/*
====================================
Admin Pages
====================================
*/

import AdminLogin from "./pages/AdminLogin";

function App() {

    return (

        <Routes>

            {/* =====================================
                Public Routes
            ===================================== */}

            <Route

                path="/"

                element={<Home />}

            />

            <Route

                path="/login"

                element={<Login />}

            />

            <Route

                path="/register"

                element={<Register />}

            />

            <Route

                path="/admin/login"

                element={<AdminLogin />}

            />

            <Route

                path="/verify-email/:token"

                element={<VerifyEmail />}

            />

            {/* =====================================
                Student Routes
            ===================================== */}

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

                path="/previous-year-papers"

                element={

                    <ProtectedRoute>

                        <PreviousYearPapers />

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

            {/* =====================================
                Admin Routes
            ===================================== */}

            <Route

                path="/admin"

                element={

                    <AdminRoute>

                        <AdminDashboard />

                    </AdminRoute>

                }

            />

            <Route

                path="/admin/mock-tests"

                element={

                    <AdminRoute>

                        <MockTestManagement />

                    </AdminRoute>

                }

            />

            <Route

                path="/admin/papers"

                element={

                    <AdminRoute>

                        <PaperManagement />

                    </AdminRoute>

                }

            />

            {/* =====================================
                404
            ===================================== */}

            <Route

                path="*"

                element={<NotFound />}

            />

        </Routes>

    );

}

export default App;