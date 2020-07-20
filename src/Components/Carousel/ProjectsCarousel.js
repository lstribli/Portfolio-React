import React, { Fragment } from 'react';
import './Carousel.css';
import SMOLCarousel from './Carousel'
const Carousel = (props) => {

  const spinnerRef = React.useRef();
  let angle = 0;

  const galleryspin = (sign) => {

    if (!sign) {
      angle += 90;
    } else {
      angle -= 90;
    }
    if (spinnerRef.current) {
      spinnerRef.current.style.transform = `rotateY(${angle}deg)`
    }

  }
  console.log(props.projects[0].urls.frontEnd)
  console.log(props)
  return (
    <div id="carContainer">


      <div id="carousel">
        <figure ref={spinnerRef} id="spinner">

          {props.projects.map(project =>
            <figcaption>
              <div id="captionContainer">

                <div id="captionSubContainer">
                  <h2>{project.general.title}</h2>
                  {/* <SMOLCarousel /> */}
                  <a href={project.urls.frontEnd} target="none"><img key={project.id} src={project.screens.urls.one} /></a>
                  <p>{project.general.description}</p>
                  <p>{project.general.audience}</p>
                  <p>Open the github Repo for this project:</p>
                  <a
                    href={project.urls.github}
                    target="none"
                  >
                    <img className="github"
                      src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA"
                      alt={project.screens.alts.one}
                    />
                  </a>
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