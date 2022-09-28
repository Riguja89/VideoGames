import React from 'react';
import { useDispatch } from 'react-redux';
import { getGenres,setGamestoShow,setStateSelectGenres,setStateSelectdb,
    setFilteredByGenre, setFilteredByDB, setCurrentPage} from '../../redux/actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import './Filter.css'


const FilterCont = (props) => {

    const dispatch=useDispatch();


useEffect(()=>{
    if(props.genres.length===0) dispatch(getGenres()); //caga generos desde la db si no esta lleno 
    if(props.filteredbyGenre.length===0)dispatch(setFilteredByGenre(props.videogamesOrdered));
    if(props.filteredbyDB.length===0)dispatch(setFilteredByDB(props.videogamesOrdered));
    document.getElementById("genreselect").value=props.stateSelectGenres;
    document.getElementById("whereselect").value=props.stateSelectDb;
},[props.videogamesOrdered,props.videogames])

function handleFilterGenre(e){

    let filtered=[]
    dispatch(setStateSelectGenres(e.target.value));
    dispatch(setCurrentPage(1));
    if (e.target.value!=="All" ){

        props.filteredbyDB.forEach((game)=>{
            if(game.genres.filter((gen)=>(gen.id===parseInt(e.target.value))).length>0){
               filtered=[...filtered,game]
            }
                })
        dispatch(setGamestoShow(filtered));
        filtered=[];
        props.videogamesOrdered.forEach((game)=>{
            if(game.genres.filter((gen)=>(gen.id===parseInt(e.target.value))).length>0){
             filtered=[...filtered,game]
            }
                })
                dispatch(setFilteredByGenre(filtered));
    }else{
        dispatch(setFilteredByGenre(props.videogamesOrdered));
        dispatch(setGamestoShow(props.filteredbyDB));
    }
}

function handleFilterDB(e){
    let filtered=[]
    dispatch(setStateSelectdb(e.target.value));
    dispatch(setCurrentPage(1));
    switch(e.target.value){
        case "All":
                filtered=props.filteredbyGenre;
                dispatch(setFilteredByDB(props.videogamesOrdered));
            break;
        case "db":
                filtered= props.filteredbyGenre.filter(game=>(game.id.length>9));
                dispatch(setFilteredByDB(props.videogamesOrdered.filter(game=>(game.id.length>9))));
            break;
        case "rawg":
                filtered= props.filteredbyGenre.filter(game=>(typeof(game.id)!=="string"));
               dispatch(setFilteredByDB(props.videogamesOrdered.filter(game=>typeof(game.id)!=="string")));
             break;    

        default:
            break;
    }
    dispatch(setGamestoShow(filtered));
    
}


    return (
        <div className='divfilter'>
            Filter By: <br />
                <div className='divgenres'>
                <label>Genres: </label> <br />
                <select defaultValue="All" id="genreselect" name="genres" onChangeCapture={handleFilterGenre}> {props.genres!==undefined ?props.genres.map(genre=>{
                   
                   return(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                }):<></>}
                <option value="All">All</option>
                </select >
                </div>
                <br />
                <label>Stored In: </label> <br />
                <select defaultValue="All"  id="whereselect" name="where" onChangeCapture={handleFilterDB }> 
                <option value="All" >All</option>
                <option value="db">My DB</option>
                <option value="rawg">RAWG</option>
                </select>      
        </div>
    );
};

function mapStateToProps(state){ 
    return{
      genres: state.genres,
      videogames:state.videogames,
      gamestoShow: state.gamestoShow,
      stateSelectGenres: state.stateSelectGenres,
      stateSelectDb: state.stateSelectDb,
      filteredbyGenre: state.filteredbyGenre,
      filteredbyDB: state.filteredbyDB,
      videogamesOrdered:state.videogamesOrdered,
    };
    
  };

export default connect(mapStateToProps,null)(FilterCont);