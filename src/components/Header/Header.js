// Importo el componente del icono.
import CartIcon from "../CartIcon/CartIcon"

import {Navbar, Container, Nav} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom"

export default function Header () {

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                    <Link to="/" ><img src="/images/logomarketnav.png" alt="Volver a inicio" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                    <Nav.Link>
                    <NavLink to="/">
                        Inicio
                    </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                    <NavLink to="/products">
                        Productos
                    </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                    <NavLink to="/category/frutas-secas">
                        Frutas secas
                    </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                    <NavLink to="/category/aceites">
                        Aceites
                    </NavLink>
                    </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <CartIcon />
                </Container>
            </Navbar>
        </header>
        );
}