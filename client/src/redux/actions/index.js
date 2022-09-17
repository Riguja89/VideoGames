import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const SEARCH_GAMES="SEARCH_GAMES";
export const GET_GENRES="GET_GENRES";
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

// Usar ruta 'http://localhost:3001/houses/:id' para buscar una house por el id pasado
// como parámetro de la action creator.
// Donde :id, el id recibido como argumento de la action creator.
// Ojo, hacer un console.log de la respuesta desde el back. En nuestro reducer esperamos un objeto;
// export const getHouse = () => dispatch => {};


// export const getHouse = (id) => dispatch => {

//     return fetch(`http://localhost:3001/houses/${id}`)
 
//     .then(r => r.json())
//     .then(d => dispatch({ type:GET_HOUSE, payload: d }) )
//     .catch((error) => {
//       console.log(error);
//     });
    

//    };


// // Inicializamos id en 3, para que nuestros próximos ID's no se pisen con los existentes.
// // La vas a usar en la funcion createHouse, descomentala cuando te haga falta;
// let id = 3;

// // Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para crear la house.
// export const createHouse = (values)=>{
//     id=id+1;
//     values.id=id;
//    //console.log(values.id);
//    //console.log( { type:CREATE_PRODUCT, payload: values });
//     return({ type:CREATE_HOUSE, payload: values })
// };

// // Desde el componente ejecutamos la action creator, pasandole como argumento el id de la house que queremos eliminar.
// export const deleteHouse = (id)=>{
//     //console.log('entra ak' + id);
//     return({ type:DELETE_HOUSE, payload: id })
// };