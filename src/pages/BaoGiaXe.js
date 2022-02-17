import React from 'react';
import '../css/index.css';
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"
import { Container } from 'react-bootstrap';
import CallAction from '../components/CallAction';

function FormPage() {

  return (    
    <div>
      <Helmet>
        <title>Mercedes Sài Gòn | Báo giá xe</title>
        <meta name="description" content="CUNG CẤP CÁC DÒNG XE SANG MERCEDES-BENZ GIÁ TỐT NHẤT. NHẬN BÁO GIÁ, ĐĂNG KÝ LÁI THỬ CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />       
      </Helmet>
      <Header/>
      <Container className="px-2 py-2 my-2">
        <CustomerForm />
      </Container>
      
      <Footer />
      <CallAction/>
    </div>    
  );
}

export default FormPage

