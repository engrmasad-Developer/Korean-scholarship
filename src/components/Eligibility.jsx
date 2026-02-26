// Eligibility Section - Figma Match
// Tabs with specific styling, white content card

import { useState } from 'react';
import '../styles/eligibility.css';

const TABS = [
    {
        id: 'academic',
        label: 'ACADEMIC',
        title: 'Academic Qualifications',
        items: [
            'Must have completed high school (for undergraduate applicants) or an undergraduate degree (for graduate applicants).',
            'Must provide certified copies of academic transcripts.',
            'Minimum GPA of 3.0 on a 4.0 scale from an accredited institution.',
        ],
    },
    {
        id: 'nationality',
        label: 'NATIONALITY',
        title: 'Nationality Requirements',
        items: [
            'Applicant and both parents must not hold Korean citizenship.',
            'Must be a citizen of a country designated as a development cooperation partner.',
        ],
    },
    {
        id: 'financial',
        label: 'FINANCIAL',
        title: 'Financial Requirements',
        items: [
            'Must demonstrate financial need as per the program guidelines.',
            'Cannot be a recipient of other major scholarships concurrently.',
        ],
    },
    {
        id: 'personal',
        label: 'PERSONAL & PROFESSIONAL',
        title: 'Personal & Professional',
        items: [
            'Strong leadership potential and commitment to community service.',
            'Clear motivation and plan for study in Korea.',
        ],
    },
];

function Eligibility() {
    const [activeTab, setActiveTab] = useState('academic');
    const current = TABS.find(t => t.id === activeTab);

    return (
        <section className="eligibility" id="eligibility" aria-label="Eligibility Criteria">
            <div className="container">
                <h2 className="eligibility__title">
                    <span className="text-purple">ELIGIBILITY</span> CRITERIA
                </h2>

                <div className="eligibility__interactive-area">
                    {/* Tabs */}
                    <nav className="eligibility__tabs" role="tablist">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                className={`eligibility__tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>

                    {/* Content Card */}
                    <div className="eligibility__card" role="tabpanel">
                        <h3 className="eligibility__card-title">{current.title}</h3>
                        <ul className="eligibility__list" role="list">
                            {current.items.map((item, i) => (
                                <li key={i} className="eligibility__item">
                                    <span className="eligibility__bullet">▶</span>
                                    <span className="eligibility__text">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Eligibility;
