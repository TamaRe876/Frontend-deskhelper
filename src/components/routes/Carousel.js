import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/helpdesk.png";
import pic2 from "./images/cctv1.png";
import pic3 from "./images/hero.png";

export default function Slider() {
  const pic = img1;
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={pic} alt="First slide" />
          <Carousel.Caption>
            <h3>Remote Support</h3>
            <p>Visit out HelpDesk for network support!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={pic2} alt="Second slide" />
          <Carousel.Caption>
            <h3>CCTV sales and support</h3>
            <p>effective monitoring of your premises</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={pic3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Network Solutions</h3>
            <p>
              we provide solutions and support for all network related issues.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
