import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobaleState'
import "./placesList.css"
import { Place } from './Place';
export const PlacesList = () => {

  const { places, getPlaces } = useContext(GlobalContext);




  useEffect(() => {
    getPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <>
      <div className='cards'>
        <h1>The Most Beautiful Places in Montreal</h1>
        
        <div className="container">

          {places.map(place => (<Place key={place._id} place={place} />))}
        </div>

      </div>
    </>
  )
}
