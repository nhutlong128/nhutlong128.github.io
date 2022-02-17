import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Markdown from 'markdown-to-jsx';
import TableInLine from '../components/ProductPage/TableInLine';
import YoutubeInLine from '../components/ProductPage/YoutubeInLine';
import '../css/index.css';
import { graphql, useStaticQuery } from "gatsby"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import CustomerForm from './CustomerForm';

function DiscountInformation() {
    const GET_ONE_SELLER_FOR_DISCOUNT_INFORMATION_AND_ALL_DISCOUNT = useStaticQuery(graphql`
    query GetOneSellerForDiscountInformationAndGetAllDiscount {
        allStrapiDiscountPrograms {
          nodes {
            Description
            Name
          }
        }
        strapiSellerInformations {
            Phone
            }
      }
`);

    const one_seller = GET_ONE_SELLER_FOR_DISCOUNT_INFORMATION_AND_ALL_DISCOUNT.strapiSellerInformations
    const phone = one_seller.Phone.replace(/ /g, "")
    const discount_array = GET_ONE_SELLER_FOR_DISCOUNT_INFORMATION_AND_ALL_DISCOUNT.allStrapiDiscountPrograms.nodes;
    return (
            <Container className='px-3 py-3 mt-4 text-white bg-dark align-items-center'>
                
                    <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>DUY NHẤT HÔM NAY</b></h4>
                    <hr className='border border-light mb-4'/>
                    {(discount_array !== null) && discount_array.map((node, i) => {
                        if (i === 0) {
                            return (
                                <div >
                                    <Markdown key={node.Description} options={{ forceBlock: true, overrides: {p: TableInLine, a: YoutubeInLine,} }}>{node.Description}</Markdown>
                                </div>
                            );
                        }
                        
                    })}
                <Button className="px-4 m-1" href = {`tel:${phone}`} title="Liên hệ ngay" ><i className="fas fa-phone"></i> <b>LIÊN HỆ NGAY</b></Button>
                <Popup  modal trigger={<Button className="px-4 m-1 text-white" variant="danger" type="button"> <i className="fas fa-address-card"></i><b> NHẬN BÁO GIÁ</b></Button>} position="right center">
                {close => (
                    <div>
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        {<CustomerForm/>}
                        
                    </div>
                )}
                </Popup>
            
            </Container>
    ) 
}

export default DiscountInformation