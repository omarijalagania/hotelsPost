import React from 'react';
import Hotel from './Hotel';

const Hotels = ({hotels, removeHotel}) => {
  return (
    <section>
      <div className="title">
        <h2>our Hotels</h2>
        <div className="underline"></div>
      </div>
      <div>
        {hotels.map((hotel)=>{
          return <Hotel key={hotel.id} {...hotel} removeHotel={removeHotel}/>
        })}
      </div>
    </section>
  )
};

export default Hotels;
