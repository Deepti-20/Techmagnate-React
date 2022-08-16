
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forms() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control type="name" placeholder="Name*" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter ID*" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Control type="phone" placeholder="Phone*" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicService">
        {/* <Form.Label>Service</Form.Label> */}
        <Form.Control type="service" placeholder="Service" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Control type="Message" placeholder="Message" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiccaptcha">
        <Form.Control type="captcha" placeholder="captcha" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    
    </Form>
  );
}

export default Forms;