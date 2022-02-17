import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import ImageSlider from '../components/ImageSlider'
import ProductCardDeck from '../components/ProductCardDeck'
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import CallAction from '../components/CallAction';
import { Helmet } from "react-helmet"
import Popup from '../components/PopUp';
import { useState, useEffect } from 'react';
function IndexPage() {
  const GET_ALL_CARS_FOR_INDEX_PAGE = useStaticQuery(graphql`
  query GetAllCarsForIndexPage {
    allStrapiCarClasses(sort: {fields: Order, order: ASC}) {
      nodes {
        Name
        RouteName
        Order
        cars {
          Description
          DisplayName
          RouteName
          InstalmentPrice
          OriginalPrice
          Specification
          Thumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`);
  const all_car_list = GET_ALL_CARS_FOR_INDEX_PAGE.allStrapiCarClasses.nodes
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
        <script id='GrabCallMobileCRM-widget-script' type='text/javascript' src='https://cdn.datatuoi.com/scripts/GrabCallCRM.js?business_id=848e56d790b58d4b88a7c559c63f7a9f' async></script>
      </Helmet>
      <Header/>      
      <ImageSlider/>
      <ProductCardDeck all_car_list = {all_car_list}/>
      <CustomerForm/>
      <div>
      
      </div>
      <Footer />
      {/*<PhoneRinging/>*/}
      <CallAction/>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <CustomerForm/>
      </Popup>
    </div>    
  );
}

export default IndexPage

