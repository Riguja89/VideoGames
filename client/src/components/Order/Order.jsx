import React from 'react';
import { useDispatch } from 'react-redux';
import { setGamestoShow } from '../../redux/actions';
import { connect } from 'react-redux';


const OrderCont = (props) => {

    const dispatch=useDispatch();

    let arrayAux;

    function handleOrder(e){
        
          arrayAux=[...props.gamestoShow];

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

        dispatch(setGamestoShow(arrayAux));
    }

    return(
<div>
<fieldset >
<legend > Selecciona un Orden</legend>
<label >
    <input onClick={handleOrder} type="radio" name="order" value="az"/> A..Z
</label>
<label >
    <input onClick={handleOrder} type="radio" name="order" value="za"/> Z..A
</label>
<label >
    <input onClick={handleOrder} type="radio" name="order" value="ratinga"/> Rating ↑
</label>
<label >
    <input onClick={handleOrder} type="radio" name="order" value="ratingd"/> Rating  ↓
</label>
</fieldset>
</div>
    );

};

function mapStateToProps(state){ 
    return{
      gamestoShow: state.gamestoShow,
    };
    
  };

export default connect(mapStateToProps,null)(OrderCont);