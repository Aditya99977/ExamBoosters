import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="section">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <span className="badge bg-primary mb-3">

                            India's Smart Government Exam Platform

                        </span>

                        <h1 className="display-3 fw-bold">

                            Crack Your Dream Government Job

                            <span className="text-primary">

                                {" "}With Confidence

                            </span>

                        </h1>

                        <p className="lead my-4">

                            Practice thousands of questions, take realistic
                            mock tests, monitor your progress, and prepare
                            smarter with ExamBooster.

                        </p>

                        <div className="d-flex gap-3 flex-wrap">

                            <Link
                                to="/register"
                                className="btn btn-primary btn-lg rounded-pill px-4"
                            >

                                Get Started

                            </Link>

                            <Link
                                to="/login"
                                className="btn btn-outline-primary btn-lg rounded-pill px-4"
                            >

                                Login

                            </Link>

                        </div>

                    </div>

                    <div className="col-lg-6 text-center mt-5 mt-lg-0">

                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                            className="img-fluid rounded-4 shadow"
                            alt="Students studying together"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;