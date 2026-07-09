import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import MockTestTable from "../components/admin/MockTestTable";
import MockTestForm from "../components/admin/MockTestForm";
import DeleteMockTestModal from "../components/admin/DeleteMockTestModal";
import CsvUploadModal from "../components/admin/CsvUploadModal";

import {
    getMockTests,
    createMockTest,
    updateMockTest,
    deleteMockTest,
    toggleMockTestStatus,
    getMockTestStatistics
} from "../services/mockTestService";

import { uploadCSV } from "../services/adminService";

function MockTestManagement() {

    /*
    =====================================
    States
    =====================================
    */

    const [mockTests, setMockTests] = useState([]);

    const [statistics, setStatistics] = useState(null);

    const [loading, setLoading] = useState(true);

    const [selectedTest, setSelectedTest] = useState(null);

    const [editingTest, setEditingTest] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [showCsvModal, setShowCsvModal] = useState(false);

    const [uploadingCSV, setUploadingCSV] = useState(false);

    /*
    =====================================
    Initial Load
    =====================================
    */

    useEffect(() => {

        loadMockTests();

    }, []);

    /*
    =====================================
    Load Mock Tests
    =====================================
    */

    const loadMockTests = async () => {

        try {

            setLoading(true);

            const [tests, stats] = await Promise.all([

                getMockTests(),

                getMockTestStatistics()

            ]);

            setMockTests(tests.data);

            setStatistics(stats.data);

        }

        catch (err) {

            console.log(err);

            alert("Unable to load mock tests.");

        }

        finally {

            setLoading(false);

        }

    };

    /*
    =====================================
    Save Mock Test
    =====================================
    */

    const handleSaveMockTest = async (formData) => {

        try {

            if (editingTest) {

                await updateMockTest(

                    editingTest._id,

                    formData

                );

                alert("Mock Test updated successfully.");

            }

            else {

                await createMockTest(formData);

                alert("Mock Test created successfully.");

            }

            setShowForm(false);

            setEditingTest(null);

            await loadMockTests();

        }

        catch (err) {

            console.log(err);

            alert(

                err.response?.data?.message ||

                "Unable to save mock test."

            );

        }

    };

    /*
    =====================================
    Edit Mock Test
    =====================================
    */

    const handleEdit = (mockTest) => {

        setEditingTest(mockTest);

        setShowForm(true);

    };

    /*
    =====================================
    Delete Click
    =====================================
    */

    const handleDelete = (mockTest) => {

        setSelectedTest(mockTest);

        setShowDeleteModal(true);

    };

    /*
    =====================================
    Confirm Delete
    =====================================
    */

    const confirmDelete = async (id) => {

        try {

            await deleteMockTest(id);

            alert("Mock Test deleted successfully.");

            setShowDeleteModal(false);

            setSelectedTest(null);

            await loadMockTests();

        }

        catch (err) {

            console.log(err);

            alert("Unable to delete mock test.");

        }

    };

    /*
    =====================================
    Publish / Unpublish
    =====================================
    */

    const handleToggleStatus = async (id) => {

        try {

            await toggleMockTestStatus(id);

            await loadMockTests();

        }

        catch (err) {

            console.log(err);

            alert("Unable to update status.");

        }

    };

    /*
    =====================================
    Upload CSV
    =====================================
    */

    const handleUploadCSV = async (file) => {

        try {

            setUploadingCSV(true);

            const data = await uploadCSV(file);

            alert(data.message);

            setShowCsvModal(false);

            await loadMockTests();

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
        /*
    =====================================
    Loading Screen
    =====================================
    */

    if (loading) {

        return (

            <MainLayout>

                <div className="container py-5 text-center">

                    <h3>Loading Mock Tests...</h3>

                </div>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="container-fluid py-4">

                {/* ===============================
                    Page Header
                =============================== */}

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2 className="fw-bold">

                        📚 Mock Test Management

                    </h2>

                    <div>

                        <button

                            className="btn btn-success me-2"

                            onClick={() => {

                                setEditingTest(null);

                                setShowForm(true);

                            }}

                        >

                            ➕ Create Mock Test

                        </button>

                        <button

                            className="btn btn-primary"

                            onClick={() =>

                                setShowCsvModal(true)

                            }

                        >

                            📤 Bulk CSV Upload

                        </button>

                    </div>

                </div>

                {/* ===============================
                    Statistics Cards
                =============================== */}

                {

                    statistics && (

                        <div className="row mb-4">

                            <div className="col-md-3">

                                <div className="card shadow-sm">

                                    <div className="card-body text-center">

                                        <h6>Total Tests</h6>

                                        <h3>

                                            {statistics.total}

                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="card shadow-sm">

                                    <div className="card-body text-center">

                                        <h6>Published</h6>

                                        <h3 className="text-success">

                                            {statistics.published}

                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="card shadow-sm">

                                    <div className="card-body text-center">

                                        <h6>Draft</h6>

                                        <h3 className="text-warning">

                                            {statistics.draft}

                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-3">

                                <div className="card shadow-sm">

                                    <div className="card-body text-center">

                                        <h6>

                                            Avg Questions

                                        </h6>

                                        <h3>

                                            {

                                                statistics.averageQuestions

                                            }

                                        </h3>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )

                }

                {/* ===============================
                    Mock Test Table
                =============================== */}

                <MockTestTable

                    mockTests={mockTests}

                    onEdit={handleEdit}

                    onDelete={handleDelete}

                    onToggleStatus={handleToggleStatus}

                />

                {/* ===============================
                    Create / Edit Modal
                =============================== */}

                {

                    showForm && (

                        <div

                            className="modal fade show"

                            style={{

                                display: "block",

                                backgroundColor:

                                    "rgba(0,0,0,0.5)"

                            }}

                        >

                            <div className="modal-dialog modal-xl">

                                <div className="modal-content">

                                    <div className="modal-header">

                                        <h5>

                                            {

                                                editingTest

                                                    ? "✏️ Edit Mock Test"

                                                    : "➕ Create Mock Test"

                                            }

                                        </h5>

                                        <button

                                            className="btn-close"

                                            onClick={() => {

                                                setShowForm(false);

                                                setEditingTest(null);

                                            }}

                                        />

                                    </div>

                                    <div className="modal-body">

                                        <MockTestForm

                                            selectedTest={editingTest}

                                            onSubmit={

                                                handleSaveMockTest

                                            }

                                            onCancel={() => {

                                                setShowForm(false);

                                                setEditingTest(null);

                                            }}

                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    )

                }
                                {/* ===============================
                    Delete Mock Test Modal
                =============================== */}

                <DeleteMockTestModal
                    show={showDeleteModal}
                    mockTest={selectedTest}
                    onClose={() => {
                        setShowDeleteModal(false);
                        setSelectedTest(null);
                    }}
                    onConfirm={confirmDelete}
                />

                {/* ===============================
                    CSV Upload Modal
                =============================== */}

                {
                    showCsvModal && (

                        <CsvUploadModal

                            loading={uploadingCSV}

                            onUpload={handleUploadCSV}

                            onClose={() =>
                                setShowCsvModal(false)
                            }

                        />

                    )
                }

            </div>

        </MainLayout>

    );

}

export default MockTestManagement;