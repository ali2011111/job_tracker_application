import { useState } from 'react'
import { STATUS, STATUS_LABELS } from '../constants/status'

function ApplicationForm({ applications, setApplications }) {

  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [status, setStatus] = useState(STATUS.SENT)
  const [deadline, setDeadline] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!company || !position) {
      alert('Vennligst fyll inn firma og stilling')
      return
    }

    const newApplication = {
      id: Date.now(),
      company,
      position,
      status,
      deadline
    }

    setApplications([...applications, newApplication])

    setCompany('')
    setPosition('')
    setStatus(STATUS.SENT)
    setDeadline('')
  }

  return (
    <form onSubmit={handleSubmit} className="app-form">

      <div className="form-group">
        <label>Firma</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Stilling</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {Object.values(STATUS).map((statusKey) => (
            <option key={statusKey} value={statusKey}>
              {STATUS_LABELS[statusKey]}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Søknadsfrist</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button type="submit">Legg til</button>
      </div>

    </form>
  )
}

export default ApplicationForm