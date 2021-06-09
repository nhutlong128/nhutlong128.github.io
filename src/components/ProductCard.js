import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"



function ProductCard(props) {
    let carInformation = props.carInformation;
    let carDisplayName = carInformation.DisplayName;
    let CarOriginalPrice = carInformation.OriginalPrice;
    let CarInstalmentPrice = carInformation.InstalmentPrice;
    let CarThumbnail = carInformation.Thumbnail.localFile.childImageSharp.gatsbyImageData;
    let carName = carInformation.RouteName
    return (
        <Card style={{width: '100%'}} className="text-center m-1 card-flyer">
            <div className='image-box'>
                <GatsbyImage image={CarThumbnail} className='card-img' alt={carName}/>
            </div>
            
            <Card.Body className='p-2'>
                <Card.Title as='h6' style={{fontFamily: 'Roboto Condensed, sans-serif'}}><b>{carDisplayName}</b></Card.Title>
                <Card.Text>
                <p>Mua ngay: <b>{CarOriginalPrice}</b></p>
                <h4>MUA TRƯỚC CHỈ: <b className='text-warning'>{CarInstalmentPrice}</b></h4>
                
                </Card.Text>
                <Button variant="primary" className='btn-block' size='md'><Link className='stretched-link' to={`/xe/${carName}`}></Link>Chi tiết</Button>
            </Card.Body>
        </Card>

    );
}

export default ProductCard;

