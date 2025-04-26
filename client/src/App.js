import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/variables.css';
import './styles/global.css';

// Page Components
import Home from './components/Home/Home';
import About from './components/About/About';
import Therapy from './components/Therapy/Therapy';
import PeerSupport from './components/PeerSupport/PeerSupport';
import BeMindful from './components/BeMindful/BeMindful';
import Astrology from './components/Astrology/Astrology';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Services from './components/Service/Services';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/therapy" component={Therapy} />
          <Route path="/peer-support" component={PeerSupport} />
          <Route path="/be-mindful" component={BeMindful} />
          <Route path="/astrology" component={Astrology} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
