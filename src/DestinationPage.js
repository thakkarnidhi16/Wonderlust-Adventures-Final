import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Step 1: Import useTranslation hook
import toronto from "./images/toronto.jpg";
import vancouver from "./images/vancouver.jpg";
import Niagara from "./images/Niagara.jpg";
import Banff from "./images/Banff.jpg";

const DestinationPage = () => {
  const history = useHistory();
  const { t } = useTranslation(); // Step 2: Get the 't' function from useTranslation
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        navigateToDestination(searchValue);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [searchValue]);

  const navigateToDestination = (query) => {
    const destinations = [
      { name: t('niagaraFalls'), path: '/Niagara' },
      { name: t('toronto'), path: '/toronto' },
      { name: t('vancouver'), path: '/vancouver' },
      { name: t('banff'), path: '/banff' },
      { name: t('montreal'), path: '/montreal' },
    ];

    const matchedDestination = destinations.find((destination) =>
      destination.name.toLowerCase().includes(query.toLowerCase())
    );

    if (matchedDestination) {
      history.push(matchedDestination.path);
    }
  };

  return (
    <div>
      <section className="search-section">
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={searchValue}
          onChange={handleSearch}
        />
      </section>
      <section className="top-places-section">
        <h2>{t('topPlaces')}</h2>
        <div className="top-places">
          <div className="place">
            <img src={toronto} alt={t('toronto')} />
            <Link to="/toronto">{t('toronto')}</Link>
          </div>
          <div className="place">
            <img src={Niagara} alt={t('niagaraFalls')} />
            <Link to="/Niagara">{t('niagaraFalls')}</Link>
          </div>
          <div className="place">
            <img src={vancouver} alt={t('vancouver')} />
            <Link to="/vancouver">{t('vancouver')}</Link>
          </div>
        
          <div className="place">
            <img src={Banff} alt={t('banff')} />
            <Link to="/banff">{t('banff')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
