import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import ImageSlider from '../components/ImageSlider'
import ProductCardDeck from '../components/ProductCardDeck'
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"

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
  return (    
    <div>
      <Helmet>
        <title>Mercedes Sài Gòn</title>
        <meta name="description" content="CUNG CẤP CÁC DÒNG XE SANG MERCEDES-BENZ GIÁ TỐT NHẤT. NHẬN BÁO GIÁ, ĐĂNG KÝ LÁI THỬ CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />       
      </Helmet>
      <Header/>      
      <ImageSlider/>
      <ProductCardDeck all_car_list = {all_car_list}/>
      <CustomerForm/>
      
      <Footer />
      <PhoneRinging/>
    </div>    
  );
}

export default IndexPage

