import React from 'react';
import '../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"
import MercedesLogo from '../images/mercedes-benz-mb-vector-logo-400x400.png'
function CamOn() {
  const all_car_list_query = useStaticQuery(graphql`
  query GetAllCarForThankYouPage {
    allContentfulCarClass {
      edges {
        node {
          carClass
          carClassPath: gatsbyPath(filePath: "/loai-xe/{contentfulCarClass.carClass}")
          car_information {
            carName: gatsbyPath(filePath: "/xe/{contentfulCarInformation.carDisplayName}")
            carDisplayName
            carPrice
            priceUnit
            metaData
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`);
  const all_car_list = all_car_list_query.allContentfulCarClass.edges
  return (    
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercedes Sài Gòn | Thank You Page</title>
        <meta name="description" content="YÊU CẦU BÁO GIÁ ĐĂng Ký LÁi thử CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />
        <meta name="referrer" content="origin"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        <link rel="icon" href={MercedesLogo}/>
      </Helmet>
      <Header all_car_list = {all_car_list}/>      
      <Container className='my-5'>
        <Row>
          <Col className='text-center'>
            <h1>CÁM ƠN QUÝ KHÁCH</h1>
            <h3>Chúng tôi sẽ liên hệ với quý khách trong thời gian sớm nhất.</h3>
          </Col>
        </Row>
          
      </Container>
      <CustomerForm all_car_list = {all_car_list}/>
      <Footer />
      <PhoneRinging all_car_list = {all_car_list}/>
    </div>    
  );
}

export default CamOn

