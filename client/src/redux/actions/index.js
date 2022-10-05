import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const SEARCH_GAMES="SEARCH_GAMES";
export const GET_GENRES="GET_GENRES";
export const GET_PLATFORMS="GET_PLATFORMS";
export const POST_VIDEOGAME="POST_VIDEOGAME";
export const GET_VIDEOGAME_ID="GET_VIDEOGAME_ID";
export const SET_GAMESTOSHOW="SET_GAMESTOSHOW";
export const SET_STATE_SELECT_GENRES="SET_STATE_SELECT_GENRES";
export const SET_STATE_SELECT_DB="SET_STATE_SELECT_DB";
export const SET_FILTERD_BY_GENRE="SET_FILTERD_BY_GENRE";
export const SET_FILTERD_BY_DB ="SET_FILTERD_BY_DB";
export const SET_VIDEOGAMES_ORDERED="SET_VIDEOGAMES_ORDERED";
export const SET_STATE_ORDER="SET_STATE_ORDER";
export const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
export const CLEAR_VIDEOGAMES="CLEAR_VIDEOGAMES";
export const DELETE_VIDEOGAME="DELETE_VIDEOGAME";
// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

// Usar ruta 'http://localhost:3001/houses' para buscar todas las houses en nuestro back.
// Esto lo vas a poder hacer utilizando fetch.
// export const getAllHouses = () => dispatch => {};
export const getAllVideoGames = () => dispatch => {
    //console.log("va a hacer la peticion")
    
        return axios("http://localhost:3001/api/videogames")
 
        .then(r => r.data)
        .then(d => dispatch({ type:GET_ALL_VIDEOGAMES, payload: d }) )
        .catch((error) => {
          console.log(error);
          dispatch({ type:GET_ALL_VIDEOGAMES, payload: ["error"] }) 
        });
        

};

export const clearVideogames=()=>dispatch=>{
  dispatch({ type:GET_ALL_VIDEOGAMES, payload: [] }) // se lleva el paiload vacio
}


export const searchGames = (name) => dispatch => {
  //console.log("va a hacer la peticion")
      
      return axios("http://localhost:3001/api/videogames?name="+name)

      .then(r => r.data)
      .then(d => dispatch({ type:SEARCH_GAMES, payload: d }) )
      .catch((error) => {
        console.log(error);
      });
      

};


export const getGenres = () => dispatch => {
  //console.log("va a hacer la peticion")
  
      return axios("http://localhost:3001/api/genres")

      .then(r => r.data)
      .then(d => dispatch({ type:GET_GENRES, payload: d }) )
      .catch((error) => {
        console.log(error);
      });
      

};


export const getPlatforms = () => dispatch => {
  //console.log("va a hacer la peticion")
  
      return axios("http://localhost:3001/api/platforms")

      .then(r => r.data)
      .then(d => dispatch({ type:GET_PLATFORMS, payload: d }) )
      .catch((error) => {
        console.log(error);
      });
      

};

export const postVideogame = (videogame) => dispatch => {
  //console.log("va a hacer la peticion")
  
      return axios.post("http://localhost:3001/api/videogames",videogame)

      .then(r => r.data)
      .then(d =>{ dispatch({ type:POST_VIDEOGAME, payload: d }) 
      if(d[0].name===videogame.name)alert("The video game was created successfully")
      //console.log(d[0].name + videogame.name)
    })
      .catch((error) => {
        console.log(error);
        alert("The creation of the video game was NOT successfull")
      });
      

};

export const getVideoGameId = (id) => dispatch => {
  //console.log("va a hacer la peticion")
  
  if(id){
      return axios(`http://localhost:3001/api/videogames/${id}`)

      .then(r => r.data)
      .then(d => dispatch({ type:GET_VIDEOGAME_ID, payload: d }) )
      .catch((error) => {

        console.log(error);
        dispatch({ type:GET_VIDEOGAME_ID, payload: {name:null} })
      });
    }else{
      dispatch({ type:GET_VIDEOGAME_ID, payload: {} })
    }

};

export const deleteVideoGameId = (id) => dispatch => {
  //console.log("va a hacer la peticion")
  
  if(id){
      return axios.delete(`http://localhost:3001/api/videogames/${id}`)

      .then(r => r.data)
      .then(d => dispatch({ type:DELETE_VIDEOGAME, payload: {id:id, d:d} }) )
      .catch((error) => {
        console.log(error);
       alert("Trouble removing the indicated game")
      });
    }else{
      alert("Without ID to remove")
    }

};

export const setGamestoShow = (toShow) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_GAMESTOSHOW, payload:toShow})

};

export const setStateSelectGenres = (stateselec) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_STATE_SELECT_GENRES, payload:stateselec})

};
export const setStateSelectdb = (stateselec) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_STATE_SELECT_DB, payload:stateselec})

};

export const setCurrentPage = (page) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_CURRENT_PAGE, payload:page})

};

export const setFilteredByGenre = (filtered) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_FILTERD_BY_GENRE, payload:filtered})

};

export const setStateOrder = (stateorder) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_STATE_ORDER, payload:stateorder})

};

export const setFilteredByDB = (filtered) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_FILTERD_BY_DB, payload:filtered})

};

export const setVideogamesOrdered = (ordered) => dispatch => {
  //console.log("va a hacer la peticion")
  
      dispatch({type: SET_VIDEOGAMES_ORDERED, payload:ordered})

};
