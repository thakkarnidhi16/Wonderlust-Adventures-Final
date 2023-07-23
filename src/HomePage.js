import React from 'react';
import { useTranslation } from 'react-i18next'; // Step 1: Import useTranslation hook
import toronto from "./images/toronto.jpg";
import Slideshow from "./Slideshow";

const HomePage = () => {
  const { t } = useTranslation(); // Step 2: Get the 't' function from useTranslation

  return (
    <div>
      <section className="home-section">
        {/* Use the 't' function to access translated strings */}
        <h1 className="home-heading">{t('homePageTitle')}</h1>
        <Slideshow /> 
       
      </section>
    </div>
  );
}

export default HomePage;
