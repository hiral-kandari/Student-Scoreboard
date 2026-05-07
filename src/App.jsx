import { useState, useEffect } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

const initialStudents = [
  { id: 1, name: 'Aarav Sharma', score: 78 },
  { id: 2, name: 'Priya Mehta', score: 35 },
  { id: 3, name: 'Rohan Gupta', score: 55 },
  { id: 4, name: 'Sneha Kapoor', score: 20 },
  { id: 5, name: 'Karan Singh', score: 90 },
]

function App() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students')
    return saved ? JSON.parse(saved) : initialStudents
  })

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: Number(newScore) } : s)
    )
  }

  const addStudent = (name, score) => {
    setStudents(prev => [...prev, { id: Date.now(), name, score: Number(score) }])
  }

  const total = students.length
  const passed = students.filter(s => s.score >= 40).length
  const avg = total === 0 ? 0 : Math.round(students.reduce((sum, s) => sum + s.score, 0) / total)

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <AddStudentForm onAddStudent={addStudent} />
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Total</div>
            <div className="stat-value">{total}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Passed</div>
            <div className="stat-value">{passed}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Avg Score</div>
            <div className="stat-value">{avg}</div>
          </div>
        </div>
        <StudentTable students={students} onUpdateScore={updateScore} />
      </main>
    </div>
  )
}

export default App