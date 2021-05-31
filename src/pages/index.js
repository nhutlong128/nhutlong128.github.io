import React from 'react';
import '../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import ImageSlider from '../components/ImageSlider'
import ProductCardDeck from '../components/ProductCardDeck'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"


function IndexPage() {
  const all_car_list_query = useStaticQuery(graphql`
  query GetAllCarWithinEachClass {
    allContentfulCarClass {
      edges {
        node {
          carClass
          car_information {
            carName
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
        <title>Mercedes HomePage</title>
        <meta name="description" content="We sale Mercedes" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </Helmet>
      <Header all_car_list = {all_car_list}/>      
      <ImageSlider/>
      <ProductCardDeck all_car_list = {all_car_list}/>
      <Footer />
      <PhoneRinging />
    </div>    
  );
}

export default IndexPage

