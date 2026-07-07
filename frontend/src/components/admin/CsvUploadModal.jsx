import { useState } from "react";

function CsvUploadModal({

    loading,

    onUpload,

    onClose

}) {

    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!file) {

            alert("Please select a CSV file.");

            return;

        }

        onUpload(file);

    };

    return (

        <div

            className="modal fade show"

            style={{

                display: "block",

                backgroundColor: "rgba(0,0,0,0.5)"

            }}

        >

            <div className="modal-dialog">

                <div className="modal-content">

                    <div className="modal-header">

                        <h5 className="modal-title">

                            📤 Upload Questions CSV

                        </h5>

                        <button

                            className="btn-close"

                            onClick={onClose}

                        ></button>

                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="modal-body">

                            <input

                                type="file"

                                accept=".csv"

                                className="form-control"

                                onChange={(e) =>

                                    setFile(

                                        e.target.files[0]

                                    )

                                }

                            />

                        </div>

                        <div className="modal-footer">

                            <button

                                type="button"

                                className="btn btn-secondary"

                                onClick={onClose}

                            >

                                Cancel

                            </button>

                            <button

                                className="btn btn-primary"

                                disabled={loading}

                            >

                                {

                                    loading

                                        ? "Uploading..."

                                        : "Upload"

                                }

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default CsvUploadModal;