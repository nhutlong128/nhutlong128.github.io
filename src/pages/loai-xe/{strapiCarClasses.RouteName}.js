import React from 'react';
import '../../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import ProductCardDeck from '../../components/ProductCardDeck'
import Header from '../../components/Header';
import CustomerForm from '../../components/CustomerForm';
import Footer from '../../components/Footer';
import CallAction from '../../components/CallAction';
import { Helmet } from "react-helmet"
import Popup from '../../components/PopUp';
import { useState, useEffect } from 'react';


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
  const [timedPopup, setTimedPopup] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setTimedPopup(true);
      }, 3000);
    }, []);
  return (    
    <div>
      <Helmet>
        <title>Mercedes Sài Gòn | {selected_carClass[0].Name}</title>
        <meta name="description" content={`Giá xe ${selected_carClass[0].Name} tốt nhất đăng ký lái thử tư vấn trả góp`} />
      </Helmet>
      <Header/>      
      <ProductCardDeck all_car_list = {selected_carClass}/>
      <CustomerForm/>
      <Footer />
      <CallAction/>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <CustomerForm/>
      </Popup>
    </div>    
  );
}

export default ClassPage

