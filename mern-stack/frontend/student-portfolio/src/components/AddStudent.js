import React, { useState } from 'react';
import axios from 'axios';

function AddStudent({ onStudentAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/student/add', { name, email, course });
      setMessage('Student Added Successfully!');
      setName('');
      setEmail('');
      setCourse('');
      if (onStudentAdded) onStudentAdded();
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage('Error adding student');
    }
  };

  return (
    <div className="card">
      <h2>➕ Add Student</h2>
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
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
