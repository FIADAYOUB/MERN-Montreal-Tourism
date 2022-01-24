import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  places: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getPlaces() {
    try {
      const res = await axios.get('/Place/List');

      dispatch({
        type: 'GET_PLACES',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'PLACE_ERROR',
        payload: err.response.data.error
      });
    }
  }
 
  async function deletePlace(id) {
    try {
      await axios.delete(`/Place/Delete/${id}`);
      dispatch({
        type: 'DELETE_PLACE',
        payload: id
      });
    } catch (err) {
      dispatch({
        type: 'PLACE_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function addPlace(Place) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/Place/Add', Place, config);

      dispatch({
        type: 'ADD_PLACE',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'PLACE_ERROR',
        payload: err.response.data.error
      });
    }
  }
  
  

  return (<GlobalContext.Provider value={{
    places: state.places,
    error: state.error,
    loading: state.loading,
    getPlaces,
    deletePlace,
    addPlace
  }}>
    {children}
  </GlobalContext.Provider>);
}