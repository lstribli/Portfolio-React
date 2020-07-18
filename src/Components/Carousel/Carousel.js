import React, { Fragment } from 'react';
import './Carousel.css';

const SMOLCarousel = (props) => {

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
      <div id="carousel">
        <figure ref={spinnerRef} id="spinner">
          <img src="https://media.discordapp.net/attachments/701514992767205459/732410436120608808/5sided.JPG?width=627&height=677" alt="" />
          <img src="https://cdn.discordapp.com/attachments/701514992767205459/732410412414533702/3d_Printer_render.JPG" alt="" />
          <img src="https://media.discordapp.net/attachments/701514992767205459/732410464708853821/turbine.JPG?width=740&height=677" alt="" />
          <img src="https://media.discordapp.net/attachments/701514992767205459/732438082770698260/Screenshot_149.png?width=1312&height=677" alt="" />
        </figure>
      </div>
      <span style={{ float: 'left' }} className="ss-icon" onClick={() => galleryspin('-')}>&lt;</span>
      <span style={{ float: 'right' }} className="ss-icon" onClick={() => galleryspin('')}>&gt;</span>
    </div>

  );
}

export default SMOLCarousel;