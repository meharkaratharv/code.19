import { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);

    // Optional: Reset form fields after submission
    e.target.reset();

    // Optional: Hide the message after 3 seconds
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="cta">Send Message</button>
      </form>
      {messageSent && (
        <p style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold' }}>
          ✅ Message Sent!
        </p>
      )}
    </section>
  );
};

export default Contact;
