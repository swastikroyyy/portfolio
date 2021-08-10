
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project from './components/project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {
  return (
    <Router>
      <div>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 1
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }}

        />


        <Navbar />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
