import Carousel from "react-bootstrap/Carousel";
export function CarrouselItem({ url }: { url: string }) {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/banner2.jpg"
        alt="First slide"
      />
    </Carousel.Item>
  );
}
