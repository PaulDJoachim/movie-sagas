import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';
import '../Details/Details.css'

class Edit extends Component {
  state = {
    title: '',
    description: '',
    poster: ''
  }


  componentDidMount(){
    // checks if there is anything in the 'details' redux state
    // and goes to homepage if nothing found
    if (this.props.reduxState.details.length === 0){
      this.props.history.push('/')
    } else {
      // set the state to match the details from redux
      this.setState({
        title: this.props.reduxState.details.title,
        description: this.props.reduxState.details.description,
        poster: this.props.reduxState.details.poster,
        id: this.props.reduxState.details.id,
        array_agg: this.props.reduxState.details.array_agg
      })
    }
  }

  editTitle = (event) => {
    this.setState({
      title: event.target.value
    })
    console.log(this.state.title)
  }
  
  editDesc = (event) => {
    this.setState({
      description: event.target.value
    })
    console.log(this.state.description)
  }

  submitEdit = () =>{
    // send edit to server
    this.props.dispatch({type: 'EDIT_MOVIE', payload: this.state})
    // update 'details' redux store 
    this.props.dispatch({type:'SET_DETAIL', payload:this.state})
    // go back to details page to view changes
    this.props.history.push('/details')
  }

  cancel = () =>{
    this.props.history.push('/details')
  }

  render() {
    let title = this.state.title
    return (
      <div className="Edit">
        <Container>
          <Grid container spacing={4}>
            <Grid item className="posterBox" lg={2} md={3} xs={3}>
              <img src={this.state.poster} alt={this.state.title}/>
            </Grid>
            <Grid item className="detailBox" lg={10} md={9} xs={9}>
              <Typography variant="h4">
                <TextField
                  id="title"
                  className="title"
                  multiline
                  rows={1}
                  label="Title"
                  defaultValue={title}
                  onChange={this.editTitle}
                  />
                {/* <input value={this.state.title} onChange={this.editTitle}></input> */}
              </Typography>
              <Typography variant="body1">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue={this.state.description}
                variant="outlined"
                onChange={this.editDesc}
                />
                {/* <textarea value={this.state.description} onChange={this.editDesc}></textarea> */}
              </Typography>
              <Button variant="contained" onClick={this.cancel}>Cancel</Button>
              <Button variant="contained" onClick={this.submitEdit}>Submit</Button>
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

export default connect(mapStateToProps)(withRouter(Edit));