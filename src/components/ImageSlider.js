import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


function ImageSlider() {
  const GET_SLIDER_FOR_INDEX_PAGE = useStaticQuery(graphql`
  query GetSliderForIndexPage {
    allStrapiSliders(filter: {Name: {eq: "IndexPage"}}) {
      nodes {
        Name
        Images {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
            name
          }
        }
      }
    }
  }
`);
  const list_image_slider = GET_SLIDER_FOR_INDEX_PAGE.allStrapiSliders.nodes[0]
  return (
    <Container fluid className='p-0'> 
      <Carousel>
        {
          list_image_slider.Images.map((item, i) => {
            return (
              <Carousel.Item key={i}>
                <GatsbyImage image={item.localFile.childImageSharp.gatsbyImageData} alt={item.localFile.name} />
                </Carousel.Item>
              )
            })
          }
        </Carousel>
    </Container>
    );
  }
  
export default ImageSlider;
  