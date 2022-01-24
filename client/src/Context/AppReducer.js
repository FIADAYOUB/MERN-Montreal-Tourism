export default (state, action) => {
  switch (action.type) {
    case 'GET_PLACES':
      return {
        ...state,
        loading: false,
        places: action.payload
      }
    case 'DELETE_PLACE':
      return {
        ...state,
        places: state.places.filter(place => place._id !== action.payload)
      }
    case 'ADD_PLACE':
      return {
        ...state,
        places: [...state.places, action.payload]
      }
    case 'PLACE_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}