// Hero Section - Figma Match
// Dark background with large curve, stats in white area below

import '../styles/hero.css';
import { useEffect, useState } from 'react';

function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="hero" aria-label="Hero">
            <div className="container">
                {/* Main Dark Card */}
                <div className="hero__card">
                    <div className="hero__content">
                        <h1 className="hero__title">
                            BRIDGE TO KOREA<br />
                            EXCELLENCE SCHOLARSHIP
                        </h1>
                        <button className="hero__cta-btn" onClick={scrollToContact}>
                            Get in Touch
                        </button>
                    </div>

                    {/* 
                       Stats Overlay - Positioned Absolute Bottom Right 
                       This creates the inverted curve effect via CSS border-top-left-radius
                    */}
                    <div className="hero__stats-overlay">
                        <div className="hero__stat-item">
                            <h3 className="hero__stat-title">Career Boost</h3>
                            <p className="hero__stat-desc">
                                Students can easily<br />Earn, Manage, Experience
                            </p>
                        </div>
                        <div className="hero__stat-item">
                            <h3 className="hero__stat-title">24/7</h3>
                            <p className="hero__stat-desc">
                                On Ground Assistance<br />for any issues
                            </p>
                        </div>
                        <div className="hero__stat-item">
                            <h3 className="hero__stat-title">80%</h3>
                            <p className="hero__stat-desc">
                                75% - 80%<br />Scholar ship
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
