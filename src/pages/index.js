import React from 'react';
import '../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import ImageSlider from '../components/ImageSlider'
import ProductCardDeck from '../components/ProductCardDeck'
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"
import MercedesLogo from '../images/mercedes-benz-mb-vector-logo-400x400.png'

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
        <meta charSet="utf-8" />
        <title>Mercedes Sài Gòn</title>
        <meta name="description" content="YÊU CẦU BÁO GIÁ ĐĂng Ký LÁi thử CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />
        <meta name="referrer" content="origin"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        <link rel="icon" href={MercedesLogo}/>
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

