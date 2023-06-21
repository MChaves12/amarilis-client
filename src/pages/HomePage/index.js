import Carousel from "react-bootstrap/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardProduct from "../../components/CardProduct";
import Img1 from "../../assets/imgcarrossel1.jpg";
import Img2 from "../../assets/imgcarrossel2.jpg";
import Img3 from "../../assets/imgcarrossel3.jpg";

function HomePage() {
  return (
    <div className="">
    <Navbar/>
      <div>
        <Carousel fade interval={1500}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Conheça a Amarílis</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Trabalhamos com Jóias e Semi Jóias</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Conheça a Nossa Coleçao</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="h1">
        <h1>Nossos Produtos</h1>
      </div>
      <CardProduct/>
    
<Footer/>

    </div>
  );
}

export default HomePage;