import StudentRow from './StudentRow'

function StudentTable({ students, onUpdateScore }) {
  return (
    <section className="table-section">
      <div className="table-section-header">
        <span className="table-section-title">Student Records</span>
        <span className="table-entry-count">{students.length} Entries</span>
      </div>
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr><td colSpan="4" className="empty-msg">No students yet</td></tr>
            ) : (
              students.map(student => (
                <StudentRow key={student.id} student={student} onUpdateScore={onUpdateScore} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default StudentTable