import React from 'react';
import { OffersData } from './Data';
import './OffersStyle.css'
console.log(OffersData);

const Offers = () => (
        <div className="box">
            {OffersData.map((offer) => (offer.isNew ?
        <>
        <div className="offers">
         <div className="corner"></div>
         <p className="item item1">{offer.name}</p>
         <p className="new">(nowość)</p>

         </div>
        </>
    : <div className="offers"><p className="item">{offer.name}</p></div>))}
        </div>

)

export default Offers;