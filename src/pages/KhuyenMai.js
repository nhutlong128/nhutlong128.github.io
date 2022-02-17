import React from 'react';
import '../css/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import DiscountInformation from '../components/DiscountInformation';
import { Helmet } from "react-helmet"
import CallAction from '../components/CallAction';
import Popup from '../components/PopUp';
import { useState, useEffect } from 'react';
import CustomerForm from '../components/CustomerForm';

function DiscountPage() {
    const [timedPopup, setTimedPopup] = useState(false);
    useEffect(() => {
        setTimeout(() => {
          setTimedPopup(true);
        }, 3000);
      }, []);
    return (
        <div>
            <Helmet>
                <title>Mercedes Sài Gòn</title>
                <meta name="description" content="CUNG CẤP CÁC DÒNG XE SANG MERCEDES-BENZ GIÁ TỐT NHẤT. NHẬN BÁO GIÁ, ĐĂNG KÝ LÁI THỬ CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />       
            </Helmet>
            <Header/>      
                <DiscountInformation/>
            <Footer />
            
            <CallAction/>
            <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <CustomerForm/>
            </Popup>
        </div>    
       
    );

}

export default DiscountPage

