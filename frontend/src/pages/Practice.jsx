import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import { getPracticeQuestions } from "../services/practiceService";

function Practice() {

    const navigate = useNavigate();

    const [subject, setSubject] = useState("");

    const [difficulty, setDifficulty] = useState("");

    const [questions, setQuestions] = useState([]);

    const [loading, setLoading] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [selectedAnswer, setSelectedAnswer] = useState("");

    const [showResult, setShowResult] = useState(false);

    const [score, setScore] = useState(0);

    const [answered, setAnswered] = useState(false);

    const [isCorrect, setIsCorrect] = useState(null);

    const [completed, setCompleted] = useState(false);

    /*
    ========================================
    Start Practice
    ========================================
    */

    const startPractice = async () => {

        try {

            setLoading(true);

            const data = await getPracticeQuestions(

                subject,

                difficulty

            );

            setQuestions(data);

            setCurrentIndex(0);

            setSelectedAnswer("");

            setShowResult(false);

            setAnswered(false);

            setIsCorrect(null);

            setCompleted(false);

            setScore(0);

        }

        catch (err) {

            console.log(err);

            alert("Unable to load questions.");

        }

        finally {

            setLoading(false);

        }

    };

    /*
    ========================================
    Check Answer
    ========================================
    */

    const checkAnswer = () => {

        if (!selectedAnswer) {

            alert("Please select an answer.");

            return;

        }

        const correct =

            selectedAnswer ===

            questions[currentIndex].correctAnswer;

        setIsCorrect(correct);

        setAnswered(true);

        setShowResult(true);

        if (correct) {

            setScore(prev => prev + 1);

        }

    };

    /*
    ========================================
    Next Question
    ========================================
    */

    const nextQuestion = () => {

        if (currentIndex === questions.length - 1) {

            setCompleted(true);

            return;

        }

        setCurrentIndex(prev => prev + 1);

        setSelectedAnswer("");

        setAnswered(false);

        setShowResult(false);

        setIsCorrect(null);

    };

    /*
    ========================================
    Previous Question
    ========================================
    */

    const previousQuestion = () => {

        if (currentIndex === 0) {

            return;

        }

        setCurrentIndex(prev => prev - 1);

        setSelectedAnswer("");

        setAnswered(false);

        setShowResult(false);

        setIsCorrect(null);

    };

    /*
    ========================================
    Retry Practice
    ========================================
    */

    const retryPractice = () => {

        setCurrentIndex(0);

        setSelectedAnswer("");

        setAnswered(false);

        setShowResult(false);

        setIsCorrect(null);

        setCompleted(false);

        setScore(0);

    };

    /*
    ========================================
    Current Question
    ========================================
    */

    const currentQuestion =

        questions[currentIndex];
            return (

        <DashboardLayout>

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2 className="fw-bold">

                        📚 Practice Questions

                    </h2>

                    {

                        questions.length > 0 && !completed && (

                            <div className="alert alert-primary mb-0">

                                <strong>

                                    Score:

                                </strong>

                                {" "}

                                {score} / {questions.length}

                            </div>

                        )

                    }

                </div>

                {

                    completed ? (

                        <div className="card shadow border-0 rounded-4">

                            <div className="card-body text-center py-5">

                                <h2 className="text-success">

                                    🎉 Practice Completed!

                                </h2>

                                <h4 className="mt-4">

                                    Final Score

                                </h4>

                                <h1 className="display-3 text-primary">

                                    {score}/{questions.length}

                                </h1>

                                <p className="lead">

                                    Accuracy: {

                                        questions.length > 0

                                            ? Math.round(

                                                (score / questions.length) * 100

                                            )

                                            : 0

                                    }%

                                </p>

                                <div className="mt-4">

                                    <button

                                        className="btn btn-primary me-3"

                                        onClick={retryPractice}

                                    >

                                        🔄 Retry Practice

                                    </button>

                                    <button

                                        className="btn btn-outline-secondary"

                                        onClick={() =>

                                            navigate("/dashboard")

                                        }

                                    >

                                        🏠 Dashboard

                                    </button>

                                </div>

                            </div>

                        </div>

                    ) : (

                        <>

                            <div className="card shadow-sm border-0 rounded-4 mb-4">

                                <div className="card-body">

                                    <div className="row g-3">

                                        <div className="col-md-5">

                                            <label className="form-label">

                                                Subject

                                            </label>

                                            <select

                                                className="form-select"

                                                value={subject}

                                                onChange={(e)=>

                                                    setSubject(e.target.value)

                                                }

                                            >

                                                <option value="">

                                                    All Subjects

                                                </option>

                                                <option value="Reasoning">

                                                    Reasoning

                                                </option>

                                                <option value="English">

                                                    English

                                                </option>

                                                <option value="Quantitative Aptitude">

                                                    Quantitative Aptitude

                                                </option>

                                                <option value="General Awareness">

                                                    General Awareness

                                                </option>

                                            </select>

                                        </div>

                                        <div className="col-md-5">

                                            <label className="form-label">

                                                Difficulty

                                            </label>

                                            <select

                                                className="form-select"

                                                value={difficulty}

                                                onChange={(e)=>

                                                    setDifficulty(e.target.value)

                                                }

                                            >

                                                <option value="">

                                                    All Levels

                                                </option>

                                                <option value="Easy">

                                                    Easy

                                                </option>

                                                <option value="Medium">

                                                    Medium

                                                </option>

                                                <option value="Hard">

                                                    Hard

                                                </option>

                                            </select>

                                        </div>

                                        <div className="col-md-2 d-flex align-items-end">

                                            <button

                                                className="btn btn-primary w-100"

                                                onClick={startPractice}

                                            >

                                                {

                                                    loading

                                                        ? "Loading..."

                                                        : "Start"

                                                }

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {

                                questions.length > 0 ? (

                                    <div className="card shadow border-0 rounded-4">

                                        <div className="card-body">

                                            <div className="mb-3">

                                                <strong>

                                                    Question {currentIndex + 1}

                                                    {" "}of{" "}

                                                    {questions.length}

                                                </strong>

                                            </div>

                                            <div className="progress mb-4">

                                                <div

                                                    className="progress-bar"

                                                    style={{

                                                        width: `${
                                                            ((currentIndex + 1)

                                                            / questions.length)

                                                            * 100
                                                        }%`

                                                    }}

                                                >

                                                    {currentIndex + 1}/

                                                    {questions.length}

                                                </div>

                                            </div>

                                            <h4 className="mb-4">

                                                {currentQuestion.question}

                                            </h4>
                                                                                        {

                                                currentQuestion.options.map(

                                                    (option, index) => {

                                                        let background = "";

                                                        if (answered) {

                                                            if (

                                                                option ===

                                                                currentQuestion.correctAnswer

                                                            ) {

                                                                background =

                                                                    "#d1e7dd";

                                                            }

                                                            else if (

                                                                option ===

                                                                selectedAnswer

                                                            ) {

                                                                background =

                                                                    "#f8d7da";

                                                            }

                                                        }

                                                        return (

                                                            <div

                                                                key={index}

                                                                className="d-flex align-items-center border rounded p-3 mb-3"

                                                                style={{

                                                                    backgroundColor:

                                                                        background

                                                                }}

                                                            >

                                                                <input

                                                                    type="radio"

                                                                    name="answer"

                                                                    value={option}

                                                                    checked={

                                                                        selectedAnswer === option

                                                                    }

                                                                    disabled={

                                                                        answered

                                                                    }

                                                                    onChange={(e) =>

                                                                        setSelectedAnswer(

                                                                            e.target.value

                                                                        )

                                                                    }

                                                                    style={{

                                                                        appearance:

                                                                            "auto",

                                                                        WebkitAppearance:

                                                                            "radio",

                                                                        width: "20px",

                                                                        height: "20px",

                                                                        accentColor:

                                                                            "#2563EB",

                                                                        marginRight:

                                                                            "12px",

                                                                        cursor:

                                                                            answered

                                                                                ? "default"

                                                                                : "pointer"

                                                                    }}

                                                                />

                                                                <label

                                                                    className="mb-0"

                                                                    style={{

                                                                        cursor:

                                                                            answered

                                                                                ? "default"

                                                                                : "pointer"

                                                                    }}

                                                                >

                                                                    {option}

                                                                </label>

                                                            </div>

                                                        );

                                                    }

                                                )

                                            }

                                            <div className="mt-4">

                                                {

                                                    !answered ? (

                                                        <button

                                                            className="btn btn-success"

                                                            onClick={

                                                                checkAnswer

                                                            }

                                                        >

                                                            ✅ Check Answer

                                                        </button>

                                                    ) : (

                                                        <>

                                                            {

                                                                showResult && (

                                                                    <div

                                                                        className={`alert mt-3 ${
                                                                            isCorrect

                                                                                ? "alert-success"

                                                                                : "alert-danger"

                                                                        }`}

                                                                    >

                                                                        {

                                                                            isCorrect

                                                                                ? "🎉 Correct Answer!"

                                                                                : `❌ Wrong Answer. Correct Answer: ${currentQuestion.correctAnswer}`

                                                                        }

                                                                    </div>

                                                                )

                                                            }

                                                            <div className="d-flex justify-content-between mt-4">

                                                                <button

                                                                    className="btn btn-outline-secondary"

                                                                    onClick={

                                                                        previousQuestion

                                                                    }

                                                                    disabled={

                                                                        currentIndex ===

                                                                        0

                                                                    }

                                                                >

                                                                    ⬅ Previous

                                                                </button>

                                                                <button

                                                                    className="btn btn-primary"

                                                                    onClick={

                                                                        nextQuestion

                                                                    }

                                                                >

                                                                    {

                                                                        currentIndex ===

                                                                        questions.length -

                                                                            1

                                                                            ? "Finish 🎉"

                                                                            : "Next ➡"

                                                                    }

                                                                </button>

                                                            </div>

                                                        </>

                                                    )

                                                }

                                            </div>

                                        </div>

                                    </div>

                                ) : (

                                    <div className="alert alert-info">

                                        Select filters and click

                                        <strong>

                                            {" "}Start

                                        </strong>

                                        {" "}to begin practicing.

                                    </div>

                                )

                            }

                        </>

                    )

                }

            </div>

        </DashboardLayout>

    );

}

export default Practice;