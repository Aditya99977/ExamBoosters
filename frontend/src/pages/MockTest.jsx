import { useState } from "react";

import DashboardLayout from "../components/DashboardLayout";

import MockTestHeader from "../components/mocktest/MockTestHeader";
import Timer from "../components/mocktest/Timer";
import QuestionCard from "../components/mocktest/QuestionCard";
import QuestionPalette from "../components/mocktest/QuestionPalette";
import ResultCard from "../components/mocktest/ResultCard";
import ReviewScreen from "../components/mocktest/ReviewScreen";

import {

    startTest,

    submitTest

} from "../services/testService";

function MockTest() {

    const [started, setStarted] = useState(false);

    const [loading, setLoading] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const [autoSubmitted, setAutoSubmitted] = useState(false);

    const [reviewMode, setReviewMode] = useState(false);

    const [testId, setTestId] = useState("");

    const [exam, setExam] = useState("General Mock Test");

    const [questions, setQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState({});

    const [result, setResult] = useState(null);

    /*
    =====================================
    Start Mock Test
    =====================================
    */

    const handleStartTest = async () => {

        try {

            setLoading(true);

            const data = await startTest(exam);

            setTestId(data.testId);

            setQuestions(data.questions);

            setStarted(true);

            setCurrentQuestion(0);

            setAnswers({});

            setResult(null);

            setSubmitted(false);

            setAutoSubmitted(false);

            setReviewMode(false);

        }

        catch (err) {

            console.log(err);

            alert("Unable to start mock test.");

        }

        finally {

            setLoading(false);

        }

    };

    /*
    =====================================
    Save Answer
    =====================================
    */

    const handleAnswerSelect = (answer) => {

        setAnswers(prev => ({

            ...prev,

            [currentQuestion]: answer

        }));

    };

    /*
    =====================================
    Previous Question
    =====================================
    */

    const previousQuestion = () => {

        if (currentQuestion > 0) {

            setCurrentQuestion(prev => prev - 1);

        }

    };

    /*
    =====================================
    Next Question
    =====================================
    */

    const nextQuestion = () => {

        if (

            currentQuestion <

            questions.length - 1

        ) {

            setCurrentQuestion(prev => prev + 1);

        }

        else {

            setReviewMode(true);

        }

    };

    /*
    =====================================
    Jump To Question
    =====================================
    */

    const handleQuestionSelect = (index) => {

        setCurrentQuestion(index);

    };

    /*
    =====================================
    Submit Test
    =====================================
    */

    const handleSubmitTest = async () => {

        if (submitted) {

            return;

        }

        try {

            setSubmitted(true);

            const formattedAnswers = questions.map(

                (question, index) => ({

                    questionId: question._id,

                    selectedAnswer:

                        answers[index] || ""

                })

            );

            const data = await submitTest(

                testId,

                formattedAnswers

            );

            setResult(data);

            setStarted(false);

            setReviewMode(false);

        }

        catch (err) {

            console.log(err);

            setSubmitted(false);

            alert("Unable to submit test.");

        }

    };

    /*
    =====================================
    Time Up
    =====================================
    */

    const handleTimeUp = async () => {

        setAutoSubmitted(true);

        await handleSubmitTest();

    };

    /*
    =====================================
    Retry Test
    =====================================
    */

    const retryTest = () => {

        setStarted(false);

        setLoading(false);

        setSubmitted(false);

        setAutoSubmitted(false);

        setReviewMode(false);

        setQuestions([]);

        setAnswers({});

        setCurrentQuestion(0);

        setResult(null);

        setTestId("");

    };
        /*
    =====================================
    UI
    =====================================
    */

    return (

        <DashboardLayout>

            <div className="container-fluid">

                <MockTestHeader

                    exam={exam}

                    totalQuestions={questions.length || 10}

                    duration={20}

                    started={started}

                    onStart={handleStartTest}

                />

                {

                    loading && (

                        <div className="alert alert-info">

                            Starting Mock Test...

                        </div>

                    )

                }

                {

                    autoSubmitted && result && (

                        <div className="alert alert-warning">

                            ⏰ Time expired. Your mock test has been submitted automatically.

                        </div>

                    )

                }

                {

                    result && (

                        <ResultCard

                            result={result}

                            onRetry={retryTest}

                        />

                    )

                }

                {

                    started && !result && !reviewMode && (

                        <div className="row">

                            <div className="col-lg-9">

                                <Timer

                                    duration={20}

                                    onTimeUp={handleTimeUp}

                                />

                                <QuestionCard

                                    question={

                                        questions[currentQuestion]

                                    }

                                    currentQuestion={

                                        currentQuestion + 1

                                    }

                                    totalQuestions={

                                        questions.length

                                    }

                                    selectedAnswer={

                                        answers[currentQuestion]

                                    }

                                    onAnswerSelect={

                                        handleAnswerSelect

                                    }

                                    onPrevious={

                                        previousQuestion

                                    }

                                    onNext={

                                        nextQuestion

                                    }

                                    isFirst={

                                        currentQuestion === 0

                                    }

                                    isLast={

                                        currentQuestion ===

                                        questions.length - 1

                                    }

                                />

                            </div>

                            <div className="col-lg-3">

                                <QuestionPalette

                                    totalQuestions={

                                        questions.length

                                    }

                                    currentQuestion={

                                        currentQuestion

                                    }

                                    answers={

                                        answers

                                    }

                                    onQuestionSelect={

                                        handleQuestionSelect

                                    }

                                />

                                <button

                                    className="btn btn-danger w-100 mt-4"

                                    onClick={() =>

                                        setReviewMode(true)

                                    }

                                >

                                    Review Test

                                </button>

                            </div>

                        </div>

                    )

                }

                {

                    started && reviewMode && !result && (

                        <ReviewScreen

                            exam={exam}

                            totalQuestions={questions.length}

                            answers={answers}

                            onBack={() =>

                                setReviewMode(false)

                            }

                            onSubmit={handleSubmitTest}

                            onQuestionSelect={(index) => {

                                setCurrentQuestion(index);

                                setReviewMode(false);

                            }}

                        />

                    )

                }
                                

            </div>

        </DashboardLayout>

    );

}

export default MockTest;