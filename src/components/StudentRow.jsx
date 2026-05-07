import { useState } from 'react'

function StudentRow({ student, onUpdateScore }) {
  const [inputScore, setInputScore] = useState(student.score)
  const isPassing = student.score >= 40

  const handleSave = () => {
    if (inputScore === '' || isNaN(inputScore)) return
    onUpdateScore(student.id, inputScore)
  }

  return (
    <tr className="student-row">
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <span className={`status-badge ${isPassing ? 'pass' : 'fail'}`}>
          <span className="dot-sm" />
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td>
        <div className="update-group">
          <input
            type="number"
            className="score-input"
            value={inputScore}
            min="0"
            max="100"
            onChange={(e) => setInputScore(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          />
          <button className="btn-save" onClick={handleSave}>Save</button>
        </div>
      </td>
    </tr>
  )
}

export default StudentRow