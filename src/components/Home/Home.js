import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
  componentDidMount(){
    // Get movies from database
    console.log('hello!')
    this.props.dispatch({type: 'GET_MOVIES'})
  }


  
  render() {
    return (
      <div>
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Home);
