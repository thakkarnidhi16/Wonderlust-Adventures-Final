import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import { Suspense } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import DestinationPage from './DestinationPage';
import Toronto from './Toronto';
import Niagara from './Niagara';
import ContactUsPage from './ContactUsPage';
import ItineraryPlanner from './ItineraryPlanner';
import { useTranslation } from 'react-i18next';


const App = () => {
  const { t } = useTranslation(); 
  return (
    <div className="App">
     
      <Router> {/* Wrap the JSX block inside BrowserRouter */}
    
      
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/destinations" component={DestinationPage} />
          <Route exact path="/Toronto" component={Toronto} />
          <Route exact path="/Niagara" component={Niagara} />
          <Route exact path="/contact-us" component={ContactUsPage} />
          <Route exact path="/ItineraryPlanner" component={ItineraryPlanner} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

