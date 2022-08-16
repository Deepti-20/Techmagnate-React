
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Cards() {
  return (
    <CardGroup>
        <Row xs={3} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
            <Card>
                <Card.Img variant="top" src="https://www.agenciamacan.com.br/images/otimizacao-de-sites-macan.jpg" />
                <Card.Body>
                <Card.Title>SEO Services</Card.Title>
                <Card.Text>
                    Get ranked for the most relevant keywords for your brand with a holistic technical seo, content and link-building strategy. See upto a 400% * increase in traffic and visibility.
                </Card.Text>
                <Button variant="primary">GET TOP RANKING</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Website Design and Development</Card.Title>
                <Card.Text>
                    Get an intelligently designed, SEO-friendly UI for maximum visitor involvement.
                </Card.Text>
                    <Button variant="primary">UPGRADE YOUR DESIGN</Button>
                </Card.Body>
            </Card>


        </Col>
      ))}
    </Row>













      {/* <Card>
        <Card.Img variant="top" src="https://www.agenciamacan.com.br/images/otimizacao-de-sites-macan.jpg" />
        <Card.Body>
          <Card.Title>SEO Services</Card.Title>
          <Card.Text>
          Get ranked for the most relevant keywords for your brand with a holistic technical seo, content and link-building strategy. See upto a 400% * increase in traffic and visibility.
          </Card.Text>
          <Button variant="primary">GET TOP RANKING</Button>
        </Card.Body>
      </Card> */}


      {/* <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Website Design and Development</Card.Title>
          <Card.Text>
            Get an intelligently designed, SEO-friendly UI for maximum visitor involvement.
          </Card.Text>
          <Button variant="primary">UPGRADE YOUR DESIGN</Button>
        </Card.Body>
      </Card> */}


      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Pay Per Click (PPC) Advertisement</Card.Title>
          <Card.Text>
          Maximize Return on Ad Spends (RoAS) when you work with a Google Premier Partner
          </Card.Text>
          <Button variant="primary">INCREASE LEADS/SALES</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Social Media Marketing</Card.Title>
          <Card.Text>
          Build brand awareness, engage with customers and reach out to new audiences with insightful strategy and high-quality content.
          </Card.Text>
          <Button variant="primary">ENGAGE WITH CUSTOMER</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Video Marketing & YouTube SEO</Card.Title>
          <Card.Text>
          Get cutting-edge Video Marketing so your Youtube Channel rapidly gains popularity. Our SEO for Youtube can help you gain millions of subscribers, views, comments, and likes.
          </Card.Text>
          <Button variant="primary">GROW VIDEO VIWERSHIP</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>App Store Optimization</Card.Title>
          <Card.Text>
          We help you break through the clutter and rank on top of the Play & iOS Stores for your targeted keywords. See an upto 80%* increase in organic app installs.
          </Card.Text>
          <Button variant="primary">INCREASE DOWNLOAD</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Copywriting and Content Marketing</Card.Title>
          <Card.Text>
          Content can make or break your marketing efforts. Get copywriting and content marketing strategies that will take your Digital Campaigns from good to great.
          </Card.Text>
          <Button variant="primary">ENGAGE VISITORS</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Conversion Rate Optimization</Card.Title>
          <Card.Text>
          We use the latest tools and techniques to optimize user journeys for e-commerce sites. See upto 100%* improvement in conversion rates.
          </Card.Text>
          <Button variant="primary">INCREASE CONVERSION RATE</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Online Reputation Management</Card.Title>
          <Card.Text>
          Manage your online image with proactive removal of negative comments and creation of more positive content. Protect yourself against future attacks on your brand reputation.
          </Card.Text>
          <Button variant="primary">BUIDING YOUR RAPUTATION</Button>
        </Card.Body>
      </Card>

    </CardGroup>
  );
}

export default Cards;