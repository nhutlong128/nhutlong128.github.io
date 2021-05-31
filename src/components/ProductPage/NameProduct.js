import React  from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

const car_class_size = 10
function NameProduct(props) {
    let carDisplayName = props.carDisplayName;
    return (
        <Container className='px-4'>
            <Row className='align-items-center'>
            <Col xs = {car_class_size} md = {car_class_size} lg = {car_class_size} className='p-0 m-0 text-white bg-dark'>
                <h2 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>{carDisplayName}</b></h2>
            </Col>
            <Col className='p-0 m-0'>
            <hr className='border border-dark border-3'/>
            </Col>
        </Row>
        </Container>
        
    );
}
export default NameProduct;