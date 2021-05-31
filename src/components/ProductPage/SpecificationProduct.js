import React  from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


function SpecificationProduct(props) {

    const specific = props.carSpecification
    
    const Bold = ({ children }) => <p className="bold">{children}</p>;
    const Text = ({ children }) => <p className="align-center">{children}</p>;
    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => {
            let paragraph = children[0]
            if (paragraph.includes('::')) {
                let left = paragraph.split('::')[0];
                let right = paragraph.split('::')[1];
                return (
                    <>
                    <Row>
                        <Col>
                            <p>{left}</p>
                        </Col>
                        <Col>
                            <p>{right}</p>
                        </Col>
                        
                    </Row>
                    <hr className='border-light mb-3 p-0'/>
                    </>
                )
            }
            return <Text className='mb-3 p-0'>{children}</Text>
            }
          ,
        },
        renderText: text => text.replace('!', '?'),
      };
      
    if (specific !== null) {
        return (
            <Container className='px-3 py-3 m-0 text-white bg-dark align-items-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>THÔNG SỐ KỸ THUẬT</b></h4>
            <hr className='border border-light mb-4'/>
            
            {documentToReactComponents(JSON.parse(specific.raw), options)}
    
            </Container>
            
        );
    }
    else return null;
    
}


export default SpecificationProduct;