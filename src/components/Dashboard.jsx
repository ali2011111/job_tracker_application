import { STATUS } from "../constants/status"

function Dashboard({ applications }) {

  const total = applications.length

  const rejected = applications.filter(app => 
    app.status === STATUS.REJECTED
  ).length

  const offer = applications.filter(app => 
    app.status === STATUS.OFFER
  ).length

  const active = applications.filter(app => 
    app.status === STATUS.SENT ||
    app.status === STATUS.INTERVIEW ||
    app.status === STATUS.UNDER_REVIEW
  ).length

  return (
    <div>
      <h2>Overview</h2>

      <div className="dashboard-grid">

        <div className="stat-card">
          <h3>Total</h3>
          <p>{total}</p>
        </div>

        <div className="stat-card">
          <h3>Active</h3>
          <p>{active}</p>
        </div>

        <div className="stat-card">
          <h3>Rejected</h3>
          <p>{rejected}</p>
        </div>

        <div className="stat-card">
          <h3>Offers</h3>
          <p>{offer}</p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard