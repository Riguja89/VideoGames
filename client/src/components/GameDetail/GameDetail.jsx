import {getVideoGameId} from "../../redux/actions";
import { connect } from "react-redux";
import React from "react";
import './GameDetail.css';
import Description from "./Description";


class GameDetail extends React.Component {

  componentDidMount() {
   // console.log(this.props)
    this.props.getVideoGameId(this.props.match.params.id)
    
  }
  componentWillUnmount(){
    this.props.getVideoGameId()
  }

  render() {
    
    return (
      
      <div className="divgamedatail">

        <div className="gamedetailcontainer">

          <p onClick={() => this.props.history.goBack()}>⬅ Go back</p>
         
        <div className="title">{
            this.props.videogame.name === undefined 
              ?  <div className="loading"> LOADING...</div>
              : this.props.videogame.name === null
              ? "Video game not found..."
              : this.props.videogame.name
          }</div>
        {this.props.videogame?.id && (
          <img className="imagegamedetail" src={this.props.videogame.image} alt="" />
         
          )}
        {this.props.videogame?.id && (
                        <p> Genres: {this.props.videogame.genres.map((genre,i)=>{return(
                          <label key={genre.id}>{genre.name}
                          {this.props.videogame.genres.length===i+1?".":","} </label>
                      )})} </p>
          )}
            <Description des={this.props.videogame.description}/>
         {this.props.videogame?.platforms && (
                        <p> Platforms: {this.props.videogame.platforms.map((platform,i)=>{return(
                          <label key={platform.id}>{platform.name}
                          {this.props.videogame.platforms.length===i+1?".":","} </label>
                      )})} </p>
          )}
          {this.props.videogame?.released && (
                   <p>
                    Released date: {this.props.videogame.released}
                   </p>
          )}
                    {this.props.videogame?.rating && (
                   <p>
                    Rating: {this.props.videogame.rating} ⭐
                   </p>
          )}
          </div>
      </div>
    );
  }
}

export const mapStateToProps = (state)=>{
    return{
      videogame: state.videogame
    }
    
  };

export function mapDispatchToProps(dispatch){
 
    return{
        
        getVideoGameId: (id)=>dispatch(getVideoGameId(id)),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GameDetail);
