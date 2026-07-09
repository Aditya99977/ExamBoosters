import React from "react";

const DeleteMockTestModal = ({
  show,
  mockTest,
  onClose,
  onConfirm,
}) => {
  if (!show || !mockTest) return null;

  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">
                Delete Mock Test
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <p>
                Are you sure you want to delete:
              </p>

              <h5 className="text-danger">
                {mockTest.title}
              </h5>

              <p className="text-muted">
                This action cannot be undone.
              </p>
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
                onClick={() => onConfirm(mockTest._id)}
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteMockTestModal;