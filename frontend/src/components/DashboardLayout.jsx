import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import "../styles/dashboard.css";

function DashboardLayout({ children }) {

    return (

        <div
            className="dashboard-layout"
            style={{
                background: "#0B1120",
                minHeight: "100vh",
            }}
        >

            <Sidebar />

            <main
                className="dashboard-content"
                style={{
                    padding: "28px 32px",
                }}
            >

                <Topbar />

                <div
                    style={{
                        marginTop: "24px",
                    }}
                >
                    {children}
                </div>

            </main>

        </div>

    );

}

export default DashboardLayout;