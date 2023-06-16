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

function ProductCard({productName, productPrice, productId, categoryId, categoryName}) {

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
        <a href={`/admin/products/${productId}`}>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{productName || categoryName}</MDBCardTitle>
        <MDBCardText className="cardText">{productPrice} </MDBCardText>
        <MDBBtn href={`/admin/products/${productId}`}>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};  
 
export default ProductCard;
  
