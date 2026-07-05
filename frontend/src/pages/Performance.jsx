import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";

import PerformanceStats from "../components/performance/PerformanceStats";
import SubjectProgress from "../components/performance/SubjectProgress";
import RecentTests from "../components/performance/RecentTests";
import PerformanceChart from "../components/performance/PerformanceChart";

import api from "../services/api";

function Performance() {

    const [dashboardData, setDashboardData] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchPerformance();

    }, []);

    const fetchPerformance = async () => {

        try {

            const response = await api.get(

                "/dashboard"

            );

            setDashboardData(

                response.data

            );

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <DashboardLayout>

                <div className="container-fluid">

                    <div className="alert alert-info">

                        Loading Performance Dashboard...

                    </div>

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="container-fluid">

                <h2 className="fw-bold mb-4">

                    📈 Performance Dashboard

                </h2>

                <PerformanceStats

                    stats={dashboardData.stats}

                />

                <div className="row">

                    <div className="col-lg-6">

                        <SubjectProgress

                            subjects={dashboardData.subjectProgress}

                        />

                    </div>

                    <div className="col-lg-6">

                        <PerformanceChart

                            performance={dashboardData.weeklyPerformance}

                        />

                    </div>

                </div>

                <RecentTests

                    tests={dashboardData.recentTests}

                />

            </div>

        </DashboardLayout>

    );

}

export default Performance;