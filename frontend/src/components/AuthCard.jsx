function AuthCard({

    title,

    subtitle,

    children

}) {

    return (

        <div className="row justify-content-center">

            <div className="col-lg-5 col-md-7">

                <div

                    className="card border-0 shadow-lg rounded-4"

                >

                    <div className="card-body p-5">

                        <div className="text-center mb-4">

                            <h2 className="fw-bold text-primary">

                                ExamBooster

                            </h2>

                            <h4 className="fw-bold mt-3">

                                {title}

                            </h4>

                            <p className="text-muted">

                                {subtitle}

                            </p>

                        </div>

                        {children}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AuthCard;