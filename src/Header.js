import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./images/canadalogo.jpg";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Header = () => {

  const languages=[
    {
      code:'fr',
      name:'Francais'
    },
    {
      code:'en',
      name:'English'
    },
  ]
  
  const { t } = useTranslation(); 

  return (
    <header className="header">
      <div className="header-left">
        <h1>{t('WonderLust Adventures: Exploring Canada!')}</h1>
        <img src={logo} alt={t('home')} />
      </div>
      <nav className="header-right">
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/destinations">{t('destinations')}</Link></li>
          <li><Link to="/ItineraryPlanner">{t('plan')}</Link></li>
          <li><Link to="/contact-us">{t('contact')}</Link></li>
        </ul>
      </nav>
      <div className="language-dropdown">
        <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {t('language')}
        </button>
        <ul className="dropdown-menu">
          {languages.map(({code, name})=>(
            <li key={code}>
              <button className="dropdown-item"  onClick={()=> i18next.changeLanguage(code)}>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
