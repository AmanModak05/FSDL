import React, { useState } from 'react';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';
import EditStudent from './components/EditStudent';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(0);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleRefresh = () => setRefresh((prev) => prev + 1);

  const handleEdit = (student) => {
    setEditingStudent(student);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => setEditingStudent(null);

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 Student Portfolio</h1>
        <p>MERN Stack CRUD Application</p>
      </header>
      <div className="container">
        {editingStudent ? (
          <EditStudent
            student={editingStudent}
            onStudentUpdated={() => {
              handleRefresh();
            }}
            onCancel={handleCancelEdit}
          />
        ) : (
          <AddStudent onStudentAdded={handleRefresh} />
        )}
        <ViewStudents refresh={refresh} onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
