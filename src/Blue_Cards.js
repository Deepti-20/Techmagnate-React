import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './index.css'

function Blue_Cards() {
  return (
    <CardGroup className='blue-boxes'>
      <Card>
        <Card.Body >
          <Card.Text>
            Increased
            Website Traffic
            via Enterprise SEO by<br></br>
            <h1>3500%</h1>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            Increased
            Organic Traffic
            via Vernacular SEO by
            <h1>270%</h1>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>
            Increased
            Organic Views on
            YouTube Channel by
          </Card.Text>
          <h1>147%</h1>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Text>
            Increased
            Organic Views on
            YouTube Channel by
          </Card.Text>
          <h1>147%</h1>
        </Card.Body> 
      </Card>
    </CardGroup>
  );
}

export default Blue_Cards;