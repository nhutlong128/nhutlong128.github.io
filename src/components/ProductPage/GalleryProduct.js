import React  from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img from "gatsby-image"
import Container from 'react-bootstrap/Container';

function GalleryProduct(props) {
    if (props.carGallery === null) {
        return null
    }
    let carGalleryArray = props.carGallery.filter((item) => item.fluid !== null)
    return (
        <Container className='my-5'>
            <Carousel>
                {
                    carGalleryArray.map((item, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <Img fluid={item.fluid}/>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
        
    );
}

export default GalleryProduct;