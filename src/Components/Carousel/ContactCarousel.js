import React, { Fragment } from 'react';
import './Carousel.css';

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
  console.log(props)
  return (
    <div>
      {/* <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-tree.jpg" /> */}
      <div id="carousel">
        <figure ref={spinnerRef} id="spinner">
          {props.contact.map(con =>
            <img key={con.id} src={con.screens.urls.one} />
          )}
        </figure>
      </div>
      <span style={{ float: 'left' }} className="ss-icon" onClick={() => galleryspin('-')}>&lt;</span>
      <span style={{ float: 'right' }} className="ss-icon" onClick={() => galleryspin('')}>&gt;</span>
    </div>

  );
}

export default Carousel;