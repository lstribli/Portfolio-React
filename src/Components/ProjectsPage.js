import React from 'react'
import Context from '../Contexts/Context'
import { Link, Switch, Route } from 'react-router-dom'
import CompressedProject from './CompressedProject'
import ExpandedProject from './ExpandedProject'

export default class ProjectsPage extends React.Component {
  static contextType = Context;

  render() {

    // console.log(this.context);
    return (
      <div>
        <h2>projects</h2>
        <ul className="projects">
          {this.context.projects.map(project =>
            <li className="project" key={project.id}>
              <h3>{project.general.title}</h3>
              <a
                href={project.urls.frontEnd}
                target="none"
              >
                <img
                  src={project.screens.urls.one}
                  alt={project.screens.alts.one}
                />
              </a>
              <p>{project.general.description}</p>
              <p>{project.general.audience}</p>
              <a
                href={project.urls.github}
                target="none"
              >
                <img className="github"
                  src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA"
                  alt={project.screens.alts.one}
                />
              </a>
              <p></p>
            </li>)}
        </ul>
      </div>

    )
  }
}