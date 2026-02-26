import { useState, useEffect } from "react"
import Dashboard from "./components/Dashboard"
import ApplicationForm from "./components/ApplicationForm"
import ApplicationList from "./components/ApplicationList"
import { STATUS } from "./constants/status"

function App() {

  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("applications")
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState("ALL")

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications))
  }, [applications])

  const filteredApplications = applications
    .filter(app => {
      if (filter === "ALL") return true
      if (filter === "ACTIVE")
        return [STATUS.SENT, STATUS.INTERVIEW].includes(app.status)
      if (filter === "REJECTED")
        return app.status === STATUS.REJECTED
      if (filter === "OFFERS")
        return app.status === STATUS.OFFER
      return true
    })
    .sort((a, b) => b.id - a.id)

  return (
    <div className="app-layout">

      <div className="sidebar">
        <h1>Hold orden på søknadsprosessen</h1>
        <Dashboard applications={applications} />
      </div>

      <div className="main-content">

        <ApplicationForm
          applications={applications}
          setApplications={setApplications}
        />

        <div className="filter-bar">
          <button
            className={filter === "ALL" ? "active-filter" : ""}
            onClick={() => setFilter("ALL")}
          >
            Alle
          </button>
          <button
            className={filter === "ACTIVE" ? "active-filter" : ""}
            onClick={() => setFilter("ACTIVE")}
          >
            Aktive
          </button>
          <button
            className={filter === "REJECTED" ? "active-filter" : ""}
            onClick={() => setFilter("REJECTED")}
          >
            Avslag
          </button>
          <button
            className={filter === "OFFERS" ? "active-filter" : ""}
            onClick={() => setFilter("OFFERS")}
          >
            Tilbud
          </button>
        </div>

        <ApplicationList
          applications={filteredApplications}
          setApplications={setApplications}
        />

      </div>

    </div>
  )
}

export default App