import { useState } from 'react';
import Student from './Student';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #f0f2f5;
    min-height: 100vh;
    padding: 40px 20px;
  }

  .page {
    max-width: 720px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 36px;
  }

  .page-header h1 {
    font-family: 'DM Serif Display', serif;
    font-size: 36px;
    color: #111;
    letter-spacing: -0.5px;
  }

  .page-header p {
    color: #666;
    margin-top: 6px;
    font-size: 15px;
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 14px;
  }

  .students-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 40px;
  }

  .student-card {
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid #e8e8e8;
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .student-card:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }

  .student-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .student-info h3 {
    font-size: 15px;
    font-weight: 600;
    color: #111;
  }

  .student-info p {
    font-size: 13px;
    color: #888;
    margin-top: 4px;
  }

  .roll-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    color: #667eea;
    background: #eef0fd;
    padding: 2px 8px;
    border-radius: 20px;
    margin-top: 4px;
  }

  .form-card {
    background: #fff;
    border-radius: 20px;
    padding: 36px;
    border: 1px solid #e8e8e8;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  }

  .form-card h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    color: #111;
    margin-bottom: 28px;
  }

  .field {
    margin-bottom: 22px;
  }

  .field label {
    display: block;
    font-size: 13px;
    font-weight: 500;
    color: #444;
    margin-bottom: 8px;
  }

  .field input {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    font-size: 15px;
    font-family: 'DM Sans', sans-serif;
    color: #111;
    background: #fafafa;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }

  .field input:focus {
    border-color: #667eea;
    background: #fff;
  }

  .field input.error {
    border-color: #f43f5e;
    background: #fff5f7;
  }

  .err-msg {
    font-size: 12px;
    color: #f43f5e;
    margin-top: 6px;
    min-height: 16px;
    font-weight: 500;
  }

  .submit-btn {
    width: 100%;
    padding: 14px;
    background: #111;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.1s;
    margin-top: 8px;
  }

  .submit-btn:hover { background: #333; }
  .submit-btn:active { transform: scale(0.99); }

  .success-banner {
    margin-top: 20px;
    background: #f0fdf4;
    border: 1.5px solid #86efac;
    color: #16a34a;
    border-radius: 10px;
    padding: 14px 18px;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSuccess('');
  };

  const validate = () => {
    let e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.course.trim()) e.course = 'Course is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess('Registration successful! Student data submitted.');
      setFormData({ name: '', email: '', course: '' });
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="page">
        <div className="page-header">
          <h1>FSD Lab 5</h1>
          <p>Interactive UI with React — Components, Props & Form Validation</p>
        </div>

        <p className="section-label">Student Components (Part D)</p>
        <div className="students-grid">
          <Student name="Rahul Sharma" roll="101" course="Computer Engineering" />
          <Student name="Anjali Patel" roll="102" course="Computer Science" />
        </div>

        <p className="section-label">Registration Form (Part E)</p>
        <div className="form-card">
          <h2>Student Registration</h2>
          <form onSubmit={handleSubmit}>
            {['name', 'email', 'course'].map(field => (
              <div className="field" key={field}>
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? 'error' : ''}
                  placeholder={field === 'email' ? 'you@example.com' : field === 'name' ? 'Full name' : 'e.g. Computer Engineering'}
                />
                <div className="err-msg">{errors[field]}</div>
              </div>
            ))}
            <button className="submit-btn" type="submit">Submit Registration</button>
          </form>
          {success && (
            <div className="success-banner">
              <span>✓</span> {success}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;