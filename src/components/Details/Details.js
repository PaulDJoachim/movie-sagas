import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    return (
      <div className="Details">
        <img src={this.props.reduxState.details.poster} alt={this.props.reduxState.details.title}/>
        <h1>{this.props.reduxState.details.title}</h1>
        <p>{this.props.reduxState.details.description}</p>
        
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Details);