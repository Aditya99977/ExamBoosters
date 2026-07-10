import React, { useState, useEffect } from "react";

const PaperForm = ({
  onSubmit,
  editingPaper,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    exam: "",
    subject: "",
    year: "",
    description: "",
    status: "Draft",
    pdf: null,
  });

  useEffect(() => {
    if (editingPaper) {
      setFormData({
        title: editingPaper.title || "",
        exam: editingPaper.exam || "",
        subject: editingPaper.subject || "",
        year: editingPaper.year || "",
        description: editingPaper.description || "",
        status: editingPaper.status || "Draft",
        pdf: null,
      });
    }
  }, [editingPaper]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "pdf") {
      setFormData({
        ...formData,
        pdf: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("exam", formData.exam);
    data.append("subject", formData.subject);
    data.append("year", formData.year);
    data.append("description", formData.description);
    data.append("status", formData.status);

    if (formData.pdf) {
      data.append("pdf", formData.pdf);
    }

    onSubmit(data);

    if (!editingPaper) {
      setFormData({
        title: "",
        exam: "",
        subject: "",
        year: "",
        description: "",
        status: "Draft",
        pdf: null,
      });
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header">
        <h5 className="mb-0">
          {editingPaper ? "Edit Paper" : "Upload New Paper"}
        </h5>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Paper Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">

            <div className="col-md-4 mb-3">
              <label className="form-label">Exam</label>
              <input
                type="text"
                className="form-control"
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Year</label>
              <input
                type="number"
                className="form-control"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>

            <textarea
              rows="4"
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>

            <select
              className="form-select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload PDF</label>

            <input
              type="file"
              className="form-control"
              accept=".pdf"
              name="pdf"
              onChange={handleChange}
            />
          </div>

          <div className="d-flex gap-2">

            <button
              type="submit"
              className="btn btn-primary"
            >
              {editingPaper ? "Update Paper" : "Upload Paper"}
            </button>

            {editingPaper && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
            )}

          </div>

        </form>
      </div>
    </div>
  );
};

export default PaperForm;