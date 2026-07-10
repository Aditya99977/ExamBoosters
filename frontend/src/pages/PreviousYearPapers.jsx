import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

import PaperCard from "../components/papers/PaperCard";
import PaperFilters from "../components/papers/PaperFilters";

import {
    getAllPapers,
    downloadPaper
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
    Loading
    =====================================
    */

    if (loading) {

        return (

            <MainLayout>

                <div className="container py-5 text-center">

                    <h3>

                        Loading Previous Year Papers...

                    </h3>

                </div>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="container py-4">

                {/* Header */}

                <div className="mb-4">

                    <h2 className="fw-bold">

                        📄 Previous Year Papers

                    </h2>

                    <p className="text-muted">

                        Browse, filter and download previous year papers for your exam preparation.

                    </p>

                </div>

                {/* Filters */}

                <PaperFilters

                    filters={filters}

                    setFilters={setFilters}

                />

                {/* Cards */}

                <div className="row">

                    {

                        filteredPapers.length > 0 ?

                            filteredPapers.map((paper) => (

                                <PaperCard

                                    key={paper._id}

                                    paper={paper}

                                    onDownload={handleDownload}

                                />

                            ))

                            :

                            (

                                <div className="col-12">

                                    <div className="alert alert-info">

                                        No papers found.

                                    </div>

                                </div>

                            )

                    }

                </div>

            </div>

        </MainLayout>

    );

}

export default PreviousYearPapers;