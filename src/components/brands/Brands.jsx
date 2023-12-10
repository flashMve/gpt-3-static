import React from 'react';
import './brands.css';

import {google,slack,atlassian,shopify,dropBox} from './images';

const Brands = () => {
  return (
    <>
    <div className="gpt3__brands section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropBox} alt="dropBox" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
    </>
  )
}

export default Brands