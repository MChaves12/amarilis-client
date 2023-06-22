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
import './styles.css';

function CardProduct({productName, productPrice, productId, productImg }) {

  return (
    <MDBCard className="product-card">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage className="cardImage"
          src={productImg || "https://mdbootstrap.com/img/new/standard/nature/111.webp"}
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
        <MDBCardText className="cardText">{`R$${productPrice},00`} </MDBCardText>
        <div className="btns-container"> 
          <MDBBtn className='card-btn' href={`action`}>Lista de desejos</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};  
 
export default CardProduct;
  
