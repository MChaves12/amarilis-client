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

function ProductCard({productName, productPrice, productId, productImg, categoryId, categoryName, productRoute, categoryRoute}) {

  return (
    <MDBCard className="product-card">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage className="cardImage"
          src={ productImg[0] || "https://mdbootstrap.com/img/new/standard/nature/111.webp"}
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
        <div className="btns-container"> 
          <MDBBtn className='card-btn' href={`/admin/${productRoute || categoryRoute}/${productId || categoryId}`}>Editar</MDBBtn>
          <MDBBtn className='card-btn' href={`/admin/category/add-product/${productId}`}>Adicionar Categoria</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};  
 
export default ProductCard;
  
