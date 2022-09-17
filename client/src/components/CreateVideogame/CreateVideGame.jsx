import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';  
import { getGenres } from '../../redux/actions';
import { connect } from 'react-redux';
import GenreCard from './GenreCar';
const CreateVideoGame = (props) => {
    
    const [formData, setFormData]=useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: 0,
        genres: [],
        platforms:[]
      });

    const [arrayGenres, setArrayGenres]=useState([])  

    const dispatch=useDispatch();  

      useEffect(()=>{
        dispatch(getGenres());
        setArrayGenres([])
      },[])

      function handleChange(e) {
        //setName(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });

        console.log(e.target,arrayGenres)
      }
    function handleGenre(e){
        setArrayGenres([...arrayGenres,e.target.value]);
        console.log(arrayGenres);
    }

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
       //dispatch(createHouse(formData));
       
      }

      function deleteGenre(){

      }

    return (
        <div>
            <h1>CREATE VIDEOGAME</h1>
             <form action="" onSubmit={handleSubmit}>
                <label >Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                <label>Image: </label>
                <input type="text" name="image" value={formData.image}onChange={handleChange}/>
                <label>Description: </label>
                <input type="text" name="description" value={formData.description} onChange={handleChange}/>
                <label>Released: </label>
                <input type="date" name="released" value={formData.released} onChange={handleChange}/>
                <label>Rating: </label>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange}/>
                <label>Genres: </label>
                <select name="genres" onChange={handleGenre}> {props.genres!==undefined ?props.genres.map(genre=>{
                    return(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                }):<></>}
                </select>
                <ul>{arrayGenres.length>0? arrayGenres.map(g=>(
                <GenreCard
                 name={props.genres.find(({id})=>id==g).name} 
                 key={g}>
                 </GenreCard>
                 )):<></>}</ul>
                <label>Platforms: </label>
                <select name="platforms" >
                <option value="first">First Value</option>
                <option value="second" selected>Second Value</option>
                </select>
                <button type="submit">Create</button>
             </form>
                
        </div>
    );
};
function mapStateToProps(state){ 
    return{
      genres: state.genres,
    };
    
  };
  export default connect(mapStateToProps, null)(CreateVideoGame);