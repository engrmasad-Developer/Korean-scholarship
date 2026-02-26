// About Section - Figma Match
// White section with BKES branding left and description right

import '../styles/about.css';

function About() {
    return (
        <section className="about" id="about" aria-label="About BKES">
            <div className="container">
                <div className="about__grid">
                    {/* Left: BKES Branding */}
                    <div className="about__brand">
                        <span className="about__brand-tag">
                            <span className="about__brand-tag-bracket">[BKES]</span>
                            Bridge to Korea
                        </span>
                        <h2 className="about__brand-title">
                            Bridge to Korea<br />Excellence Scholarship<br />Program
                        </h2>
                    </div>

                    {/* Right: Description */}
                    <p className="about__desc">
                        The Bridge to Korea Excellence Scholarship (BKES) is a prestigious international
                        scholarship program designed to empower talented students from around the world
                        to pursue higher education in South Korea. We provide comprehensive financial
                        support, academic guidance, and cultural integration services to ensure every
                        scholar thrives in their educational journey. Our program connects global talent
                        with Korea's world-class universities and research institutions.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
