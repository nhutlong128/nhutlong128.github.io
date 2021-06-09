import React from 'react';
import '../../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import ProductCardDeck from '../../components/ProductCardDeck'
import Header from '../../components/Header';
import CustomerForm from '../../components/CustomerForm';
import Footer from '../../components/Footer';
import PhoneRinging from '../../components/PhoneRinging'
import { Helmet } from "react-helmet"


function ClassPage(props) {
  const GET_ALL_CARS_FOR_CLASS_PAGE = useStaticQuery(graphql`
  query GetAllCarsForClassPage {
    allStrapiCarClasses {
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
  const all_car_list = GET_ALL_CARS_FOR_CLASS_PAGE.allStrapiCarClasses.nodes
  const selected_carClass = all_car_list.filter(({RouteName}) => RouteName === `${props.params.RouteName}`); 
  return (    
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mercedes Sài Gòn | {selected_carClass[0].Name}</title>
        <meta name="description" content={`Giá xe ${selected_carClass[0].Name} tốt nhất đăng ký lái thử tư vấn trả góp`} />
        <meta name="referrer" content="origin"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </Helmet>
      <Header/>      
      <ProductCardDeck all_car_list = {selected_carClass}/>
      <CustomerForm/>
      <Footer />
      <PhoneRinging/>
    </div>    
  );
}

export default ClassPage

