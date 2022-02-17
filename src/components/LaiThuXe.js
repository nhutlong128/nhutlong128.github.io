import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { graphql, useStaticQuery } from "gatsby"
function LaiThuXe(props){
    const GET_ALL_CARS_FOR_LAI_THU_XE_FORM = useStaticQuery(graphql`
    query GetAllCarsForLaiThuXeForm {
      allStrapiCarClasses {
        nodes {
          Name
          Order
        }
      }
    }
  `);    
    const all_car_list = GET_ALL_CARS_FOR_LAI_THU_XE_FORM.allStrapiCarClasses.nodes
    return (
        <Container className='px-1 py-1 my-1 text-white bg-dark align-items-center'>
            <h5 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>ĐĂNG KÝ LÁI THỬ XE</b></h5>
            <hr className='border border-light mb-4'/>
            <h6 className="text-center m-2 p-1">Nhập số điện thoại, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</h6>
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
                
                <Row>
                    <Col className='text-center'>
                        <Button type="submit" size="xs"><b>Đăng ký lái thử ngay</b></Button>
                    </Col>
                </Row>
                
            </Form>
        </Container>
        
    )
}

export default LaiThuXe;


