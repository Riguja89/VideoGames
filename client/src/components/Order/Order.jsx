import React from 'react';
import { useDispatch } from 'react-redux';
import { setGamestoShow,setVideogamesOrdered, setStateOrder,
    setFilteredByGenre, setFilteredByDB } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import './Order.css'

const OrderCont = (props) => {

    const dispatch=useDispatch();
    let arrayAux;
    let arrayAux2;
    let arrayAux3;
    let arrayAux4;
    useEffect(()=>{
        if(props.stateOrder){
            document.getElementById(props.stateOrder).checked=true;
        }else{
            document.getElementById("az").checked=false;
            document.getElementById("za").checked=false;
            document.getElementById("ratinga").checked=false;
            document.getElementById("ratingd").checked=false;
        }
    },[props.videogames])

    function handleOrder(e){
        
        arrayAux=[...props.gamestoShow];
        arrayAux2=[...props.videogames];
        arrayAux3=[...props.filteredbyGenre];
        arrayAux4=[...props.filteredbyDB];
        dispatch(setStateOrder(e.target.value))

        function ordenar(arrayAux){
        switch (e.target.value){
            case "az":
            arrayAux.sort(function(a,b){
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
            })
            break;

            case "za":
                arrayAux.sort(function(a,b){
                    if (a.name < b.name) {
                        return 1;
                      }
                      if (a.name > b.name) {
                        return -1;
                      }
                      return 0;
                })
                break;    

                case "ratinga":
                    arrayAux.sort(function(a,b){
                        return a.rating - b.rating 
                    })
                    break;

                case "ratingd":
                    arrayAux.sort(function(a,b){
                        return b.rating - a.rating 
                    })
                    break;

            default:
                break;
            
            }
            return(arrayAux)
        }

       dispatch(setGamestoShow(ordenar(arrayAux)));
       dispatch(setVideogamesOrdered(ordenar(arrayAux2)));
       dispatch(setFilteredByGenre(ordenar(arrayAux3)));
       dispatch(setFilteredByDB(ordenar(arrayAux4)));
    }

    return(
<div className='divorder'>

Order By: <br />
<ul className='ulorder'> 
<li >
    <input id="az" onClick={handleOrder} type="radio" name="order" value="az"/> A...Z <br />
</li>
<li >
    <input id="za" onClick={handleOrder} type="radio" name="order" value="za"/> Z...A<br />
</li>
<li >
    <input id="ratinga" onClick={handleOrder} type="radio" name="order" value="ratinga"/> Rating ↓<br />
</li>
<li >
    <input id="ratingd" onClick={handleOrder} type="radio" name="order" value="ratingd"/> Rating ↑<br />
</li>
</ul>

</div>
    );

};

function mapStateToProps(state){ 
    return{
      videogames: state.videogames,  
      gamestoShow: state.gamestoShow,
      stateOrder: state.stateOrder,
      videogamesOrdered:state.videogamesOrdered,
      filteredbyGenre: state.filteredbyGenre,
      filteredbyDB: state.filteredbyDB,
    };
    
  };

export default connect(mapStateToProps,null)(OrderCont);