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
      {imagesCarrousel.map((item) => (
        <CarrouselItem url={item.path}></CarrouselItem>
      ))}
    </Carousel>
  );
}
