import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function NotFound() {

    return (

        <MainLayout>

            <div className="text-center mt-5">

                <h1 className="display-1 fw-bold text-danger">

                    404

                </h1>

                <h3>

                    Page Not Found

                </h3>

                <p className="lead">

                    The page you are looking for doesn't exist.

                </p>

                <Link to="/" className="btn btn-primary mt-3">

                    Go Back Home

                </Link>

            </div>

        </MainLayout>

    );

}

export default NotFound;