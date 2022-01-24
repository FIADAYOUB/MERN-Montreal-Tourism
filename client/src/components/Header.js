import React from 'react';
import  AddPlace  from './AddPlace';
import './Header.css';

export const Header=()=>{
return(
    
        
            <div className='hero-container'>
              <video src='/videos/video-4.mp4' autoPlay loop muted />
              <div className='space'></div>
              <h1>Welcome to Motreal</h1>
              <AddPlace/>
            </div>
          ); 
       
        
  

}

