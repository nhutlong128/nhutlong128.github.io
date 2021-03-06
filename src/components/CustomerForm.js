import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { graphql, useStaticQuery } from "gatsby"
function CustomerForm(props){
    const GET_ALL_CARS_FOR_CUSTOMER_FORM = useStaticQuery(graphql`
    query GetAllCarsForCustomerForm {
      allStrapiCarClasses {
        nodes {
          Name
          Order
        }
      }
    }
  `);    
    const all_car_list = GET_ALL_CARS_FOR_CUSTOMER_FORM.allStrapiCarClasses.nodes
    return (
        <Container className='text-white bg-dark align-items-center'>
            <h5 className="text-center mt-2 pt-4" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>DUY NHẤT HÔM NAY</b></h5>
            <hr className='border border-light mb-4'/>
            <h6 className="text-center m-2 p-1">Thời Điểm Vàng Mua Xe Mercedes. Cơ Hội Giảm 50% Thuế Trước Bạ, Giảm Thêm 40Tr.</h6>
            <Form action="https://formsubmit.co/nhutlong128@gmail.com" method="POST">
                <input type="hidden" name="_cc" value="anhhuyc22017@gmail.com"/>
                <input type="hidden" name="_next" value="http://www.mercedesbenzsaigon.com/CamOn/"/>
                <input type="hidden" name="_captcha" value="false"/>


                <Row>
                    <Col className='text-center'>
                        <Form.Group controlId="formBasicName">
                            <Form.Control name='customer_name' type="text" size="xs" placeholder="Tên (*)" required/>
                        </Form.Group>
                    </Col>
                    
                </Row>
                
                <Row>
                    <Col className='text-center'>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control name='customer_phone' type="number" size="xs" placeholder="Số điện thoại (*)" required/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col className='text-center'>
                        <Form.Group controlId="formCarProduct">
                            
                            <Form.Control name='customer_car_selection' as="select" size="xs" required>
                                <option value="" disabled selected>Chọn dòng xe</option>
                                {
                                    all_car_list.map((item, i) => <option key={item.Name}>{item.Name}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row className="pb-3">
                    <Col className='text-center'>
                        <Button className="my-2 py-2" type="submit" size="xs"><b>Nhận báo giá mới nhất</b></Button>
                    </Col>
                </Row>
                
            </Form>
        </Container>
        
    )
}

export default CustomerForm;


