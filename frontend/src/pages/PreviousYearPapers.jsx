import { useEffect, useMemo, useState } from "react";
import {
    BookOpen,
    Download,
    Search,
} from "lucide-react";

import MainLayout from "../layouts/MainLayout";

import PaperCard from "../components/papers/PaperCard";
import PaperFilters from "../components/papers/PaperFilters";

import {
    getAllPapers,
    downloadPaper,
} from "../services/paperService";

function PreviousYearPapers() {

    /*
    =====================================
    States
    =====================================
    */

    const [papers, setPapers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({

        search: "",

        exam: "",

        subject: "",

        year: "",

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

            const response = await getAllPapers();

            const publishedPapers = response.papers.filter(

                (paper) => paper.status === "Published"

            );

            setPapers(publishedPapers);

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
    Download
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

            link.download = "Previous-Year-Paper.pdf";

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

    const filteredPapers = useMemo(() => {

        return papers.filter((paper) => {

            return (

                paper.title
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())

                &&

                (
                    filters.exam === "" ||

                    paper.exam
                        .toLowerCase()
                        .includes(filters.exam.toLowerCase())
                )

                &&

                (
                    filters.subject === "" ||

                    paper.subject
                        .toLowerCase()
                        .includes(filters.subject.toLowerCase())
                )

                &&

                (
                    filters.year === "" ||

                    paper.year.toString() === filters.year
                )

            );

        });

    }, [papers, filters]);

    /*
    =====================================
    Loading
    =====================================
    */

    if (loading) {

        return (

            <MainLayout>

                <div
                    className="container py-5"
                >

                    <div
                        className="rounded-4 p-5 text-center"
                        style={{
                            background: "#131D31",
                            border:
                                "1px solid rgba(255,255,255,.08)",
                        }}
                    >

                        <div
                            className="spinner-border text-primary mb-4"
                        />

                        <h3 className="text-white">

                            Loading Previous Year Papers...

                        </h3>

                        <p className="text-secondary mb-0">

                            Please wait while we fetch the latest papers.

                        </p>

                    </div>

                </div>

            </MainLayout>

        );

    }    return (

        <MainLayout>

            <div className="container py-4">

                {/* Hero */}

                <div
                    className="rounded-4 overflow-hidden position-relative mb-5"
                    style={{
                        background:
                            "linear-gradient(135deg,#2563EB 0%,#1D4ED8 45%,#0F172A 100%)",
                    }}
                >

                    <div
                        className="position-absolute"
                        style={{
                            width: 260,
                            height: 260,
                            right: -80,
                            top: -80,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,.08)",
                        }}
                    />

                    <div className="position-relative p-5">

                        <span className="badge bg-light text-primary rounded-pill px-3 py-2 mb-3">

                            Previous Year Papers

                        </span>

                        <h1
                            className="text-white fw-bold mb-3"
                            style={{
                                fontSize:
                                    "clamp(2rem,4vw,3.2rem)",
                            }}
                        >

                            Practice With Real Exam Papers

                        </h1>

                        <p
                            className="text-white-50 mb-0"
                            style={{
                                maxWidth: "700px",
                            }}
                        >

                            Browse official previous year papers,
                            filter by exam and subject, and download
                            PDFs to strengthen your preparation.

                        </p>

                    </div>

                </div>

                {/* Statistics */}

                <div className="row g-4 mb-5">

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 h-100"
                            style={{
                                background: "#131D31",
                                border:
                                    "1px solid rgba(255,255,255,.08)",
                            }}
                        >

                            <BookOpen
                                size={30}
                                className="text-primary mb-3"
                            />

                            <h2 className="text-white fw-bold">

                                {papers.length}

                            </h2>

                            <p className="text-secondary mb-0">

                                Available Papers

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 h-100"
                            style={{
                                background: "#131D31",
                                border:
                                    "1px solid rgba(255,255,255,.08)",
                            }}
                        >

                            <Search
                                size={30}
                                className="text-primary mb-3"
                            />

                            <h2 className="text-white fw-bold">

                                {filteredPapers.length}

                            </h2>

                            <p className="text-secondary mb-0">

                                Matching Results

                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div
                            className="rounded-4 p-4 h-100"
                            style={{
                                background: "#131D31",
                                border:
                                    "1px solid rgba(255,255,255,.08)",
                            }}
                        >

                            <Download
                                size={30}
                                className="text-primary mb-3"
                            />

                            <h2 className="text-white fw-bold">

                                PDF

                            </h2>

                            <p className="text-secondary mb-0">

                                Download Format

                            </p>

                        </div>

                    </div>

                </div>

                {/* Filters */}

                <PaperFilters

                    filters={filters}

                    setFilters={setFilters}

                />

                {/* Papers */}

                {filteredPapers.length > 0 ? (

                    <div className="row g-4">

                        {filteredPapers.map((paper) => (

                            <PaperCard

                                key={paper._id}

                                paper={paper}

                                onDownload={handleDownload}

                            />

                        ))}

                    </div>

                ) : (

                    <div
                        className="rounded-4 p-5 text-center"
                        style={{
                            background: "#131D31",
                            border:
                                "1px solid rgba(255,255,255,.08)",
                        }}
                    >

                        <BookOpen
                            size={70}
                            className="text-primary mb-4"
                        />

                        <h3 className="text-white fw-bold">

                            No Papers Found

                        </h3>

                        <p
                            className="text-secondary mx-auto mb-0"
                            style={{
                                maxWidth: "550px",
                            }}
                        >

                            We couldn't find any previous year
                            papers matching your current filters.
                            Try adjusting your search or clearing
                            the applied filters.

                        </p>

                    </div>

                )}

            </div>

        </MainLayout>

    );

}

export default PreviousYearPapers;