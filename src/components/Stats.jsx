// Stats Section Component
// Displays 4 key statistics in a responsive grid

import '../styles/stats.css';

// Statistics data
const STATS = [
    {
        icon: '🚀',
        value: '95%',
        label: 'Career Boost',
        desc: 'Graduates report significant career advancement within 2 years',
    },
    {
        icon: '🕐',
        value: '24/7',
        label: 'Support Available',
        desc: 'Round-the-clock academic and personal support for all students',
    },
    {
        icon: '💰',
        value: '80%',
        label: 'Scholarship',
        desc: 'Average scholarship coverage for eligible international students',
    },
    {
        icon: '🌏',
        value: 'Top 3%',
        label: 'Global Ranking',
        desc: 'Partner universities ranked in the top 3% worldwide',
    },
];

function Stats() {
    return (
        <section className="stats section" id="about" aria-label="Statistics">
            <div className="container">
                <div className="stats__grid">
                    {STATS.map((stat, index) => (
                        <article className="stats__card" key={index}>
                            <div className="stats__card-icon" aria-hidden="true">{stat.icon}</div>
                            <div className="stats__card-content">
                                <div className="stats__card-value">{stat.value}</div>
                                <div className="stats__card-label">{stat.label}</div>
                                <div className="stats__card-desc">{stat.desc}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
