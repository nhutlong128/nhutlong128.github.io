import React from 'react';
import '../../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import ProductCardDeck from '../../components/ProductCardDeck'
import Header from '../../components/Header';
import CustomerForm from '../../components/CustomerForm';
import Footer from '../../components/Footer';
import PhoneRinging from '../../components/PhoneRinging'
import { Helmet } from "react-helmet"


function IndexPage(props) {
  const all_car_list_query = useStaticQuery(graphql`
  query GetAllCarWithinOneClass {
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
  const selected_carClass = all_car_list.filter(({node}) => node.carClassPath === `/loai-xe/${props.params.carClass}/`);
  return (    
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercedes Sài Gòn | {selected_carClass[0].node.carClass}</title>
        <meta name="description" content={`Giá xe ${selected_carClass[0].node.carClass} tốt nhất đăng ký lái thử tư vấn trả góp`} />
        <meta name="referrer" content="origin"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </Helmet>
      <Header all_car_list = {all_car_list}/>      
      <ProductCardDeck all_car_list = {selected_carClass}/>
      <CustomerForm all_car_list = {all_car_list}/>
      <Footer />
      <PhoneRinging all_car_list = {all_car_list}/>
    </div>    
  );
}

export default IndexPage

