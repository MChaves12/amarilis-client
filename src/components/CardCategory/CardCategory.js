import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
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
  
