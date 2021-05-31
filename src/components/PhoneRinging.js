import React from 'react';
import './PhoneRinging.css'


function PhoneRinging() {
    return (
        <div className="phonering-alo-phone phonering-alo-green phonering-alo-show" id="phonering-alo-phoneIcon">
            <div className="phonering-alo-ph-circle"></div>
            <div className="phonering-alo-ph-circle-fill"></div>
            <a href="tel:+84123456789" className="pps-btn-img" title="Liên hệ">
                <div className="phonering-alo-ph-img-circle"></div>
            </a>
        </div>
    )
}

export default PhoneRinging;