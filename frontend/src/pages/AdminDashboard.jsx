import { useEffect, useRef, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import AdminStats from "../components/admin/AdminStats";
import QuickActions from "../components/admin/QuickActions";
import QuestionTable from "../components/admin/QuestionTable";
import RecentUsers from "../components/admin/RecentUsers";
import QuestionForm from "../components/admin/QuestionForm";
import DeleteConfirmation from "../components/admin/DeleteConfirmation";
import CsvUploadModal from "../components/admin/CsvUploadModal";

import {

    getAdminDashboard,

    getAllUsers,

    getAllQuestions,

    addQuestion,

    updateQuestion,

    deleteQuestion,

    uploadCSV

} from "../services/adminService";

function AdminDashboard() {

    const [stats, setStats] = useState(null);

    const [questions, setQuestions] = useState([]);

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [savingQuestion, setSavingQuestion] = useState(false);

    const [deletingQuestion, setDeletingQuestion] = useState(false);

    const [uploadingCSV, setUploadingCSV] = useState(false);

    const [showQuestionModal, setShowQuestionModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [showCsvModal, setShowCsvModal] = useState(false);

    const [editingQuestion, setEditingQuestion] = useState(null);

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    /*
    =====================================
    Section Refs
    =====================================
    */

    const questionSectionRef = useRef(null);

    const userSectionRef = useRef(null);

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
    Manage Questions
    =====================================
    */

    const handleManageQuestions = () => {

        questionSectionRef.current?.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    };

    /*
    =====================================
    View Users
    =====================================
    */

    const handleViewUsers = () => {

        userSectionRef.current?.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    };

    /*
    =====================================
    Upload CSV
    =====================================
    */

    const handleManageMockTests = () => {

        setShowCsvModal(true);

    };

    /*
    =====================================
    Save Question
    =====================================
    */

    const handleSaveQuestion = async (formData) => {

        try {

            setSavingQuestion(true);

            if (editingQuestion) {

                await updateQuestion(

                    editingQuestion._id,

                    formData

                );

                alert(

                    "Question updated successfully."

                );

            }

            else {

                await addQuestion(formData);

                alert(

                    "Question added successfully."

                );

            }

            setShowQuestionModal(false);

            setEditingQuestion(null);

            await loadDashboard();

        }

        catch (err) {

            console.log(err);

            alert(

                err.response?.data?.message ||

                "Operation failed."

            );

        }

        finally {

            setSavingQuestion(false);

        }

    };

    /*
    =====================================
    Edit Question
    =====================================
    */

    const handleEditQuestion = (question) => {

        setEditingQuestion(question);

        setShowQuestionModal(true);

    };

    /*
    =====================================
    Delete Question
    =====================================
    */

    const handleDeleteClick = (question) => {

        setSelectedQuestion(question);

        setShowDeleteModal(true);

    };

    /*
    =====================================
    Confirm Delete
    =====================================
    */

    const confirmDelete = async () => {

        try {

            setDeletingQuestion(true);

            await deleteQuestion(

                selectedQuestion._id

            );

            alert(

                "Question deleted successfully."

            );

            setShowDeleteModal(false);

            setSelectedQuestion(null);

            await loadDashboard();

        }

        catch (err) {

            console.log(err);

            alert(

                "Unable to delete question."

            );

        }

        finally {

            setDeletingQuestion(false);

        }

    };

    /*
    =====================================
    Upload CSV File
    =====================================
    */

    const handleUploadCSV = async (file) => {

        try {

            setUploadingCSV(true);

            const data = await uploadCSV(file);

            alert(data.message);

            setShowCsvModal(false);

            await loadDashboard();

        }

        catch (err) {

            console.log(err);

            alert(

                err.response?.data?.message ||

                "CSV Upload Failed."

            );

        }

        finally {

            setUploadingCSV(false);

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

                onAddQuestion={() => {

                    setEditingQuestion(null);

                    setShowQuestionModal(true);

                }}

                onManageQuestions={

                    handleManageQuestions

                }

                onManageMockTests={

                    handleManageMockTests

                }

                onViewUsers={

                    handleViewUsers

                }

            />

            <div ref={questionSectionRef}>

                <QuestionTable

                    questions={questions}

                    onEdit={handleEditQuestion}

                    onDelete={handleDeleteClick}

                />

            </div>

            <div ref={userSectionRef}>

                <RecentUsers

                    users={users.slice(0, 5)}

                />

            </div>

        </div>

        {

            showQuestionModal && (

                <div

                    className="modal fade show"

                    style={{

                        display: "block",

                        backgroundColor:

                            "rgba(0,0,0,0.5)"

                    }}

                >

                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">

                                    {

                                        editingQuestion

                                            ? "✏️ Edit Question"

                                            : "➕ Add Question"

                                    }

                                </h5>

                                <button

                                    type="button"

                                    className="btn-close"

                                    onClick={() => {

                                        setShowQuestionModal(false);

                                        setEditingQuestion(null);

                                    }}

                                ></button>

                            </div>

                            <div className="modal-body">

                                <QuestionForm

                                    initialData={

                                        editingQuestion || {}

                                    }

                                    onSubmit={

                                        handleSaveQuestion

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

        {

            showDeleteModal && (

                <DeleteConfirmation

                    title="Delete Question"

                    message={`Are you sure you want to delete "${selectedQuestion?.question}"?`}

                    loading={

                        deletingQuestion

                    }

                    onCancel={() => {

                        setShowDeleteModal(false);

                        setSelectedQuestion(null);

                    }}

                    onConfirm={

                        confirmDelete

                    }

                />

            )

        }

        {

            showCsvModal && (

                <CsvUploadModal

                    loading={

                        uploadingCSV

                    }

                    onUpload={

                        handleUploadCSV

                    }

                    onClose={() =>

                        setShowCsvModal(false)

                    }

                />

            )

        }

    </MainLayout>

);

}

export default AdminDashboard;