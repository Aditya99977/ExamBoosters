function DeleteConfirmation({

    title = "Delete",

    message = "Are you sure?",

    loading = false,

    onCancel,

    onConfirm

}) {

    return (

        <div

            className="modal fade show"

            style={{

                display: "block",

                backgroundColor: "rgba(0,0,0,0.5)"

            }}

        >

            <div className="modal-dialog modal-dialog-centered">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title text-danger">

                            {title}

                        </h5>

                        <button

                            type="button"

                            className="btn-close"

                            onClick={onCancel}

                        ></button>

                    </div>

                    <div className="modal-body">

                        <p className="mb-0">

                            {message}

                        </p>

                    </div>

                    <div className="modal-footer">

                        <button

                            className="btn btn-secondary"

                            onClick={onCancel}

                            disabled={loading}

                        >

                            Cancel

                        </button>

                        <button

                            className="btn btn-danger"

                            onClick={onConfirm}

                            disabled={loading}

                        >

                            {

                                loading

                                    ? "Deleting..."

                                    : "Delete"

                            }

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DeleteConfirmation;