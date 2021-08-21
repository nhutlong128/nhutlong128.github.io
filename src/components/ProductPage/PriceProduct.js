import React  from 'react';
import Container from 'react-bootstrap/Container';

function PriceProduct(props) {
    let carPrice = props.carPrice;
    let carInstalmentPrice = props.carInstalmentPrice;
    return (
        <Container className='px-3 py-3 my-4 text-white bg-dark align-items-center text-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>GIÁ XE</b></h4>
            <hr className='border border-light mb-4'/>
            <h4>Chỉ từ</h4>
            <h4 className='text-warning'>{carPrice}</h4>
            <h4>Ưu đãi trả góp</h4>
            <h4 className='text-danger'><b>Xin quý khách vui lòng liên hệ để biết thêm chi tiết</b></h4>
        </Container>
    );
}


export default PriceProduct;