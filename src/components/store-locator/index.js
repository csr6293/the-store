import React from "react";

import './index.css';
import LocationImage from '../../images/locations.png';

const StoreLocator = () => {

  const isStoreClosed = () => {
    const d = new Date();
    const hour = d.getHours();

    if (hour >= 22) {
      return 'Closed';
    }

    return 'Open';
  }


  return (
    <div className="wrapper">
      <div className="title">
        <h1>FIND STORES NEAR:</h1>
        <h2>📍 My Location:</h2>
        <input type={'text'} placeholder={'Enter a location...'} />
      </div>
      <div className="locations-data">
        <div className="list">
          <div>
            <h2>The Store 1</h2>
            <p>3431 St Clair Ave E · (416) 265-0336 </p>
            <p> {isStoreClosed()} ⋅ Opens 10 a.m. - 10 p.m. </p>
            <p> In-store shopping</p>
            <hr/>
          </div>
          <div>
            <h2>The Store 2</h2>
            <p>3431 St Clair Ave E · (416) 265-0336 </p>
            <p> {isStoreClosed()} ⋅ Opens 10 a.m. - 10 p.m. </p>
            <p> In-store shopping</p>
            <hr/>

          </div>

          <div>
            <h2>The Store 3</h2>
            <p>3431 St Clair Ave E · (416) 265-0336 </p>
            <p> {isStoreClosed()} ⋅ Opens 10 a.m. - 10 p.m. </p>
            <p> In-store shopping</p>
            <hr/>

          </div>
        </div>
        <div className="img-wrapper">
          <img src={LocationImage} alt='locations' />
        </div>
      </div>
    </div >
  );
};

export default StoreLocator;
