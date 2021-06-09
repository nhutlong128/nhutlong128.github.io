import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/index.css';
import Header from '../../components/Header';
import CustomerForm from '../../components/CustomerForm';
import Footer from '../../components/Footer';
import PhoneRinging from '../../components/PhoneRinging'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import NameProduct from '../../components/ProductPage/NameProduct';
import GalleryProduct from '../../components/ProductPage/GalleryProduct';
import SpecificationProduct from '../../components/ProductPage/SpecificationProduct';
import DiscountProduct from '../../components/ProductPage/DiscountProduct';
import PriceProduct from '../../components/ProductPage/PriceProduct';
import DescriptionProduct from '../../components/ProductPage/DescriptionProduct';


const left_xs_size = 12
const left_md_size = 12
const left_lg_size = 8

function ProductPage(props) {
  const GET_ALL_CARS_FOR_PRODUCT_PAGE = useStaticQuery(graphql`
    query GetAllCarsForProductPage {
      allStrapiCars {
        nodes {
          Description
          DisplayName
          InstalmentPrice
          OriginalPrice
          RouteName
          Slider {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          Specification
          Thumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          discount_program {
            Description
            Name
          }
        }
      }
    }
`);
    const all_car_list = GET_ALL_CARS_FOR_PRODUCT_PAGE.allStrapiCars.nodes;
    const selected_car = all_car_list.filter(({RouteName}) => RouteName === `${props.params.RouteName}`);
    const carInformation = selected_car[0]
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mercedes Sài Gòn | {carInformation.DisplayName}</title>
                <meta name="description" content={`Giá xe ${carInformation.DisplayName} tốt nhất đăng ký lái thử tư vấn trả góp`} />
                <meta name="referrer" content="origin"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            </Helmet>
            <Header all_car_list = {all_car_list}/>
            {/* Container containing product page body    */}
            <Container>
              {/* Row containing name & gallery & specification & discount program*/}
              <Row className='my-4'>
                {/* Col containing name & gallery   */}
                <Col xs={left_xs_size} md={left_md_size} lg = {left_lg_size}>
                  <NameProduct carDisplayName = {carInformation.DisplayName}/>
                  <GalleryProduct carGallery = {carInformation.Slider} carDisplay = {carInformation.DisplayName}/>
                  <PriceProduct carPrice = {carInformation.OriginalPrice} carInstalmentPrice = {carInformation.InstalmentPrice}/>
                  <CustomerForm/>
                </Col>
                {/* Col containing specification & discount program    */}
                <Col>
                  <SpecificationProduct carSpecification = {carInformation.Specification}/>  
                  <DiscountProduct carDiscountProgram = {carInformation.discount_program}/>   
                </Col>
              </Row>
              {/*Row containing Description about Product  */}
              <Row className='my-4'>
                <Col>
                  <DescriptionProduct carDescription = {carInformation.Description}/>
                </Col>
              </Row>
              {/*Row containing Form  */}
              <Row className='my-4'>
                <Col>
                  <CustomerForm/>
                </Col>
              </Row>

            </Container>
            <Footer />
            <PhoneRinging/>
        </div>
    )
}

export default ProductPage;