import { PageHeader } from "antd";
import {getVideoGameId} from "../../redux/actions";
import { connect } from "react-redux";
import React from "react";

class GameDetail extends React.Component {

  constructor(props) {
    super(props);

    this.props = {
      videogame: undefined,
    }
  }


  componentDidMount() {
    console.log(this.props)
    this.props.getVideoGameId(this.props.match.params.id)
    
  }

  render() {
    return (
      <div>
        kajsdfpvjaop
        <PageHeader
          title={
            this.props.videogame === undefined
              ? "Cargando..."
              : this.props.videogame === null
              ? "Character no encontrado..."
              : this.props.videogame.name
          }
          onBack={() => this.props.history.goBack()}
        />
        {this.props.videogame?.id && (
          <img src={this.props.videogame.image} alt="" />
          
        )}
        {this.props.videogame.description}
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
