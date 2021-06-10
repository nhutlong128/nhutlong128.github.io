import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"
function CamOn() {
  return (    
    <div>
      <Helmet>
        <title>Mercedes Sài Gòn | Cám Ơn Quý Khách</title>
        <meta name="description" content="CUNG CẤP CÁC DÒNG XE SANG MERCEDES-BENZ GIÁ TỐT NHẤT. NHẬN BÁO GIÁ, ĐĂNG KÝ LÁI THỬ CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />       
      </Helmet>
      <Header/>      
      <Container className='my-5'>
        <Row>
          <Col className='text-center'>
            <h1>CÁM ƠN QUÝ KHÁCH</h1>
            <h3>Chúng tôi sẽ liên hệ với quý khách trong thời gian sớm nhất.</h3>
          </Col>
        </Row>
          
      </Container>
      <CustomerForm />
      <Footer />
      <PhoneRinging />
    </div>    
  );
}

export default CamOn

