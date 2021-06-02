import React  from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img from "gatsby-image"
import Container from 'react-bootstrap/Container';

function GalleryProduct(props) {
    if (props.carGallery === null) {
        return null
    }
    let carGalleryArray = props.carGallery.filter((item) => item.fluid !== null)
    let carName = props.carName
    return (
        <Container className='my-5'>
            <Carousel>
                {
                    carGalleryArray.map((item, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <Img fluid={item.fluid} alt={carName}/>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
        
    );
}

export default GalleryProduct;