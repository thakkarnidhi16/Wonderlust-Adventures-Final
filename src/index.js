import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'


// Set up i18next with language detector and http backend
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  
  .init({
    resources:{
      en:{
        translation:{
          'welcome': 'Welcome',
          'home':'Home',
          'destinations': 'Destinations',
          'plan': 'Plan/Organize',
          'contact': 'Contact Us',

          'discover': 'Discover the wonders of Canada with Wanderlust Adventures',
    'subscribe': 'Subscribe to our newsletter',
    'copyRight': '© 2023 Wanderlust Adventures. All rights reserved.',
    'phone': 'Phone',
    'email': 'Email',

          'homePageTitle': 'Canada is more than its hulking-mountain, craggy-coast good looks: it also cooks extraordinary meals, rocks cool culture, and unfurls wild, moose-spotting road trips.',
          'homePageAltText': 'Canada Landscape',
          
          'searchPlaceholder': 'Search by name, city, or province',
          'topPlaces': 'Top Places',
          'niagaraFalls': 'Niagara Falls',
          'toronto': 'Toronto',
          'vancouver': 'Vancouver',
          'banff': 'Banff',
          'montreal': 'Montreal'
        },
      },
      fr:{
        translation:{
          'home': 'Accueil',
          'destinations': 'Destinations',
          'plan': 'Planifier/Organiser',

          

          'contact': 'Contactez-nous',

          'discover': 'Découvrez les merveilles du Canada avec Wanderlust Adventures',
          'subscribe': 'Abonnez-vous à notre newsletter',
          'copyRight': '© 2023 Wanderlust Adventures. Tous droits réservés.',
          'phone': 'Téléphone',
          'email': 'E-mail',
          'welcome':'french welcome',
          'homePageTitle': 'Le Canada est bien plus que son apparence imposante de montagnes et de côtes rocheuses : il propose également des plats extraordinaires, une culture fascinante et des itinéraires sauvages pour repérer les orignaux.',
          'homePageAltText': 'Paysage du Canada',
          'searchPlaceholder': 'Rechercher par nom, ville ou province',
          'topPlaces': 'Meilleurs endroits',
          'niagaraFalls': 'Chutes du Niagara',
          'toronto': 'Toronto',
          'vancouver': 'Vancouver',
          'banff': 'Banff',
          'montreal': 'Montréal'
        },
      },
    },
    
    
    lng: document.querySelector('html').lang,
    supportedLngs: ['en', 'fr'], // List of supported languages
    fallbackLng: 'en', // Default language if detection fails
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'], // Cache the language in cookies
    },
    backend: {
      // Set the endpoint for loading translation files
      loadPath: '/assets/locales/{{lng}}/Translation.json',

    },
    react:{useSuspense:false},
  })

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the app with I18nextProvider */}
    
        <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);
