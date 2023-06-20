import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import './CardCategory.css';

function CategoryCard({categoryId, categoryName}) {

  return (
    <MDBCard className="category-card">
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
        <a href={`/admin/products/${categoryId}`}>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{categoryName}</MDBCardTitle>
        <div className="btns-container"> 
          <MDBBtn className='card-btn' href={`/admin/category/${categoryId}`}>Editar</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};  
 
export default CategoryCard;
  
