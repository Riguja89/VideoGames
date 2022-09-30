import React from 'react';
import { useDispatch } from 'react-redux';
import { searchGames,setGamestoShow,setCurrentPage,setStateSelectGenres,setStateSelectdb,setStateOrder,
    setFilteredByGenre, setFilteredByDB,setVideogamesOrdered,clearVideogames} from '../../redux/actions';
import './SearchBar.css'

const SearchBar = () => {

    const dispatch=useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(clearVideogames());
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
            <form className='searchbar' onSubmit={handleSubmit}>
            <input className='inputsearch' type="text"  id='buscar'/>
               <button className='bottonsearch' type='submit' >Search</button>
            </form>
         
        </div>
    );
};

export default SearchBar;