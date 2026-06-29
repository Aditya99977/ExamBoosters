import { FaBookOpen, FaChartLine, FaRobot, FaClipboardCheck } from "react-icons/fa";

import FeatureCard from "./FeatureCard";

function Features() {

    return (

        <section className="section">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold">

                        Why Students Love ExamBooster

                    </h2>

                    <p className="text-muted">

                        Everything you need to crack government examinations.

                    </p>

                </div>

                <div className="row">

                    <FeatureCard

                        icon={<FaBookOpen />}

                        title="Question Bank"

                        description="Practice thousands of exam-oriented questions."

                    />

                    <FeatureCard

                        icon={<FaClipboardCheck />}

                        title="Mock Tests"

                        description="Attempt realistic mock tests anytime."

                    />

                    <FeatureCard

                        icon={<FaChartLine />}

                        title="Performance Analytics"

                        description="Track your improvement after every test."

                    />

                    <FeatureCard

                        icon={<FaRobot />}

                        title="AI Assistant"

                        description="Personalized learning recommendations."

                    />

                </div>

            </div>

        </section>

    );

}

export default Features;