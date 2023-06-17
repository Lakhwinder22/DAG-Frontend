import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../App.css';
import Img2 from '../../images/Img2.png';
import Img3 from '../../images/Img3.jpg';
import Img5 from '../../images/Img5.webp';

function AppSlide() {
  return (
  <div className='Slid'>
      <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img5}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default AppSlide;

