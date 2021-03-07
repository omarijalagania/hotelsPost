import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Hotels from './Hotels';

const url = 'http://fake-hotel-api.herokuapp.com/api/hotels?count=5'



function App() {
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  

  const removeHotel = (id) => {
    const newHotels = hotels.filter((hotel) => hotel.id !== id);
    setHotels(newHotels);
  }


  const fetchHotels = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const hotels = await response.json();
      setLoading(false);
      setHotels(hotels);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }


useEffect(()=>{
  fetchHotels();
},[])


  if(loading){
    return(
      <main>
        <Loading />
      </main>
    );
  }

  if(hotels.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no hotels left</h2>
          <button className="btn" onClick={fetchHotels}>Refresh</button>
        </div>
      </main>
    )
  }
  return(
    <main>
      <Hotels hotels={hotels} removeHotel={removeHotel}/>
    </main>
  )
}

export default App
