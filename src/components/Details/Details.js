import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Container, Box, Grid} from '@material-ui/core';
import './Details.css'

class Details extends Component {

  componentDidMount(){
    // checks if there is anything in the 'details' redux state
    // and goes to homepage if nothing found
    console.log(this.props.reduxState.details.array_agg.length)
    if (this.props.reduxState.details.array_agg.length === 0){
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
        <Container>
          <Grid container spacing={4}>
            <Grid item lg={2} md={3} xs={3}>
              <img src={this.props.reduxState.details.poster} alt={this.props.reduxState.details.title}/>
              <ul>
                <h3>Genres</h3>
                {this.props.reduxState.details.array_agg.map((genre, index)=>(  
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </Grid>
            <Grid item lg={10} md={9} xs={9}>
            <h1>{this.props.reduxState.details.title}</h1>
            {console.log(this.props.reduxState.details)}
            <p>{this.props.reduxState.details.description}</p>
            <button onClick={this.handleClick}>Edit</button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(withRouter(Details));