import React, { useState, useContext } from 'react'
import ButtonPrimary from './ButtonPrimary'
import NoteContext from '../context/notes/NoteContext'


const ContactForm = () => {
    const url = 'http://127.0.0.1:8000/api/contact/';
    const [contact, setContact] = useState({ email: "", subject: "", query: "" })

    // useing useContext Hook
    const context = useContext(NoteContext);
    const { showAlert } = context;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const query = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: contact.email, subject: contact.subject, query: contact.query })
        }
        try {
            await fetch(url, query).then((response) => {
                return response.json();
            }).then((data) => {
                showAlert('success', 'Your query is send successfully!')
                setContact({ email: "", subject: "", query: "" })
            })
        } catch (error) {
            showAlert('danger', 'Something went wrong?')
        }
    }

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" onChange={handleChange} className="form-control" id="email" name="email" value={contact.email} placeholder="Email.." required />
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" onChange={handleChange} className="form-control" id="subject" name="subject" value={contact.subject} placeholder="Subject.." minLength={10} required />
            </div>
            <div className="mb-3">
                <label htmlFor="query" className="form-label">Query</label>
                <textarea rows="5" onChange={handleChange} className="form-control" id="query" name="query" value={contact.query} placeholder="Explain query.." minLength={20} required></textarea>
            </div>
            <div className="mb-3">
                <ButtonPrimary msg="Submit" />
            </div>
        </form>
    )
}

export default ContactForm
