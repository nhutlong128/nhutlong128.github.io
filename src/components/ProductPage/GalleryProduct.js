import React  from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import { GatsbyImage } from "gatsby-plugin-image"

function GalleryProduct(props) {
    if (props.carGallery === null) {
        return null
    }
    let carGalleryArray = props.carGallery
    let carName = props.carDisplay
    return (
        <Container className='my-5'>
            <Carousel>
                {
                    carGalleryArray.map((item, i) => {
                        return (
                            <Carousel.Item key={i}>
                                <GatsbyImage className='w-100 h-100'image={item.localFile.childImageSharp.gatsbyImageData} alt={carName} />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
        
    );
}

export default GalleryProduct;