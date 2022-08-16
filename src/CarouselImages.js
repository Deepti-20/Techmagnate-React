// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Stack from "react-bootstrap/Stack";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function CarouselImages() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            loading="lazy"
            width="1349"
            height="377"
            data-srcset="https://www.techmagnate.com/files/2021/09/home-page-digital-card-banner-2022-595xh.jpg 600w, https://www.techmagnate.com/files/2021/09/home-page-digital-card-banner-2022.jpg 1920w"
            src="https://www.techmagnate.com/files/2021/09/home-page-digital-card-banner-2022.jpg"
            data-src="https://www.techmagnate.com/files/2021/09/home-page-digital-card-banner-2022.jpg"
            alt="Download Report Card"
            srcset="https://www.techmagnate.com/files/2021/09/home-page-digital-card-banner-2022-595xh.jpg 600w, https://www.techmagnate.com/files/2021/09/home-page-digital-card-banner-2022.jpg 1920w"
          />
          <Carousel.Caption>
          One
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            loading="lazy"
            width="1366"
            height="384"
            data-srcset="https://www.techmagnate.com/files/2021/09/banner1-595xh.jpg 600w, https://www.techmagnate.com/files/2021/09/banner1.jpg 1920w"
            src="https://www.techmagnate.com/files/2021/09/banner1.jpg"
            data-src="https://www.techmagnate.com/files/2021/09/banner1.jpg"
            alt="Website Design Company in India"
            srcset="https://www.techmagnate.com/files/2021/09/banner1-595xh.jpg 600w, https://www.techmagnate.com/files/2021/09/banner1.jpg 1920w"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            loading="lazy"
            width="1366"
            height="384"
            data-srcset="https://www.techmagnate.com/files/2021/09/banner2-595xh.jpg 600w, https://www.techmagnate.com/files/2021/09/banner2.jpg 1920w"
            src="https://www.techmagnate.com/files/2021/09/banner2.jpg"
            data-src="https://www.techmagnate.com/files/2021/09/banner2.jpg"
            alt="Integrated Search SEO &amp; PPC Company in india"
            srcset="https://www.techmagnate.com/files/2021/09/banner2-595xh.jpg 600w, https://www.techmagnate.com/files/2021/09/banner2.jpg 1920w"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselImages;
