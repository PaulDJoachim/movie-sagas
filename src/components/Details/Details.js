import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class Details extends Component {

  componentDidMount(){
    // checks if there is anything in the 'details' redux state
    // and goes to homepage if nothing found
    if (this.props.reduxState.details.length === 0){
      this.props.history.push('/');
    }
  }
  

  // go to edit page when edit button is clicked
  handleClick = () =>{
    this.props.history.push('/edit');
  }


  render() {
    return (
      <div className="Details">
        <img src={this.props.reduxState.details.poster} alt={this.props.reduxState.details.title}/>
        <h1>{this.props.reduxState.details.title}</h1>
        <p>{this.props.reduxState.details.description}</p>
        <button onClick={this.handleClick}>Edit</button>
        
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(withRouter(Details));