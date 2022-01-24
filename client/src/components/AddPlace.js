import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobaleState';
import FileBase from 'react-file-base64'
import './AddPlace.css'

function AddPlace(props) {
  const [name, setName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const { addPlace } = useContext(GlobalContext);
  const onSubmit = (e) => {
      // Notification('it works!');
      e.preventDefault();

      const newPlace = {

          name,
          adresse,
          description,
          image
      }

      addPlace(newPlace);
  }
  return (
    <div className="add-wrapper" onSubmit={onSubmit}>
    <form action="" className="form">
      <h2>Add new Place</h2>
      <div className="input-group">
        <input type="text"  value={name} onChange={(e) => setName(e.target.value)}  required/>
        <label htmlFor="loginUser"> Name</label>
      </div>
      <div className="input-group">
        <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)}   required/>
        <label htmlFor="loginUser"> Adresse</label>
      </div>
      <div className="input-group">
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="add a description !" cols="40" rows="5"/>

      </div>
      <div className="input-group">
        
      <FileBase className="custom-file-input"  type="file" multiple={false}
            onDone={({ base64 }) => setImage({ image: base64 })}     />
      </div>
      
      <input type="submit" value="Add " className="submit-btn" />
    </form>

   
  </div>
  );
}

export default AddPlace;
