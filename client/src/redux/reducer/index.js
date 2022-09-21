const initialState = {
    videogames: [],
    genres:[],
    platforms:[],
    gamestoShow:[],
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

          case "SEARCH_GAMES":
            //console.log(action.payload);
            return{
                ...state,
                videogames: action.payload
    
            }; 
    
            case "GET_GENRES":
              //console.log(action.payload);
              return{
                  ...state,
                  genres: action.payload
      
              };

              case "GET_PLATFORMS":
                //console.log(action.payload);
                return{
                    ...state,
                    platforms: action.payload
        
                };

          case 'POST_VIDEOGAME':
            return{
                ...state,
                videogames: state.videogames.concat(action.payload)
            };

            
          case 'GET_VIDEOGAME_ID':
           
            return{
                ...state,
                videogame: action.payload
            };

            case 'SET_GAMESTOSHOW':
          
             return{
                 ...state,
                 gamestoShow: action.payload
             };
    
          default: return {...state};
       
    };
  };
  
  export default rootReducer;