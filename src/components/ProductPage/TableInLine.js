import React  from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const TableInLine = ({ children, ...props }) => {
    let paragraph = children[0]
    if (paragraph.includes("::")) {
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
    return (
        <p {...props}>{children}</p>
    );
}

export default TableInLine;