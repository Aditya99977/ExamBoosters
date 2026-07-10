import React from "react";

const PaperTable = ({
  papers,
  onEdit,
  onDelete,
  onDownload,
}) => {
  if (!papers || papers.length === 0) {
    return (
      <div className="alert alert-info">
        No papers found.
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-header">
        <h5 className="mb-0">Previous Year Papers</h5>
      </div>

      <div className="card-body p-0">

        <div className="table-responsive">

          <table className="table table-striped table-hover mb-0">

            <thead className="table-dark">

              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Exam</th>
                <th>Subject</th>
                <th>Year</th>
                <th>Status</th>
                <th>Download</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {papers.map((paper, index) => (

                <tr key={paper._id}>

                  <td>{index + 1}</td>

                  <td>{paper.title}</td>

                  <td>{paper.exam}</td>

                  <td>{paper.subject}</td>

                  <td>{paper.year}</td>

                  <td>

                    <span
                      className={`badge ${
                        paper.status === "Published"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {paper.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => onDownload(paper._id)}
                    >
                      Download
                    </button>

                  </td>

                  <td>

                    <div className="d-flex gap-2">

                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => onEdit(paper)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(paper)}
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default PaperTable;