import React, { useState } from 'react';
const clubsList = [
  { id: 'music', name: 'Music Club of GIT' },
  { id: 'dance', name: 'Nrityom the Dance Club of GIT' },
  { id: 'drama', name: 'Tathva the Drama Club of GIT' },
  { id: 'art', name: 'Fine Arts Club of GIT' },
  { id: 'literature', name: 'Literary Club of GIT' },
  { id: 'photography', name: 'Photography Club of GIT' },
  { id: 'quiz', name: 'Quiz Club of KLS GIT' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    club: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message regarding ${formData.club} has been sent.`);
    setFormData({ name: '', email: '', club: 'general', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'var(--bg-secondary)',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    marginBottom: '1.5rem',
    outline: 'none',
    fontFamily: 'inherit'
  };

  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3rem', color: 'var(--text-primary)' }}>Get in Touch</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Have questions about a club or want to join? Send us a message!
      </p>

      <form onSubmit={handleSubmit} style={{ 
        background: 'rgba(255, 255, 255, 0.5)', 
        padding: 'clamp(1.5rem, 5vw, 3rem)', 
        borderRadius: '20px', 
        border: '1px solid rgba(0,0,0,0.05)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={inputStyle}
            placeholder="Your Name"
          />
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={inputStyle}
            placeholder="your@email.com"
          />
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Interested Club</label>
          <select 
            name="club" 
            value={formData.club} 
            onChange={handleChange} 
            style={inputStyle}
          >
            <option value="general">General Enquiry</option>
            {clubsList.map(c => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="5" 
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button type="submit" style={{ 
          width: '100%', 
          padding: '1rem', 
          background: 'var(--accent-primary)', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '10px', 
          fontSize: '1.1rem', 
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
