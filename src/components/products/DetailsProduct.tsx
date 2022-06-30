import { Button, Card } from "react-bootstrap";

export function DetailsProducts() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtUwjplFPnBWKgi-WzOkWjsx5xrD4OeUhgjX09VThKuPoMV5wuPl3LzQb3TOCMo9BaoeY&usqp=CAU"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
