import React from "react";
import "../theme/styles.css";

interface ContactProps {
  currentTheme: "quincy" | "ichigo";
}

const Contact: React.FC<ContactProps> = ({ currentTheme }) => {
  const quincyContent = {
    intro: "Ready to discuss your next project? Let's connect and create something extraordinary together.",
    submitText: "Send Message"
  };

  const ichigoContent = {
    intro: "Ready to face any challenge together? Let's connect and forge something powerful.",
    submitText: "Send Message"
  };

  const content = currentTheme === "quincy" ? quincyContent : ichigoContent;

  return (
    <div className="contact-content">
      <div className={`bubble contact-bubble bubble-${currentTheme}`}>
        <div className="bubble-icon">📧</div>
      </div>
      <p className="contact-intro">
        {content.intro}
      </p>
      <form className="form">
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
          <div className="form-group">
            <label className={`text-${currentTheme}`}>Name</label>
            <input type="text" className={`form-input form-input-${currentTheme}`} required />
          </div>
          <div className="form-group">
            <label className={`text-${currentTheme}`}>Email</label>
            <input type="email" className={`form-input form-input-${currentTheme}`} required />
          </div>
        </div>
        <div className="form-group">
          <label className={`text-${currentTheme}`}>Message</label>
          <textarea rows={5} className={`form-input form-input-${currentTheme}`} required></textarea>
        </div>
        <button 
          type="submit" 
          className={`btn btn-${currentTheme}`} 
          style={{fontSize: '1.1rem', padding: '1rem 2rem'}}
        >
          {content.submitText}
        </button>
      </form>
      <div className="social-links">
        <a href="mailto:your@email.com" className={`social-link social-link-${currentTheme}`}>📧</a>
        <a href="https://linkedin.com/in/yourprofile" className={`social-link social-link-${currentTheme}`}>💼</a>
        <a href="https://github.com/yourusername" className={`social-link social-link-${currentTheme}`}>💻</a>
        <a href="https://twitter.com/yourusername" className={`social-link social-link-${currentTheme}`}>🐦</a>
      </div>
    </div>
  );
};

export default Contact; 