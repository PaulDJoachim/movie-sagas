import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class Movie extends Component {

  handleClick = (event) => {
    console.log(this.props.history)
    this.props.dispatch({type:'SET_DETAIL', payload:this.props.movie})
    this.props.history.push('/details')
  }
  
  render() {
    return (
      <div>
        {/* {this.props.movie.title} */}
        <img src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(withRouter(Movie));
