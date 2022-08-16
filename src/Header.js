import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";
import "./App.css";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="headerOne">
        <Container>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="# IN: +91-9910308266">IN: +91-9910308266</Nav.Link>
              <Nav.Link href="#enquiry@techmagnate.com">enquiry@techmagnate.com</Nav.Link>
              <Nav.Link href="#techmagnate, tech.magnate">techmagnate, tech.magnate</Nav.Link>
              <Nav.Link href="#REQUEST A CALL">REQUEST A CALL</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://www.digitalmarketingcommunity.com/wp-content/uploads/2018/10/Techmagnate.png"
              width="200"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown title="COMPANY" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="WORK" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="INDUSTRY" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="SOLUTIONS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="BLOG" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="CONTACT" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        <Container className='position-sticky fixed-top border bg-white'>
          <Nav className="justify-content-center" fill={true} style={{ position: 'sticky' }} >
            <NavDropdown
              title={
                <Stack direction="horizontal" gap={1}>
                  <div className="bg-light">
                    <img
                      width="42"
                      height="42"
                      src="https://www.techmagnate.com/alpha/images/digital-marketing-icon.png"
                      alt="Digital Marketing"
                      data-done="Loaded"
                    />
                  </div>
                  <div className="bg-light">
                    Digital
                    <br /> Marketing
                  </div>
                </Stack>
              }
            >
              <li>
                <a href="https://www.techmagnate.com/digital-marketing-services.html">
                  Digital Marketing Services
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/search-engine-optimization.html">
                  Search Engine Optimization
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/youtube-video-marketing-services.html">
                  Video Marketing
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/quora-seo-marketing.html">
                  Quora Marketing
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/guest-posting-services.html">
                  Guest Posting
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/ecommerce-solutions.html">
                  Ecommerce Solutions
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/affiliate-program-management.html">
                  Affiliate Marketing
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/content-marketing-services.html">
                  Content Marketing
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/campaign-email.html">
                  Email Marketing
                </a>
              </li>
              <li>
                <a href="https://www.techmagnate.com/conversion-rate-optimization.html">
                  Conversion Optimization
                </a>
              </li>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <Stack direction="horizontal" gap={1}>
                  <div className="bg-light">
                    <img
                      width="42"
                      height="42"
                      src="https://www.techmagnate.com/alpha/images/menuicon1.png"
                      alt="SEO"
                    />
                  </div>
                  <div className="bg-light">SEO</div>
                </Stack>
              }
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <Stack direction="horizontal" gap={1}>
                  <div className="bg-light">
                    <img
                      width="42"
                      height="42"
                      src="https://www.techmagnate.com/alpha/images/menuicon3.png"
                      alt="Pay Per Click"
                    />
                  </div>
                  <div className="bg-light">
                    Pay Per
                    <br />
                    Click
                  </div>
                </Stack>
              }
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <Stack direction="horizontal" gap={1}>
                  <div className="bg-light">
                    <img
                      width="42"
                      height="42"
                      src="https://www.techmagnate.com/alpha/images/menu-ic-smm.png"
                      alt="Social Media Marketing"
                    />
                  </div>
                  <div className="bg-light">
                    Social Media <br />
                    Marketing
                  </div>
                </Stack>
              }
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <Stack direction="horizontal" gap={1}>
                  <div className="bg-light">
                    <img
                      width="42"
                      height="42"
                      src="https://www.techmagnate.com/alpha/images/menuicon7.png"
                      alt="App Marketing"
                    />
                  </div>
                  <div className="bg-light">
                    App
                    <br /> Marketing
                  </div>
                </Stack>
              }
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <Stack direction="horizontal" gap={1}>
                  <div className="bg-light">
                    <img
                      width="42"
                      height="42"
                      src="https://www.techmagnate.com/alpha/images/menuicon2.png"
                      alt="Reputation Marketing"
                    />
                  </div>
                  <div className="bg-light">
                    Reputation <br />
                    Management
                  </div>
                </Stack>
              }
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <Stack direction="horizontal" gap={1}>
                  <div className="bg-light">
                    <img
                      width="42"
                      height="42"
                      src="https://www.techmagnate.com/alpha/images/menuicon5.png"
                      alt="Website Designing"
                    />
                  </div>
                  <div className="bg-light">
                    Website <br /> Designing
                  </div>
                </Stack>
              }
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
    </>
  );
}

export default Header;
