import React from 'react';
import Header from './Components/Header'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import BioPage from './Components/Bio/BioPage';
import SkillsPage from './Components/Skills/SkillsPage';
import ContactPage from './Components/ContactPage';
import ResumePage from './Components/ResumePage';
import ProjectsPage from './Components/Projects/ProjectsPage';

export default function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={BioPage}
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


