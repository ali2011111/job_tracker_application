import { STATUS } from "../constants/status"

function Dashboard({ applications }) {

  const countByStatus = (status) =>
    applications.filter(app => app.status === status).length

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Dashboard</h2>

      <p>Total søknader sendt: {applications.length}</p>
      <p>Sendt: {countByStatus(STATUS.SENT)}</p>
      <p>Avslag: {countByStatus(STATUS.REJECTED)}</p>
      <p>Tilbud: {countByStatus(STATUS.OFFER)}</p>
      <p>Ghostet: {countByStatus(STATUS.GHOSTED)}</p>
      <p>Intervju: {countByStatus(STATUS.INTERVIEW)}</p>
      <p>I vurdering: {countByStatus(STATUS.UNDER_REVIEW)}</p>

    </div>
  )
}

export default Dashboard