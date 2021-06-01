import React from 'react';
import './PhoneRinging.css'
import { graphql, useStaticQuery } from "gatsby"

function PhoneRinging() {
    const GET_ONE_SELLER = useStaticQuery(graphql`
    query GetOneSeller {
        contentfulSellerInformation {
          phone
        }
      }`
    );
    const one_seller = GET_ONE_SELLER.contentfulSellerInformation
    return (
        <div className="phonering-alo-phone phonering-alo-green phonering-alo-show" id="phonering-alo-phoneIcon">
            <div className="phonering-alo-ph-circle"></div>
            <div className="phonering-alo-ph-circle-fill"></div>
            <a href = {`tel:${one_seller.phone}`} className="pps-btn-img" title="Liên hệ ngay">
                <div className="phonering-alo-ph-img-circle"></div>
            </a>
        </div>
    )
}

export default PhoneRinging;