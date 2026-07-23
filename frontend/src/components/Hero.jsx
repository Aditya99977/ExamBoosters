import { ArrowRight, CheckCircle2, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const progressItems = [
    { label: "Quantitative aptitude", value: "78%", width: "78%" },
    { label: "Reasoning", value: "64%", width: "64%" },
    { label: "English", value: "82%", width: "82%" },
];

function Hero() {
    return (
        <section className="landing-hero" aria-labelledby="hero-heading">
            <div className="landing-orb landing-orb-left" />
            <div className="landing-orb landing-orb-right" />

            <div className="container position-relative">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <p className="hero-eyebrow">
                            <Sparkles size={16} aria-hidden="true" />
                            Public beta now open
                        </p>

                        <h1 id="hero-heading" className="hero-title">
                            A clearer path to
                            <span> exam success.</span>
                        </h1>

                        <p className="hero-copy">
                            VNAverse brings focused practice, realistic mock
                            tests, performance insights, and AI-guided support
                            into one calm learning experience for Indian exam
                            aspirants.
                        </p>

                        <div className="hero-actions">
                            <Link to="/register" className="hero-primary-action">
                                Start learning free
                                <ArrowRight size={19} aria-hidden="true" />
                            </Link>

                            <Link to="/login" className="hero-secondary-action">
                                Sign in to your account
                            </Link>
                        </div>

                        <ul className="hero-assurances" aria-label="Beta benefits">
                            <li>
                                <CheckCircle2 size={17} aria-hidden="true" />
                                Free during beta
                            </li>
                            <li>
                                <CheckCircle2 size={17} aria-hidden="true" />
                                No card required
                            </li>
                            <li>
                                <CheckCircle2 size={17} aria-hidden="true" />
                                Built for Indian exams
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <div className="hero-product-preview">
                            <div className="preview-topbar">
                                <div className="preview-brand">
                                    <span className="preview-mark">V</span>
                                    VNAverse
                                </div>
                                <span className="preview-status">Study mode</span>
                            </div>

                            <div className="preview-body">
                                <div className="preview-welcome">
                                    <div>
                                        <p>Your learning space</p>
                                        <h2>Keep your momentum.</h2>
                                    </div>
                                    <div className="preview-target-icon">
                                        <Target size={22} aria-hidden="true" />
                                    </div>
                                </div>

                                <div className="preview-focus-card">
                                    <div>
                                        <span className="preview-label">TODAY'S FOCUS</span>
                                        <h3>Build confidence, one topic at a time.</h3>
                                    </div>
                                    <span className="preview-pill">Continue</span>
                                </div>

                                <div className="preview-progress-card">
                                    <div className="preview-card-heading">
                                        <div>
                                            <span className="preview-label">PREPARATION OVERVIEW</span>
                                            <p>See where to focus next.</p>
                                        </div>
                                        <span className="preview-period">This week</span>
                                    </div>

                                    <div className="preview-progress-list">
                                        {progressItems.map((item) => (
                                            <div key={item.label} className="preview-progress-item">
                                                <div>
                                                    <span>{item.label}</span>
                                                    <strong>{item.value}</strong>
                                                </div>
                                                <div className="preview-progress-track">
                                                    <span style={{ width: item.width }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
