// src/ContactForm.jsx
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleSubmit() {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFeedback('Completeaza toate campurile!');
    } else {
      setFeedback('Multumim, ' + name + '!');
    }
  }

  return (
    <div className="contact-form-card">
      <h3>Contact</h3>
      
      <div className="contact-form-group">
        <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nume"
        />
      </div>
      
      <div className="contact-form-group">
        <input 
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email"
        />
      </div>
      
      <div className="contact-form-group">
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Mesaj"
        />
      </div>
      
      <button onClick={handleSubmit}>Submit</button>
      
      {feedback && <p className="contact-form-feedback">{feedback}</p>}
    </div>
  );
}

export default ContactForm;