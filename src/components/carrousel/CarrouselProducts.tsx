import Carousel from "react-bootstrap/Carousel";
import { CarrouselItem } from "./CarrouselItem";

export function CarrouselProducts() {
  const imagesCarrousel = [
    { name: "image1", path: "./images/banner1.jpg" },
    { name: "image2", path: "./images/banner2.jpg" },
    { name: "image3", path: "./images/banner3.jpg" },
  ];
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner3.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
