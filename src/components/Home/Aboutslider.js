import React from 'react';
import '../../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Gallery5 from '../../images/Gallery5.JPG';
import Gallery4 from '../../images/Gallery4.JPG';
import Gallery3 from '../../images/Gallery3.JPG';
import Gallery2 from '../../images/Gallery2.JPG';

function AboutSlider() {
  return (
   
  <div>
     <h1 className='EventHead'><strong>Events</strong></h1>
     <br />
      <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery5} height={640} width={540}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery4} height={640} width={540}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery3} height={640} width={540}
           alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery2}  height={640} width={540}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}
export default AboutSlider;
