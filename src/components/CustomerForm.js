import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
function CustomerForm(props){
    const all_car_list = props.all_car_list
    return (
        <Container className='px-3 py-3 my-4 text-white bg-dark align-items-center'>
            <h4 className="text-center m-2 p-1" style={{fontFamily: 'Roboto Condensed, sans-serif'}}><i className="far fa-star"></i> <b>NHẬN BÁO GIÁ</b></h4>
            <hr className='border border-light mb-4'/>
            <Form action="https://formsubmit.co/nhutlong128@gmail.com" method="POST" target="_blank">
                <input type="hidden" name="_cc" value="anhhuyc22017@gmail.com"/>
                <input type="hidden" name="_next" value="https://mercedesretailsitemaster.gatsbyjs.io/"/>
                <input type="hidden" name="_captcha" value="false"/>


                <Row>
                    <Col className='text-center'>
                        <Form.Group controlId="formBasicName">
                            <Form.Control name='customer_name' type="text" size="lg" placeholder="Tên (*)" required/>
                        </Form.Group>
                    </Col>
                    
                </Row>
                
                <Row>
                    <Col className='text-center'>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Control name='customer_phone' type="number" size="lg" placeholder="Số điện thoại (*)" required/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col className='text-center'>
                        <Form.Group controlId="formCarProduct">
                            
                            <Form.Control name='customer_car_selection' as="select" size="lg" required>
                                <option value="" disabled selected>Chọn dòng xe</option>
                                {
                                    all_car_list.map((item, i) => <option key={item.node.carClass}>{item.node.carClass}</option>)
                                }
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col className='text-center'>
                        <Button variant="success" type="submit" size="lg"><b>GỬI YÊU CẦU</b></Button>
                    </Col>
                </Row>
                
            </Form>
        </Container>
        
    )
}

export default CustomerForm;


