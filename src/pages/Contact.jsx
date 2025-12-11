import React, { useState } from 'react';
import './Contact.css';

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

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have questions about a club or want to join? Send us a message!
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="form-input"
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="form-input"
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Interested Club</label>
          <select 
            name="club" 
            value={formData.club} 
            onChange={handleChange} 
            className="form-select"
          >
            <option value="general">General Enquiry</option>
            {clubsList.map(c => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="5" 
            className="form-textarea"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
