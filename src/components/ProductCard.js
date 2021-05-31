import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"



function ProductCard(props) {
    let carInformation = props.carInformation;
    let carDisplayName = carInformation.carDisplayName;
    let CarPrice = carInformation.carPrice;
    let CarThumbnail = carInformation.thumbnail.file.url;
    let carName = carInformation.carName
    return (
        <Card style={{width: '100%'}} className="text-center m-1 card-flyer">
            <div className='image-box'>
                <Card.Img variant="top" src={CarThumbnail} className='card-img'/>
            </div>
            
            <Card.Body className='p-2'>
                <Card.Title as='h6' style={{fontFamily: 'Roboto Condensed, sans-serif'}}><b>{carDisplayName}</b></Card.Title>
                <Card.Text>
                Giá từ: <b>{CarPrice} tỷ đồng</b> 
                </Card.Text>
                <Button variant="success" className='btn-block' size='md'><Link className='stretched-link' to={`${carName}`}></Link>Chi tiết</Button>
            </Card.Body>
        </Card>

    );
}

export default ProductCard;

