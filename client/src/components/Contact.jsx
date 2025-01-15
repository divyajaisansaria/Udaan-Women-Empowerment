import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Generate Google Meet link (static link or use Google Calendar API)
        const googleMeetLink = 'https://meet.google.com/new'; // Or generate dynamically via API

        // Here we assume a fixed Meet link for simplicity.
        const meetingDetails = `
            Hello ${formData.name},

            Your meeting has been scheduled for:
            Date: ${formData.date}
            Time: ${formData.time}

            Join your Google Meet using the link below:
            ${googleMeetLink}

            Best regards,
            Udaan
        `;

        // Send confirmation email to the user with the Google Meet link
        emailjs.send('service_hq3wc69', 'template_rqbr3oq', {
            to_email: formData.email,
            from_name: '',
            reply_to: formData.email,
            to_name: formData.name,
            message: meetingDetails,
            date: formData.date,               // The date from form data (will replace {{date}})
            time: formData.time,               // The time from form data (will replace {{time}})
            google_meet_link: googleMeetLink,
        }, '8KfIoi31AvqDYtuzX')
        .then(() => {
            alert('Meeting scheduled successfully! A confirmation email has been sent.');
            setFormData({ name: '', email: '', date: '', time: '' });
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error sending confirmation email:', error);
            alert('Failed to send confirmation email.');
            setLoading(false);
        });
    };

    return (
        <div className="contact-page max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Schedule a Google Meet</h1>
            <h2 className="text-lg text-gray-600 mb-6 text-center">
                Please fill in your details below to schedule a meeting. You will receive a confirmation email with your Google Meet link.
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-amber-800"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-amber-800"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 mb-2">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-amber-800"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 mb-2">Time</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-amber-800"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-800 text-white py-3 rounded focus:outline-none focus:ring focus:ring-amber-600 transition-colors hover:bg-amber-900"
                >
                    {loading ? 'Scheduling...' : 'Schedule Meeting'}
                </button>
            </form>
        </div>
    );
};

export default Contact;
