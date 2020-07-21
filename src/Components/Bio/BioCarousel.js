import React, { Fragment } from 'react';
import './3Carousel.css';
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
    <div id="carContainer3">
      <div id="carousel">
        <figure ref={spinnerRef} id="spinner">
          {props.bio.map(b =>
            <figcaption key={b.id}>
              <div id="captionContainer">
                <div id="captionSubContainer">
                  <h2>{b.title}</h2>
                  {/* <SMOLCarousel /> */}
                  <a href={""} target="none"><img src={b.url} /></a>
                  <p>{b.desc}</p>
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