import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAllExams, selectPreferredExam } from "../services/examService";
import { useAuth } from "./useAuth";

export default function useExamSelection() {
    const navigate = useNavigate();
    const { updateUser } = useAuth();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const [exams, setExams] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedExam, setSelectedExam] = useState(null);

    // =============================================
    // Load Exams
    // =============================================
    useEffect(() => {
        const fetchExams = async () => {
            try {
                setLoading(true);

                const response = await getAllExams();

                setExams(response.exams || []);
            } catch (err) {
                console.error(err);

                setError("Failed to load exams.");
            } finally {
                setLoading(false);
            }
        };

        fetchExams();
    }, []);

    // =============================================
    // Filter Exams
    // =============================================
    const filteredExams = useMemo(() => {
        if (!searchQuery.trim()) {
            return exams;
        }

        return exams.filter((exam) =>
            exam.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        );
    }, [exams, searchQuery]);

    // =============================================
    // Group Exams
    // =============================================
    const groupedExams = useMemo(() => {
        return {
            Banking: filteredExams.filter(
                (exam) => exam.category === "Banking"
            ),

            SSC: filteredExams.filter(
                (exam) => exam.category === "SSC"
            ),

            Railway: filteredExams.filter(
                (exam) => exam.category === "Railway"
            ),
        };
    }, [filteredExams]);

    // =============================================
    // Select Exam
    // =============================================
    const handleSelectExam = (exam) => {
        setSelectedExam(exam);
    };

    // =============================================
    // Continue
    // =============================================
    const continueToDashboard = async () => {
        if (!selectedExam) return;

        try {
            setSaving(true);

            await selectPreferredExam(selectedExam._id);

            updateUser({
                preferredExam: selectedExam,
            });

            navigate("/dashboard", {
                replace: true,
            });
        } catch (err) {
            console.error(err);

            setError("Unable to save selected exam.");
        } finally {
            setSaving(false);
        }
    };

    return {
        loading,
        saving,
        error,

        searchQuery,
        setSearchQuery,

        groupedExams,

        selectedExam,
        handleSelectExam,

        continueToDashboard,
    };
}