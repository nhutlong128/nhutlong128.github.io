import React  from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import ProductCard from './ProductCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const card_xs_size = 12
const card_md_size = 6
const card_lg_size = 4

const car_class_size = 8


function ProductCardDeck(props) {
    
    

    const productBody = props.all_car_list.map((item, i) => {
        if (item.node['car_information'] === null) {
            return null
        }
        return (
            <Container className='mt-4' key={item.node.carClass}>
                <Container className='mb-4'>
                    <Row className='align-items-center'>
                        <Col xs = {car_class_size} md = {car_class_size} lg = {car_class_size} className='p-0 m-0 text-white bg-dark'>
                            <h6 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>{item.node.carClass}</b></h6>
                        </Col>
                        <Col className='p-0 m-0'>
                            <hr className='border border-dark'/>
                        </Col>
                    </Row>
                </Container>
                <CardDeck>
                <Row>
                    
                    {(item.node['car_information'] !== null) && item.node['car_information'].map((car, i) => {
                        return (
                            <Col key={car.carName} xs = {card_xs_size} md = {card_md_size} lg = {card_lg_size}><ProductCard carInformation={car}/></Col>
                        );
                    })}
                </Row>
            </CardDeck>
            
            </Container>
           
            
        );
      });
        
    return (
        <Container className='mt-4'>
            {productBody}
        </Container>
    );
}
export default ProductCardDeck;