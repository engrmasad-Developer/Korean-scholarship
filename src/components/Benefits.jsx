// Benefits Section - Figma Match
// Clean white section, text left, photo right, bottom navigation

import { useState } from 'react';
import '../styles/benefits.css';

const SLIDES = [
    {
        id: 'investment',
        headline: 'AFFORDABLE INVESTMENT:',
        desc: 'Students save up to ₩50,000,000 (~$38,000) with subsidized tuition, housing, and comprehensive coverage, paying only ₩15,000,000 – ₩17,000,000 ($11,000–$13,000).',
        // In reality we might want a list here too, but screenshot shows a paragraph block.
    },
    {
        id: 'excellence',
        headline: 'ACADEMIC EXCELLENCE:',
        desc: 'Access to top-tier Korean universities with world-class facilities, distinguished faculty, and a rigorous curriculum designed to foster critical thinking and innovation.',
    },
    {
        id: 'culture',
        headline: 'CULTURAL IMMERSION:',
        desc: 'Experience the vibrant traditions of Korea while building a global network. From language programs to cultural excursions, every day is an opportunity to learn and grow.',
    }
];

function Benefits() {
    const [idx, setIdx] = useState(0);
    const slide = SLIDES[idx];

    const prev = () => setIdx(i => (i === 0 ? SLIDES.length - 1 : i - 1));
    const next = () => setIdx(i => (i === SLIDES.length - 1 ? 0 : i + 1));

    return (
        <section className="benefits" id="benefits" aria-label="Student Benefits">
            <div className="container">
                <h2 className="benefits__title">
                    <span className="text-purple">STUDENT</span> BENEFITS
                </h2>

                <div className="benefits__slider">
                    {/* Main Content Area */}
                    <div className="benefits__content">
                        <div className="benefits__slide-animations" key={idx}>
                            <h3 className="benefits__headline">
                                Benefits for <span className="text-purple">Students</span>
                            </h3>

                            <div className="benefits__info-block">
                                <h4 className="benefits__sub-headline">{slide.headline}</h4>
                                <p className="benefits__desc">
                                    {slide.desc}
                                </p>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="benefits__controls">
                            <button className="benefits__arrow" onClick={prev} aria-label="Previous">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button className="benefits__arrow" onClick={next} aria-label="Next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="benefits__image-container">
                        {/* Placeholder for the "Students Laughing" image */}
                        <div className="benefits__image-placeholder" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
