import React, { Component } from 'react';
import { connect } from 'react-redux';


class Movie extends Component {
  
  render() {
    return (
      <div>
        {/* {this.props.movie.title} */}
        <img src={this.props.movie.poster} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Movie);
