import React, { useState } from 'react';
import './ContactForm.css';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            setSubmitted(true);
        }
    };

    return (
        <div className="contact-form">
            <h2>
                <ContactMailIcon style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Get in Touch
            </h2>

            {submitted ? (
                <p>Thank you for reaching out, {name}! I'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            )}
        </div>
    );
}
