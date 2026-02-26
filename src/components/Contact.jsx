// Contact Section - Figma Match
// White bg, laptop image left, form right

import { useState } from 'react';
import '../styles/contact.css';

const COUNTRIES = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria', 'Bangladesh',
    'Belgium', 'Brazil', 'Cambodia', 'Canada', 'Chile', 'China', 'Colombia', 'Egypt', 'Ethiopia',
    'Finland', 'France', 'Germany', 'Ghana', 'Greece', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Ireland', 'Italy', 'Japan', 'Jordan', 'Kenya', 'Malaysia', 'Mexico', 'Morocco', 'Myanmar',
    'Nepal', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines',
    'Poland', 'Portugal', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore', 'South Africa',
    'South Korea', 'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Tanzania', 'Thailand',
    'Turkey', 'Uganda', 'Ukraine', 'United Kingdom', 'United States', 'Uzbekistan', 'Vietnam',
];

const INIT = { fullName: '', email: '', subject: '', country: '', hearAboutUs: '', message: '', visa: '' };

function Contact() {
    const [form, setForm] = useState(INIT);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(p => ({ ...p, [name]: value }));
        if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
    };

    const validate = () => {
        const e = {};
        if (!form.fullName.trim()) e.fullName = 'Required';
        if (!form.email.trim()) e.email = 'Required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
        if (!form.subject.trim()) e.subject = 'Required';
        if (!form.country) e.country = 'Required';
        if (!form.hearAboutUs.trim()) e.hearAboutUs = 'Required';
        if (!form.message.trim()) e.message = 'Required';
        if (!form.visa) e.visa = 'Required';
        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }

        try {
            const response = await fetch('https://formsubmit.co/ajax/masadali8000@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    "Full Name": form.fullName,
                    "Email Address": form.email,
                    "Subject": form.subject,
                    "Country": form.country,
                    "How Did You Hear About Us": form.hearAboutUs,
                    "Interest in BKES": form.message,
                    "Visa Requirement": form.visa
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setForm(INIT);
                setErrors({});
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert("Error sending message. Please try again.");
        }
    };

    return (
        <section className="contact" id="contact" aria-label="Contact Us">
            <div className="container">
                <h2 className="contact__title">
                    GET IN <span className="text-purple">TOUCH</span>
                </h2>
                <p className="contact__subtitle">
                    Have Questions Or Need Assistance? Get In Touch With Us To Make Your Student Journey Smoother And Stress-Free!
                </p>

                <div className="contact__box">
                    <div className="contact__grid">
                        {/* Left: Image */}
                        <div className="contact__image-panel" aria-hidden="true">
                            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Person typing on laptop" className="contact__image" />
                        </div>

                        {/* Right: Form */}
                        <div>
                            {submitted ? (
                                <div className="contact__success" role="alert">
                                    ✅ Thank you! We&apos;ve received your message and will contact you within 24–48 hours.
                                </div>
                            ) : (
                                <form className="contact__form-wrap" onSubmit={handleSubmit} noValidate>
                                    <div className="contact__form-row">
                                        <div className="contact__field">
                                            <label className="contact__label" htmlFor="fullName">Full Name</label>
                                            <input id="fullName" name="fullName" type="text"
                                                className={`contact__input ${errors.fullName ? 'error' : ''}`}
                                                placeholder="Your Name" value={form.fullName} onChange={handleChange} />
                                            {errors.fullName && <span className="contact__error">{errors.fullName}</span>}
                                        </div>
                                        <div className="contact__field">
                                            <label className="contact__label" htmlFor="email">Your Email</label>
                                            <input id="email" name="email" type="email"
                                                className={`contact__input ${errors.email ? 'error' : ''}`}
                                                placeholder="Your Email" value={form.email} onChange={handleChange} />
                                            {errors.email && <span className="contact__error">{errors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="contact__form-row">
                                        <div className="contact__field">
                                            <label className="contact__label" htmlFor="subject">Subject</label>
                                            <input id="subject" name="subject" type="text"
                                                className={`contact__input ${errors.subject ? 'error' : ''}`}
                                                placeholder="Select Subject" value={form.subject} onChange={handleChange} />
                                            {errors.subject && <span className="contact__error">{errors.subject}</span>}
                                        </div>
                                        <div className="contact__field">
                                            <label className="contact__label" htmlFor="country">Country of Residence</label>
                                            <select id="country" name="country"
                                                className={`contact__select ${errors.country ? 'error' : ''}`}
                                                value={form.country} onChange={handleChange}>
                                                <option value="">Country of Residence</option>
                                                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                                            </select>
                                            {errors.country && <span className="contact__error">{errors.country}</span>}
                                        </div>
                                    </div>

                                    <div className="contact__form-row-half">
                                        <div className="contact__field">
                                            <label className="contact__label" htmlFor="hearAboutUs">How Did You Hear About Us?</label>
                                            <input id="hearAboutUs" name="hearAboutUs" type="text"
                                                className={`contact__input ${errors.hearAboutUs ? 'error' : ''}`}
                                                placeholder="How did you hear about us?" value={form.hearAboutUs} onChange={handleChange} />
                                            {errors.hearAboutUs && <span className="contact__error">{errors.hearAboutUs}</span>}
                                        </div>
                                    </div>

                                    <div className="contact__field">
                                        <label className="contact__label" htmlFor="message">Interest In BKES</label>
                                        <textarea id="message" name="message" rows={5}
                                            className={`contact__textarea ${errors.message ? 'error' : ''}`}
                                            placeholder="Type Your Message...."
                                            value={form.message} onChange={handleChange} />
                                        {errors.message && <span className="contact__error">{errors.message}</span>}
                                    </div>

                                    <div className="contact__visa-section">
                                        <div className="contact__field">
                                            <label className="contact__label">Visa Requirement?</label>
                                            <div className="contact__radio-group">
                                                <label className="contact__radio-label">
                                                    <input type="radio" name="visa" value="yes" checked={form.visa === 'yes'} onChange={handleChange} /> Yes
                                                </label>
                                                <label className="contact__radio-label">
                                                    <input type="radio" name="visa" value="no" checked={form.visa === 'no'} onChange={handleChange} /> No
                                                </label>
                                            </div>
                                            {errors.visa && <span className="contact__error">{errors.visa}</span>}
                                        </div>
                                        <div className="contact__visa-note">
                                            <span className="text-purple-bold">Check here</span> if you will require visa to travel to <span className="text-purple-light">Korea</span>
                                        </div>
                                    </div>

                                    <div className="contact__submit-wrapper">
                                        <button type="submit" className="contact__submit">Send</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
