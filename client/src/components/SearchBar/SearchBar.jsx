import React from 'react';
import { useDispatch } from 'react-redux';
import { searchGames } from '../../redux/actions';

const SearchBar = () => {

    const dispatch=useDispatch();
    const buscar={};
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchGames(document.getElementById("buscar").value));
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