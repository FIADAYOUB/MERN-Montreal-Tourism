import React ,{useContext}from 'react'
import { GlobalContext } from '../Context/GlobaleState';
import {AiFillDelete} from 'react-icons/ai'
export const Place = ({place}) => {
  const {deletePlace}=useContext(GlobalContext);

    return (
      
      <>
      <div className="card" >
        <div className="card-header" >
         <img src={place.image} alt="rover" />
         
        </div>
        <div className="card-body">
          <span className="tag tag-teal">{place.name}</span>
          <h4>
            {place.adresse}
          </h4>
          <p>
          {place.description}</p>
          <div className="user">
            <img src={require('../img/AF.jpg')} alt="user" />
            <div className="user-info">
              <h5>Add By</h5>
              <small>AYOUB FIAD</small>
              
            </div>
          </div>
           
           <div>

           <span className="btn-delete"  onClick={() => deletePlace(place._id)}  >Delete  
          </span>
           </div>
          
         
          
         
        </div>
      </div>
      </>
    )
}
