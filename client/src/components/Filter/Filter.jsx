import React from 'react';
import { useDispatch } from 'react-redux';
import { getGenres,setGamestoShow } from '../../redux/actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';


const FilterCont = (props) => {

    const dispatch=useDispatch();
    
useEffect(()=>{
    if(props.genres.length===0) dispatch(getGenres()); //caga generos desde la db si no esta lleno 
})

useEffect(()=>{
   var chageselect=document.getElementById("genreselect");
    chageselect.value="All";
},[props.videogames])

function handleGenre(e){
    let filtered=[]
    if(e.target.id==="genreselect"){
    if (e.target.value!=="All" ){
  props.videogames.forEach((game)=>{
   if(game.genres.filter((gen)=>(gen.id===parseInt(e.target.value))).length>0){
    filtered=[...filtered,game]
   }

  })
    //console.log(filtered);
    dispatch(setGamestoShow(filtered));}else{
    dispatch(setGamestoShow(props.videogames));
    }
    document.getElementById("whereselect").value="All"
}else{
    if(e.target.value==="db"){
        filtered= props.gamestoShow.filter(game=>(game.id.length>9))
        dispatch(setGamestoShow(filtered))
     }else{

        if (document.getElementById("genreselect").value!=="All" ){
            props.videogames.forEach((game)=>{
             if(game.genres.filter((gen)=>(gen.id==document.getElementById("genreselect").value)).length>0){
              filtered=[...filtered,game]
             }})
              dispatch(setGamestoShow(filtered));}else{
                dispatch(setGamestoShow(props.videogames));
              }

        
     }
     
}

}

// function handlewere(e){
//     let filterdb=[]
//     if(e.target.value==="db"){
//        filterdb= props.gamestoshow.filter(game=>(game.id.length>9))
//     }
// }
    return (
        <div>
                <label>Genres: </label>
                <select id="genreselect" name="genres" onChangeCapture={handleGenre}> {props.genres!==undefined ?props.genres.map(genre=>{
                   
                   return(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                }):<></>}
                <option value="All" selected>All</option>
                </select>
                <label>Where: </label>
                <select id="whereselect" name="where" onChangeCapture={handleGenre}> 
                <option value="All" selected>All</option>
                <option value="db" selected>My DB</option>
                </select>      
        </div>
    );
};

function mapStateToProps(state){ 
    return{
      genres: state.genres,
      videogames:state.videogames,
      gamestoShow: state.gamestoShow,
    };
    
  };

export default connect(mapStateToProps,null)(FilterCont);