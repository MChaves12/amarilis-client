import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import './Card.css';

<<<<<<< HEAD
function ProductCard({productName, productPrice}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          {productPrice}
        </Card.Text>
        <Button variant="light" border='dark'>Ver Produto</Button>
      </Card.Body>
    </Card>
=======
export default function ProductCard() {
  return (
    <MDBCard>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage className="cardImage"
          src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
          fluid
          alt="..."
        />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText className="cardText">Preço </MDBCardText>
        <MDBBtn href="#">Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
>>>>>>> eccec6eb4e671305d4dd410472f6c902b51c9632
  );
}
