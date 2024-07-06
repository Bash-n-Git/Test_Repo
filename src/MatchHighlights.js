import React, { useState } from 'react';
import './MatchHighlights.css'; 
import video1 from './images/video1.png'; 
import video2 from './images/video2.png';
import video3 from './images/video3.png';
import video4 from './images/video4.png';
import video5 from './images/video5.png';

const highlights = [
  { img: video1, date: "1d", description: "India beat USA to secure second round berth | Match Highlights | USA v IND | T20WC 2024" },
  { img: video2, date: "2d", description: "New Zealand bow out with a win | Match Highlights | NZ v PNG | T20WC 2024" },
  { img: video3, date: "2d", description: "All-round brilliance secures Sri Lanka comfortable win against Netherlands | Match Highlights | T20WC 2024" },
  { img: video4, date: "3d", description: "Bangladesh overcome Nepal to qualify for Super Eight | Match Highlights | T20WC 2024" },
  { img: video5, date: "3d", description: "Who's gonna win? Stay Tuned! | Match Highlights | T20WC 2024" },
  { img: video1, date: "4d", description: "USA beat India to secure first round berth | Match Highlights | USA v IND | T20WC 2024" },
  { img: video2, date: "5d", description: "New Zealand tails out with a devastating loss | Match Highlights | NZ v PNG | T20WC 2024" },
  { img: video4, date: "7d", description: "Nepal bangs Bangladesh out of the tournament. Does this mark the end of Bangladesh? | Match Highlights | T20WC 2024" },

];

const MatchHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(highlights.length / 4);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="match-highlights">
      <h2>Match Highlights</h2>
      <button 
        className={`arrow left-arrow ${currentIndex === 0 ? 'disabled' : ''}`} 
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>
      <div className="highlight-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className="highlight-cards">
          {highlights.map((highlight, index) => (
            <div className="highlight-card" key={index}>
              <img src={highlight.img} alt={`Match Highlight ${index + 1}`} className="highlight-image" />
              <div className="highlight-info">
                <p className="highlight-date">{highlight.date}</p>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        className={`arrow right-arrow ${currentIndex === totalSlides - 1 ? 'disabled' : ''}`} 
        onClick={nextSlide}
        disabled={currentIndex === totalSlides - 1}
      >
        &gt;
      </button>
      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentIndex === index ? 'active' : ''}`} 
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MatchHighlights;
