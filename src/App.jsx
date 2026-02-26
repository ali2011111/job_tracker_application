import { useState, useEffect } from "react"
import Dashboard from "./components/Dashboard"
import ApplicationForm from "./components/ApplicationForm"
import ApplicationList from "./components/ApplicationList"

function App() {

  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("applications")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications))
  }, [applications])

    return (
  <div className="app-layout">

    <div className="sidebar">
      <h1>Job Tracker</h1>
      <Dashboard applications={applications} />
    </div>

    <div className="main-content">
      <ApplicationForm
        applications={applications}
        setApplications={setApplications}
      />

      <ApplicationList
        applications={applications}
        setApplications={setApplications}
      />
    </div>

  </div>
)
}

export default App