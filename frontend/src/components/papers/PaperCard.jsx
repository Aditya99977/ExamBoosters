import React from "react";

const PaperCard = ({ paper, onDownload }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-0">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-start mb-2">

            <h5 className="card-title mb-0">
              {paper.title}
            </h5>

            <span
              className={`badge ${
                paper.status === "Published"
                  ? "bg-success"
                  : "bg-secondary"
              }`}
            >
              {paper.status}
            </span>

          </div>

          <hr />

          <p className="mb-2">
            <strong>Exam:</strong> {paper.exam}
          </p>

          <p className="mb-2">
            <strong>Subject:</strong> {paper.subject}
          </p>

          <p className="mb-2">
            <strong>Year:</strong> {paper.year}
          </p>

          <p className="text-muted">
            {paper.description}
          </p>

        </div>

        <div className="card-footer bg-white border-0">

          <button
            className="btn btn-primary w-100"
            onClick={() => onDownload(paper._id)}
          >
            📥 Download PDF
          </button>

        </div>

      </div>
    </div>
  );
};

export default PaperCard;