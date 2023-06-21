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

function CardProduct({productName, productPrice, productId }) {

  return (
    <MDBCard className="product-card">
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
        <a href={`/admin/products/${productId}`}>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{productName}</MDBCardTitle>
        <MDBCardText className="cardText">{productPrice} </MDBCardText>
        <div className="btns-container"> 
          <MDBBtn className='card-btn' href={`/admin/products/${productId}`}>Detalhes</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};  
 
export default CardProduct;
  
