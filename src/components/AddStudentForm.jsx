import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const trimmedName = name.trim()
    if (!trimmedName) { setError('Student name cannot be empty.'); return }
    if (score === '' || isNaN(score) || Number(score) < 0 || Number(score) > 100) {
      setError('Score must be a number between 0 and 100.'); return
    }
    onAddStudent(trimmedName, score)
    setName('')
    setScore('')
  }

  return (
    <section className="form-section">
      <div className="form-section-header">
        <div className="form-section-header-left">
          <span className="dot" />
          Register Student
        </div>
        <span className="form-section-header-right">NEW ENTRY</span>
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-input"
          placeholder="Score (0-100)"
          value={score}
          min="0"
          max="100"
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit" className="btn-add">+ ADD</button>
        {error && <p className="form-error">{error}</p>}
      </form>
    </section>
  )
}

export default AddStudentForm