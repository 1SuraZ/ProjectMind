import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Therapy from './components/Therapy';
import PeerSupport from './components/PeerSupport';
import BeMindful from './components/BeMindful';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/therapy">Therapy</Link></li>
            <li><Link to="/peer-support">Peer Support</Link></li>
            <li><Link to="/be-mindful">Be Mindful</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/therapy" component={Therapy} />
          <Route path="/peer-support" component={PeerSupport} />
          <Route path="/be-mindful" component={BeMindful} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
