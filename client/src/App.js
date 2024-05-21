import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Therapy from './components/Therapy';
import PeerSupport from './components/PeerSupport';
import BeMindful from './components/BeMindful';
import About from './components/About';
import Services from './components/Services';
import Astrology from './components/Astrology';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './components/App.css';

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
