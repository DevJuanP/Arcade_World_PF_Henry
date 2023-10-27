import axios from 'axios';

export const GET_GAMES = 'GET_GAMES';
export const GET_GAME_NAME = 'GET_GAME_NAME';
export const GET_GAME_ID = 'GET_GAME_ID';
export const FILTER_PLATFORMS = 'FILTER_PLATFORMS';
export const FILTER_GENRES = 'FILTER_GENRES';

export const getGames = ()=>{ 
  return async function(dispatch) {
  try {
   const dataGm = (await axios.get('http://localhost:3001/videogame')).data;
   const platforms = [...new Set(dataGm.flatMap(game => game.platforms))];
   return dispatch({
      type: GET_GAMES, 
      payload: { games: dataGm, platforms }
    });
    
  } catch (error) {
    console.log(error.message)
  }
}
};
export const gameByName = (name)=> {
return async function(dispatch) {
  try {
    const {data} = await axios.get(`http://localhost:3001/videogame/?name=${name}`);
            
      return dispatch({
      type: GET_GAME_NAME, 
      payload: data 
    })
    
  } catch (error) {
    console.log(error.message)
  }
}
};
export const gameById = (id)=> {
return async function(dispatch) {
  try {
    const dataId = (await axios.get(`http://localhost:3001/videogame/${id}`)).data;

      return dispatch({
      type: GET_GAME_ID,
      payload: dataId
     })

  } catch (error) {
    console.log(error.message)
  }
}
};
export const gamePlataforms = (filter)=> {
  return {
    type: FILTER_PLATFORMS,
    payload: filter
  }
};
export const gameGenres = (filter)=> {
  return {
    type: FILTER_GENRES,
    payload: filter
  }
};