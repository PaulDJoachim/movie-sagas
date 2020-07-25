import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie'

class Home extends Component {
  componentDidMount(){
    // Get movies from database
    this.props.dispatch({type: 'GET_MOVIES'})
  }


  
  render() {
    return (
      <div>
        <p>Movie List</p>
        {/* {JSON.stringify(this.props.reduxState.movies)} */}
        {this.props.reduxState.movies.map((movie, index) => (
          <Movie key={index} id={index}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Home);
