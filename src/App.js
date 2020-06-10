import React from 'react';
import Header from './Components/Header'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BioPage from './Components/BioPage';
import SkillsPage from './Components/SkillsPage';
import ContactPage from './Components/ContactPage';
import ResumePage from './Components/ResumePage';
import ProjectsPage from './Components/ProjectsPage';


export default class App extends React.Component {


  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              exact
              path="/"
              component={HomePage}
            />
            <Route
              exact
              path="/bio"
              component={BioPage}
            />
            <Route
              exact
              path="/skills"
              component={SkillsPage}
            />
            <Route
              exact
              path="/contact"
              component={ContactPage}
            />
            <Route
              exact
              path="/resume"
              component={ResumePage}
            />
            <Route
              exact
              path="/projects"
              component={ProjectsPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

