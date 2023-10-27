import { GET_GAMES, GET_GAME_NAME, GET_GAME_ID, FILTER_PLATFORMS, FILTER_GENRES } from './actions.js';

const initialState = {
  games:[],
  gameId: [],
  gameFilter: []
   
 }  

 const rootReducer = (state=initialState, action)=> {

  switch (action.type) {
    case GET_GAMES:
     return {
      ...state,
      games: action.payload
      };
    case GET_GAME_NAME:
      return {
       ...state,
       games: action.payload
       };
    case GET_GAME_ID:
       return {
        ...state,
        gameId: action.payload
        };
    case FILTER_PLATFORMS:
        return {
         ...state,
        }; 
     case FILTER_GENRES:
         return {
          ...state,
        };            

    default:
      return {...state}  
  }
 }

 export default rootReducer;