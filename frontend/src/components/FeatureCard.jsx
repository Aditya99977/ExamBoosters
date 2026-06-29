function FeatureCard({ icon, title, description }) {

    return (

        <div className="col-lg-3 col-md-6 mb-4">

            <div className="card border-0 shadow-sm h-100 rounded-4">

                <div className="card-body text-center p-4">

                    <div
                        className="display-4 mb-3"
                    >

                        {icon}

                    </div>

                    <h4 className="fw-bold">

                        {title}

                    </h4>

                    <p className="text-muted">

                        {description}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default FeatureCard;