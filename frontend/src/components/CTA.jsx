import { Link } from "react-router-dom";

function CTA() {

    return (

        <section className="section bg-primary text-white">

            <div className="container text-center">

                <h2 className="fw-bold mb-3">

                    Ready to Start Your Preparation?

                </h2>

                <p className="lead">

                    Join ExamBooster today and take the next step toward your dream government job.

                </p>

                <Link

                    to="/register"

                    className="btn btn-light btn-lg rounded-pill mt-3 px-5"

                >

                    Create Free Account

                </Link>

            </div>

        </section>

    );

}

export default CTA;