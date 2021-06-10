import React  from 'react';
import Container from 'react-bootstrap/Container';
import Markdown from 'markdown-to-jsx';
import TableInLine from './TableInLine';
import ImageInLine from './ImageInLine';
import YoutubeInLine from './YoutubeInLine';
import { graphql, useStaticQuery } from "gatsby"



function DiscountProduct(props) {
    const GET_ALL_IMAGES = useStaticQuery(graphql`
    query GetAllImagesForDiscount {
        allImageSharp {
          nodes {
            gatsbyImageData
          }
        }
      }
`);
    const list_images = GET_ALL_IMAGES
    const discount_program_array = props.carDiscountProgram
    const description = discount_program_array.Description
    if (discount_program_array !== null) {
        return (
            <Container className='px-3 py-3 mt-4 text-white bg-dark align-items-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>KHUYẾN MÃI</b></h4>
            <hr className='border border-light mb-4'/>
            {   <div >
                <Markdown options={{ forceBlock: true, overrides: {p: TableInLine, a: YoutubeInLine, img: {component:ImageInLine, props:{ImageList: list_images}}} }}>{description}</Markdown>
                </div>
            }
            </Container>
        );
    }
    else return null;

}


export default DiscountProduct;