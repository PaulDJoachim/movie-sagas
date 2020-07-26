import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Container, Box, Grid, Typography, Button} from '@material-ui/core';
import './Details.css'
import Fade from 'react-reveal/Fade';

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
          <Fade>
            <Grid container spacing={4}>
              <Grid item className="posterBox" lg={3} md={3} xs={3}>
                <img src={this.props.reduxState.details.poster} alt={this.props.reduxState.details.title}/>
                <ul>
                  <h3>Genres</h3>
                  {this.props.reduxState.details.array_agg.map((genre, index)=>(  
                    <li key={index}>{genre}</li>
                  ))}
                </ul>
              </Grid>
              <Grid item className="detailBox" lg={9} md={9} xs={9}>
                <Typography variant="h6">
                  <h1>{this.props.reduxState.details.title}</h1>
                </Typography>
                  {/* {console.log(this.props.reduxState.details)} */}
                <Typography variant="body1">
                  <p>{this.props.reduxState.details.description}</p>
                </Typography>
                  <Button variant="contained" color="primary" onClick={this.handleClick}>Edit</Button>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(withRouter(Details));