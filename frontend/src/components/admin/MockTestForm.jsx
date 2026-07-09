import React, { useEffect, useState } from "react";

const MockTestForm = ({ onSubmit, selectedTest, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    exam: "",
    subject: "",
    duration: "",
    totalMarks: "",
    passingMarks: "",
    negativeMarking: "",
    status: "Draft",
  });

  useEffect(() => {
    if (selectedTest) {
      setFormData({
        title: selectedTest.title || "",
        description: selectedTest.description || "",
        exam: selectedTest.exam || "",
        subject: selectedTest.subject || "",
        duration: selectedTest.duration || "",
        totalMarks: selectedTest.totalMarks || "",
        passingMarks: selectedTest.passingMarks || "",
        negativeMarking: selectedTest.negativeMarking || "",
        status: selectedTest.status || "Draft",
      });
    }
  }, [selectedTest]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      title: "",
      description: "",
      exam: "",
      subject: "",
      duration: "",
      totalMarks: "",
      passingMarks: "",
      negativeMarking: "",
      status: "Draft",
    });
  };

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">
          {selectedTest ? "Edit Mock Test" : "Create Mock Test"}
        </h5>
      </div>

      <div className="card-body">

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Title</label>

            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Description</label>

            <textarea
              className="form-control"
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label>Exam</label>

              <input
                type="text"
                className="form-control"
                name="exam"
                value={formData.exam}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Subject</label>

              <input
                type="text"
                className="form-control"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="row">

            <div className="col-md-3 mb-3">
              <label>Duration (min)</label>

              <input
                type="number"
                className="form-control"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label>Total Marks</label>

              <input
                type="number"
                className="form-control"
                name="totalMarks"
                value={formData.totalMarks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label>Passing Marks</label>

              <input
                type="number"
                className="form-control"
                name="passingMarks"
                value={formData.passingMarks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-3 mb-3">
              <label>Negative Marking</label>

              <input
                type="number"
                step="0.25"
                className="form-control"
                name="negativeMarking"
                value={formData.negativeMarking}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="mb-4">
            <label>Status</label>

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

          <button
            type="submit"
            className="btn btn-success me-2"
          >
            {selectedTest ? "Update Mock Test" : "Create Mock Test"}
          </button>

          {selectedTest && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}

        </form>

      </div>
    </div>
  );
};

export default MockTestForm;