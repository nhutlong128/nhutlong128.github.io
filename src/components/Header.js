import React from 'react';
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import MercedesLogo from '../images/mercedes-benz-mb-vector-logo-400x400.png'
function Header(props) {
    return (
        <Navbar bg="dark" expand="md" sticky="top" variant='dark'>
            <Container className='align-items-center'>
            <Navbar.Brand href="#home" className='p-0 m-0'>
            <Link to='/' className='text-white'>
                <img
                    src={MercedesLogo}
                    className="align-top"
                    alt="Mercedes Logo"
                    width='60'
                    height='60'
                />
            </Link>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-right" style={{ flex: 1, fontFamily: 'Lato, sans-serif'}}>
                    <Nav.Link className='mx-2 hover-link'><Link to='/' className='text-white' style={{ textDecoration: 'none' }}><b>TRANG CHỦ</b></Link></Nav.Link>
                    <NavDropdown title={<span className='text-white ml-2 '><b>MERCEDES-BENZ</b></span>} className='hover-link' id="basic-nav-dropdown" alignleft="true" fluid='true'>
                        {
                            props.all_car_list.map((item, i) => {
                                return (
                                    <Container key={item.node.carClass} className='text-right'>
                                        <NavDropdown.Item  as="button" variant="primary"><Link to={`${item.node.carClassPath}`} className='text-secondary' style={{ textDecoration: 'none' }}><b>{item.node.carClass}</b></Link></NavDropdown.Item>
                                            {
                                                item.node['car_information'].map((car, i) => {
                                                    return (
                                                        <NavDropdown.Item key={car.carName} className="underline"><Link to={`${car.carName}`} className='text-dark' style={{ textDecoration: 'none' }}>{car.carDisplayName}</Link></NavDropdown.Item>
                                                        
                                                    );
                                                })
                                            }
                                        <NavDropdown.Divider/>
                                    </Container>
                                );
                            })
                        }
                    </NavDropdown>
                    <Nav.Link className='mx-2 hover-link'><Link to='/BaoGiaXe' className='text-white' style={{ textDecoration: 'none' }}><b>NHẬN BÁO GIÁ XE</b></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            

           
        </Navbar>
    );
}

export default Header;
