import { STATUS, STATUS_LABELS } from "../constants/status"

function ApplicationList({ applications, setApplications }) {

  const handleDelete = (id) => {
    const updated = applications.filter(app => app.id !== id)
    setApplications(updated)
  }

  const handleStatusChange = (id, newStatus) => {
    const updated = applications.map(app =>
      app.id === id ? { ...app, status: newStatus } : app
    )
    setApplications(updated)
  }

  if (applications.length === 0) {
    return <p>Du har ikke registrert noen søknader ennå.</p>
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Søknader</h2>

      {applications.map((app) => {

        const isExpired =
          app.deadline && new Date(app.deadline) < new Date()

        return (
          <div key={app.id} className="card">

            <h3>{app.company}</h3>
            <p>Stilling: {app.position}</p>

            <div>
              <label>Status:</label>
              <select
                value={app.status}
                onChange={(e) =>
                  handleStatusChange(app.id, e.target.value)
                }
              >
                {Object.values(STATUS).map(statusKey => (
                  <option key={statusKey} value={statusKey}>
                    {STATUS_LABELS[statusKey]}
                  </option>
                ))}
              </select>
            </div>

            <p className={isExpired ? "deadline expired" : ""}>
              Søknadsfrist: {app.deadline || "Ikke satt"}
            </p>

            <button
              style={{ marginTop: "0.5rem" }}
              onClick={() => handleDelete(app.id)}
            >
              Slett
            </button>

          </div>
        )
      })}
    </div>
  )
}

export default ApplicationList