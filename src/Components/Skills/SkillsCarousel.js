import React, { Fragment } from 'react';
import '../Bio/3Carousel.css';
import SMOLCarousel from '../Carousel/Carousel'
const Carousel = (props) => {

  const spinnerRef = React.useRef();
  let angle = 0;

  const galleryspin = (sign) => {

    if (!sign) {
      angle += 120;
    } else {
      angle -= 120;
    }
    if (spinnerRef.current) {
      spinnerRef.current.style.transform = `rotateY(${angle}deg)`
    }

  }

  return (
    <div id="carContainer">
      <div id="carousel">
        <figure ref={spinnerRef} id="spinner">
          {props.skills.map(skill =>
            <figcaption>
              <div id="captionContainer">
                <div id="captionSubContainer">
                  <h2>{skill.general.title}</h2>
                  {/* <SMOLCarousel /> */}
                  <a href={skill.urls.frontEnd} target="none"><img key={skill.id} src={skill.screens.urls.one} /></a>
                  <p>{skill.general.description}</p>
                  <p>{skill.general.audience}</p>
                  <p>Review my list of skills and decide if we're a good fit.
                  If what you're looking for isn't here, contact me and lets
                  discuss what we can do.
        I'm always looking to expand my knowledge.</p>
                  <ul>
                    <li>{skill.tech.languages.frontEnd[0]}</li>
                    <li>{skill.tech.languages.frontEnd[1]}</li>
                    <li>{skill.tech.languages.frontEnd[2]}</li>
                    <li>{skill.tech.languages.frontEnd[3]}</li>
                    <li>{skill.tech.languages.frontEnd[4]}</li>
                    <li>{skill.tech.languages.frontEnd[5]}</li>
                    <li>{skill.tech.languages.server[0]}</li>
                    <li>{skill.tech.languages.database[0]}</li>
                    <li>{skill.tech.languages.database[1]}</li>
                    <li>{skill.tech.languages.database[2]}</li>
                    <li>{skill.tech.languages.database[3]}</li>
                  </ul>
                </div>
              </div>

            </figcaption>
          )}
        </figure>
      </div>
      <div className="buttonsContainer">
        <span style={{ float: 'left' }} className="ss-icon" onClick={() => galleryspin('-')}>&lt;</span>
        <span style={{ float: 'right' }} className="ss-icon" onClick={() => galleryspin('')}>&gt;</span>
      </div>
    </div>
  );
}

export default Carousel;

