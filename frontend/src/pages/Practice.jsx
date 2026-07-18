import { useState } from "react";

import DashboardLayout from "../components/DashboardLayout";

import PracticeHero from "../components/practice/PracticeHero";
import PracticeFilters from "../components/practice/PracticeFilters";
import QuestionCard from "../components/practice/QuestionCard";
import ResultScreen from "../components/practice/ResultScreen";

import { getPracticeQuestions } from "../services/practiceService";

function Practice() {

    /* ========================================
       STATES
    ======================================== */

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

    /* ========================================
       START PRACTICE
    ======================================== */

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

    /* ========================================
       CHECK ANSWER
    ======================================== */

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

            setScore((prev) => prev + 1);

        }

    };

    /* ========================================
       NEXT QUESTION
    ======================================== */

    const nextQuestion = () => {

        if (currentIndex === questions.length - 1) {

            setCompleted(true);

            return;

        }

        setCurrentIndex((prev) => prev + 1);

        setSelectedAnswer("");

        setAnswered(false);

        setShowResult(false);

        setIsCorrect(null);

    };

    /* ========================================
       PREVIOUS QUESTION
    ======================================== */

    const previousQuestion = () => {

        if (currentIndex === 0) return;

        setCurrentIndex((prev) => prev - 1);

        setSelectedAnswer("");

        setAnswered(false);

        setShowResult(false);

        setIsCorrect(null);

    };

    /* ========================================
       RETRY
    ======================================== */

    const retryPractice = () => {

        setCurrentIndex(0);

        setSelectedAnswer("");

        setAnswered(false);

        setShowResult(false);

        setIsCorrect(null);

        setCompleted(false);

        setScore(0);

    };

    /* ========================================
       CURRENT QUESTION
    ======================================== */

    const currentQuestion =

        questions[currentIndex];

    /* ========================================
       SESSION OBJECT
    ======================================== */

    const session = {

        currentQuestion,

        currentIndex,

        questions,

        score,

        selectedAnswer,

        answered,

        showResult,

        isCorrect,

    };

    /* ========================================
       ACTIONS OBJECT
    ======================================== */

    const actions = {

        setSelectedAnswer,

        checkAnswer,

        nextQuestion,

        previousQuestion,

    };
    return (

    <DashboardLayout>

        <div className="container-fluid py-3">

            {/* Hero */}

            <PracticeHero
                subject={subject}
                setSubject={setSubject}
            />

            {/* Filters (only show before starting) */}

            {questions.length === 0 && (

                <PracticeFilters
                    subject={subject}
                    setSubject={setSubject}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    loading={loading}
                    startPractice={startPractice}
                />

            )}

            {/* Result Screen */}

            {completed ? (

                <ResultScreen
                    score={score}
                    questions={questions}
                    retryPractice={retryPractice}
                />

            ) : (

                <>

                    {/* Question */}

                    {questions.length > 0 ? (

                        <QuestionCard
                            session={session}
                            actions={actions}
                        />

                    ) : (

                        <div
                            className="rounded-4 p-5 text-center"
                            style={{
                                background: "#131D31",
                                border:
                                    "1px solid rgba(255,255,255,.08)",
                            }}
                        >

                            <div
                                style={{
                                    fontSize: "4rem",
                                }}
                            >
                                📚
                            </div>

                            <h2 className="text-white fw-bold mt-3">
                                Ready to Practice?
                            </h2>

                            <p
                                className="text-secondary mx-auto mt-3"
                                style={{
                                    maxWidth: "650px",
                                }}
                            >
                                Select your preferred subject and
                                difficulty level above, then start
                                solving practice questions designed
                                for competitive examinations.
                            </p>

                        </div>

                    )}

                </>

            )}

        </div>

    </DashboardLayout>

);

}

export default Practice;