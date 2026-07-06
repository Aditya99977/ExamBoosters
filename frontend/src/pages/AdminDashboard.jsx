import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import AdminStats from "../components/admin/AdminStats";
import QuickActions from "../components/admin/QuickActions";
import QuestionTable from "../components/admin/QuestionTable";
import RecentUsers from "../components/admin/RecentUsers";
import QuestionForm from "../components/admin/QuestionForm";

import {

    getAdminDashboard,

    getAllUsers,

    getAllQuestions,

    addQuestion

} from "../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState(null);

    const [questions, setQuestions] = useState([]);

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [showAddModal, setShowAddModal] = useState(false);

    const [savingQuestion, setSavingQuestion] = useState(false);

    useEffect(() => {

        loadDashboard();

    }, []);

    /*
    =====================================
    Load Dashboard
    =====================================
    */

    const loadDashboard = async () => {

        try {

            const [

                dashboard,

                users,

                questions

            ] = await Promise.all([

                getAdminDashboard(),

                getAllUsers(),

                getAllQuestions()

            ]);

            setStats({

                users: dashboard.totalUsers,

                questions: dashboard.totalQuestions,

                mockTests: dashboard.totalTests,

                attempts: dashboard.totalTests

            });

            setUsers(users);

            setQuestions(questions);

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    /*
    =====================================
    Add Question
    =====================================
    */

    const handleAddQuestion = async (formData) => {

        try {

            setSavingQuestion(true);

            await addQuestion(formData);

            alert("Question added successfully.");

            setShowAddModal(false);

            loadDashboard();

        }

        catch (err) {

            console.log(err);

            alert("Unable to add question.");

        }

        finally {

            setSavingQuestion(false);

        }

    };

    if (loading) {

        return (

            <MainLayout>

                <div className="container-fluid py-5 text-center">

                    <h4>

                        Loading Admin Dashboard...

                    </h4>

                </div>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="container-fluid py-4">

                <h1 className="fw-bold mb-4">

                    🛠 Admin Dashboard

                </h1>

                <AdminStats

                    stats={stats}

                />

                <QuickActions

                    onAddQuestion={() =>

                        setShowAddModal(true)

                    }

                />

                <QuestionTable

                    questions={questions}

                />

                <RecentUsers

                    users={users.slice(0, 5)}

                />

            </div>

            {

                showAddModal && (

                    <div

                        className="modal fade show"

                        style={{

                            display: "block",

                            backgroundColor: "rgba(0,0,0,0.5)"

                        }}

                    >

                        <div className="modal-dialog modal-lg">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h5 className="modal-title">

                                        ➕ Add Question

                                    </h5>

                                    <button

                                        type="button"

                                        className="btn-close"

                                        onClick={() =>

                                            setShowAddModal(false)

                                        }

                                    ></button>

                                </div>

                                <div className="modal-body">

                                    <QuestionForm

                                        onSubmit={

                                            handleAddQuestion

                                        }

                                        loading={

                                            savingQuestion

                                        }

                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                )

            }

        </MainLayout>

    );

}

export default AdminDashboard;