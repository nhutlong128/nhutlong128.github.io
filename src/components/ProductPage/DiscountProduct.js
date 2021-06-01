import React  from 'react';
import Container from 'react-bootstrap/Container';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function DiscountProduct(props) {
    const discount_program_array = props.carDiscountProgram
    const Bold = ({ children }) => <p className="bold">{children}</p>;
    const Text = ({ children }) => <p className="align-center">{children}</p>;
    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Text className='mb-3 p-0'>{children}</Text>
            
          ,
        },
        renderText: text => text.replace('!', '?'),
      };
      
    if (discount_program_array !== null) {
        return (
            <Container className='px-3 py-3 mt-4 text-white bg-dark align-items-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>KHUYẾN MÃI</b></h4>
            <hr className='border border-light mb-4'/>
            {
                discount_program_array.map((item, i) => {
                    if (item.discountProgram !== null) {
                        return (
                            <div key={i}>
                            {documentToReactComponents(JSON.parse(item.discountProgram.raw), options)}
                            </div>
                            )
                    }
                    return null
                    
                }
            )
            }
            </Container>
        );
    }
    else return null;

}


export default DiscountProduct;