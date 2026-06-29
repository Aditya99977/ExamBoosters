import { FaShieldAlt, FaLaptopCode, FaUsers, FaClock } from "react-icons/fa";

function WhyChooseUs() {

    const reasons = [

        {
            icon: <FaShieldAlt />,
            title: "Trusted Platform",
            description: "Practice with reliable and exam-focused questions."
        },

        {
            icon: <FaLaptopCode />,
            title: "Modern Learning",
            description: "Interactive dashboard with real-time performance tracking."
        },

        {
            icon: <FaUsers />,
            title: "Community Driven",
            description: "Built for thousands of government exam aspirants."
        },

        {
            icon: <FaClock />,
            title: "Study Anytime",
            description: "Access practice tests and analytics 24/7."
        }

    ];

    return (

        <section className="section">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">

                        Why Choose ExamBooster?

                    </h2>

                    <p className="text-muted">

                        Everything you need to prepare smarter and succeed.

                    </p>

                </div>

                <div className="row">

                    {

                        reasons.map((item, index) => (

                            <div className="col-md-6 col-lg-3 mb-4" key={index}>

                                <div className="card border-0 shadow h-100 rounded-4">

                                    <div className="card-body text-center p-4">

                                        <div className="display-5 text-primary mb-3">

                                            {item.icon}

                                        </div>

                                        <h5 className="fw-bold">

                                            {item.title}

                                        </h5>

                                        <p className="text-muted">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default WhyChooseUs;