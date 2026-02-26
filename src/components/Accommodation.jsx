// Accommodation Section - Figma Match
// Section with large image and overlapping feature card

import '../styles/accommodation.css';

function Accommodation() {
    return (
        <section className="accommodation" id="accommodation" aria-label="Accommodation">
            <div className="container">
                <div className="accommodation__layout">
                    {/* Left: Text */}
                    <div className="accommodation__text-content">
                        <h2 className="accommodation__title">
                            <span className="text-purple">COMFORTABLE.</span> AFFORDABLE.<br />
                            HASSLE-FREE
                        </h2>

                        <p className="accommodation__desc">
                            Find The Ideal Student Accommodation With <span className="text-purple">Fully-Furnished Rooms, Study Desks</span>, And <span className="text-purple">High-Speed Wi-Fi</span>. Enjoy Modern Kitchens, Communal Lounges, And Vibrant Social Spaces. Conveniently Located Near Universities And Transport, With <span className="text-purple">24/7 Security</span> For Your Peace Of Mind. Experience A Welcoming And Hassle-Free Student Life!
                        </p>
                    </div>

                    {/* Right: Image & Card */}
                    <div className="accommodation__visual">
                        <div className="accommodation__image-container">
                            {/* Placeholder for Dorm Room Image */}
                            <div className="accommodation__image-placeholder" />
                        </div>

                        {/* Floating Card */}
                        <div className="accommodation__card">
                            <ul className="accommodation__features">
                                <li className="accommodation__feature">
                                    <span className="dot" /> HIGH SPEED WIFI
                                </li>
                                <li className="accommodation__feature">
                                    <span className="dot" /> DELICIOUS MEAL
                                </li>
                                <li className="accommodation__feature">
                                    <span className="dot" /> MODERN AMENITIES
                                </li>
                            </ul>
                            <button className="accommodation__btn">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Accommodation;
