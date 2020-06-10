import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <section classname="headerLogo">

        </section>
        <section className="nav">
          <Link to='/'>
            <button>
              home
            </button>
          </Link>
          <Link to='/bio'>
            <button>
              bio
            </button>
          </Link>
          <Link to='/skills'>
            <button>
              skills
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              contact
            </button>
          </Link>
          <Link to='/resume'>
            <button>
              resume
            </button>
          </Link>
          <Link to='/projects'>
            <button>
              projects
            </button>
          </Link>
        </section>

      </div>
    )
  }
}