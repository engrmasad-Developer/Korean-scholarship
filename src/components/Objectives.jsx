// Objectives Section - Figma Match
// Clean white design, numbered circles (EGT 1, 2, 3, 4)

import { useState } from 'react';
import '../styles/objectives.css';

const OBJECTIVES = [
    {
        id: 1,
        label: 'EGT\n1',
        title: 'Empowering Global Talent',
        desc: 'We provide opportunities to talented individuals from underdeveloped regions, recognizing their academic potential and dedication to education. With strong support, we foster their professional growth, helping them achieve long-term success and excellence.',
    },
    {
        id: 2,
        label: 'CC\n2',
        title: 'Connecting Cultures',
        desc: 'Fostering meaningful connections between international students and Korean academic institutions to create a vibrant multicultural learning environment.',
    },
    {
        id: 3,
        label: 'DL\n3',
        title: 'Developing Leaders',
        desc: 'Equipping scholars with the leadership skills, professional networks, and cross-cultural competencies needed to thrive in a global economy.',
    },
    {
        id: 4,
        label: 'SI\n4',
        title: 'Sustaining Impact',
        desc: 'Creating a lasting legacy by empowering graduates to contribute to their home communities and strengthen global partnerships.',
    },
];

function Objectives() {
    const [active, setActive] = useState(0);
    const current = OBJECTIVES[active];

    return (
        <section className="objectives" id="objectives" aria-label="Core Objectives">
            <div className="container">
                {/* Header Info */}
                <div className="objectives__header-info">
                    <h3 className="objectives__brand">
                        <span className="text-purple">(BKES)</span> Bridge to Korea<br />
                        Excellence Scholarship Program
                    </h3>
                    <p className="objectives__brand-desc">
                        The Bridge to Korea Excellence Scholarship (BKES) empowers students from developing countries with top-tier education, cultural exchange, and career opportunities in South Korea
                    </p>
                </div>

                <h2 className="objectives__title">
                    <span className="text-purple">CORE</span> OBJECTIVES
                </h2>

                {/* Step Circles */}
                <div className="objectives__steps" role="tablist">
                    {OBJECTIVES.map((obj, i) => (
                        <button
                            key={obj.id}
                            className={`objectives__circle ${active === i ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            role="tab"
                            aria-selected={active === i}
                            aria-label={`Objective ${obj.id}`}
                        >
                            <span className="objectives__circle-text">
                                <span className="circle-label">{obj.label.split('\n')[0]}</span>
                                <span className="circle-number">{obj.id}</span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div className="objectives__panel" key={active} role="tabpanel">
                    <h3 className="objectives__panel-title">{current.title}</h3>
                    <p className="objectives__panel-desc">{current.desc}</p>
                </div>
            </div>
        </section>
    );
}

export default Objectives;
