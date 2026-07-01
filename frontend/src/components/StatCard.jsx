function StatCard({

    title,

    value,

    subtitle,

    icon,

    color

}) {

    return (

        <div className="col-lg-3 col-md-6 mb-4">

            <div
                className="card border-0 shadow-sm rounded-4 h-100"
            >

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-center">

                        <div>

                            <p className="text-muted mb-1">

                                {title}

                            </p>

                            <h2 className="fw-bold">

                                {value}

                            </h2>

                            <small
                                style={{ color }}
                            >

                                {subtitle}

                            </small>

                        </div>

                        <div
                            style={{
                                fontSize:"42px"
                            }}
                        >

                            {icon}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default StatCard;