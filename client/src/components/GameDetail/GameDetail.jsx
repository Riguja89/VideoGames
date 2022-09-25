import { PageHeader } from "antd";
import {getVideoGameId} from "../../redux/actions";
import { connect } from "react-redux";
import React from "react";

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
      <div>
        <PageHeader
          title={
            this.props.videogame.name === undefined 
              ? "Cargando..."
              : this.props.videogame === null
              ? "Video Game no encontrado..."
              : this.props.videogame.name
          }
          onBack={() => this.props.history.goBack()}
        />
        {this.props.videogame?.id && (
          <img src={this.props.videogame.image} alt="" />
          )}
        {this.props.videogame?.id && (
                        <ul> Genres: {this.props.videogame.genres.map((genre)=>{return(
                          <p key={genre.id}>{genre.name}, </p>
                      )})} </ul>
          )}
         <div>{(this.props.videogame.description) }</div>
         {this.props.videogame?.platforms && (
                        <ul> Platforms: {this.props.videogame.platforms.map((platform)=>{return(
                          <p key={platform.id}>{platform.name}, </p>
                      )})} </ul>
          )}
          {this.props.videogame?.released && (
                   <p>
                    Released date: {this.props.videogame.released}
                   </p>
          )}
                    {this.props.videogame?.rating && (
                   <p>
                    Rating: {this.props.videogame.rating}
                   </p>
          )}
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
