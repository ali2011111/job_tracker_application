function ApplicationList({ applications, setApplications }) {
  if (applications.length === 0) {
    return <p>No applications added yet.</p>
  }

  // Denne komponenten viser en liste over alle jobbsøknadene som brukeren har lagt til.
    // Den tar inn "applications" som en prop, som er en array av jobbsøknader, og "setApplications" 
    // for å kunne oppdatere denne listen hvis det trengs (for eksempel hvis brukeren vil slette en søknad eller 
    // endre statusen på en søknad).

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Application List</h2>

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
          <p>Status: {app.status}</p>
          <p>Deadline: {app.deadline || "No deadline"}</p>
        </div>
      ))}

    </div>
  )
      
}

export default ApplicationList