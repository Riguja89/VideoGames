const initialState = {
    videogames: [],
    videogame: {},
  };
  
  const rootReducer = (state = initialState, action) => {
  
    //console.log("entro al reducer")
    
    switch(action.type) {
        // Acá va tu código:
        
        case "GET_ALL_VIDEOGAMES":
          //console.log(action.payload);
          return{
              ...state,
              videogames: action.payload
  
          };
    
        //   case 'GET_HOUSE':
        //     return{
        //         ...state,
        //         house: action.payload
        //     };
    
        //     case 'CREATE_HOUSE':
        //       return{
        //           ...state,
        //           houses: state.houses.concat(action.payload)
        //       };
        //       case 'DELETE_HOUSE':
        //         return{
        //             ...state,
        //             houses: state.houses.filter(p=> p.id !==action.payload)
        //         };
    
          default: return {...state};
       
    };
  };
  
  export default rootReducer;