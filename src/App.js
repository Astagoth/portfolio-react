import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as Switch
} from 'react-router-dom';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

// We import components so we can use them later
import Home from './components/home';
import AboutMe from './components/aboutMe';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

// This will be where our app will run and where we'll show components
function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg bg-light'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/About-me" className="nav-link">About Me</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/About-me" element={<AboutMe/>}>
          </Route>
        </Switch>
        <footer className='navbar-expand-lg bg-light footer-page'>
        <div className='d-flex justify-content-center'>
            <a href="https://www.linkedin.com/in/jordan-dufour21/" class="me-4 text-reset black footer-icon">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/Astagoth" class="me-4 text-reset black footer-icon">
              <FaGithub/>
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
