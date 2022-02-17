import React from 'react';
import './CallAction.css'
import { graphql, useStaticQuery } from "gatsby"
import Button from 'react-bootstrap/Button'
import './PhoneRinging.css'
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css';
import CustomerForm from './CustomerForm';
import LaiThuXe from './LaiThuXe';
function CallAction() {
    return (
        <div>
            <Popup  modal trigger={<Button className="nhan-bao-gia-pc text-center py-1">Báo giá <i className="fas fa-clipboard-check"></i> </Button>} position="right center">
                {close => (
                    <div>
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        {<CustomerForm id="customerform"/>}
                        
                    </div>
                )}
                </Popup>
                <Popup  modal trigger={<Button className="lai-thu-xe-pc text-center py-1">Lái thử <i className="fas fa-car"></i> </Button>} position="right center">
                {close => (
                    <div>
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        {<LaiThuXe/>}
                        
                    </div>
                )}
                </Popup>
            <Popup  modal trigger={<Button className="nhan-bao-gia-mobile text-center py-1">Báo giá <i className="fas fa-clipboard-check"></i> </Button>} position="right center">
                {close => (
                    <div>
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        {<CustomerForm/>}
                        
                    </div>
                )}
            </Popup>
            <Popup  modal trigger={<Button className="lai-thu-xe-mobile text-center py-1">Lái thử <i className="fas fa-car"></i> </Button>} position="right center">
                {close => (
                    <div>
                        <a className="close" onClick={close}>
                            &times;
                        </a>
                        {<LaiThuXe/>}
                        
                    </div>
                )}
            </Popup>
            <ul class="sharecs-pc-net-bar">
            <li class="hotline">
            <a href="tel:0899997498" target="_blank" rel="nofollow"/>
            </li>
            
            <li class="zalo">
            <a href="https://zalo.me/0899997498" target="_blank" rel="nofollow"/>
            </li>
            </ul>

            <ul class="sharecs-mobile-net-bar">
            <li class="zalo">
            <a href="https://zalo.me/0899997498" target="_blank" rel="nofollow"/>
            </li>
            <li class="hotline">
            <a href="tel:0899997498" target="_blank" rel="nofollow"/>
            </li>
            </ul>
        </div>
        
            )
}

export default CallAction;