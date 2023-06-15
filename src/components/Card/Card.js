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
  );
}
