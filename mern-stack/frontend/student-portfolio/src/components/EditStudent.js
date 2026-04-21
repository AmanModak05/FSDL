import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditStudent({ student, onStudentUpdated, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (student) {
      setName(student.name);
      setEmail(student.email);
      setCourse(student.course);
    }
  }, [student]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/student/update/${student._id}`, {
        name,
        email,
        course,
      });
      setMessage('Student Updated Successfully!');
      if (onStudentUpdated) onStudentUpdated();
      setTimeout(() => {
        setMessage('');
        onCancel();
      }, 1500);
    } catch (err) {
      setMessage('Error updating student');
    }
  };

  if (!student) return null;

  return (
    <div className="card edit-card">
      <h2>✏️ Edit Student</h2>
      {message && <p className="success-msg">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter student email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            placeholder="Enter course name"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Update Student</button>
          <button type="button" className="btn btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
