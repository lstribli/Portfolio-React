import React from 'react'
import { Link } from 'react-router-dom'
import Context from '../Contexts/Context'
export default class ExpandedProject extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <ul>
          {this.context.projects.map(project =>
            <li className="project" key={project.id}>

              <h3>{project.general.title}</h3>
              <Link to='/projects'>
                <button>
                  back
                </button>
              </Link>
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
            </li>)}
        </ul>
      </div>
    )
  }
}