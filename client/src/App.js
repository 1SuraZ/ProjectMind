import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Therapy from './components/Therapy/Therapy';
import PeerSupport from './components/PeerSupport/PeerSupport';
import BeMindful from './components/BeMindful/BeMindful';
import About from './components/About/About';
import Services from './components/Service/Services';
import Astrology from './components/Astrology/Astrology';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/therapy" component={Therapy} />
        <Route path="/peer-support" component={PeerSupport} />
        <Route path="/be-mindful" component={BeMindful} />
        <Route path="/astrology" component={Astrology} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
