function ApplicationCard({ application }) {

  const isExpired =
    application.deadline &&
    new Date(application.deadline) < new Date()

  return (
    <div className="card">
      <h3>{application.company}</h3>
      <p>Stilling: {application.position}</p>

      <p className={isExpired ? "deadline expired" : ""}>
        Søknadsfrist: {application.deadline || "Ikke satt"}
      </p>
    </div>
  )
}

export default ApplicationCard