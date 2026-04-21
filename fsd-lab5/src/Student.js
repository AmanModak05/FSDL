function Student({ name, roll, course }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2);
  return (
    <div className="student-card">
      <div className="student-avatar">{initials}</div>
      <div className="student-info">
        <h3>{name}</h3>
        <span className="roll-badge">Roll #{roll}</span>
        <p>{course}</p>
      </div>
    </div>
  );
}

export default Student;