import React, { useState } from 'react';

const Hotel = ({id, images, name, description, price, removeHotel}) => {
  const [readMore, setReadMore] = useState(false);



  return(
    <article className="single-tour">
      <img src={images[0]} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>{readMore?description:`${description.substring(0, 150)}...`}
        <button onClick={()=> setReadMore(!readMore)}>
          {readMore?'show less':'read more'}
        </button>
        </p>
        <button className="delete-btn" onClick={() => removeHotel(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
};

export default Hotel;
