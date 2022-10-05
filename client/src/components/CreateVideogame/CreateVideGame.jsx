import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';  
import { getGenres,getPlatforms,postVideogame} from '../../redux/actions';
import { setGamestoShow,setCurrentPage,setStateSelectGenres,setStateSelectdb,setStateOrder,
  setFilteredByGenre, setFilteredByDB,setVideogamesOrdered} from '../../redux/actions';
import { connect } from 'react-redux';
import GenreCard from './GenreCar';
import './CreateVideogame.css'
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

    const [arrayGenres, setArrayGenres]=useState([]);
    const [arrayPlatforms, setArrayPlatforms]=useState([]);  
    const [errorName, setErrorName]=useState('');
    const [errorImage, setErrorImage]=useState('');
    const [errorDescription, setErrorDescription]=useState('')
    const [errorReleased, setErrorReleased]=useState('');
    const [errorRating, setErrorRating]=useState('');
    const [errorGenres, setErrorGenres]=useState('');
    const [errorPlatforms, setErrorPlatforms]=useState('');
    const dispatch=useDispatch();  

      useEffect(()=>{
        if(props.genres.length===0) dispatch(getGenres());
        if(props.platforms.length===0) dispatch(getPlatforms());
        setArrayGenres([]);
        setArrayPlatforms([]);
        setErrorName(" * The name is mandatory and only letters, numbers and some characters are allowed.")
        setErrorDescription( "* The description is mandatory.")
        setErrorPlatforms(" * You must select at least one platform for the video game.")
      },[props.genres.length, props.platforms.length, dispatch])

      function handleChange(e) {
        //console.log(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });

          switch(e.target.name){
            case "name":
            if(!/^[A-Za-z0-9:'\s]+$/g.test(e.target.value)){
              setErrorName(" * The name is mandatory and only letters and numbers are allowed")
            }else{setErrorName("")}
            break;
            case "image":
            if(!/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)||e.target.value.length>255){
              setErrorImage("You must enter a valid image URL")
            }else{setErrorImage("")}
            break;
            case "description":
            if(!e.target.value){
              setErrorDescription("* The description is mandatory.")
            }else if(e.target.value.length>2000){
              setErrorDescription("* The description is too long, please make sure it is less than 2000 characters.")
            }
            else{setErrorDescription("")}
            break;
            case "released":
            if(isNaN(Date.parse(e.target.value))||e.target.value.split("-")[0]>2023||e.target.value.split("-")[0]<1900){
                setErrorReleased("You must enter a valid date, dd/mm/yyyy")
            }else{setErrorReleased("")}
            break;
            case "rating":
            if(e.target.value>5 || e.target.value<0){
              setErrorRating("The value of the rating must be in a range from 0.0 to 5.0")
            }else{setErrorRating("")}
          
            break;
          }
      }
    function handleGenre(e){
      
        if(arrayGenres.findIndex(ele=>ele===e.target.value)===-1){
        setArrayGenres([...arrayGenres,e.target.value]);
        }
       setErrorGenres("")
    }

    function handlePlatform(e){
      
        if(arrayPlatforms.findIndex(ele=>ele===e.target.value)===-1){
        setArrayPlatforms([...arrayPlatforms,e.target.value]);
        }
        setErrorPlatforms("")
    }

      function handleSubmit(e) {
        e.preventDefault();
        formData.genres= arrayGenres;
        formData.platforms=arrayPlatforms;
        //console.log(formData);
        if(!errorName && !errorDescription && !errorPlatforms){

          if(errorImage) formData.image="";
          if(errorReleased) formData.released="";
          if(errorRating) formData.rating="";

       dispatch(postVideogame(formData));
       
       dispatch(setGamestoShow([]));
       dispatch(setCurrentPage(1));
       dispatch(setStateSelectGenres("All"));
       dispatch(setStateSelectdb("All"));
       dispatch(setStateOrder(null));
       dispatch(setFilteredByGenre([])); 
       dispatch(setFilteredByDB([])); 
       dispatch(setVideogamesOrdered([]));    
       setFormData({      name: "",
       image: "",
       description: "",
       released: "",
       rating: 0,
       genres: [],
       platforms:[]
      });

        }
        else{
          alert( "Please make sure that the required fields are filled in correctly.")
        }
      }

      const deleteGenre=(id)=>{
        let i=arrayGenres.indexOf(id);
        arrayGenres.splice(i,1);
        setArrayGenres([...arrayGenres]);
        if(arrayGenres.length===0){
          setErrorGenres("Are you sure you don't select any gender?")
        }else{setErrorGenres("")}
        //console.log('delete ', i, id, arrayGenres)
      }

      const deletePlatform=(id)=>{
        let i=arrayPlatforms.indexOf(id);
        arrayPlatforms.splice(i,1);
        setArrayPlatforms([...arrayPlatforms]);
        if(arrayPlatforms.length===0){
          setErrorPlatforms(" * You must select at least one platform for the video game.")
        }else{setErrorPlatforms("")}
      }

    return (
        <div className='divcreatevideogamecontainer'>
            
             <form className='formulario' action="" onSubmit={handleSubmit}>
                <h1 className='title'>Create VideoGame</h1>
                <p>The fields marked with an asterisk (*) are required to create the video game.</p>
                <label >*Name: </label><br />
                <input type="text" name="name" value={formData.name} onChange={handleChange}/><br />
                {!errorName ? null : <span className='warning'>{errorName}</span>}<br />
                <label>URL Image: </label><br />
                <input type="text" name="image" value={formData.image}onChange={handleChange}/><br />
                {!errorImage ? null : <span className='warning'>{errorImage}</span>}<br />
                <label>*Description: </label><br />
                <textarea type="text" name="description" value={formData.description} onChange={handleChange}/><br />
                {!errorDescription ? null : <span className='warning'>{errorDescription}</span>}<br />
                <label>Released: </label><br />
                <input type="date" name="released" value={formData.released} onChange={handleChange}/><br />
                {!errorReleased ? null : <span className='warning' >{errorReleased}</span>}<br />
                <label>Rating: </label><br />
                <input type="number" name="rating" min="0.0" max="5.0" step="0.1" value={formData.rating} onChange={handleChange}/><br />
                {!errorRating ? null : <span className='warning'>{errorRating}</span>}<br />
                <label>Genres: </label><br />
                <select defaultValue={""} name="genres" onChangeCapture={handleGenre}> {props.genres!==undefined ?props.genres.map(genre=>{  
                   return(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                }):<></>}
                </select>
                <div>{arrayGenres.length>0? arrayGenres.map(g=>(
                <GenreCard
                 name={props.genres.find(({id})=>id===parseInt(g)).name} 
                 key={g} deleteGenre={deleteGenre} id={g}>
                 </GenreCard>
                 )):<></>}</div>
                 {!errorGenres ? null : <span className='warning'>{errorGenres}</span>}<br />
                <label>*Platforms: </label><br />
                <select defaultValue={""} name="platforms" onChangeCapture={handlePlatform}> {props.platforms!==undefined ?props.platforms.map(plat=>{
                   return(
                        <option key={plat.id} value={plat.id}>{plat.name}</option>
                    )
                }):<></>}
                </select><br />

                <div>{arrayPlatforms.length>0? arrayPlatforms.map(g=>(
                <GenreCard
                 name={props.platforms.find(({id})=>id===parseInt(g)).name} 
                 key={g} deleteGenre={deletePlatform} id={g}>
                 </GenreCard>
                 )):<></>}</div> <br />
                {!errorPlatforms ? null : <span className='warning'>{errorPlatforms}</span>}<br />
                <button className='pagbutton' type="submit">Create</button>
             </form>
                
        </div>
    );
};
function mapStateToProps(state){ 
    return{
      genres: state.genres,
      platforms: state.platforms
    };
    
  };
  export default connect(mapStateToProps, null)(CreateVideoGame);