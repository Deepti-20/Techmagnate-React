import ListGroup from 'react-bootstrap/ListGroup';

function Lists() {
  return (
    <ListGroup>
      <h4>What Makes us the Top Digital Marketing Company in India</h4>
      <ListGroup.Item variant="primary">Digital Excellence Award in Insurance / Financial Services at the 3rd Edition Digital Enterprise Summit</ListGroup.Item>
      <ListGroup.Item variant="$blue-800">Best Digital Campaign for an Educational Institution/Enterprise at mCube Awards</ListGroup.Item>
      <ListGroup.Item variant="success">Best Performance Driven Mobile Campaign for SEO services rendered to a leading Education Portal</ListGroup.Item>
      <ListGroup.Item variant="danger">2 Awards for Best Content in Digital Campaign for a Quora based content marketing campaign</ListGroup.Item>
      <ListGroup.Item variant="warning">We are one of only 65 Google Premier Partners out of 4000 Partner Digital Agencies in India</ListGroup.Item>
      {/* <ListGroup.Item variant="info"></ListGroup.Item>
      <ListGroup.Item variant="light"></ListGroup.Item>
      <ListGroup.Item variant="dark"></ListGroup.Item> */}
    </ListGroup>
  );
}

export default Lists;