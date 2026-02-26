// Footer Section - Figma Match
// Purple gradient Apply Now CTA + dark bottom bar

import '../styles/footer.css';

const NAV_LINKS = [
    { label: 'About', id: 'about' },
    { label: 'Eligibility', id: 'eligibility' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Accommodation', id: 'accommodation' },
    { label: 'Contact', id: 'contact' },
];

function Footer() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer className="footer" id="footer">
            {/* Apply Now CTA */}
            <div className="footer__cta">
                <div className="container">
                    <div className="footer__cta-inner">
                        <h2 className="footer__cta-title">APPLY NOW</h2>
                        <p className="footer__cta-desc">
                            Join thousands of scholars who have transformed their lives through
                            the Bridge to Korea Excellence Scholarship Program.
                        </p>
                        <button className="footer__cta-btn" onClick={() => scrollTo('contact')}>
                            Start Your Application
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <div className="footer__logo">
                            <div className="footer__logo-icon" aria-hidden="true">B</div>
                            <span className="footer__logo-name">BKES</span>
                        </div>

                        <nav aria-label="Footer navigation">
                            <div className="footer__nav">
                                {NAV_LINKS.map(link => (
                                    <button key={link.id} className="footer__nav-link" onClick={() => scrollTo(link.id)}>
                                        {link.label}
                                    </button>
                                ))}
                            </div>
                        </nav>

                        <p className="footer__copyright">
                            © {new Date().getFullYear()} BKES. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
