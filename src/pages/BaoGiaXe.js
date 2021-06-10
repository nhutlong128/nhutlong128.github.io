import React from 'react';
import '../css/index.css';
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"


function FormPage() {

  return (    
    <div>
      <Helmet>
        <title>Mercedes Sài Gòn | Báo giá xe</title>
        <meta name="description" content="CUNG CẤP CÁC DÒNG XE SANG MERCEDES-BENZ GIÁ TỐT NHẤT. NHẬN BÁO GIÁ, ĐĂNG KÝ LÁI THỬ CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />       
      </Helmet>
      <Header/>      
      <CustomerForm />
      <Footer />
      <PhoneRinging />
    </div>    
  );
}

export default FormPage

