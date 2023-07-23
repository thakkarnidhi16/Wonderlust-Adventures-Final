import React from 'react';
import Calendar from 'react-calendar';
import toronto from "./images/toronto1.jpg";
import ripley from "./images/Ripley's.jpg";
import CNTower from "./images/CNTower.jpg";
import dundas from "./images/YongeDundas.jpg";
import royalOntario from "./images/royalOntario.jpg";

const Toronto = () => {
  const summerMonths = [5, 6, 7, 8]; // Indices of summer months (0-indexed)

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const month = date.toLocaleString('default', { month: 'short' });
      if (summerMonths.includes(date.getMonth())) {
        return <span className="highlighted-date">{month}</span>;
      }
      return <span>{month}</span>;
    }
    return null;
  };

  return (
    <div>
      <div className="top-section">
        <h2>Toronto</h2>
        <p>
          Toronto is a bright, bustling city known for its diverse dining scene, outstanding museums, and happening
          nightlife. Downtown is dotted with skyscrapers, and the city's streets bustle with people on the go. Toronto is
          considered one of the most culturally diverse cities in the world, with more than half the population born
          outside of the city.
        </p>
        <img src={toronto} alt="Toronto" />
        <div className="calendar-container">
          <h3>Best Time to Visit</h3>
          <Calendar
            className="custom-calendar"
            tileClassName={({ date }) => (summerMonths.includes(date.getMonth()) ? 'summer-month' : null)}
            tileContent={tileContent}
          />
          <p className="calendar-description"></p>
        </div>
      </div>
      <div className="places-section">
        <h3>Worth Seeing Places in Toronto</h3>
        <div className="torontoPlaces">
          <div className="torontoPlace">
            <img src={ripley} alt="Ripley's Aquarium" />
            <p>Ripley's Aquarium</p>
          </div>
          <div className="torontoPlace">
            <img src={CNTower} alt="Place 2" />
            <p>CN Tower</p>
          </div>
          <div className="torontoPlace">
            <img src={dundas} alt="Place 3" />
            <p>Yonge-Dundas Square</p>
          </div>
          <div className="torontoPlace">
            <img src={royalOntario} alt="Place 4" />
            <p>Royal Ontario Museum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toronto;
