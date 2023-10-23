
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { nanoid } from "nanoid";

const MyNavbar = ({ links, appQuery, SetAppQuery }) => {
  const handleSearchChange = (event) => {
    SetAppQuery(event.target.value); // Chiama la funzione SetAppQuery per aggiornare 'query'
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EpiNavbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <Nav.Link key={nanoid()} href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <input
              type="text"
              placeholder="Search..."
              value={appQuery} 
              onChange={handleSearchChange} 
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
