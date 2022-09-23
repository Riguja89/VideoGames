import React from 'react';
import { useDispatch } from 'react-redux';
import { searchGames,setGamestoShow,setCurrentPage,setStateSelectGenres,setStateSelectdb,setStateOrder,
    setFilteredByGenre, setFilteredByDB,setVideogamesOrdered} from '../../redux/actions';

const SearchBar = () => {

    const dispatch=useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchGames(document.getElementById("buscar").value));
        dispatch(setGamestoShow([]));
        dispatch(setCurrentPage(1));
        dispatch(setStateSelectGenres("All"));
        dispatch(setStateSelectdb("All"));
        dispatch(setStateOrder(null));
        dispatch(setFilteredByGenre([])); 
        dispatch(setFilteredByDB([])); 
        dispatch(setVideogamesOrdered([]));    
      }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"  id='buscar'/>
               <button type='submit' >Buscar</button>
            </form>
         
        </div>
    );
};

export default SearchBar;