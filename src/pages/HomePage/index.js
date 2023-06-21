import Carousel from "react-bootstrap/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Img1 from "../../assets/imgcarrossel1.jpg";
import Img2 from "../../assets/imgcarrossel2.jpg";
import Img3 from "../../assets/imgcarrossel3.jpg";

function HomePage() {
  return (
    <div className="">
    <Navbar/>
      <div className="carrousel">
        <Carousel fade interval={1500}>
          <Carousel.Item className="carrousel-indicators">
            <img
              className="d-block w-100 h-50"
              src={Img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carrousel-indicators">
            <img
              className="d-block w-100 h-50"
              src={Img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carrousel-indicators">
            <img
              className="d-block w-100 h-50"
              src={Img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="frase">
        <p>Conheça a Nossa Coleçao</p>
      </div>
      
    
<Footer/>

    </div>
  );
}

export default HomePage;