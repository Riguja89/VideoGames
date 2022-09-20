import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const SEARCH_GAMES="SEARCH_GAMES";
export const GET_GENRES="GET_GENRES";
export const GET_PLATFORMS="GET_PLATFORMS";
export const POST_VIDEOGAME="POST_VIDEOGAME";
export const GET_VIDEOGAME_ID="GET_VIDEOGAME_ID";
//export const DELETE_HOUSE = "DELETE_HOUSE";



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
        });
        

};



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
      .then(d => dispatch({ type:POST_VIDEOGAME, payload: d }) )
      .catch((error) => {
        console.log(error);
      });
      

};

export const getVideoGameId = (id) => dispatch => {
  //console.log("va a hacer la peticion")
  
      return axios(`http://localhost:3001/api/videogames/${id}`)

      .then(r => r.data)
      .then(d => dispatch({ type:GET_VIDEOGAME_ID, payload: d }) )
      .catch((error) => {
        console.log(error);
      });
      

};