import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';  
import { getGenres,getPlatforms,postVideogame} from '../../redux/actions';
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
      },[props.genres.length, props.platforms.length, dispatch])

      function handleChange(e) {
        console.log(e.target.value);

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });

          switch(e.target.name){
            case "name":
            if(!/^[A-Za-z0-9\s]+$/g.test(e.target.value)){
              setErrorName("El nombre es obligatorio y solo letras y numeros son admitidos")
            }else{setErrorName("")}
            break;
            case "image":
            if(!/^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)){
              setErrorImage("Se debe ingresar una URL de imagen valida")
            }else{setErrorImage("")}
            break;
            case "description":
            if(!e.target.value){
              setErrorDescription("La descripción es obligatoria")
            }else{setErrorDescription("")}
            break;
            case "released":
              if(isNaN(Date.parse(e.target.value))){
                setErrorReleased("Se debe ingresar una fecha valida dd/mm/yyyy")
              }else{setErrorReleased("")}
              break;

            default:
              break;
          }
      }
    function handleGenre(e){
      
        if(arrayGenres.findIndex(ele=>ele===e.target.value)===-1){
        setArrayGenres([...arrayGenres,e.target.value]);
        }
        console.log(arrayGenres);
    }

    function handlePlatform(e){
      
        if(arrayPlatforms.findIndex(ele=>ele===e.target.value)===-1){
        setArrayPlatforms([...arrayPlatforms,e.target.value]);
        }
        console.log(arrayPlatforms);
    }

      function handleSubmit(e) {
        e.preventDefault();
        formData.genres= arrayGenres;
        formData.platforms=arrayPlatforms;
        console.log(formData);
       dispatch(postVideogame(formData));
       
      }

      const deleteGenre=(id)=>{
        let i=arrayGenres.indexOf(id);
        arrayGenres.splice(i,1);
        setArrayGenres([...arrayGenres]);
        //console.log('delete ', i, id, arrayGenres)
      }

      const deletePlatform=(id)=>{
        let i=arrayPlatforms.indexOf(id);
        arrayPlatforms.splice(i,1);
        setArrayPlatforms([...arrayPlatforms]);
        //console.log('delete ', i, id, arrayGenres)
      }

    return (
        <div>
            <h1>CREATE VIDEOGAME</h1>
             <form action="" onSubmit={handleSubmit}>
                <label >Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                {!errorName ? null : <span>{errorName}</span>}
                <label>Image: </label>
                <input type="text" name="image" value={formData.image}onChange={handleChange}/>
                {!errorImage ? null : <span>{errorImage}</span>}
                <label>Description: </label>
                <textarea type="text" name="description" value={formData.description} onChange={handleChange}/>
                {!errorDescription ? null : <span>{errorDescription}</span>}
                <label>Released: </label>
                <input type="date" name="released" value={formData.released} onChange={handleChange}/>
                {!errorReleased ? null : <span>{errorReleased}</span>}
                <label>Rating: </label>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange}/>
                {!errorDescription ? null : <span>{errorDescription}</span>}
                <label>Genres: </label>
                <select defaultValue={""} name="genres" onChangeCapture={handleGenre}> {props.genres!==undefined ?props.genres.map(genre=>{  
                   return(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                }):<></>}
                </select>
                <ul>{arrayGenres.length>0? arrayGenres.map(g=>(
                <GenreCard
                 name={props.genres.find(({id})=>id===parseInt(g)).name} 
                 key={g} deleteGenre={deleteGenre} id={g}>
                 </GenreCard>
                 )):<></>}</ul>
                 {!errorDescription ? null : <span>{errorDescription}</span>}
                <label>Platforms: </label>
                <select defaultValue={""} name="platforms" onChangeCapture={handlePlatform}> {props.platforms!==undefined ?props.platforms.map(plat=>{
                   return(
                        <option key={plat.id} value={plat.id}>{plat.name}</option>
                    )
                }):<></>}
                </select>

                <ul>{arrayPlatforms.length>0? arrayPlatforms.map(g=>(
                <GenreCard
                 name={props.platforms.find(({id})=>id===parseInt(g)).name} 
                 key={g} deleteGenre={deletePlatform} id={g}>
                 </GenreCard>
                 )):<></>}</ul>
                {!errorDescription ? null : <span>{errorDescription}</span>}
                <button type="submit">Create</button>
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