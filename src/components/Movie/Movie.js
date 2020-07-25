import React, { Component } from 'react';
import { connect } from 'react-redux';


class Movie extends Component {
  
  render() {
    return (
      <div>
        {this.props.reduxState.movies[this.props.id].title}
        <img src={this.props.reduxState.movies[this.props.id].poster} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Movie);
