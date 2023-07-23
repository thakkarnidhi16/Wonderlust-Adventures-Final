import React from 'react';
import whitewaterwalk from "./images/whitewaterwalk.jpg";
import Niagara1 from "./images/Niagara1.jpg";
import niagaracruises from "./images/niagaracruises.jpg";
import fury from "./images/fury.jpg";
import journeybehind from "./images/journeybehind.jpg";

const Niagara = () => {
  return (
    <div>
      <h2>Niagara Falls</h2>
      <img src={Niagara1} alt="Niagara Falls" />
      <div className="attractions-section">
        <h3>Niagara Attractions</h3>
        <div className="attractions">
          <div className="attraction">
            <img src={whitewaterwalk} alt="White Water Walk" />
            <p>White Water Walk</p>
          </div>
          <div className="attraction">
            <img src={niagaracruises} alt="Niagara Cruises" />
            <p>Niagara Cruises</p>
          </div>
          <div className="attraction">
            <img src={fury} alt="Niagara Fury" />
            <p>Niagara Fury</p>
          </div>
          <div className="attraction">
            <img src={journeybehind} alt="Journey behind the falls" />
            <p>Journey behind the Falls</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Niagara;
