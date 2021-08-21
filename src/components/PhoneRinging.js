import React from 'react';
import './PhoneRinging.css'
import { graphql, useStaticQuery } from "gatsby"

function PhoneRinging() {
    const GET_ONE_SELLER = useStaticQuery(graphql`
    query GetOneSeller {
        strapiSellerInformations {
          Phone
        }
      }`
    );
    const one_seller = GET_ONE_SELLER.strapiSellerInformations
    const phone = one_seller.Phone.replace(/ /g, "")
    return (
        <div className="phonering-alo-phone phonering-alo-green phonering-alo-show" id="phonering-alo-phoneIcon">
            <div className="phonering-alo-ph-circle"></div>
            <div className="phonering-alo-ph-circle-fill" ></div>
            <a href = {`tel:${phone}`} className="pps-btn-img" title="Liên hệ ngay" >
                <div className="phonering-alo-ph-img-circle" style={{zIndex: 3, elevation: 3}}></div>
                <span className="text-primary" style = {{position: 'fixed', bottom:0, right:10}}><b>08 9999 74 98</b></span>
            </a>
            
        </div>
    )
}

export default PhoneRinging;