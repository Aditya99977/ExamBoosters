import MainLayout from "../layouts/MainLayout";

function AdminDashboard() {

    return (

        <MainLayout>

            <div className="text-center mt-5">

                <h1 className="display-5 fw-bold">

                    Admin Dashboard

                </h1>

                <p className="lead">

                    Manage questions, users, tests, and platform analytics.

                </p>

            </div>

        </MainLayout>

    );

}

export default AdminDashboard;