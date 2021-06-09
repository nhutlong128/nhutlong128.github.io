import React  from 'react';
import Container from 'react-bootstrap/Container';
import Markdown from 'markdown-to-jsx';
import TableInLine from './TableInLine';


function SpecificationProduct(props) {

    const specific = props.carSpecification

    if (specific !== null) {
        return (
            <Container className='px-3 py-3 m-0 text-white bg-dark align-items-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>THÔNG SỐ KỸ THUẬT</b></h4>
            <hr className='border border-light mb-4'/>
            <Markdown options={{ forceBlock: true, overrides: {p: TableInLine}, }}>{specific}</Markdown>
            </Container>
            
        );
    }
    else return null;
    
}


export default SpecificationProduct;