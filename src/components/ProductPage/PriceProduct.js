import React  from 'react';
import Container from 'react-bootstrap/Container';

function PriceProduct(props) {
    let carPrice = props.carPrice;
    let carInstalmentPrice = props.carInstalmentPrice;
    return (
        <Container className='px-3 py-3 my-4 text-white bg-dark align-items-center text-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>GIÁ XE</b></h4>
            <hr className='border border-light mb-4'/>
            <h5>Mua ngay</h5>
            <h4 className='text-success'>{carPrice}</h4>
            <h2>MUA TRƯỚC CHỈ</h2>
            <h1 className='text-warning'><b>{carInstalmentPrice}</b></h1>
        </Container>
    );
}


export default PriceProduct;