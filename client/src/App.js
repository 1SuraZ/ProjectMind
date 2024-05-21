import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Therapy from './components/Therapy';
import PeerSupport from './components/PeerSupport';
import BeMindful from './components/BeMindful';
import About from './components/About';
import Services from './components/Services';
import Astrology from './components/Astrology';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <Link className="logo" to="/">Mindful</Link>
            <nav className="nav">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/therapy">Therapy</Link>
              <Link to="/peer-support">Peer Support</Link>
              <Link to="/be-mindful">Be Mindful</Link>
              <Link to="/astrology">Astrology</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
            </nav>
            <Link className="signup-button" to="/signup">Sign Up</Link>
          </div>
        </header>
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
      </div>
    </Router>
  );
}

export default App;
