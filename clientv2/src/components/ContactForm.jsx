import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && email && message) {
            try {
                await axios.post('http://209.216.121.134:37712/send-message', {
                    message: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                });
                setSubmitted(true);
            } catch (error) {
                console.error('Error sending message:', error);
                alert('Something broke. Try again.');
            }
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
