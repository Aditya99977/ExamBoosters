import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import PaperTable from "../components/papers/PaperTable";
import PaperForm from "../components/papers/PaperForm";
import DeletePaperModal from "../components/papers/DeletePaperModal";
import PaperFilters from "../components/papers/PaperFilters";

import {
    uploadPaper,
    getAllPapers,
    getPaperById,
    updatePaper,
    deletePaper,
    downloadPaper,
    getPaperStatistics
} from "../services/paperService";

function PaperManagement() {

    /*
    =====================================
    States
    =====================================
    */

    const [papers, setPapers] = useState([]);

    const [statistics, setStatistics] = useState(null);

    const [loading, setLoading] = useState(true);

    const [selectedPaper, setSelectedPaper] = useState(null);

    const [editingPaper, setEditingPaper] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [filters, setFilters] = useState({

        search: "",

        exam: "",

        subject: "",

        year: ""

    });

    /*
    =====================================
    Initial Load
    =====================================
    */

    useEffect(() => {

        loadPapers();

    }, []);

    /*
    =====================================
    Load Papers
    =====================================
    */

    const loadPapers = async () => {

        try {

            setLoading(true);

            const [paperResponse, statsResponse] = await Promise.all([

                getAllPapers(),

                getPaperStatistics()

            ]);

            setPapers(paperResponse.papers || []);

            setStatistics(statsResponse.statistics);

        }

        catch (err) {

            console.log(err);

            alert("Unable to load papers.");

        }

        finally {

            setLoading(false);

        }

    };

    /*
    =====================================
    Upload / Update Paper
    =====================================
    */

    const handleSavePaper = async (formData) => {

        try {

            if (editingPaper) {

                await updatePaper(

                    editingPaper._id,

                    formData

                );

                alert("Paper updated successfully.");

            }

            else {

                await uploadPaper(formData);

                alert("Paper uploaded successfully.");

            }

            setShowForm(false);

            setEditingPaper(null);

            await loadPapers();

        }

        catch (err) {

            console.log(err);

            alert(

                err.response?.data?.message ||

                "Unable to save paper."

            );

        }

    };

    /*
    =====================================
    Edit Paper
    =====================================
    */

    const handleEdit = async (paper) => {

        try {

            const response = await getPaperById(

                paper._id

            );

            setEditingPaper(response.paper);

            setShowForm(true);

        }

        catch (err) {

            console.log(err);

            alert("Unable to load paper.");

        }

    };

    /*
    =====================================
    Delete Click
    =====================================
    */

    const handleDelete = (paper) => {

        setSelectedPaper(paper);

        setShowDeleteModal(true);

    };

    /*
    =====================================
    Confirm Delete
    =====================================
    */

    const confirmDelete = async (id) => {

        try {

            await deletePaper(id);

            alert("Paper deleted successfully.");

            setShowDeleteModal(false);

            setSelectedPaper(null);

            await loadPapers();

        }

        catch (err) {

            console.log(err);

            alert("Unable to delete paper.");

        }

    };

    /*
    =====================================
    Download Paper
    =====================================
    */

    const handleDownload = async (id) => {

        try {

            const response = await downloadPaper(id);

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");

            link.href = url;

            link.setAttribute(

                "download",

                "Previous-Year-Paper.pdf"

            );

            document.body.appendChild(link);

            link.click();

            link.remove();

        }

        catch (err) {

            console.log(err);

            alert("Unable to download paper.");

        }

    };
        /*
    =====================================
    Filter Papers
    =====================================
    */

    const filteredPapers = papers.filter((paper) => {

        return (

            paper.title
                .toLowerCase()
                .includes(filters.search.toLowerCase())

            &&

            (filters.exam === "" ||

                paper.exam
                    .toLowerCase()
                    .includes(filters.exam.toLowerCase()))

            &&

            (filters.subject === "" ||

                paper.subject
                    .toLowerCase()
                    .includes(filters.subject.toLowerCase()))

            &&

            (filters.year === "" ||

                paper.year.toString() === filters.year)

        );

    });

    /*
    =====================================
    Loading Screen
    =====================================
    */

    if (loading) {

        return (

            <MainLayout>

                <div className="container py-5 text-center">

                    <h3>Loading Previous Year Papers...</h3>

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

                        📄 Previous Year Papers

                    </h2>

                    <button

                        className="btn btn-success"

                        onClick={() => {

                            setEditingPaper(null);

                            setShowForm(true);

                        }}

                    >

                        ➕ Upload Paper

                    </button>

                </div>

                {/* ===============================
                    Statistics
                =============================== */}

                {

                    statistics && (

                        <div className="row mb-4">

                            <div className="col-md-3">

                                <div className="card shadow-sm">

                                    <div className="card-body text-center">

                                        <h6>Total Papers</h6>

                                        <h3>

                                            {statistics.totalPapers}

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

                                        <h6>Total Downloads</h6>

                                        <h3>

                                            {statistics.totalDownloads}

                                        </h3>

                                    </div>

                                </div>

                            </div>

                        </div>

                    )

                }

                {/* ===============================
                    Filters
                =============================== */}

                <PaperFilters

                    filters={filters}

                    setFilters={setFilters}

                />

                {/* ===============================
                    Paper Table
                =============================== */}

                <PaperTable

                    papers={filteredPapers}

                    onEdit={handleEdit}

                    onDelete={handleDelete}

                    onDownload={handleDownload}

                />
                                {/* ===============================
                    Create / Edit Paper Modal
                =============================== */}

                {

                    showForm && (

                        <div
                            className="modal fade show"
                            style={{
                                display: "block",
                                backgroundColor: "rgba(0,0,0,0.5)"
                            }}
                        >

                            <div className="modal-dialog modal-xl">

                                <div className="modal-content">

                                    <div className="modal-header">

                                        <h5>

                                            {

                                                editingPaper

                                                    ? "✏️ Edit Previous Year Paper"

                                                    : "📄 Upload Previous Year Paper"

                                            }

                                        </h5>

                                        <button

                                            className="btn-close"

                                            onClick={() => {

                                                setShowForm(false);

                                                setEditingPaper(null);

                                            }}

                                        />

                                    </div>

                                    <div className="modal-body">

                                        <PaperForm

                                            editingPaper={editingPaper}

                                            onSubmit={handleSavePaper}

                                            onCancel={() => {

                                                setShowForm(false);

                                                setEditingPaper(null);

                                            }}

                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    )

                }

                {/* ===============================
                    Delete Paper Modal
                =============================== */}

                <DeletePaperModal

                    show={showDeleteModal}

                    paper={selectedPaper}

                    onClose={() => {

                        setShowDeleteModal(false);

                        setSelectedPaper(null);

                    }}

                    onConfirm={confirmDelete}

                />

            </div>

        </MainLayout>

    );

}

export default PaperManagement;