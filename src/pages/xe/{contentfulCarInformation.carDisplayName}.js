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
    const all_car_query = useStaticQuery(graphql`
    query GetAllCar {
      allContentfulCarClass {
        edges {
          node {
            carClass
            carClassPath: gatsbyPath(filePath: "/loai-xe/{contentfulCarClass.carClass}")
            car_information {
              carName: gatsbyPath(filePath: "/xe/{contentfulCarInformation.carDisplayName}")
              carPrice
              priceUnit
              metaData
              carDisplayName
              carDescription {
                raw
                references {
                  fluid {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                  contentful_id
                  title
                }
              }
              carSpecification {
                raw
              }
              carGallery {
                id
                fluid {
                  base64
                  src
                  srcSet
                  sizes
                  aspectRatio
                }
              }
              carDiscountProgram {
                discountProgram {
                  raw
                }
              }
            }
          }
        }
      }
    }
  `);
    const all_car_list = all_car_query.allContentfulCarClass.edges;
    const selected_car = all_car_list.filter(({node}) => node.car_information.some(({carName}) => carName === `/xe/${props.params.carDisplayName}/`));
    const carInformation = selected_car[0].node.car_information[0]
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mercedes Sài Gòn | {carInformation.carDisplayName}</title>
                <meta name="description" content={`Giá xe ${carInformation.carDisplayName} tốt nhất đăng ký lái thử tư vấn trả góp`} />
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
                  <NameProduct carDisplayName = {carInformation.carDisplayName}/>
                  <GalleryProduct carGallery = {carInformation.carGallery} carName = {carInformation.carName}/>
                  <PriceProduct carPrice = {carInformation.carPrice} priceUnit = {carInformation.priceUnit}/>
                  <CustomerForm all_car_list = {all_car_list}/>
                </Col>
                {/* Col containing specification & discount program    */}
                <Col>
                  <SpecificationProduct carSpecification = {carInformation.carSpecification}/>
                  <DiscountProduct carDiscountProgram = {carInformation.carDiscountProgram}/>                  
                </Col>
              </Row>
              {/*Row containing Description about Product  */}
              <Row className='my-4'>
                <Col>
                  <DescriptionProduct carDescription = {carInformation.carDescription}/>
                </Col>
              </Row>
              {/*Row containing Form  */}
              <Row className='my-4'>
                <Col>
                  <CustomerForm all_car_list = {all_car_list}/>
                </Col>
              </Row>

            </Container>
            <Footer />
            <PhoneRinging all_car_list = {all_car_list}/>
        </div>
    )
}

export default ProductPage;