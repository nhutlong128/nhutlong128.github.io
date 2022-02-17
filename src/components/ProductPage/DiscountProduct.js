import React  from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Markdown from 'markdown-to-jsx';
import TableInLine from './TableInLine';
import YoutubeInLine from './YoutubeInLine';
import { graphql, useStaticQuery } from "gatsby"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import CustomerForm from '../CustomerForm';

function DiscountProduct(props) {
    const GET_ONE_SELLER_FOR_DISCOUNT_PRODUCT = useStaticQuery(graphql`
    query GetOneSellerForDiscountProduct {
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

    const one_seller = GET_ONE_SELLER_FOR_DISCOUNT_PRODUCT.strapiSellerInformations
    const phone = one_seller.Phone.replace(/ /g, "")
    const discount_program_array = props.carDiscountProgram
    const carDisplayName = props.carDisplayName
    const description = discount_program_array.Description
    if (discount_program_array !== null) {
        return (
            <Container className='px-3 py-3 mt-4 text-white bg-dark align-items-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>KHUYẾN MÃI KHI MUA {carDisplayName}</b></h4>
            <hr className='border border-light mb-4'/>
            {   <div >
                <Markdown options={{ forceBlock: true, overrides: {p: TableInLine, a: YoutubeInLine,} }}>{description}</Markdown>
                </div>
            }
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
        );
    }
    else return null;

}


export default DiscountProduct;