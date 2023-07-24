import React from 'react';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer-container">
      <p>{t('discover')}</p>
      <div className="subscribe">
        <input type="email" placeholder={t('Enter your Email')} />
        <button>{t('subscribe')}</button>
      </div>
      <p className="copyRight">{t('copyRight')}</p>
      <div className="contact-info">
        <div>
          {t('phone')}: +1-123-456-7890
        </div>
        <div>
          {t('email')}: contact@wanderlustadventures.com
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
