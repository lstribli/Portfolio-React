import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="https://cdn.discordapp.com/attachments/701514992767205459/719990948347641976/EM8R5.jpg" alt="Logan's logo" />

        </div>
        <div className="title">
          <h2>Logan Stribling, </h2>
          <p>Full-Stack Developer</p>
        </div>

        <div className="nav">
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
        </div>

      </div>
    )
  }
}