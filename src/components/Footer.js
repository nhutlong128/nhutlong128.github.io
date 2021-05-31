import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { graphql, useStaticQuery } from "gatsby"


function Footer() {
    const GET_ALL_SELLER = useStaticQuery(graphql`
    query GetAllSeller {
        allContentfulSellerInformation {
        nodes {
            address
            authorizedMercedesBenzDealers
            email
            phone
        }
        }
    }`
    );
    const list_seller = GET_ALL_SELLER.allContentfulSellerInformation.nodes
    return (
        <Container className='mt-4 p-5 bg-dark text-white' fluid>
                <Row>
                    <Col></Col>
                    {
                        list_seller.map((item, i) => {
                            return (
                                <Col key={i} xs={12} md={6} lg={4} className='mb-5'>
                                    <Row className='ml-0'>
                                    <h5><b>LIÊN HỆ: </b></h5>
                                    </Row>
                                    <hr className='border border-thick mt-0'/>
                                    
                                    <Row className='ml-0'>
                                        <h5><i className="fas fa-car"></i> <b>{item.authorizedMercedesBenzDealers}</b></h5>
                                    </Row>
                                    <Row className='ml-0'>
                                        <p><i className="fas fa-map-marked-alt"></i> Địa chỉ: <b>{item.address}</b></p>
                                    </Row>
                                    <Row className='ml-0'>
                                        <p><i className="fas fa-phone"></i> Điện thoại: <b>{item.phone}</b></p>
                                    </Row>

                                    <Row className='ml-0'>
                                        <p><i className="fas fa-inbox"></i> Email: <b>{item.email}</b></p>
                                    </Row>
                                </Col>
                            );
                        })
                    }
                <Col></Col>
                </Row>
                
            
        </Container>
    );
}

export default Footer;