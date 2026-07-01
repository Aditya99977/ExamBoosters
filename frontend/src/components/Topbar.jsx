function Topbar() {

    return (

        <div className="d-flex justify-content-between align-items-center mb-4">

            <div>

                <h2 className="fw-bold">

                    Student Dashboard

                </h2>

                <p className="text-muted">

                    Welcome back 👋

                </p>

            </div>

            <div>

                <span className="badge bg-success p-2">

                    Active Student

                </span>

            </div>

        </div>

    );

}

export default Topbar;