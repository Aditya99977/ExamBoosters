import React from "react";

const DeletePaperModal = ({
  show,
  paper,
  onClose,
  onConfirm,
}) => {
  if (!show || !paper) return null;

  return (
    <>
      <div
        className="modal fade show"
        style={{
          display: "block",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">
                Delete Paper
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">

              <p>
                Are you sure you want to delete this paper?
              </p>

              <div className="card">
                <div className="card-body">

                  <h6>{paper.title}</h6>

                  <p className="mb-1">
                    <strong>Exam:</strong> {paper.exam}
                  </p>

                  <p className="mb-1">
                    <strong>Subject:</strong> {paper.subject}
                  </p>

                  <p className="mb-0">
                    <strong>Year:</strong> {paper.year}
                  </p>

                </div>
              </div>

              <div className="alert alert-warning mt-3 mb-0">
                This action cannot be undone.
              </div>

            </div>

            <div className="modal-footer">

              <button
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                className="btn btn-danger"
                onClick={() => onConfirm(paper._id)}
              >
                Delete Paper
              </button>

            </div>

          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default DeletePaperModal;    