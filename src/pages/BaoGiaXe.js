import React from 'react';
import '../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import Header from '../components/Header';
import CustomerForm from '../components/CustomerForm';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"


function FormPage() {
  const all_car_list_query = useStaticQuery(graphql`
  query GetAllCarForFormPage {
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
  return (    
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercedes Sài Gòn | Báo giá xe</title>
        <meta name="description" content="YÊU CẦU BÁO GIÁ ĐĂng Ký LÁi thử CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </Helmet>
      <Header all_car_list = {all_car_list}/>      
      <CustomerForm all_car_list = {all_car_list}/>
      <Footer />
      <PhoneRinging all_car_list = {all_car_list}/>
    </div>    
  );
}

export default FormPage

