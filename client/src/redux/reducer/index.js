const initialState = {
    videogames: [],
    genres:[],
    platforms:[],
    gamestoShow:[],
    videogame: {},
    stateSelectGenres: "All",
    stateSelectDb: "All",
    stateOrder: null,
    currentPage: 1,
    videogamesOrdered: [],
    filteredbyGenre:[],
    filteredbyDB:[],
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

             case 'SET_STATE_SELECT_GENRES':
          
              return{
                  ...state,
                  stateSelectGenres: action.payload
              };

              case 'SET_STATE_SELECT_DB':
          
                return{
                    ...state,
                    stateSelectDb: action.payload
                };
              case 'SET_STATE_ORDER':
          
                  return{
                      ...state,
                      stateOrder: action.payload
                };

              case 'SET_CURRENT_PAGE':
          
                  return{
                      ...state,
                      currentPage: action.payload
              };    

            case 'SET_FILTERD_BY_GENRE':
          
                  return{
                      ...state,
                      filteredbyGenre: action.payload
                  };
            case 'SET_FILTERD_BY_DB':
          
                    return{
                        ...state,
                        filteredbyDB: action.payload
                  };
            case 'SET_VIDEOGAMES_ORDERED':
          
                    return{
                        ...state,
                        videogamesOrdered: action.payload
                  };    
            case 'DELETE_VIDEOGAME':

           
                  function deletegame(arra){
                    let index=arra.findIndex((g)=>g.id===action.payload.id)
                    if(index!==-1) arra.splice(index,1)
                    console.log(arra)
                    return(arra);
                  }
                    
                  var auxVideogames=deletegame(state.videogames);
                  var auxvideogamesOrdered=deletegame(state.videogamesOrdered);
                  var auxfilteredbyGenre=deletegame(state.filteredbyGenre);
                  var auxfilteredbyDB=deletegame(state.filteredbyDB);
                  var auxgamestoShow=deletegame(state.gamestoShow);
                 
    

                    return{
                      ...state,
                      videogames:auxVideogames,
                      gamestoShow: auxgamestoShow,
                      filteredbyDB: auxfilteredbyDB,
                      filteredbyGenre: auxfilteredbyGenre,
                      videogamesOrdered:auxvideogamesOrdered

                  };                   
                  
          default: return {...state};
       
    };
  };
  
  export default rootReducer;