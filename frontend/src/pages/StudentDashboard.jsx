import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";
import WelcomeCard from "../components/WelcomeCard";
import StatCard from "../components/StatCard";
import SubjectProgress from "../components/SubjectProgress";
import PerformanceChart from "../components/PerformanceChart";
import RecentTests from "../components/RecentTests";
import QuickActions from "../components/QuickActions";

import { getDashboard } from "../services/dashboardService";

import {
    FaBook,
    FaClipboardList,
    FaChartLine,
    FaTrophy
} from "react-icons/fa";

function StudentDashboard() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboard();

            setDashboard(data);

        }

        catch (err) {

            console.log(err);

        }

    };

    if (!dashboard) {

        return <h2 className="text-center mt-5">Loading Dashboard...</h2>;

    }

    return (

        <DashboardLayout>

            <WelcomeCard user={dashboard.user} />

            <div className="row">

                <StatCard
                    title="Practice Questions"
                    value={dashboard.stats.practiceQuestions}
                    subtitle="Questions Attempted"
                    icon={<FaBook color="#2563EB" />}
                    color="#16A34A"
                />

                <StatCard
                    title="Mock Tests"
                    value={dashboard.stats.mockTestsCompleted}
                    subtitle="Completed"
                    icon={<FaClipboardList color="#7C3AED" />}
                    color="#16A34A"
                />

                <StatCard
                    title="Accuracy"
                    value={`${dashboard.stats.accuracy}%`}
                    subtitle="Average Accuracy"
                    icon={<FaChartLine color="#F59E0B" />}
                    color="#2563EB"
                />

                <StatCard
                    title="Highest Score"
                    value={dashboard.stats.highestScore}
                    subtitle="Best Performance"
                    icon={<FaTrophy color="#F97316" />}
                    color="#2563EB"
                />

            </div>

            <SubjectProgress
                data={dashboard.subjectProgress}
            />

            <PerformanceChart
                data={dashboard.weeklyPerformance}
            />

            <div className="row mt-4">

                <div className="col-lg-8">

                    <RecentTests
                        tests={dashboard.recentTests}
                    />

                </div>

                <div className="col-lg-4">

                    <QuickActions />

                </div>

            </div>

        </DashboardLayout>

    );

}

export default StudentDashboard;    