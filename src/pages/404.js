import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"

function ErrorPage() {

  return (    
    <div>
      <Helmet>
        <title>Mercedes Sài Gòn | Trang Không Tồn Tại</title>
        <meta name="description" content="CUNG CẤP CÁC DÒNG XE SANG MERCEDES-BENZ GIÁ TỐT NHẤT. NHẬN BÁO GIÁ, ĐĂNG KÝ LÁI THỬ CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />       
      </Helmet>
      <Header />      
      <Container className='my-5'>
        <Row>
          <Col className='text-center'>
            <h1>Lỗi 404</h1>
            <h3>Không tìm thấy nội dung</h3>
          </Col>
        </Row>
          
      </Container>
      <CustomerForm />
      <Footer />
      <PhoneRinging />
    </div>    
  );
}

export default ErrorPage

