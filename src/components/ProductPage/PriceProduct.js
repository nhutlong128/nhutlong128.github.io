import React  from 'react';
import Container from 'react-bootstrap/Container';

function PriceProduct(props) {
    let carPrice = props.carPrice;
    let priceUnit = props.priceUnit;
    return (
        <Container className='px-3 py-3 my-4 text-white bg-dark align-items-center text-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>GIÁ XE</b></h4>
            <hr className='border border-light mb-4'/>
            <p>Chỉ từ:</p>
            <h2><b>{carPrice} {priceUnit}</b></h2>
        </Container>
    );
}


export default PriceProduct;