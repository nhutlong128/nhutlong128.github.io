import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


function ImageSlider() {
  const GETALLIMAGESLIDER = useStaticQuery(graphql`
  query GetAllIMAGESELLER {
    allContentfulSliderImage {
      nodes {
        sliderImage {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
          title
        }
      }
    }
  }
  `
  );
  const list_image_slider = GETALLIMAGESLIDER.allContentfulSliderImage.nodes
  return (
    <Container fluid className='p-0'> 
      <Carousel>
        {
          list_image_slider.map((item, i) => {
            return (
              <Carousel.Item key={i}>
                <Img
                fluid={item.sliderImage.fluid}
                alt={item.sliderImage.title}
                />
                </Carousel.Item>
              )
            })
          }
        </Carousel>
    </Container>
    );
  }
  
export default ImageSlider;
  