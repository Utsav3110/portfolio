import React, { useRef, useState } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        setLoading(false);
        setSuccessMessage('Utsav will contact you soon');
      })
      .catch((error) => {
        setLoading(false);
        console.error('Failed to send email:', error);
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        {successMessage && <p className="successMessage">{successMessage}</p>}
        <input
          className="hover btn"
          type="submit"
          value={loading ? 'Sending...' : 'Submit'}
          disabled={loading}
        />
      </form>
    </section>
  );
}

export default Contact;
