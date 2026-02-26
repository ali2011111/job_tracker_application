import { useState } from 'react'
import { STATUS } from '../constants/status'

function ApplicationForm({ applications, setApplications }) {

    // Tilstanden for hvert av feltene i søknadsskjemaet. Disse tilstandene brukes for å holde styr 
    // på verdiene som brukeren skriver inn i skjemaet, og for å oppdatere disse verdiene når 
    // brukeren gjør endringer.
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [status, setStatus] = useState(STATUS.SENT)
    const [deadline, setDeadline] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!company || !position) {
            alert('Please fill in all required fields')
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

        // Reset form fields after submission
        setCompany('')
        setPosition('')
        setStatus(STATUS.SENT)
        setDeadline('')
    }

     return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <h2>Add Application</h2>

      <div>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      <div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {Object.values(STATUS).map((statusOption) => (
            <option key={statusOption} value={statusOption}>
              {statusOption}
            </option>
          ))}
        </select>
      </div>

      <div>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  )
}

export default ApplicationForm