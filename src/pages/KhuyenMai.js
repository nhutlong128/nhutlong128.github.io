import React from 'react';
import Container from 'react-bootstrap/Container';
import Markdown from 'markdown-to-jsx';
import TableInLine from '../components/ProductPage/TableInLine';
import YoutubeInLine from '../components/ProductPage/YoutubeInLine';
import '../css/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"



function DiscountPage() {
    const GET_ALL_DISCOUNT = useStaticQuery(graphql`
    query GetAllDiscount {
        allStrapiDiscountPrograms {
          nodes {
            Description
            Name
          }
        }
      }
`);
    const discount_array = GET_ALL_DISCOUNT.allStrapiDiscountPrograms.nodes;

    return (
        <div>
            <Helmet>
                <title>Mercedes Sài Gòn</title>
                <meta name="description" content="CUNG CẤP CÁC DÒNG XE SANG MERCEDES-BENZ GIÁ TỐT NHẤT. NHẬN BÁO GIÁ, ĐĂNG KÝ LÁI THỬ CÁC DÒNG XE MERCEDES-BENZ BÁN CHẠY NHẤT" />       
            </Helmet>
            <Header/>      
                <Container className='px-3 py-3 mt-4 text-white bg-dark align-items-center'>
                    <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>KHUYẾN MÃI</b></h4>
                    <hr className='border border-light mb-4'/>
                    {(discount_array !== null) && discount_array.map((node, i) => {
                        return (
                            <div >
                                <Markdown key={node.Description} options={{ forceBlock: true, overrides: {p: TableInLine, a: YoutubeInLine,} }}>{node.Description}</Markdown>
                            </div>
                        );
                    })}
                </Container>
            <Footer />
            <PhoneRinging/>
        </div>    
       
    );

}

export default DiscountPage

