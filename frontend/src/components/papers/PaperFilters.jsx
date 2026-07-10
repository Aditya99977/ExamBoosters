import React from "react";

const PaperFilters = ({
  filters,
  setFilters,
}) => {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      exam: "",
      subject: "",
      year: "",
    });
  };

  return (
    <div className="card shadow-sm mb-4">

      <div className="card-header">
        <h5 className="mb-0">Filter Papers</h5>
      </div>

      <div className="card-body">

        <div className="row">

          {/* Search */}

          <div className="col-md-3 mb-3">
            <label className="form-label">
              Search
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Paper Title..."
              name="search"
              value={filters.search}
              onChange={handleChange}
            />
          </div>

          {/* Exam */}

          <div className="col-md-3 mb-3">
            <label className="form-label">
              Exam
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="SSC CGL"
              name="exam"
              value={filters.exam}
              onChange={handleChange}
            />
          </div>

          {/* Subject */}

          <div className="col-md-3 mb-3">
            <label className="form-label">
              Subject
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Reasoning"
              name="subject"
              value={filters.subject}
              onChange={handleChange}
            />
          </div>

          {/* Year */}

          <div className="col-md-3 mb-3">
            <label className="form-label">
              Year
            </label>

            <input
              type="number"
              className="form-control"
              placeholder="2025"
              name="year"
              value={filters.year}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="text-end">

          <button
            className="btn btn-secondary"
            onClick={clearFilters}
          >
            Clear Filters
          </button>

        </div>

      </div>

    </div>
  );
};

export default PaperFilters;