import React  from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from "gatsby-image";


function DescriptionProduct(props) {

    const description = props.carDescription
    
    const Bold = ({ children }) => <p className="bold">{children}</p>;
    const Italic = ({ children}) => <p className='italic'>{children}</p>;
    const Underline = ({ children }) => <p className="underline">{children}</p>;
    const Text = ({ children }) => <p className="text-justify">{children}</p>;
    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <Bold>{text}</Bold>,
          [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
          [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                let paragraph = node.content[0].value
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
            },
            [BLOCKS.EMBEDDED_ASSET]: node => {
                let imageID = node.data.target.sys.id;
                let image_fluid = null
                let image_title = null
                description.references.forEach((item, i) => {
                    if (item.contentful_id === imageID) {
                        image_fluid = item.fluid
                        image_title = item.title
                    }
                    
                }
                )
                return (
                    <>
                    <Img className='my-4' fluid={image_fluid}/>
                    <p className='text-center'>Ảnh: {image_title}</p>
                    </>
                )
                
            },
            [INLINES.HYPERLINK]: (node, children) => {
                if (node.nodeType === 'hyperlink') {
                    let video_url = node.data.uri
                    
                    if (video_url.includes('youtube.com')){
                        const id_video_pattern = /watch\?v=(\w+)/
                        const id_found = id_video_pattern.exec(video_url)[1]
                        const title_video = children[0]
                        return (
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src = {`https://www.youtube.com/embed/${id_found}`} title={title_video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        )
                    }
                }
            }
        },
      };
      
    if (description !== null) {
        return (
            <Container className='px-3 py-3 m-0 text-white bg-dark align-items-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>THÔNG TIN CHI TIẾT</b></h4>
            <hr className='border border-light mb-4'/>
            
            {documentToReactComponents(JSON.parse(description.raw), options)}
    
            </Container>
            
        );
    }
    else return null;
    
}


export default DescriptionProduct;