import {Nav} from 'react-bootstrap';
const Footer = () => {
    return <div>
    <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/home">Services</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-1">Cities</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
  </Nav.Item>
</Nav>
    </div>;
};
export default Footer;
