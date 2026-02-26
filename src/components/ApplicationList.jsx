import { STATUS } from '../constants/status'

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
    return <p>No applications added yet.</p>
  }

  // Denne komponenten viser en liste over alle jobbsøknadene som brukeren har lagt til.
    // Den tar inn "applications" som en prop, som er en array av jobbsøknader, og "setApplications" 
    // for å kunne oppdatere denne listen hvis det trengs (for eksempel hvis brukeren vil slette en søknad eller 
    // endre statusen på en søknad).

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Applications</h2>

      {applications.map((app) => (
        <div
          key={app.id}
          style={{
            border: "1px solid black",
            padding: "1rem",
            marginBottom: "1rem"
          }}
        >
          <h3>{app.company}</h3>
          <p>Position: {app.position}</p>

          <div>
            <label>Status: </label>
            <select
              value={app.status}
              onChange={(e) =>
                handleStatusChange(app.id, e.target.value)
              }
            >
              {Object.values(STATUS).map(statusOption => (
                <option key={statusOption} value={statusOption}>
                  {statusOption}
                </option>
              ))}
            </select>
          </div>

          <p>Deadline: {app.deadline || "No deadline"}</p>

          <button
            style={{ marginTop: "0.5rem" }}
            onClick={() => handleDelete(app.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default ApplicationList